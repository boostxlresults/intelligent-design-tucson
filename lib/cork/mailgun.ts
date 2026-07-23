/**
 * Mailgun sender — REST API via fetch, zero deps.
 * Env: MAILGUN_API_KEY, MAILGUN_DOMAIN, optional MAILGUN_FROM.
 * Gracefully no-ops (with console.warn) when unconfigured so previews don't crash.
 */

interface SendArgs {
  to: string;
  subject: string;
  html: string;
  attachment?: { filename: string; base64: string; contentType: string };
}

export async function sendMail({ to, subject, html, attachment }: SendArgs): Promise<{ ok: boolean; error?: string }> {
  const key = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  if (!key || !domain) {
    console.warn("[cork] Mailgun not configured; skipping email to", to);
    return { ok: false, error: "mailgun_unconfigured" };
  }
  const from = process.env.MAILGUN_FROM ?? `Intelligent Design <no-reply@${domain}>`;

  const form = new FormData();
  form.append("from", from);
  form.append("to", to);
  form.append("subject", subject);
  form.append("html", html);
  if (attachment) {
    const bytes = Uint8Array.from(Buffer.from(attachment.base64, "base64"));
    form.append(
      "attachment",
      new Blob([bytes], { type: attachment.contentType }),
      attachment.filename
    );
  }

  const res = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
    method: "POST",
    headers: { Authorization: `Basic ${Buffer.from(`api:${key}`).toString("base64")}` },
    body: form,
  });
  if (!res.ok) {
    const text = await res.text();
    console.error("[cork] Mailgun send failed:", res.status, text);
    return { ok: false, error: `mailgun_${res.status}` };
  }
  return { ok: true };
}

export function estimateEmailHtml(opts: {
  name: string;
  sqFt: number;
  colorName: string;
  low: number;
  high: number;
  siteUrl: string;
}): string {
  const { name, sqFt, colorName, low, high, siteUrl } = opts;
  const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#1f2937">
    <h1 style="font-size:22px">Your Cork Pool Deck Estimate</h1>
    <p>Hi ${name},</p>
    <p>Here's the estimate for your pool deck, resurfaced in premium sprayed cork (<strong>${colorName}</strong>) by Intelligent Design, Tucson's only certified ThermalCork applicator. Your rendering is attached.</p>
    <table style="width:100%;border-collapse:collapse;margin:16px 0">
      <tr><td style="padding:8px;border:1px solid #e5e7eb">Estimated deck area</td><td style="padding:8px;border:1px solid #e5e7eb"><strong>~${sqFt.toLocaleString()} sq ft</strong></td></tr>
      <tr><td style="padding:8px;border:1px solid #e5e7eb">Estimated price range</td><td style="padding:8px;border:1px solid #e5e7eb"><strong>${fmt(low)} – ${fmt(high)}</strong></td></tr>
    </table>
    <p>This range is based on a photo estimate. A free in-person deck inspection pins down your exact number — no surprises, no obligation.</p>
    <p style="text-align:center;margin:28px 0">
      <a href="${siteUrl}/cool-cork-pool-decks?intent=inspection" style="background:#A64A2E;color:#ffffff;text-decoration:none;padding:14px 26px;border-radius:8px;font-weight:bold;display:inline-block">Request a Free Deck Inspection &amp; Exact Estimate</a>
    </p>
    <p style="color:#6b7280;font-size:12px">Intelligent Design Air Conditioning, Plumbing, Solar &amp; Electric • Tucson, AZ</p>
  </div>`;
}
