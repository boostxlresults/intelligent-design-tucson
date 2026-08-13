import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/gmail';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(120).trim(),
  phone: z.string().min(10, 'Phone must be at least 10 digits').max(20).trim(),
  address: z.string().min(1, 'Address is required').max(200).trim(),
  seeing: z.string().max(60).trim().optional().default(''),
  gclid: z.string().max(200).trim().optional().default(''),
  gbraid: z.string().max(200).trim().optional().default(''),
  wbraid: z.string().max(200).trim().optional().default(''),
  utm_campaign: z.string().max(200).trim().optional().default(''),
  utm_source: z.string().max(120).trim().optional().default(''),
  utm_medium: z.string().max(120).trim().optional().default(''),
  utm_term: z.string().max(200).trim().optional().default(''),
  pageSlug: z.string().max(80).trim().optional().default('free-roof-inspection'),
});

function esc(t: string): string {
  const m: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return t.replace(/[&<>"']/g, (c) => m[c] || c);
}

type Lead = z.infer<typeof formSchema>;

/**
 * Push the lead to SpeedToLead360 (or any inbound lead webhook) so it appears
 * as a war-room lead card and triggers speed-to-lead dialing.
 * Activated by env var SPEEDTOLEAD_WEBHOOK_URL (set in Vercel). No-ops if unset,
 * so the CSR email always remains the source of truth / backup.
 */
async function postToSpeedToLead(d: Lead): Promise<{ ok: boolean; status?: number; error?: string }> {
  const url = process.env.SPEEDTOLEAD_WEBHOOK_URL;
  if (!url) return { ok: false, error: 'no_webhook_configured' };

  const [firstName, ...rest] = d.name.trim().split(/\s+/);
  const payload = {
    first_name: firstName || d.name,
    last_name: rest.join(' '),
    full_name: d.name,
    phone: d.phone,
    email: '',
    address: d.address,
    lead_source: 'Storm Roof Inspection — Google Ads',
    campaign: d.utm_campaign || 'Roofing-Storm-Emergency-2026-08',
    service: 'Roofing',
    notes: `What they are seeing: ${d.seeing || 'unspecified'}`,
    gclid: d.gclid,
    gbraid: d.gbraid,
    wbraid: d.wbraid,
    utm_source: d.utm_source,
    utm_medium: d.utm_medium,
    utm_campaign: d.utm_campaign,
    utm_term: d.utm_term,
    landing_page: `https://www.idesignac.com/${d.pageSlug}`,
    submitted_at: new Date().toISOString(),
  };

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (process.env.SPEEDTOLEAD_API_KEY) headers['Authorization'] = `Bearer ${process.env.SPEEDTOLEAD_API_KEY}`;

  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 6000);
  try {
    const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(payload), signal: controller.signal });
    return { ok: res.ok, status: res.status };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'post_failed' };
  } finally {
    clearTimeout(t);
  }
}

export async function POST(request: NextRequest) {
  let raw: unknown;
  try { raw = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const parsed = formSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: `Validation failed: ${parsed.error.errors.map(e => e.message).join(', ')}` }, { status: 400 });
  }
  const d = parsed.data;

  const rows = [
    ['Name', d.name],
    ['Phone', d.phone],
    ['Address', d.address],
    ['What they are seeing', d.seeing || '—'],
    ['GCLID', d.gclid || '(none)'],
    ['GBRAID', d.gbraid || '(none)'],
    ['WBRAID', d.wbraid || '(none)'],
    ['Campaign', d.utm_campaign || '(none)'],
    ['Source', d.utm_source || '(none)'],
    ['Source page', d.pageSlug || 'free-roof-inspection'],
  ].map(([k, v]) => `<tr><td style="padding:8px 0;font-weight:bold;width:180px;">${esc(k)}:</td><td style="padding:8px 0;">${esc(v)}</td></tr>`).join('');

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#0d2d7a;color:#fff;padding:20px;text-align:center;"><h1 style="margin:0;">Free Roof Inspection Request</h1></div>
      <div style="padding:20px;background:#f5f5f5;">
        <div style="background:#ffe0b2;padding:12px;border-radius:5px;margin-bottom:16px;"><strong>Storm lead</strong> &mdash; same-day roof inspection (residential). Contact ASAP.</div>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
        <p style="margin-top:16px;color:#555;font-size:12px;">Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })}</p>
      </div>
    </div>`.trim();

  const textBody = `Free Roof Inspection Request (STORM LEAD)\nName: ${d.name}\nPhone: ${d.phone}\nAddress: ${d.address}\nSeeing: ${d.seeing || '-'}\nGCLID: ${d.gclid || '(none)'}\nCampaign: ${d.utm_campaign || '(none)'}\nSource page: ${d.pageSlug}`;

  // Fire the SpeedToLead war-room card and the CSR email in parallel; a webhook
  // failure must never lose the lead (email is the backup).
  const [emailResult, stlResult] = await Promise.allSettled([
    sendEmail({
      to: 'csrteam@idesignac.com',
      subject: `Storm Roof Inspection: ${d.name} — ${d.seeing || 'roof'} (${d.address})`,
      htmlBody,
      textBody,
    }),
    postToSpeedToLead(d),
  ]);

  const emailedOk = emailResult.status === 'fulfilled' && emailResult.value !== false;
  const stl = stlResult.status === 'fulfilled' ? stlResult.value : { ok: false, error: 'exception' };
  if (!stl.ok && stl.error !== 'no_webhook_configured') {
    console.error('SpeedToLead post failed:', stl);
  }

  if (!emailedOk && !stl.ok) {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
  return NextResponse.json({ success: true, speedtolead: stl.ok });
}
