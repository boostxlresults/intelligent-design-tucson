import { NextRequest, NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/cork/ratelimit";

export const maxDuration = 60;

const PROMPT = `You are measuring a residential pool deck from a single photo for a resurfacing estimate.
Identify the walkable deck surface surrounding the pool (concrete/pavers/cool deck). EXCLUDE the pool water, coping edge into water, rocks, planters, grass, gravel, furniture footprints are fine to include.
Estimate total deck square footage using visible reference objects (standard coping ~12in, chairs ~22in wide, doors ~36in wide, pool typical widths).
Return STRICT JSON only, no markdown:
{"sq_ft": <integer>, "confidence": "low"|"medium"|"high", "polygons": [[[x,y],...]], "notes": "<one sentence>"}
polygons: 1-3 polygons outlining the deck surface, coordinates normalized 0-1 relative to image width/height, 6-14 points each, ordered clockwise.`;

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
  try {
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);
    return NextResponse.json({
      sqFt: Math.max(50, Math.round(Number(parsed.sq_ft) || 0)),
      confidence: parsed.confidence ?? "medium",
      polygons: Array.isArray(parsed.polygons) ? parsed.polygons : [],
      notes: parsed.notes ?? "",
    });
  } catch {
    console.error("[cork] measure parse error:", text.slice(0, 300));
    return NextResponse.json({ error: "measure_parse" }, { status: 502 });
  }
}
