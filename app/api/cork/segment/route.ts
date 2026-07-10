import { NextRequest, NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/cork/ratelimit";

// SAM 2 click-to-segment for the deck selector. Calls Replicate's meta/sam-2
// (image + point prompt) and returns a mask PNG (base64) for the clicked surface.
// Degrades to 503 when REPLICATE_API_TOKEN is unset so the client can fall back
// to the in-browser color flood-fill wand.
export const maxDuration = 60;

const MODEL_URL = "https://api.replicate.com/v1/models/meta/sam-2/predictions";

type Point = { x: number; y: number; label?: number };

export async function POST(req: NextRequest) {
  if (!rateLimit(clientIp(req), 40, 60000)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  const token = process.env.REPLICATE_API_TOKEN;
  if (!token) return NextResponse.json({ error: "segment_unconfigured" }, { status: 503 });

  const { imageBase64, mediaType, points } = (await req.json()) as {
    imageBase64?: string;
    mediaType?: string;
    points?: Point[];
  };
  if (!imageBase64 || !Array.isArray(points) || points.length === 0) {
    return NextResponse.json({ error: "missing_input" }, { status: 400 });
  }

  const coords = points.map((p) => `[${Math.round(p.x)},${Math.round(p.y)}]`).join(",");
  const labels = points.map((p) => (p.label === 0 ? 0 : 1)).join(",");
  const dataUri = `data:${mediaType || "image/jpeg"};base64,${imageBase64}`;

  let out: any;
  try {
    const res = await fetch(MODEL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Prefer: "wait=55",
      },
      body: JSON.stringify({
        input: { image: dataUri, click_coordinates: coords, click_labels: labels },
      }),
    });
    out = await res.json();
    if (!res.ok) {
      console.error("[cork] segment create failed:", res.status, JSON.stringify(out).slice(0, 300));
      return NextResponse.json({ error: "segment_failed" }, { status: 502 });
    }
  } catch (e) {
    console.error("[cork] segment request error:", e);
    return NextResponse.json({ error: "segment_failed" }, { status: 502 });
  }

  // With `Prefer: wait` the prediction is usually terminal already; poll briefly otherwise.
  const getUrl: string | undefined = out?.urls?.get;
  let tries = 0;
  while (out && out.status && !["succeeded", "failed", "canceled"].includes(out.status) && getUrl && tries < 40) {
    await new Promise((r) => setTimeout(r, 1200));
    try {
      const r = await fetch(getUrl, { headers: { Authorization: `Bearer ${token}` } });
      out = await r.json();
    } catch {
      break;
    }
    tries++;
  }

  if (!out || out.status !== "succeeded") {
    console.error("[cork] segment not succeeded:", out?.status, JSON.stringify(out?.error ?? "").slice(0, 200));
    return NextResponse.json({ error: "segment_failed" }, { status: 502 });
  }

  // Output shape: { combined_mask: url, individual_masks: [url, ...] } (or a bare url).
  const o = out.output ?? {};
  const maskUrl: string | undefined =
    (Array.isArray(o.individual_masks) && typeof o.individual_masks[0] === "string" && o.individual_masks[0]) ||
    (typeof o.combined_mask === "string" ? o.combined_mask : undefined) ||
    (typeof o === "string" ? o : undefined);
  if (!maskUrl) {
    console.error("[cork] segment: no mask in output:", JSON.stringify(o).slice(0, 200));
    return NextResponse.json({ error: "segment_no_mask" }, { status: 502 });
  }

  try {
    const mres = await fetch(maskUrl);
    const buf = Buffer.from(await mres.arrayBuffer());
    const ct = mres.headers.get("content-type") || "image/png";
    return NextResponse.json({ maskBase64: buf.toString("base64"), mediaType: ct });
  } catch (e) {
    console.error("[cork] segment mask fetch failed:", e);
    return NextResponse.json({ error: "segment_mask_fetch" }, { status: 502 });
  }
}
