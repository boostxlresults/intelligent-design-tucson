import { NextRequest, NextResponse } from "next/server";
import { estimateRange } from "@/lib/cork/config";
import { updateJourney } from "@/lib/cork/journeyStore";
import { sendMail, estimateEmailHtml } from "@/lib/cork/mailgun";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { journeyId, sqFt, colorName, name, email, renderBase64 } = (await req.json()) as {
    journeyId?: string;
    sqFt: number;
    colorName: string;
    name: string;
    email: string;
    renderBase64?: string;
  };

  const { low, high } = estimateRange(Math.max(50, Math.round(sqFt)));

  if (journeyId) {
    await updateJourney(journeyId, {
      step_reached: "estimate",
      price_low_cents: low * 100,
      price_high_cents: high * 100,
    }).catch((e) => console.error("[cork] estimate persist error:", e));
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://idesignac.com";
  if (email) {
    sendMail({
      to: email,
      subject: `Your Cork Pool Deck Estimate: $${low.toLocaleString()} – $${high.toLocaleString()}`,
      html: estimateEmailHtml({ name: name || "there", sqFt, colorName, low, high, siteUrl }),
      attachment: renderBase64
        ? { filename: "your-cork-deck.jpg", base64: renderBase64, contentType: "image/jpeg" }
        : undefined,
    }).catch((e) => console.error("[cork] estimate email error:", e));
  }

  return NextResponse.json({ low, high });
}
