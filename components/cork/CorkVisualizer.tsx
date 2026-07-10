"use client";

/**
 * Cork Pool Deck Visualizer — full-screen journey modal.
 * capture → measure → refine → render → lead1 → lead2 → estimate → book → booked
 * Works desktop / mobile / tablet (pointer events throughout).
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CORK_COLORS, DEFAULT_COLOR_ID, type CorkColor } from "@/lib/cork/config";

/* eslint-disable @typescript-eslint/no-explicit-any */
function track(event: string, data: Record<string, unknown> = {}) {
  try {
    (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: `cork_${event}`, ...data });
  } catch {
    /* noop */
  }
}

const getGoogle = (): any => (window as unknown as { google?: any }).google;

type Step =
  | "capture"
  | "measure"
  | "refine"
  | "render"
  | "lead1"
  | "lead2"
  | "estimate"
  | "book"
  | "booked";

interface Stroke {
  size: number;
  points: Array<[number, number]>; // normalized 0-1
}

interface MeasureResult {
  sqFt: number;
  confidence: string;
  polygons: Array<Array<[number, number]>>;
  notes: string;
}

const TIME_WINDOWS = ["8–10 AM", "10–12 PM", "12–2 PM", "2–4 PM"];

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
      const i = new Image();
      i.onload = () => res(i);
      i.onerror = rej;
      i.src = url;
    });
    const scale = Math.min(1, maxDim / Math.max(img.naturalWidth, img.naturalHeight));
    const w = Math.round(img.naturalWidth * scale);
    const h = Math.round(img.naturalHeight * scale);
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    c.getContext("2d")!.drawImage(img, 0, 0, w, h);
    return { dataUrl: c.toDataURL("image/jpeg", 0.85), width: w, height: h };
  } finally {
    URL.revokeObjectURL(url);
  }
}

const b64 = (dataUrl: string) => dataUrl.split(",")[1] ?? "";

