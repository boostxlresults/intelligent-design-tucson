import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { sendEmail } from '@/lib/gmail';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// SpeedToLead360 inbound website-form webhook (tenant-routed, no auth). Env override allowed.
const STL_WEBHOOK = process.env.SPEEDTOLEAD_WEBHOOK_URL
  || 'https://api-production-831d.up.railway.app/api/v1/webhooks/website-form/d958a1b6-7921-4fa4-8449-0abf5f8aba03';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(120).trim(),
  phone: z.string().min(10, 'Phone must be at least 10 digits').max(20).trim(),
  address: z.string().min(1, 'Address is required').max(200).trim(),
  seeing: z.string().max(60).trim().optional().default(''),
  submissionId: z.string().max(80).trim().optional().default(''),
  gclid: z.string().max(200).trim().optional().default(''),
  gbraid: z.string().max(200).trim().optional().default(''),
  wbraid: z.string().max(200).trim().optional().default(''),
  utm_campaign: z.string().max(200).trim().optional().default(''),
  utm_source: z.string().max(120).trim().optional().default(''),
  utm_medium: z.string().max(120).trim().optional().default(''),
  utm_term: z.string().max(200).trim().optional().default(''),
  utm_content: z.string().max(200).trim().optional().default(''),
  landingPage: z.string().max(300).trim().optional().default(''),
  pageSlug: z.string().max(80).trim().optional().default('free-roof-inspection'),
});

type Lead = z.infer<typeof formSchema>;

function esc(t: string): string {
  const m: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return t.replace(/[&<>"']/g, (c) => m[c] || c);
}

/** Human-readable description. Attribution now rides dedicated fields (gclid, utm params, landingPage), not this string. */
function buildDescription(d: Lead): string {
  const parts = [`Storm damage — free roof inspection request.`];
  if (d.seeing) parts.push(`Seeing: ${d.seeing}.`);
  // gbraid/wbraid have no dedicated column yet — keep them here so they aren't lost.
  const extra: string[] = [];
  if (d.gbraid) extra.push(`gbraid=${d.gbraid}`);
  if (d.wbraid) extra.push(`wbraid=${d.wbraid}`);
  if (extra.length) parts.push(`(${extra.join(' ')})`);
  return parts.join(' ');
}

/** POST the lead to SpeedToLead360 so it lands as a NEW war-room card. Fire-and-forget (timeout-capped). */
async function postToSpeedToLead(d: Lead): Promise<{ ok: boolean; status?: number; error?: string }> {
  const [firstName, ...rest] = d.name.trim().split(/\s+/);
  // Only include attribution keys that have a value, so cards stay clean.
  const attr: Record<string, string> = {};
  if (d.gclid) attr.gclid = d.gclid;
  if (d.utm_source) attr.utm_source = d.utm_source;
  if (d.utm_campaign) attr.utm_campaign = d.utm_campaign;
  if (d.utm_medium) attr.utm_medium = d.utm_medium;
  if (d.utm_term) attr.utm_term = d.utm_term;
  if (d.utm_content) attr.utm_content = d.utm_content;
  if (d.landingPage) attr.landingPage = d.landingPage;
  const payload = {
    firstName: firstName || d.name,
    lastName: rest.join(' '),
    phone: d.phone,
    email: '',
    address: d.address,
    serviceType: 'Roofing',
    jobType: 'inspection',
    formName: 'Free Roof Inspection LP',
    ...attr,
    description: buildDescription(d),
    id: `storm-form-${d.submissionId || randomUUID()}`,
  };
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(STL_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
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
    ['Campaign', d.utm_campaign || '(none)'],
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

  const textBody = `Free Roof Inspection Request (STORM LEAD)\nName: ${d.name}\nPhone: ${d.phone}\nAddress: ${d.address}\nSeeing: ${d.seeing || '-'}\nGCLID: ${d.gclid || '(none)'}\nCampaign: ${d.utm_campaign || '(none)'}`;

  // CSR email (source of truth / backup) + SpeedToLead war-room card in parallel; STL failure never loses the lead.
  const [emailResult, stlResult] = await Promise.allSettled([
    sendEmail({ to: 'csrteam@idesignac.com', subject: `Storm Roof Inspection: ${d.name} — ${d.seeing || 'roof'} (${d.address})`, htmlBody, textBody }),
    postToSpeedToLead(d),
  ]);

  const emailedOk = emailResult.status === 'fulfilled' && emailResult.value !== false;
  const stl = stlResult.status === 'fulfilled' ? stlResult.value : { ok: false, error: 'exception' };
  if (!stl.ok) console.error('SpeedToLead post failed:', stl);

  if (!emailedOk && !stl.ok) return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  return NextResponse.json({ success: true, speedtolead: stl.ok });
}
