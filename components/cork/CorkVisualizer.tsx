"use client";

/**
 * Cork Pool Deck Visualizer — full-screen journey modal.
 * capture → measure → refine → render → lead1 → lead2 → estimate → book → booked
 *
 * Selection model:
 *   1. Claude identifies semantic point coordinates: deck (positive) + water/landscape (negative).
 *   2. All points are fed to SAM 2 together for an accurate initial selection.
 *   3. On every subsequent manual wand click the same negative points travel along
 *      so SAM never grabs pool water or landscape regardless of where the user taps.
 *   4. Brush handles fine touch-ups.
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CORK_COLORS, DEFAULT_COLOR_ID, type CorkColor } from "@/lib/cork/config";

/* eslint-disable @typescript-eslint/no-explicit-any */
function track(event: string, data: Record<string, unknown> = {}) {
  try {
    (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: `cork_${event}`, ...data });
  } catch { /* noop */ }
}

const getGoogle = (): any => (window as unknown as { google?: any }).google;

type Step = "capture" | "measure" | "refine" | "render" | "lead1" | "lead2" | "estimate" | "book" | "booked";
type Tool = "wand" | "brush";

interface MeasureResult {
  sqFt: number;
  confidence: string;
  deckPoints: Array<[number, number]>;    // normalized 0-1, positive SAM labels
  excludePoints: Array<[number, number]>; // normalized 0-1, negative SAM labels
  notes: string;
}

const TIME_WINDOWS = ["8–10 AM", "10–12 PM", "12–2 PM", "2–4 PM"];
const PREFETCH_COLOR_IDS = ["kc-24", "kc-01", "kc-06", "kc-07"];
const MASK_MAX = 480;

function nextDays(n: number): { label: string; value: string }[] {
  const out: { label: string; value: string }[] = [];
  const d = new Date();
  for (let i = 1; i <= n; i++) {
    const day = new Date(d);
    day.setDate(d.getDate() + i);
    out.push({
      label: day.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      value: day.toISOString().slice(0, 10),
    });
  }
  return out;
}

async function fileToDownscaledJpeg(file: File, maxDim = 1600): Promise<{ dataUrl: string; width: number; height: number }> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((res, rej) => {
      const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url;
    });
    const scale = Math.min(1, maxDim / Math.max(img.naturalWidth, img.naturalHeight));
    const w = Math.round(img.naturalWidth * scale);
    const h = Math.round(img.naturalHeight * scale);
    const c = document.createElement("canvas"); c.width = w; c.height = h;
    c.getContext("2d")!.drawImage(img, 0, 0, w, h);
    return { dataUrl: c.toDataURL("image/jpeg", 0.85), width: w, height: h };
  } finally { URL.revokeObjectURL(url); }
}

const b64 = (dataUrl: string) => dataUrl.split(",")[1] ?? "";

/* ---------- mask pixel ops ---------- */
function stampCircle(sel: Uint8Array, mw: number, mh: number, cx: number, cy: number, r: number, add: boolean) {
  const r2 = r * r, v = add ? 1 : 0;
  for (let y = Math.max(0, cy - r); y <= Math.min(mh - 1, cy + r); y++) {
    for (let x = Math.max(0, cx - r); x <= Math.min(mw - 1, cx + r); x++) {
      if ((x - cx) ** 2 + (y - cy) ** 2 <= r2) sel[y * mw + x] = v;
    }
  }
}

function stampLine(sel: Uint8Array, mw: number, mh: number, x0: number, y0: number, x1: number, y1: number, r: number, add: boolean) {
  const steps = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / Math.max(1, r * 0.5)));
  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    stampCircle(sel, mw, mh, Math.round(x0 + (x1 - x0) * t), Math.round(y0 + (y1 - y0) * t), r, add);
  }
}

function floodFill(sel: Uint8Array, src: Uint8ClampedArray, mw: number, mh: number, sx: number, sy: number, add: boolean, tol: number) {
  const start = sy * mw + sx;
  const sr = src[start * 4], sg = src[start * 4 + 1], sb = src[start * 4 + 2];
  const tol2 = tol * tol * 3, v = add ? 1 : 0;
  const visited = new Uint8Array(mw * mh);
  const stack = [start]; visited[start] = 1;
  let n = 0;
  while (stack.length && n < mw * mh) {
    const p = stack.pop()!; n++;
    const dr = src[p * 4] - sr, dg = src[p * 4 + 1] - sg, db = src[p * 4 + 2] - sb;
    if (dr * dr + dg * dg + db * db > tol2) continue;
    sel[p] = v;
    const x = p % mw, y = (p / mw) | 0;
    if (x > 0 && !visited[p - 1]) { visited[p - 1] = 1; stack.push(p - 1); }
    if (x < mw - 1 && !visited[p + 1]) { visited[p + 1] = 1; stack.push(p + 1); }
    if (y > 0 && !visited[p - mw]) { visited[p - mw] = 1; stack.push(p - mw); }
    if (y < mh - 1 && !visited[p + mw]) { visited[p + mw] = 1; stack.push(p + mw); }
  }
}

