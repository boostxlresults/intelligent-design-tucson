import { NextRequest, NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/cork/ratelimit";

export const maxDuration = 60;

const PROMPT = `You are helping a homeowner visualize a new pool deck coating. Study this photo carefully and identify two sets of sample point coordinates.

DECK POINTS — pick 6 to 9 points spread across the walkable pool deck surface:
- The deck is the hard paved/concrete/coated surface that surrounds the pool and that a person walks on.
- Spread points across EVERY visible part of the deck: near the pool edge, in far corners, along each side of the frame.
- CRITICAL: every single point must land on paved deck. Never pick a point on water, grass, dirt, rocks, structures, or sky.
- If the deck wraps around the pool, include points on all sides.

EXCLUDE POINTS — pick 4 to 6 points on areas that are definitely NOT deck:
- 2 points clearly inside the pool or spa water (center of water surface, not near edge).
- 1-2 points on grass, dirt, gravel, decomposed granite, or planted landscaping clearly outside the deck edge.
- 1 point on a structure (roof, pergola, wall) if visible in the photo.
- 1 point on the sky or treetops if a significant portion of the image is background.

Also estimate the total visible deck square footage using reference objects (coping stones ~12in wide, pool widths typically 12-16ft, standard door ~36in, patio chair ~22in wide).

Return STRICT JSON only — no markdown, no explanation:
{"sq_ft": <integer>, "confidence": "low"|"medium"|"high", "deck_points": [[x,y],...], "exclude_points": [[x,y],...], "notes": "<one sentence>"}

All coordinates normalized 0-1 (x = left to right, y = top to bottom relative to image size).`;

export async function POST(req: NextRequest) {
  if (!rateLimit(clientIp(req), 6, 60000)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return NextResponse.json({ error: "measure_unconfigured" }, { status: 503 });

  const { imageBase64, mediaType } = (await req.json()) as { imageBase64: string; mediaType: string };
  if (!imageBase64) return NextResponse.json({ error: "missing_image" }, { status: 400 });

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1200,
      messages: [
        {
          role: "user",
          content: [
            { type: "image", source: { type: "base64", media_type: mediaType || "image/jpeg", data: imageBase64 } },
            { type: "text", text: PROMPT },
          ],
        },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("[cork] measure failed:", res.status, text);
    return NextResponse.json({ error: "measure_failed" }, { status: 502 });
  }

  const data = (await res.json()) as { content?: Array<{ type: string; text?: string }> };
  const text = data.content?.find((c) => c.type === "text")?.text ?? "";

  function parsePoints(raw: unknown): number[][] {
    if (!Array.isArray(raw)) return [];
    return raw
      .filter((pt) => Array.isArray(pt) && pt.length >= 2)
      .map((pt: number[]) => [
        Math.min(1, Math.max(0, Number(pt[0]) || 0)),
        Math.min(1, Math.max(0, Number(pt[1]) || 0)),
      ]);
  }

  try {
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);
    const deckPoints = parsePoints(parsed.deck_points);
    const excludePoints = parsePoints(parsed.exclude_points);
    console.log(`[cork] measure: ${deckPoints.length} deck pts, ${excludePoints.length} exclude pts, ${parsed.sq_ft} sq_ft`);
    return NextResponse.json({
      sqFt: Math.max(50, Math.round(Number(parsed.sq_ft) || 0)),
      confidence: parsed.confidence ?? "medium",
      deckPoints,
      excludePoints,
      notes: parsed.notes ?? "",
    });
  } catch {
    console.error("[cork] measure parse error:", text.slice(0, 300));
    return NextResponse.json({ error: "measure_parse" }, { status: 502 });
  }
}
