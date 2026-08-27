import { NextRequest, NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/cork/ratelimit";

export const maxDuration = 60;

const PROMPT = `You are outlining a residential pool deck from a single photo for a resurfacing estimate.

WHAT TO SELECT (the corkable surface):
- The walkable deck surrounding the pool: concrete, pavers, cool-deck, stamped concrete, or stone slab that a person stands and walks on.
- Include the whole continuous slab even where patio furniture, chairs, tables, or planters sit ON it (we resurface underneath movable objects).

WHAT TO EXCLUDE FROM DECK POLYGONS:
- Pool water and spa/spillover water.
- The coping stones or bullnose edge that sit directly at the water's edge (the last row of stone touching the water).
- Grass, dirt, gravel, mulch, rock landscaping, garden beds, and raised planter boxes.
- House walls, fences, raised structures, and anything vertical.

MEASURE:
- Estimate total deck square footage using visible reference objects (coping stones ~12in, standard chair ~22in wide, single door ~36in wide, sliding door ~72in, typical pool widths 12-16ft). State your confidence.

TRACE DECK PRECISELY (polygons):
- Return 1 to 6 polygons that TIGHTLY follow the real deck boundary. Use MORE points on curved or irregular edges so the outline hugs the actual shape (a rounded deck edge should have many points, not a coarse triangle).
- Use a separate polygon for each disconnected deck region, and to cut around large interior holes like the pool itself or a planter island in the middle of the deck.
- 10 to 30 points per polygon. Coordinates normalized 0-1 relative to image width (x) and height (y), ordered clockwise.

ALSO IDENTIFY EXCLUSION ZONES (exclude_polygons):
Trace polygons for areas that must NEVER be treated as deck — even if they are a similar color:
- Pool or spa water: the actual water surface inside the coping ring. This is the most important exclusion — trace it carefully even if the pool is drained or murky.
- Natural ground outside the deck perimeter: bare dirt, decomposed granite, gravel, rock, mulch.
- Grass and garden beds.
- Sky, fences, walls, and background areas that are clearly not paved surface.
Use the same point density (10–30 pts). These zones are permanently locked so the user cannot accidentally paint over them.

Return STRICT JSON only, no markdown:
{"sq_ft": <integer>, "confidence": "low"|"medium"|"high", "polygons": [[[x,y],...]], "exclude_polygons": [[[x,y],...]], "notes": "<one short sentence about what you included/excluded>"}`;

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
      max_tokens: 2800,
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

  function parsePolygons(raw: unknown): number[][][] {
    return (Array.isArray(raw) ? raw : [])
      .map((poly: unknown) =>
        Array.isArray(poly)
          ? poly
              .filter((pt: unknown) => Array.isArray(pt) && pt.length >= 2)
              .map((pt: number[]) => [
                Math.min(1, Math.max(0, Number(pt[0]) || 0)),
                Math.min(1, Math.max(0, Number(pt[1]) || 0)),
              ])
          : []
      )
      .filter((poly: number[][]) => poly.length >= 3);
  }

  try {
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);
    const polygons = parsePolygons(parsed.polygons);
    const excludePolygons = parsePolygons(parsed.exclude_polygons);
    return NextResponse.json({
      sqFt: Math.max(50, Math.round(Number(parsed.sq_ft) || 0)),
      confidence: parsed.confidence ?? "medium",
      polygons,
      excludePolygons,
      notes: parsed.notes ?? "",
    });
  } catch {
    console.error("[cork] measure parse error:", text.slice(0, 300));
    return NextResponse.json({ error: "measure_parse" }, { status: 502 });
  }
}
