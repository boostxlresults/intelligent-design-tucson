import { NextRequest, NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/cork/ratelimit";

export const maxDuration = 60;

// Replicate FLUX Fill Dev — photorealistic inpainting with a binary mask.
// Degrades to Gemini guide-image approach if REPLICATE_API_TOKEN is unset.
const REPLICATE_RENDER_URL =
  "https://api.replicate.com/v1/models/black-forest-labs/flux-fill-dev/predictions";

function corkPrompt(colorName: string, colorHex: string): string {
  return (
    `Pool deck resurfaced with ThermalCork premium sprayed cork coating in the color "${colorName}" (${colorHex}). ` +
    "Fine natural cork granule texture, seamless uniform matte finish, subtle natural speckle variation, " +
    "photorealistic, preserving original lighting perspective and shadows exactly."
  );
}

function geminiRenderPrompt(colorName: string, colorHex: string, hasGuide: boolean): string {
  return `Photorealistic edit of the first image (a residential pool area).
Resurface ONLY the walkable pool deck surface with premium sprayed cork coating in the color "${colorName}" (approx ${colorHex}): a fine granular cork texture, uniform seamless finish, matte, with subtle natural speckle.
${hasGuide ? "The second image is a guide: the highlighted/tinted region marks EXACTLY which surface to resurface. Do not resurface anything outside the highlighted region." : ""}
Critically: REMOVE all cracks, stains, expansion-joint damage and patchiness from the deck — the cork coating creates a flawless continuous surface.
Do NOT change the pool, water, coping interior edge, rocks, plants, furniture, people, sky, lighting or shadows. Preserve original camera angle, perspective and lighting exactly. Output only the edited image.`;
}

async function renderWithReplicate(
  imageBase64: string,
  mediaType: string,
  maskBase64: string,
  colorName: string,
  colorHex: string,
  token: string
): Promise<{ imageBase64: string; mediaType: string } | null> {
  const imageDataUri = `data:${mediaType || "image/jpeg"};base64,${imageBase64}`;
  const maskDataUri = `data:image/png;base64,${maskBase64}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let out: any;
  try {
    const res = await fetch(REPLICATE_RENDER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Prefer: "wait=55",
      },
      body: JSON.stringify({
        input: {
          image: imageDataUri,
          mask: maskDataUri,
          prompt: corkPrompt(colorName, colorHex),
          num_inference_steps: 28,
          guidance: 30,
          output_format: "jpg",
          output_quality: 85,
          safety_tolerance: 6,
        },
      }),
    });
    out = await res.json();
    if (!res.ok) {
      console.error("[cork] replicate render failed:", res.status, JSON.stringify(out).slice(0, 300));
      return null;
    }
  } catch (e) {
    console.error("[cork] replicate render request error:", e);
    return null;
  }

  const getUrl: string | undefined = out?.urls?.get;
  let tries = 0;
  while (
    out?.status &&
    !["succeeded", "failed", "canceled"].includes(out.status) &&
    getUrl &&
    tries < 30
  ) {
    await new Promise((r) => setTimeout(r, 1500));
    try {
      const r = await fetch(getUrl, { headers: { Authorization: `Bearer ${token}` } });
      out = await r.json();
    } catch {
      break;
    }
    tries++;
  }

  if (!out || out.status !== "succeeded") {
    console.error("[cork] replicate render not succeeded:", out?.status, String(out?.error ?? "").slice(0, 200));
    return null;
  }

  const outputUrl: string | undefined = Array.isArray(out.output)
    ? out.output[0]
    : typeof out.output === "string"
    ? out.output
    : undefined;
  if (!outputUrl) {
    console.error("[cork] replicate render: no output URL:", JSON.stringify(out.output).slice(0, 200));
    return null;
  }

  try {
    const imgRes = await fetch(outputUrl);
    const buf = Buffer.from(await imgRes.arrayBuffer());
    const ct = imgRes.headers.get("content-type") || "image/jpeg";
    return { imageBase64: buf.toString("base64"), mediaType: ct };
  } catch (e) {
    console.error("[cork] replicate render fetch failed:", e);
    return null;
  }
}

export async function POST(req: NextRequest) {
  if (!rateLimit(clientIp(req), 25, 60000))
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  const { imageBase64, mediaType, maskBase64, guideBase64, colorName, colorHex } =
    (await req.json()) as {
      imageBase64: string;
      mediaType: string;
      maskBase64?: string;
      guideBase64?: string;
      colorName: string;
      colorHex: string;
    };
  if (!imageBase64 || !colorName)
    return NextResponse.json({ error: "missing_params" }, { status: 400 });

  const replicateToken = process.env.REPLICATE_API_TOKEN;

  // Primary: Replicate FLUX Fill Dev (requires binary mask from client)
  if (replicateToken && maskBase64) {
    const result = await renderWithReplicate(
      imageBase64, mediaType, maskBase64, colorName, colorHex, replicateToken
    );
    if (result) return NextResponse.json(result);
    console.warn("[cork] Replicate render failed, falling back to Gemini");
  }

  // Fallback: Gemini guide-image inpainting
  const geminiKey = process.env.GEMINI_API_KEY;
  if (!geminiKey)
    return NextResponse.json({ error: "render_unconfigured" }, { status: 503 });

  const parts: unknown[] = [
    { inline_data: { mime_type: mediaType || "image/jpeg", data: imageBase64 } },
  ];
  if (guideBase64)
    parts.push({ inline_data: { mime_type: "image/jpeg", data: guideBase64 } });
  parts.push({ text: geminiRenderPrompt(colorName, colorHex, Boolean(guideBase64)) });

  const res = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent",
    {
      method: "POST",
      headers: { "x-goog-api-key": geminiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts }] }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error("[cork] gemini render failed:", res.status, text.slice(0, 300));
    return NextResponse.json({ error: "render_failed" }, { status: 502 });
  }

  const data = (await res.json()) as {
    candidates?: Array<{
      content?: {
        parts?: Array<{
          inlineData?: { mimeType: string; data: string };
          inline_data?: { mime_type: string; data: string };
        }>;
      };
    }>;
  };
  const outParts = data.candidates?.[0]?.content?.parts ?? [];
  for (const p of outParts) {
    const inline = p.inlineData ?? p.inline_data;
    if (inline?.data) {
      return NextResponse.json({
        imageBase64: inline.data,
        mediaType:
          (inline as { mimeType?: string; mime_type?: string }).mimeType ??
          (inline as { mime_type?: string }).mime_type ??
          "image/png",
      });
    }
  }
  return NextResponse.json({ error: "render_no_image" }, { status: 502 });
}
