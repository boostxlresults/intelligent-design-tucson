import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { sendEmail } from '@/lib/gmail';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const STL_WEBHOOK = process.env.SPEEDTOLEAD_WEBHOOK_URL
  || 'https://api-production-831d.up.railway.app/api/v1/webhooks/website-form/d958a1b6-7921-4fa4-8449-0abf5f8aba03';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(120).trim(),
  phone: z.string().min(10, 'Phone must be at least 10 digits').max(20).trim(),
  zip: z.string().max(12).trim().optional().default(''),
  email: z.string().max(160).trim().optional().default(''),
  preferredDay: z.string().max(40).trim().optional().default(''),
  submissionId: z.string().max(80).trim().optional().default(''),
  gclid: z.string().max(200).trim().optional().default(''),
  gbraid: z.string().max(200).trim().optional().default(''),
  wbraid: z.string().max(200).trim().optional().default(''),
  fbclid: z.string().max(300).trim().optional().default(''),
  referrer: z.string().max(300).trim().optional().default(''),
  utm_campaign: z.string().max(200).trim().optional().default(''),
  utm_source: z.string().max(120).trim().optional().default(''),
  utm_medium: z.string().max(120).trim().optional().default(''),
  utm_term: z.string().max(200).trim().optional().default(''),
  utm_content: z.string().max(200).trim().optional().default(''),
  landingPage: z.string().max(300).trim().optional().default(''),
  pageSlug: z.string().max(80).trim().optional().default('drain-clearing-4888'),
  company: z.string().max(200).optional().default(''),
});

type Lead = z.infer<typeof formSchema>;

function esc(t: string): string {
  const m: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return t.replace(/[&<>"']/g, (c) => m[c] || c);
}

function buildDescription(d: Lead): string {
  const parts = [`$48.88 Drain Clearing Special request (residential). Single drain, homeowner, ground-level cleanout, up to 75 ft.`];
  if (d.preferredDay) parts.push(`Preferred day: ${d.preferredDay}.`);
  const extra: string[] = [];
  if (d.fbclid) extra.push(`fbclid=${d.fbclid}`);
  if (d.referrer) extra.push(`ref=${d.referrer}`);
  if (extra.length) parts.push(`(${extra.join(' ')})`);
  return parts.join(' ');
}

async function postToSpeedToLead(d: Lead): Promise<{ ok: boolean; status?: number; error?: string }> {
  const [firstName, ...rest] = d.name.trim().split(/\s+/);
  const attr: Record<string, string> = {};
  if (d.gclid) attr.gclid = d.gclid;
  if (d.utm_source) attr.utm_source = d.utm_source;
  if (d.utm_campaign) attr.utm_campaign = d.utm_campaign;
  if (d.utm_medium) attr.utm_medium = d.utm_medium;
  if (d.utm_term) attr.utm_term = d.utm_term;
  if (d.utm_content) attr.utm_content = d.utm_content;
  if (d.landingPage) attr.landingPage = d.landingPage;
  if (d.zip) attr.zip = d.zip;
  const payload = {
    firstName: firstName || d.name,
    lastName: rest.join(' '),
    phone: d.phone,
    email: d.email || '',
    address: '',
    serviceType: 'Plumbing',
    jobType: 'drain-clearing',
    formName: 'Drain Clearing $48.88 LP',
    ...attr,
    description: buildDescription(d),
    id: `drain-${d.submissionId || randomUUID()}`,
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

  if (d.company && d.company.trim() !== '') {
    return NextResponse.json({ success: true });
  }

  const rows = [
    ['Name', d.name],
    ['Phone', d.phone],
    ['Email', d.email || '—'],
    ['ZIP', d.zip || '—'],
    ['Preferred day', d.preferredDay || '—'],
    ['Campaign', d.utm_campaign || '(none)'],
    ['Source', d.utm_source || '(none)'],
    ['Source page', d.pageSlug || 'drain-clearing-4888'],
  ].map(([k, v]) => `<tr><td style="padding:8px 0;font-weight:bold;width:180px;">${esc(k)}:</td><td style="padding:8px 0;">${esc(v)}</td></tr>`).join('');

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#0d2d7a;color:#fff;padding:20px;text-align:center;"><h1 style="margin:0;">$48.88 Drain Clearing Request</h1></div>
      <div style="padding:20px;background:#f5f5f5;">
        <div style="background:#e0f2fe;padding:12px;border-radius:5px;margin-bottom:16px;"><strong>Plumbing lead</strong> &mdash; $48.88 drain clearing special. Single drain, homeowner, ground-level cleanout. Call to confirm ASAP; collect street address on the call.</div>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
        <p style="margin-top:16px;color:#555;font-size:12px;">Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })}</p>
      </div>
    </div>`.trim();

  const textBody = `$48.88 Drain Clearing Request\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email || '-'}\nZIP: ${d.zip || '-'}\nPreferred day: ${d.preferredDay || '-'}\nCampaign: ${d.utm_campaign || '(none)'}`;

  const [emailResult, stlResult] = await Promise.allSettled([
    sendEmail({ to: 'csrteam@idesignac.com', subject: `Drain Clearing ($48.88): ${d.name} — ${d.zip || 'Tucson'} (${d.preferredDay || 'no pref'})`, htmlBody, textBody }),
    postToSpeedToLead(d),
  ]);

  const emailedOk = emailResult.status === 'fulfilled' && emailResult.value !== false;
  const stl = stlResult.status === 'fulfilled' ? stlResult.value : { ok: false, error: 'exception' };
  if (!stl.ok) console.error('SpeedToLead post failed:', stl);

  if (!emailedOk && !stl.ok) return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  return NextResponse.json({ success: true, speedtolead: stl.ok });
}