export default function CorkVisualizer({ open, onClose, startAtBooking }: { open: boolean; onClose: () => void; startAtBooking?: boolean }) {
  const [step, setStep] = useState<Step>(startAtBooking ? "book" : "capture");
  const [journeyId, setJourneyId] = useState<string | null>(null);
  const [image, setImage] = useState<{ dataUrl: string; width: number; height: number } | null>(null);
  const [measure, setMeasure] = useState<MeasureResult | null>(null);
  const [areaRatio, setAreaRatio] = useState(1);

  const [tool, setTool] = useState<Tool>("wand");
  const [addMode, setAddMode] = useState(true);
  const [brushPct, setBrushPct] = useState(6);
  const [tolerance, setTolerance] = useState(38);
  const [maskVersion, setMaskVersion] = useState(0);
  const [segmenting, setSegmenting] = useState(false);
  const [autoSegMsg, setAutoSegMsg] = useState(""); // message during auto SAM 2 pass

  const [colorId, setColorId] = useState(DEFAULT_COLOR_ID);
  const [customHex, setCustomHex] = useState("#A64A2E");
  const [usingCustom, setUsingCustom] = useState(false);
  const [colorChosen, setColorChosen] = useState(false);
  const [renders, setRenders] = useState<Record<string, string>>({});
  const [rendering, setRendering] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", zip: "", phone: "" });
  const [booking, setBooking] = useState({ day: "", window: "", address: "" });
  const [estimate, setEstimate] = useState<{ low: number; high: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [addrSug, setAddrSug] = useState<Array<{ text: string; sug: any }>>([]);

  const rendersRef = useRef<Record<string, string>>({});
  const prefetchCancelled = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const addrSessionToken = useRef<any>(null);

  const selRef = useRef<Uint8Array | null>(null);
  const srcRef = useRef<Uint8ClampedArray | null>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const dimsRef = useRef<{ mw: number; mh: number; seed: number }>({ mw: 0, mh: 0, seed: 0 });
  const lastPt = useRef<[number, number] | null>(null);
  const segmentUnavailable = useRef(false);
  // Negative SAM points from measure (pool water, landscape) — sent on every wand call.
  const excludePixelPts = useRef<Array<{ x: number; y: number }>>([]);

  const sqFt = useMemo(() => Math.max(50, Math.round((measure?.sqFt ?? 0) * areaRatio)), [measure, areaRatio]);

  const activeColor: CorkColor = useMemo(() => {
    if (usingCustom) return { id: "custom", code: "Custom", name: "Custom Color", hex: customHex };
    return CORK_COLORS.find((c) => c.id === colorId) ?? CORK_COLORS[0];
  }, [usingCustom, customHex, colorId]);

  const colorKey = usingCustom ? `custom:${customHex}` : colorId;

  /* ---------- journey ---------- */
  useEffect(() => {
    if (!open) return;
    prefetchCancelled.current = false;
    fetch("/api/cork/journey", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ utm: Object.fromEntries(new URLSearchParams(window.location.search)) }) })
      .then((r) => r.json()).then((d) => setJourneyId(d.id)).catch(() => null);
    track("visualizer_open");
    return () => { prefetchCancelled.current = true; };
  }, [open]);

  const persist = useCallback((fields: Record<string, unknown>) => {
    if (!journeyId) return;
    fetch(`/api/cork/journey/${journeyId}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(fields) }).catch(() => null);
  }, [journeyId]);

  const go = useCallback((s: Step) => { setStep(s); setError(null); persist({ step_reached: s }); }, [persist]);

  /* ---------- capture ---------- */
  const onFile = async (f: File | null) => {
    if (!f) return;
    setBusy(true);
    try {
      const img = await fileToDownscaledJpeg(f);
      setImage(img);
      setMeasure(null);
      selRef.current = null;
      srcRef.current = null;
      excludePixelPts.current = [];
      setAreaRatio(1);
      setColorChosen(false);
      setRenders({});
      rendersRef.current = {};
      track("photo_uploaded");
      go("measure");
      runMeasure(img);
    } finally { setBusy(false); }
  };

  const resetToCapture = () => {
    setImage(null); setMeasure(null);
    selRef.current = null; srcRef.current = null;
    excludePixelPts.current = [];
    setAreaRatio(1); setColorChosen(false);
    setRenders({}); rendersRef.current = {};
    setError(null); go("capture");
  };

  /* ---------- initMask: auto SAM 2 with all measure points ---------- */
  const initMask = useCallback(async (
    m: MeasureResult,
    img: { dataUrl: string; width: number; height: number }
  ) => {
    const scale = Math.min(1, MASK_MAX / Math.max(img.width, img.height));
    const mw = Math.max(1, Math.round(img.width * scale));
    const mh = Math.max(1, Math.round(img.height * scale));

    // Build source pixel buffer for local fallback
    const el = new Image(); el.src = img.dataUrl;
    await el.decode().catch(() => null);
    const sc = document.createElement("canvas"); sc.width = mw; sc.height = mh;
    const sctx = sc.getContext("2d", { willReadFrequently: true })!;
    sctx.drawImage(el, 0, 0, mw, mh);
    srcRef.current = sctx.getImageData(0, 0, mw, mh).data;

    // Store negative points in image pixel space for all future SAM calls
    excludePixelPts.current = (m.excludePoints ?? []).map(([x, y]) => ({
      x: x * img.width,
      y: y * img.height,
    }));

    // Start with empty selection
    const sel = new Uint8Array(mw * mh);
    selRef.current = sel;
    dimsRef.current = { mw, mh, seed: 1 };

    let mc = maskCanvasRef.current;
    if (!mc) { mc = document.createElement("canvas"); maskCanvasRef.current = mc; }
    mc.width = mw; mc.height = mh;

    // Build point list: deck points (label 1) + exclude points (label 0)
    const deckPts = (m.deckPoints ?? []).map(([x, y]) => ({ x: x * img.width, y: y * img.height, label: 1 }));
    const exclPts = excludePixelPts.current.map((p) => ({ x: p.x, y: p.y, label: 0 }));
    const allPoints = [...deckPts, ...exclPts];

    if (allPoints.length > 0 && !segmentUnavailable.current) {
      setAutoSegMsg("Finding your deck with AI…");
      try {
        const res = await fetch("/api/cork/segment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageBase64: b64(img.dataUrl), mediaType: "image/jpeg", points: allPoints }),
        });
        if (res.status === 503) {
          segmentUnavailable.current = true;
        } else if (res.ok) {
          const data = await res.json();
          if (data.maskBase64) {
            // Apply SAM mask onto sel directly
            const maskImg = new Image();
            maskImg.src = `data:${data.mediaType || "image/png"};base64,${data.maskBase64}`;
            await maskImg.decode().catch(() => null);
            const mc2 = document.createElement("canvas"); mc2.width = mw; mc2.height = mh;
            const mc2ctx = mc2.getContext("2d", { willReadFrequently: true })!;
            mc2ctx.drawImage(maskImg, 0, 0, mw, mh);
            const md = mc2ctx.getImageData(0, 0, mw, mh).data;
            let count = 0;
            for (let i = 0; i < mw * mh; i++) {
              const lum = (md[i * 4] + md[i * 4 + 1] + md[i * 4 + 2]) / 3;
              if (md[i * 4 + 3] > 16 && lum > 100) { sel[i] = 1; count++; }
            }
            dimsRef.current = { mw, mh, seed: Math.max(1, count) };
            setAreaRatio(1);
            track("auto_segment_success", { points: allPoints.length });
          }
        }
      } catch (e) {
        console.warn("[cork] auto-segment failed:", e);
      } finally {
        setAutoSegMsg("");
      }
    }

    setMaskVersion((v) => v + 1);
  }, []);

  const runMeasure = async (img: { dataUrl: string; width: number; height: number }) => {
    setBusy(true); setError(null);
    try {
      const res = await fetch("/api/cork/measure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: b64(img.dataUrl), mediaType: "image/jpeg" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "measure_failed");
      setMeasure(data);
      await initMask(data, img);
      persist({ sq_ft_estimated: data.sqFt });
      track("measured", { sq_ft: data.sqFt });
    } catch (e) {
      const code = e instanceof Error ? e.message : "";
      setError(
        code === "measure_unconfigured"
          ? "Measurement service isn't configured (ANTHROPIC_API_KEY missing)."
          : `We couldn't measure that photo${code ? ` (${code})` : ""}. Try again or use a different photo.`
      );
    } finally { setBusy(false); }
  };

  /* ---------- overlay redraw ---------- */
  const drawOverlay = useCallback(() => {
    const canvas = canvasRef.current;
    const mc = maskCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!mc) return;
    ctx.save();
    ctx.drawImage(mc, 0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "source-in";
    ctx.fillStyle = "rgba(166,74,46,0.42)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }, []);

  useEffect(() => {
    const sel = selRef.current;
    const mc = maskCanvasRef.current;
    const { mw, mh, seed } = dimsRef.current;
    if (!sel || !mc) return;
    const ctx = mc.getContext("2d")!;
    const id = ctx.createImageData(mw, mh);
    let count = 0;
    for (let i = 0; i < sel.length; i++) {
      if (sel[i]) {
        id.data[i * 4] = 255; id.data[i * 4 + 1] = 255;
        id.data[i * 4 + 2] = 255; id.data[i * 4 + 3] = 255;
        count++;
      }
    }
    ctx.putImageData(id, 0, 0);
    setAreaRatio(seed > 0 ? count / seed : count > 0 ? 1 : 0);
    drawOverlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maskVersion, drawOverlay]);

  useEffect(() => { drawOverlay(); }, [drawOverlay, step]);

  /* ---------- pointer editing ---------- */
  const pointerPos = (e: React.PointerEvent): [number, number] => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return [(e.clientX - rect.left) / rect.width, (e.clientY - rect.top) / rect.height];
  };

  const brushRadiusMask = () => Math.max(2, Math.round((brushPct / 100) * dimsRef.current.mw));

  // Apply a SAM mask PNG onto the selection at mask resolution.
  const applyMaskPng = useCallback(async (url: string, add: boolean) => {
    const sel = selRef.current;
    if (!sel) return;
    const { mw, mh } = dimsRef.current;
    const img = new Image(); img.src = url;
    await img.decode().catch(() => null);
    const c = document.createElement("canvas"); c.width = mw; c.height = mh;
    const ctx = c.getContext("2d", { willReadFrequently: true })!;
    ctx.drawImage(img, 0, 0, mw, mh);
    const d = ctx.getImageData(0, 0, mw, mh).data;
    for (let i = 0; i < mw * mh; i++) {
      const lum = (d[i * 4] + d[i * 4 + 1] + d[i * 4 + 2]) / 3;
      if (d[i * 4 + 3] > 16 && lum > 100) sel[i] = add ? 1 : 0;
    }
    setMaskVersion((v) => v + 1);
  }, []);

  // SAM 2 smart select — sends user click + stored negative exclude points.
  const smartSelect = useCallback(
    async (pxImg: number, pyImg: number, add: boolean): Promise<boolean> => {
      if (segmentUnavailable.current || !image) return false;
      try {
        setSegmenting(true);
        // Positive point = user click; negative points = pool water/landscape from measure.
        const points = [
          { x: pxImg, y: pyImg, label: add ? 1 : 0 },
          ...excludePixelPts.current.map((p) => ({ x: p.x, y: p.y, label: 0 })),
        ];
        const res = await fetch("/api/cork/segment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageBase64: b64(image.dataUrl), mediaType: "image/jpeg", points }),
        });
        if (res.status === 503) { segmentUnavailable.current = true; return false; }
        if (!res.ok) return false;
        const data = await res.json();
        if (!data.maskBase64) return false;
        await applyMaskPng(`data:${data.mediaType || "image/png"};base64,${data.maskBase64}`, add);
        return true;
      } catch { return false; }
      finally { setSegmenting(false); }
    },
    [image, applyMaskPng]
  );

  const onPointerDown = async (e: React.PointerEvent) => {
    if (step !== "refine") return;
    const sel = selRef.current;
    if (!sel || !image) return;
    const { mw, mh } = dimsRef.current;
    const [nx, ny] = pointerPos(e);
    const px = Math.min(mw - 1, Math.max(0, Math.round(nx * mw)));
    const py = Math.min(mh - 1, Math.max(0, Math.round(ny * mh)));

    if (tool === "wand") {
      const usedSam = await smartSelect(nx * image.width, ny * image.height, addMode);
      if (!usedSam) {
        if (srcRef.current) floodFill(sel, srcRef.current, mw, mh, px, py, addMode, tolerance);
        setMaskVersion((v) => v + 1);
      }
      track("wand_tap", { add: addMode, engine: usedSam ? "sam" : "local" });
      return;
    }

    drawing.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    stampCircle(sel, mw, mh, px, py, brushRadiusMask(), addMode);
    lastPt.current = [px, py];
    setMaskVersion((v) => v + 1);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drawing.current || step !== "refine" || tool !== "brush") return;
    const sel = selRef.current;
    if (!sel) return;
    const { mw, mh } = dimsRef.current;
    const [nx, ny] = pointerPos(e);
    const px = nx * mw, py = ny * mh;
    const lp = lastPt.current ?? [px, py];
    stampLine(sel, mw, mh, lp[0], lp[1], px, py, brushRadiusMask(), addMode);
    lastPt.current = [px, py];
    setMaskVersion((v) => v + 1);
  };

  const onPointerUp = () => { drawing.current = false; lastPt.current = null; };

  const reseedFromAi = () => { if (measure && image) initMask(measure, image); };
  const clearSelection = () => { const sel = selRef.current; if (!sel) return; sel.fill(0); setMaskVersion((v) => v + 1); };

  /* ---------- guide + mask for render ---------- */
  const buildGuide = useCallback(async (): Promise<string | undefined> => {
    if (!image) return undefined;
    const mc = maskCanvasRef.current;
    if (!mc) return undefined;
    const img = new Image(); img.src = image.dataUrl;
    await img.decode().catch(() => null);
    const c = document.createElement("canvas"); c.width = image.width; c.height = image.height;
    const ctx = c.getContext("2d")!;
    ctx.drawImage(img, 0, 0, c.width, c.height);
    const t = document.createElement("canvas"); t.width = c.width; t.height = c.height;
    const tc = t.getContext("2d")!;
    tc.drawImage(mc, 0, 0, t.width, t.height);
    tc.globalCompositeOperation = "source-in";
    tc.fillStyle = "rgba(255,0,255,0.5)";
    tc.fillRect(0, 0, t.width, t.height);
    ctx.drawImage(t, 0, 0);
    return b64(c.toDataURL("image/jpeg", 0.8));
  }, [image]);

  const buildMask = useCallback(async (): Promise<string | undefined> => {
    const mc = maskCanvasRef.current;
    if (!mc || !image) return undefined;
    const c = document.createElement("canvas"); c.width = image.width; c.height = image.height;
    const ctx = c.getContext("2d", { willReadFrequently: true })!;
    ctx.drawImage(mc, 0, 0, c.width, c.height);
    const id = ctx.getImageData(0, 0, c.width, c.height);
    for (let i = 0; i < id.data.length; i += 4) {
      const v = id.data[i] > 100 ? 255 : 0;
      id.data[i] = v; id.data[i + 1] = v; id.data[i + 2] = v; id.data[i + 3] = 255;
    }
    ctx.putImageData(id, 0, 0);
    return c.toDataURL("image/png").split(",")[1];
  }, [image]);

  /* ---------- rendering ---------- */
  const renderColor = useCallback(async (color: CorkColor, key: string): Promise<string | null> => {
    if (rendersRef.current[key]) return rendersRef.current[key];
    if (!image) return null;
    const [guideBase64, maskBase64] = await Promise.all([buildGuide(), buildMask()]);
    const res = await fetch("/api/cork/render", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageBase64: b64(image.dataUrl), mediaType: "image/jpeg", guideBase64, maskBase64, colorName: `${color.code} ${color.name}`, colorHex: color.hex }),
    });
    const data = await res.json();
    if (!res.ok || !data.imageBase64) return null;
    const url = `data:${data.mediaType};base64,${data.imageBase64}`;
    rendersRef.current[key] = url;
    setRenders((r) => ({ ...r, [key]: url }));
    return url;
  }, [image, buildGuide, buildMask]);

  const ensureRender = useCallback(async (color: CorkColor, key: string) => {
    if (rendersRef.current[key]) return;
    setRendering(true); setError(null);
    const url = await renderColor(color, key).catch(() => null);
    setRendering(false);
    if (!url) setError("Rendering hit a snag — try again or pick another color.");
    else {
      track("color_rendered", { color: key });
      (async () => {
        for (const c of CORK_COLORS.filter((x) => PREFETCH_COLOR_IDS.includes(x.id))) {
          if (prefetchCancelled.current) return;
          if (!rendersRef.current[c.id]) await renderColor(c, c.id).catch(() => null);
        }
      })();
    }
  }, [renderColor]);

  useEffect(() => {
    if (step === "render" && colorChosen && image && measure) ensureRender(activeColor, colorKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, colorKey, colorChosen]);

  /* ---------- estimate ---------- */
  const runEstimate = async () => {
    go("estimate"); track("estimate_requested", { sq_ft: sqFt });
    const renderUrl = rendersRef.current[colorKey];
    try {
      const res = await fetch("/api/cork/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ journeyId, sqFt, colorName: `${activeColor.code} ${activeColor.name}`, name: lead.name, email: lead.email, renderBase64: renderUrl ? b64(renderUrl) : undefined }),
      });
      const data = await res.json();
      setTimeout(() => setEstimate({ low: data.low, high: data.high }), 2600);
    } catch {
      setTimeout(() => setError("Couldn't compute your estimate — please try again."), 2600);
    }
  };

  /* ---------- booking ---------- */
  const addressRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (step !== "book") return;
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!key || getGoogle()?.maps?.importLibrary) return;
    ((g: any) => {
      let h: any, a: any, k: any;
      const c = "google", l = "importLibrary", q = "__ib__", m = document;
      const b: any = (window as any)[c] || ((window as any)[c] = {});
      const d = b.maps || (b.maps = {});
      const r = new Set<string>();
      const e = new URLSearchParams();
      const u = () => h || (h = new Promise<void>((f: any, n: any) => {
        a = m.createElement("script");
        e.set("libraries", [...r].join(","));
        for (k in g) e.set(k.replace(/[A-Z]/g, (t: string) => "_" + t[0].toLowerCase()), g[k]);
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f; a.onerror = () => (h = n(Error("Google Maps could not load."))); m.head.append(a);
      }));
      if (!d[l]) d[l] = (f: string, ...n: any[]) => r.add(f) && u().then(() => d[l](f, ...n));
    })({ key, v: "weekly" });
  }, [step]);

  const fetchAddrSuggestions = async (v: string) => {
    setBooking((prev) => ({ ...prev, address: v }));
    const g = getGoogle();
    if (!g?.maps?.importLibrary || v.trim().length < 4) { setAddrSug([]); return; }
    try {
      const { AutocompleteSuggestion, AutocompleteSessionToken } = await g.maps.importLibrary("places");
      if (!addrSessionToken.current) addrSessionToken.current = new AutocompleteSessionToken();
      const { suggestions } = await AutocompleteSuggestion.fetchAutocompleteSuggestions({ input: v, includedRegionCodes: ["us"], sessionToken: addrSessionToken.current });
      setAddrSug((suggestions || []).filter((sg: any) => sg.placePrediction).slice(0, 5).map((sg: any) => ({ text: sg.placePrediction.text?.text ?? "", sug: sg })));
    } catch { setAddrSug([]); }
  };

  const pickAddr = async (item: { text: string; sug: any }) => {
    try {
      const place = item.sug.placePrediction.toPlace();
      await place.fetchFields({ fields: ["formattedAddress"] });
      setBooking((prev) => ({ ...prev, address: place.formattedAddress || item.text }));
    } catch { setBooking((prev) => ({ ...prev, address: item.text })); }
    setAddrSug([]); addrSessionToken.current = null;
  };

  const submitBooking = async () => {
    setBusy(true); setError(null);
    try {
      await fetch("/api/cork/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ journeyId, ...lead, address: booking.address, preferredDay: booking.day, preferredTimeWindow: booking.window, sqFt, colorName: `${activeColor.code} ${activeColor.name}`, priceLow: estimate?.low, priceHigh: estimate?.high }),
      });
      track("booking_requested"); go("booked");
    } catch { setError("Something went wrong — please try again."); }
    finally { setBusy(false); }
  };

  if (!open) return null;
  const email_ok = /.+@.+\..+/.test(lead.email);
  const phone_ok = lead.phone.replace(/\D/g, "").length >= 10;
  const zip_ok = /^\d{5}$/.test(lead.zip);

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Cork deck project visualizer">
      <div className="absolute inset-0 sm:inset-4 md:inset-8 bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 bg-neutral-50">
          <div className="text-sm font-semibold text-neutral-800">Cork Deck Visualizer &amp; Price Range</div>
          <button onClick={onClose} aria-label="Close visualizer" className="rounded-full w-8 h-8 flex items-center justify-center text-neutral-500 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#A64A2E]">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.22 }} className="h-full">

              {step === "capture" && (
                <div className="max-w-lg mx-auto px-6 py-10 text-center">
                  <h2 className="text-2xl font-bold text-neutral-900">Show us your pool deck</h2>
                  <p className="mt-2 text-neutral-600">Take one photo that captures as much of your deck as possible. Cracks, stains, ugly spots — leave them in. That's what we fix.</p>
                  <label className="mt-8 block cursor-pointer rounded-2xl border-2 border-dashed border-[#A64A2E]/50 bg-[#A64A2E]/5 px-6 py-14 hover:bg-[#A64A2E]/10 transition">
                    <input type="file" accept="image/*" capture="environment" className="sr-only" onChange={(e) => onFile(e.target.files?.[0] ?? null)} />
                    <div className="text-4xl">📸</div>
                    <div className="mt-3 font-semibold text-[#A64A2E]">Take a photo or upload one</div>
                    <div className="mt-1 text-sm text-neutral-500">JPG, PNG, HEIC — wider is better</div>
                  </label>
                  {busy && <p className="mt-4 text-sm text-neutral-500">Preparing your photo…</p>}
                </div>
              )}

              {(step === "measure" || step === "refine") && image && (
                <div className="max-w-3xl mx-auto px-4 py-6">
                  <h2 className="text-xl font-bold text-neutral-900">{step === "measure" ? "Measuring your deck…" : "Fine-tune the corked area"}</h2>
                  {step === "measure" && <p className="mt-1 text-sm text-neutral-600">AI is identifying your deck surface — pool water and landscaping are automatically excluded.</p>}
                  {step === "refine" && (
                    <p className="mt-1 text-sm text-neutral-600">
                      <span className="font-medium">Magic wand:</span> tap any part of the deck to select it precisely. <span className="font-medium">Remove</span> mode to cut areas out. <span className="font-medium">Brush</span> for fine touch-ups. Square footage updates live.
                    </p>
                  )}
                  <div className="relative mt-4 rounded-xl overflow-hidden select-none touch-none" style={{ aspectRatio: `${image.width}/${image.height}` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image.dataUrl} alt="Your pool deck" className="absolute inset-0 w-full h-full object-contain" draggable={false} />
                    <canvas ref={canvasRef} width={image.width} height={image.height} className="absolute inset-0 w-full h-full" style={{ cursor: step === "refine" ? "crosshair" : "default", touchAction: "none" }} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} />
                    {(busy || segmenting || autoSegMsg) && (
                      <div className="absolute inset-0 bg-white/70 flex flex-col items-center justify-center">
                        <motion.div className="h-1.5 w-48 rounded bg-neutral-200 overflow-hidden">
                          <motion.div className="h-full bg-[#A64A2E]" initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }} style={{ width: "50%" }} />
                        </motion.div>
                        <p className="mt-3 text-sm text-neutral-600">
                          {autoSegMsg || (segmenting ? "Selecting your deck…" : "Analyzing photo…")}
                        </p>
                      </div>
                    )}
                  </div>

                  {step === "refine" && measure && !busy && (
                    <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="inline-flex rounded-lg overflow-hidden border border-neutral-300">
                          <button onClick={() => setTool("wand")} className={`px-3 py-2 text-sm font-medium ${tool === "wand" ? "bg-[#A64A2E] text-white" : "bg-white text-neutral-600"}`}>✨ Magic wand</button>
                          <button onClick={() => setTool("brush")} className={`px-3 py-2 text-sm font-medium ${tool === "brush" ? "bg-[#A64A2E] text-white" : "bg-white text-neutral-600"}`}>🖌 Brush</button>
                        </div>
                        <div className="inline-flex rounded-lg overflow-hidden border border-neutral-300">
                          <button onClick={() => setAddMode(true)} className={`px-3 py-2 text-sm font-medium ${addMode ? "bg-emerald-600 text-white" : "bg-white text-neutral-600"}`}>+ Add</button>
                          <button onClick={() => setAddMode(false)} className={`px-3 py-2 text-sm font-medium ${!addMode ? "bg-neutral-800 text-white" : "bg-white text-neutral-600"}`}>– Remove</button>
                        </div>
                        {tool === "brush" ? (
                          <label className="flex items-center gap-2 text-sm text-neutral-600">Size
                            <input type="range" min={2} max={18} value={brushPct} onChange={(e) => setBrushPct(Number(e.target.value))} />
                          </label>
                        ) : (
                          <label className="flex items-center gap-2 text-sm text-neutral-600" title="Only used if AI selector unavailable">Grab sensitivity
                            <input type="range" min={12} max={80} value={tolerance} onChange={(e) => setTolerance(Number(e.target.value))} />
                          </label>
                        )}
                        <button onClick={reseedFromAi} className="text-sm text-neutral-500 underline">Reset to AI guess</button>
                        <button onClick={clearSelection} className="text-sm text-neutral-500 underline">Clear</button>
                      </div>
                    </div>
                  )}

                  {measure && !busy && (
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <div className="rounded-lg bg-neutral-100 px-4 py-2 text-sm"><span className="font-bold text-neutral-900 text-lg">~{sqFt.toLocaleString()}</span> sq ft selected</div>
                      <div className="ml-auto flex gap-2 items-center">
                        <button onClick={resetToCapture} className="text-sm text-neutral-500 underline mr-1">Different photo</button>
                        {step === "measure" && <button onClick={() => go("refine")} className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50">Fine-tune the area</button>}
                        <button onClick={() => go("render")} className="rounded-lg bg-[#A64A2E] text-white px-5 py-2 text-sm font-semibold hover:bg-[#8f3f27]">{step === "measure" ? "Looks right — choose colors" : "Done — choose colors"}</button>
                      </div>
                    </div>
                  )}
                  {error && (
                    <p className="mt-3 text-sm text-red-600">
                      {error}{" "}
                      <button className="underline font-medium" onClick={() => runMeasure(image)}>Retry</button>
                      <button className="underline font-medium ml-3" onClick={resetToCapture}>Use a different photo</button>
                    </p>
                  )}
                </div>
              )}

              {step === "render" && image && (
                <div className="max-w-3xl mx-auto px-4 py-6">
                  <h2 className="text-xl font-bold text-neutral-900">Choose your cork color</h2>
                  <p className="mt-1 text-sm text-neutral-600">{colorChosen ? "Every render shows your actual deck — resurfaced, cracks gone." : "Tap a color below to see your deck resurfaced. Until then, this is your original photo."}</p>
                  <div className="relative mt-4 rounded-xl overflow-hidden bg-neutral-100" style={{ aspectRatio: `${image.width}/${image.height}` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={renders[colorKey] ?? image.dataUrl} alt={`Your deck in ${activeColor.name}`} className="absolute inset-0 w-full h-full object-contain" />
                    {rendering && !renders[colorKey] && (
                      <div className="absolute inset-0 bg-white/75 flex flex-col items-center justify-center">
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }} className="w-10 h-10 rounded-full border-4 border-neutral-200 border-t-[#A64A2E]" />
                        <p className="mt-3 text-sm font-medium text-neutral-700">Corking your deck in {activeColor.name}…</p>
                        <p className="text-xs text-neutral-500">First color takes a few seconds — the rest will be instant</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 grid grid-cols-6 sm:grid-cols-12 gap-2">
                    {CORK_COLORS.map((c) => (
                      <button key={c.id} onClick={() => { setUsingCustom(false); setColorId(c.id); setColorChosen(true); track("color_selected", { color: c.id }); }} title={`${c.code} ${c.name}`} aria-label={`${c.code} ${c.name}`} className={`aspect-square rounded-lg border-2 relative ${!usingCustom && colorId === c.id ? "border-neutral-900 ring-2 ring-neutral-900/20" : "border-neutral-200"}`} style={{ backgroundColor: c.hex }}>
                        {rendersRef.current[c.id] && <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border border-white" aria-hidden />}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    <div className="text-neutral-700 font-medium">{activeColor.code} · {activeColor.name}</div>
                    <label className="ml-auto flex items-center gap-2 text-neutral-600">Custom color
                      <input type="color" value={customHex} onChange={(e) => { setCustomHex(e.target.value); setUsingCustom(true); setColorChosen(true); }} className="h-8 w-12 cursor-pointer rounded border border-neutral-300" />
                    </label>
                  </div>
                  {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
                  <div className="mt-6 flex justify-between">
                    <button onClick={() => go("refine")} className="text-sm text-neutral-500 underline">Back to areas</button>
                    <button disabled={!colorChosen} onClick={() => { track("proceed_to_estimate"); go("lead1"); }} className="rounded-lg bg-[#A64A2E] text-white px-6 py-3 font-semibold hover:bg-[#8f3f27] disabled:opacity-40">Get my estimated cost →</button>
                  </div>
                </div>
              )}

              {step === "lead1" && (
                <div className="max-w-md mx-auto px-6 py-10">
                  <h2 className="text-2xl font-bold text-neutral-900">Where should we send your estimate report?</h2>
                  <p className="mt-2 text-sm text-neutral-600">Your rendering + price range, straight to your inbox.</p>
                  <div className="mt-6 space-y-4">
                    <input value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} placeholder="Full name" className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A64A2E]" autoComplete="name" />
                    <input value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} placeholder="Email address" type="email" className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A64A2E]" autoComplete="email" />
                  </div>
                  <button disabled={!lead.name || !email_ok} onClick={() => { persist({ name: lead.name, email: lead.email, step_reached: "lead2" }); track("lead_email"); setStep("lead2"); }} className="mt-6 w-full rounded-lg bg-[#A64A2E] text-white px-6 py-3 font-semibold disabled:opacity-40 hover:bg-[#8f3f27]">Continue</button>
                </div>
              )}

              {step === "lead2" && (
                <div className="max-w-md mx-auto px-6 py-10">
                  <h2 className="text-2xl font-bold text-neutral-900">Almost there</h2>
                  <p className="mt-2 text-sm text-neutral-600">Your zip confirms you're in our Tucson service area; your phone lets us follow up on your exact quote.</p>
                  <div className="mt-6 space-y-4">
                    <input value={lead.zip} onChange={(e) => setLead({ ...lead, zip: e.target.value.replace(/\D/g, "").slice(0, 5) })} placeholder="Zip code" inputMode="numeric" className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A64A2E]" autoComplete="postal-code" />
                    <input value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} placeholder="Phone number" type="tel" className="w-full rounded-lg border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A64A2E]" autoComplete="tel" />
                  </div>
                  <button disabled={!zip_ok || !phone_ok} onClick={() => { persist({ zip: lead.zip, phone: lead.phone }); track("lead_phone"); runEstimate(); }} className="mt-6 w-full rounded-lg bg-[#A64A2E] text-white px-6 py-3 font-semibold disabled:opacity-40 hover:bg-[#8f3f27]">Show my price range</button>
                </div>
              )}

              {step === "estimate" && (
                <div className="max-w-2xl mx-auto px-6 py-10 text-center">
                  {!estimate ? (
                    <div className="py-16">
                      <motion.div className="mx-auto h-2 w-64 rounded bg-neutral-200 overflow-hidden">
                        <motion.div className="h-full bg-[#A64A2E]" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.5, ease: "easeInOut" }} />
                      </motion.div>
                      <p className="mt-5 text-neutral-600">Pricing your project… measuring {sqFt.toLocaleString()} sq ft of {activeColor.name} cork.</p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-neutral-900">Your estimated investment</h2>
                      <div className="mt-4 text-4xl font-extrabold text-[#A64A2E]">${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}</div>
                      <p className="mt-2 text-sm text-neutral-600">~{sqFt.toLocaleString()} sq ft · {activeColor.code} {activeColor.name} · report emailed to {lead.email}</p>
                      {image && (
                        <div className="mt-6 rounded-xl overflow-hidden" style={{ aspectRatio: `${image.width}/${image.height}` }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={renders[colorKey] ?? image.dataUrl} alt="Your corked deck" className="w-full h-full object-contain" />
                        </div>
                      )}
                      <p className="mt-6 text-neutral-700">A photo estimate is a range. A free 20-minute deck inspection makes it an exact number — and locks in current pricing.</p>
                      <button onClick={() => { track("proceed_to_booking"); go("book"); }} className="mt-4 rounded-lg bg-[#A64A2E] text-white px-8 py-4 text-lg font-semibold hover:bg-[#8f3f27]">Request a Free Deck Inspection &amp; Exact Estimate</button>
                    </>
                  )}
                  {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
                </div>
              )}

              {step === "book" && (
                <div className="max-w-md mx-auto px-6 py-10">
                  <h2 className="text-2xl font-bold text-neutral-900">Pick a time that works</h2>
                  <p className="mt-2 text-sm text-neutral-600">Free, no-obligation deck inspection with an exact quote on the spot.</p>
                  {(!lead.name || !email_ok || !phone_ok) && (
                    <div className="mt-4 space-y-3">
                      <input value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} placeholder="Full name" className="w-full rounded-lg border border-neutral-300 px-4 py-3" autoComplete="name" />
                      <input value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} placeholder="Email address" type="email" className="w-full rounded-lg border border-neutral-300 px-4 py-3" autoComplete="email" />
                      <input value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} placeholder="Phone number" type="tel" className="w-full rounded-lg border border-neutral-300 px-4 py-3" autoComplete="tel" />
                      <input value={lead.zip} onChange={(e) => setLead({ ...lead, zip: e.target.value.replace(/\D/g, "").slice(0, 5) })} placeholder="Zip code" inputMode="numeric" className="w-full rounded-lg border border-neutral-300 px-4 py-3" autoComplete="postal-code" />
                    </div>
                  )}
                  <div className="mt-5">
                    <div className="text-sm font-medium text-neutral-700">Preferred day</div>
                    <div className="mt-2 grid grid-cols-4 gap-2">
                      {nextDays(8).map((d) => (
                        <button key={d.value} onClick={() => setBooking({ ...booking, day: d.value })} className={`rounded-lg border px-2 py-2 text-xs ${booking.day === d.value ? "border-[#A64A2E] bg-[#A64A2E]/10 font-semibold" : "border-neutral-300"}`}>{d.label}</button>
                      ))}
                    </div>
                    <div className="mt-4 text-sm font-medium text-neutral-700">Time window</div>
                    <div className="mt-2 grid grid-cols-4 gap-2">
                      {TIME_WINDOWS.map((t) => (
                        <button key={t} onClick={() => setBooking({ ...booking, window: t })} className={`rounded-lg border px-2 py-2 text-xs ${booking.window === t ? "border-[#A64A2E] bg-[#A64A2E]/10 font-semibold" : "border-neutral-300"}`}>{t}</button>
                      ))}
                    </div>
                    <div className="mt-4 text-sm font-medium text-neutral-700">Property address</div>
                    <div className="relative">
                      <input ref={addressRef} value={booking.address} onChange={(e) => fetchAddrSuggestions(e.target.value)} onBlur={() => setTimeout(() => setAddrSug([]), 150)} placeholder="Start typing your address…" className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A64A2E]" autoComplete="off" />
                      {addrSug.length > 0 && (
                        <ul className="absolute z-10 mt-1 w-full rounded-lg border border-neutral-200 bg-white shadow-lg overflow-hidden">
                          {addrSug.map((item, i) => (
                            <li key={i}><button type="button" onMouseDown={(ev) => ev.preventDefault()} onClick={() => pickAddr(item)} className="block w-full text-left px-4 py-2 text-sm hover:bg-neutral-100">{item.text}</button></li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
                  <button disabled={busy || !booking.day || !booking.window || booking.address.length < 8 || !lead.name || !email_ok || !phone_ok} onClick={submitBooking} className="mt-6 w-full rounded-lg bg-[#A64A2E] text-white px-6 py-4 font-semibold disabled:opacity-40 hover:bg-[#8f3f27]">{busy ? "Sending…" : "Request My Free Inspection"}</button>
                </div>
              )}

              {step === "booked" && (
                <div className="max-w-md mx-auto px-6 py-16 text-center">
                  <div className="text-5xl">✅</div>
                  <h2 className="mt-4 text-2xl font-bold text-neutral-900">You're on the schedule request list</h2>
                  <p className="mt-3 text-neutral-600">We'll confirm your inspection for <strong>{booking.day}</strong> ({booking.window}) shortly. Your estimate report is on its way to {lead.email}.</p>
                  <button onClick={onClose} className="mt-8 rounded-lg border border-neutral-300 px-6 py-3 font-medium hover:bg-neutral-50">Done</button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