export default function CorkVisualizer({ open, onClose, startAtBooking }: { open: boolean; onClose: () => void; startAtBooking?: boolean }) {
  const [step, setStep] = useState<Step>(startAtBooking ? "book" : "capture");
  const [journeyId, setJourneyId] = useState<string | null>(null);
  const [image, setImage] = useState<{ dataUrl: string; width: number; height: number } | null>(null);
  const [measure, setMeasure] = useState<MeasureResult | null>(null);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [areaRatio, setAreaRatio] = useState(1);
  const [brushSize, setBrushSize] = useState(36);
  const [colorId, setColorId] = useState(DEFAULT_COLOR_ID);
  const [customHex, setCustomHex] = useState("#A64A2E");
  const [usingCustom, setUsingCustom] = useState(false);
  const [renders, setRenders] = useState<Record<string, string>>({});
  const [rendering, setRendering] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", zip: "", phone: "" });
  const [booking, setBooking] = useState({ day: "", window: "", address: "" });
  const [estimate, setEstimate] = useState<{ low: number; high: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const rendersRef = useRef<Record<string, string>>({});
  const prefetchCancelled = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);

  const sqFt = useMemo(
    () => Math.max(50, Math.round((measure?.sqFt ?? 0) * areaRatio)),
    [measure, areaRatio]
  );

  const activeColor: CorkColor = useMemo(() => {
    if (usingCustom) return { id: "custom", code: "Custom", name: "Custom Color", hex: customHex };
    return CORK_COLORS.find((c) => c.id === colorId) ?? CORK_COLORS[0];
  }, [usingCustom, customHex, colorId]);

  const colorKey = usingCustom ? `custom:${customHex}` : colorId;

  /* ---------- journey persistence ---------- */
  useEffect(() => {
    if (!open) return;
    prefetchCancelled.current = false;
    fetch("/api/cork/journey", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ utm: Object.fromEntries(new URLSearchParams(window.location.search)) }) })
      .then((r) => r.json())
      .then((d) => setJourneyId(d.id))
      .catch(() => null);
    track("visualizer_open");
    return () => {
      prefetchCancelled.current = true;
    };
  }, [open]);

  const persist = useCallback(
    (fields: Record<string, unknown>) => {
      if (!journeyId) return;
      fetch(`/api/cork/journey/${journeyId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      }).catch(() => null);
    },
    [journeyId]
  );

  const go = useCallback(
    (s: Step) => {
      setStep(s);
      setError(null);
      persist({ step_reached: s });
    },
    [persist]
  );

  /* ---------- capture ---------- */
  const onFile = async (f: File | null) => {
    if (!f) return;
    setBusy(true);
    try {
      const img = await fileToDownscaledJpeg(f);
      setImage(img);
      setMeasure(null);
      setStrokes([]);
      setAreaRatio(1);
      setRenders({});
      rendersRef.current = {};
      track("photo_uploaded");
      go("measure");
      runMeasure(img);
    } finally {
      setBusy(false);
    }
  };

  /* ---------- measure ---------- */
  const resetToCapture = () => {
    setImage(null);
    setMeasure(null);
    setStrokes([]);
    setAreaRatio(1);
    setRenders({});
    rendersRef.current = {};
    setError(null);
    go("capture");
  };

  const runMeasure = async (img: { dataUrl: string }) => {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/cork/measure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: b64(img.dataUrl), mediaType: "image/jpeg" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "measure_failed");
      setMeasure(data);
      persist({ sq_ft_estimated: data.sqFt });
      track("measured", { sq_ft: data.sqFt });
    } catch (e) {
      const code = e instanceof Error ? e.message : "";
      setError(
        code === "measure_unconfigured"
          ? "Measurement service isn't configured on this deployment (ANTHROPIC_API_KEY missing for this environment)."
          : `We couldn't measure that photo${code ? ` (${code})` : ""}. Try again or use a different photo.`
      );
    } finally {
      setBusy(false);
    }
  };

  /* ---------- overlay drawing ---------- */
  const drawOverlay = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!measure) return;
    // deck polygons tint
    ctx.save();
    ctx.fillStyle = "rgba(166,74,46,0.38)";
    ctx.strokeStyle = "rgba(166,74,46,0.9)";
    ctx.lineWidth = 2;
    for (const poly of measure.polygons) {
      if (poly.length < 3) continue;
      ctx.beginPath();
      ctx.moveTo(poly[0][0] * canvas.width, poly[0][1] * canvas.height);
      for (const [x, y] of poly.slice(1)) ctx.lineTo(x * canvas.width, y * canvas.height);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
    // exclusion strokes punch out
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (const s of strokes) {
      ctx.lineWidth = s.size;
      ctx.beginPath();
      s.points.forEach(([x, y], i) => {
        const px = x * canvas.width;
        const py = y * canvas.height;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
    }
    ctx.restore();
  }, [image, measure, strokes]);

  useEffect(() => {
    drawOverlay();
  }, [drawOverlay, step]);

  /* ---------- area ratio from strokes ---------- */
  useEffect(() => {
    if (!measure || !image) return;
    const w = Math.round(image.width / 4);
    const h = Math.round(image.height / 4);
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d", { willReadFrequently: true })!;
    const fillPolys = () => {
      ctx.fillStyle = "#fff";
      for (const poly of measure.polygons) {
        if (poly.length < 3) continue;
        ctx.beginPath();
        ctx.moveTo(poly[0][0] * w, poly[0][1] * h);
        for (const [x, y] of poly.slice(1)) ctx.lineTo(x * w, y * h);
        ctx.closePath();
        ctx.fill();
      }
    };
    const count = () => {
      const d = ctx.getImageData(0, 0, w, h).data;
      let n = 0;
      for (let i = 3; i < d.length; i += 4) if (d[i] > 10) n++;
      return n;
    };
    ctx.clearRect(0, 0, w, h);
    fillPolys();
    const full = count();
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#000";
    const canvasW = canvasRef.current?.width ?? w;
    for (const s of strokes) {
      ctx.lineWidth = (s.size / canvasW) * w;
      ctx.beginPath();
      s.points.forEach(([x, y], i) => {
        if (i === 0) ctx.moveTo(x * w, y * h);
        else ctx.lineTo(x * w, y * h);
      });
      ctx.stroke();
    }
    ctx.globalCompositeOperation = "source-over";
    const remaining = count();
    setAreaRatio(full > 0 ? remaining / full : 1);
  }, [strokes, measure, image]);

  /* ---------- brush handlers ---------- */
  const pointerPos = (e: React.PointerEvent): [number, number] => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return [(e.clientX - rect.left) / rect.width, (e.clientY - rect.top) / rect.height];
  };
  const onPointerDown = (e: React.PointerEvent) => {
    if (step !== "refine") return;
    drawing.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    setStrokes((s) => [...s, { size: brushSize, points: [pointerPos(e)] }]);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drawing.current || step !== "refine") return;
    const p = pointerPos(e);
    setStrokes((s) => {
      const copy = s.slice();
      copy[copy.length - 1] = { ...copy[copy.length - 1], points: [...copy[copy.length - 1].points, p] };
      return copy;
    });
  };
  const onPointerUp = () => {
    drawing.current = false;
  };

  /* ---------- guide image for renders ---------- */
  const buildGuide = useCallback(async (): Promise<string | undefined> => {
    if (!image || !measure || measure.polygons.length === 0) return undefined;
    const img = new Image();
    img.src = image.dataUrl;
    await img.decode().catch(() => null);
    const c = document.createElement("canvas");
    c.width = image.width;
    c.height = image.height;
    const ctx = c.getContext("2d")!;
    ctx.drawImage(img, 0, 0, c.width, c.height);
    // mask layer
    const m = document.createElement("canvas");
    m.width = c.width;
    m.height = c.height;
    const mc = m.getContext("2d")!;
    mc.fillStyle = "rgba(255,0,255,0.5)";
    for (const poly of measure.polygons) {
      if (poly.length < 3) continue;
      mc.beginPath();
      mc.moveTo(poly[0][0] * m.width, poly[0][1] * m.height);
      for (const [x, y] of poly.slice(1)) mc.lineTo(x * m.width, y * m.height);
      mc.closePath();
      mc.fill();
    }
    mc.globalCompositeOperation = "destination-out";
    mc.lineCap = "round";
    mc.lineJoin = "round";
    const canvasW = canvasRef.current?.width ?? m.width;
    for (const s of strokes) {
      mc.lineWidth = (s.size / canvasW) * m.width;
      mc.beginPath();
      s.points.forEach(([x, y], i) => {
        if (i === 0) mc.moveTo(x * m.width, y * m.height);
        else mc.lineTo(x * m.width, y * m.height);
      });
      mc.stroke();
    }
    ctx.drawImage(m, 0, 0);
    return b64(c.toDataURL("image/jpeg", 0.8));
  }, [image, measure, strokes]);

  /* ---------- rendering ---------- */
  const renderColor = useCallback(
    async (color: CorkColor, key: string): Promise<string | null> => {
      if (rendersRef.current[key]) return rendersRef.current[key];
      if (!image) return null;
      const guideBase64 = await buildGuide();
      const res = await fetch("/api/cork/render", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: b64(image.dataUrl),
          mediaType: "image/jpeg",
          guideBase64,
          colorName: `${color.code} ${color.name}`,
          colorHex: color.hex,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.imageBase64) return null;
      const url = `data:${data.mediaType};base64,${data.imageBase64}`;
      rendersRef.current[key] = url;
      setRenders((r) => ({ ...r, [key]: url }));
      return url;
    },
    [image, buildGuide]
  );

  const ensureRender = useCallback(
    async (color: CorkColor, key: string) => {
      if (rendersRef.current[key]) return;
      setRendering(true);
      setError(null);
      const url = await renderColor(color, key).catch(() => null);
      setRendering(false);
      if (!url) setError("Rendering hit a snag — try again or pick another color.");
      else {
        track("color_rendered", { color: key });
        // background prefetch of remaining standard colors, one at a time
        (async () => {
          for (const c of CORK_COLORS) {
            if (prefetchCancelled.current) return;
            if (!rendersRef.current[c.id]) await renderColor(c, c.id).catch(() => null);
          }
        })();
      }
    },
    [renderColor]
  );

  useEffect(() => {
    if (step === "render" && image && measure) ensureRender(activeColor, colorKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, colorKey]);

  /* ---------- estimate ---------- */
  const runEstimate = async () => {
    go("estimate");
    track("estimate_requested", { sq_ft: sqFt });
    const renderUrl = rendersRef.current[colorKey];
    try {
      const res = await fetch("/api/cork/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          journeyId,
          sqFt,
          colorName: `${activeColor.code} ${activeColor.name}`,
          name: lead.name,
          email: lead.email,
          renderBase64: renderUrl ? b64(renderUrl) : undefined,
        }),
      });
      const data = await res.json();
      // hold for the progress animation minimum
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
    if (!key || getGoogle()?.maps?.places) {
      attachAutocomplete();
      return;
    }
    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
    s.async = true;
    s.onload = attachAutocomplete;
    document.head.appendChild(s);
    function attachAutocomplete() {
      const g = getGoogle();
      if (!g?.maps?.places || !addressRef.current) return;
      const ac = new g.maps.places.Autocomplete(addressRef.current, {
        componentRestrictions: { country: "us" },
        fields: ["formatted_address"],
        types: ["address"],
      });
      ac.addListener("place_changed", () => {
        const place = ac.getPlace();
        if (place?.formatted_address) setBooking((prev) => ({ ...prev, address: place.formatted_address }));
      });
    }
  }, [step]);

  const submitBooking = async () => {
    setBusy(true);
    setError(null);
    try {
      await fetch("/api/cork/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          journeyId,
          ...lead,
          address: booking.address,
          preferredDay: booking.day,
          preferredTimeWindow: booking.window,
          sqFt,
          colorName: `${activeColor.code} ${activeColor.name}`,
          priceLow: estimate?.low,
          priceHigh: estimate?.high,
        }),
      });
      track("booking_requested");
      go("booked");
    } catch {
      setError("Something went wrong sending your request — please try again.");
    } finally {
      setBusy(false);
    }
  };

  if (!open) return null;

  const email_ok = /.+@.+\..+/.test(lead.email);
  const phone_ok = lead.phone.replace(/\D/g, "").length >= 10;
  const zip_ok = /^\d{5}$/.test(lead.zip);

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Cork deck project visualizer">
      <div className="absolute inset-0 sm:inset-4 md:inset-8 bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* header */}
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
                  <h2 className="text-xl font-bold text-neutral-900">{step === "measure" ? "Measuring your deck…" : "Paint over anything you don't want corked"}</h2>
                  {step === "measure" && <p className="mt-1 text-sm text-neutral-600">The tinted area is what we detected as deck surface.</p>}
                  {step === "refine" && <p className="mt-1 text-sm text-neutral-600">Drag your finger or mouse over planters, equipment pads, or anywhere else to exclude it. Square footage updates live.</p>}
                  <div className="relative mt-4 rounded-xl overflow-hidden select-none touch-none" style={{ aspectRatio: `${image.width}/${image.height}` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image.dataUrl} alt="Your pool deck" className="absolute inset-0 w-full h-full object-contain" draggable={false} />
                    <canvas ref={canvasRef} width={image.width} height={image.height} className="absolute inset-0 w-full h-full" style={{ cursor: step === "refine" ? "crosshair" : "default" }} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} />
                    {busy && (
                      <div className="absolute inset-0 bg-white/70 flex flex-col items-center justify-center">
                        <motion.div className="h-1.5 w-48 rounded bg-neutral-200 overflow-hidden">
                          <motion.div className="h-full bg-[#A64A2E]" initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }} style={{ width: "50%" }} />
                        </motion.div>
                        <p className="mt-3 text-sm text-neutral-600">Analyzing surfaces and reference objects…</p>
                      </div>
                    )}
                  </div>
                  {measure && !busy && (
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <div className="rounded-lg bg-neutral-100 px-4 py-2 text-sm"><span className="font-bold text-neutral-900 text-lg">~{sqFt.toLocaleString()}</span> sq ft estimated</div>
                      {step === "refine" && (
                        <>
                          <label className="flex items-center gap-2 text-sm text-neutral-600">Brush
                            <input type="range" min={12} max={90} value={brushSize} onChange={(e) => setBrushSize(Number(e.target.value))} />
                          </label>
                          <button onClick={() => setStrokes([])} className="text-sm text-neutral-500 underline">Reset</button>
                        </>
                      )}
                      <div className="ml-auto flex gap-2 items-center">
                        <button onClick={resetToCapture} className="text-sm text-neutral-500 underline mr-1">Different photo</button>
                        {step === "measure" && <button onClick={() => go("refine")} className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50">Exclude some areas</button>}
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
                  <p className="mt-1 text-sm text-neutral-600">Every render shows your actual deck — resurfaced, cracks gone.</p>
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
                      <button key={c.id} onClick={() => { setUsingCustom(false); setColorId(c.id); track("color_selected", { color: c.id }); }} title={`${c.code} ${c.name}`} aria-label={`${c.code} ${c.name}`} className={`aspect-square rounded-lg border-2 relative ${!usingCustom && colorId === c.id ? "border-neutral-900 ring-2 ring-neutral-900/20" : "border-neutral-200"}`} style={{ backgroundColor: c.hex }}>
                        {rendersRef.current[c.id] && <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border border-white" aria-hidden />}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    <div className="text-neutral-700 font-medium">{activeColor.code} · {activeColor.name}</div>
                    <label className="ml-auto flex items-center gap-2 text-neutral-600">Custom color
                      <input type="color" value={customHex} onChange={(e) => { setCustomHex(e.target.value); setUsingCustom(true); }} className="h-8 w-12 cursor-pointer rounded border border-neutral-300" />
                    </label>
                  </div>
                  {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
                  <div className="mt-6 flex justify-between">
                    <button onClick={() => go("refine")} className="text-sm text-neutral-500 underline">Back to areas</button>
                    <button onClick={() => { track("proceed_to_estimate"); go("lead1"); }} className="rounded-lg bg-[#A64A2E] text-white px-6 py-3 font-semibold hover:bg-[#8f3f27]">Get my estimated cost →</button>
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
                    <input ref={addressRef} value={booking.address} onChange={(e) => setBooking({ ...booking, address: e.target.value })} placeholder="Start typing your address…" className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A64A2E]" autoComplete="street-address" />
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
