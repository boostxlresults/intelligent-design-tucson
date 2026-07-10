import { NextRequest, NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/cork/ratelimit";

export const maxDuration = 60;

function renderPrompt(colorName: string, colorHex: string, hasGuide: boolean): string {
  return `Photorealistic edit of the first image (a residential pool area).
Resurface ONLY the walkable pool deck surface with premium sprayed cork coating in the color "${colorName}" (approx ${colorHex}): a fine granular cork texture, uniform seamless finish, matte, with subtle natural speckle.
${hasGuide ? "The second image is a guide: the highlighted/tinted region marks EXACTLY which surface to resurface. Do not resurface anything outside the highlighted region." : ""}
Critically: REMOVE all cracks, stains, expansion-joint damage and patchiness from the deck — the cork coating creates a flawless continuous surface.
Do NOT change the pool, water, coping interior edge, rocks, plants, furniture, people, sky, lighting or shadows. Preserve original camera angle, perspective and lighting exactly. Output only the edited image.`;
}

export async function POST(req: NextRequest) {
  if (!rateLimit(clientIp(req), 25, 60000)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  const key = process.env.GEMINI_API_KEY;
  if (!key) return NextResponse.json({ error: "render_unconfigured" }, { status: 503 });

  const { imageBase64, mediaType, guideBase64, colorName, colorHex } = (await req.json()) as {
    imageBase64: string;
    mediaType: string;
    guideBase64?: string;
    colorName: string;
    colorHex: string;
  };
  if (!imageBase64 || !colorName) return NextResponse.json({ error: "missing_params" }, { status: 400 });

  const parts: unknown[] = [
    { inline_data: { mime_type: mediaType || "image/jpeg", data: imageBase64 } },
  ];
  if (guideBase64) parts.push({ inline_data: { mime_type: "image/jpeg", data: guideBase64 } });
  parts.push({ text: renderPrompt(colorName, colorHex, Boolean(guideBase64)) });

  const res = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent",
    {
      method: "POST",
      headers: { "x-goog-api-key": key, "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts }] }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error("[cork] render failed:", res.status, text.slice(0, 300));
    return NextResponse.json({ error: "render_failed" }, { status: 502 });
  }

  const data = (await res.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ inlineData?: { mimeType: string; data: string }; inline_data?: { mime_type: string; data: string } }> } }>;
  };
  const outParts = data.candidates?.[0]?.content?.parts ?? [];
  for (const p of outParts) {
    const inline = p.inlineData ?? p.inline_data;
    if (inline?.data) {
      return NextResponse.json({ imageBase64: inline.data, mediaType: (inline as { mimeType?: string; mime_type?: string }).mimeType ?? (inline as { mime_type?: string }).mime_type ?? "image/png" });
    }
  }
  return NextResponse.json({ error: "render_no_image" }, { status: 502 });
}
