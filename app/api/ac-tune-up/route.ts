import { NextRequest, NextResponse } from 'next/server';
import { createHash, randomUUID } from 'crypto';
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
  zip: z.string().max(12).trim().optional().default(''),
  email: z.string().max(160).trim().optional().default(''),
  preferredDay: z.string().max(40).trim().optional().default(''),
  /** Which tune-up offer this lead came from. Defaults to the original $28.88
   *  so /ac-tune-up-2888 keeps its exact current behavior. */
  offerLabel: z.string().max(24).trim().optional().default('$28.88'),
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
  pageSlug: z.string().max(80).trim().optional().default('ac-tune-up-2888'),
  /** /lp/15-tune-up (Meta) fields. All optional so older forms are unaffected. */
  bestTime: z.string().max(20).trim().optional().default(''),
  source: z.string().max(40).trim().optional().default(''),
  landingUrl: z.string().max(500).trim().optional().default(''),
  /** Meta event id shared by the browser Lead event and the Conversions API call. */
  eventId: z.string().max(80).trim().optional().default(''),
  fbp: z.string().max(120).trim().optional().default(''),
  fbc: z.string().max(300).trim().optional().default(''),
  // honeypot: must stay empty
  company: z.string().max(200).optional().default(''),
});

type Lead = z.infer<typeof formSchema>;

function esc(t: string): string {
  const m: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return t.replace(/[&<>"']/g, (c) => m[c] || c);
}

/** ServiceTitan campaign names by lead source. The Meta $15 page tags its
 *  leads with the campaign name used in Ads Manager so ServiceTitan and Meta
 *  reporting line up. Anything else keeps the generic form name. */
const CAMPAIGN_BY_SOURCE: Record<string, string> = {
  'meta-15-tuneup': 'Meta | $15 Tune-up Special | URL Traffic',
};
function campaignFor(d: Lead): string | undefined {
  return CAMPAIGN_BY_SOURCE[d.source];
}

/* ---------------- Rate limit (per IP, in-memory, best effort) ----------------
 * Serverless instances do not share memory, so this is a brake on a single
 * runaway client rather than a global quota. Combined with the honeypot it is
 * what the brief asked for in place of a CAPTCHA. */
const RL_WINDOW_MS = 10 * 60 * 1000;
const RL_MAX = 5;
const rlHits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rlHits.get(ip) || []).filter((t) => now - t < RL_WINDOW_MS);
  if (hits.length >= RL_MAX) { rlHits.set(ip, hits); return true; }
  hits.push(now);
  rlHits.set(ip, hits);
  if (rlHits.size > 5000) rlHits.clear();
  return false;
}
function clientIp(req: NextRequest): string {
  const xf = req.headers.get('x-forwarded-for') || '';
  return (xf.split(',')[0] || req.headers.get('x-real-ip') || '').trim() || 'unknown';
}

/* ---------------- Meta Conversions API (server-side Lead) ----------------
 * Only runs when META_CAPI_ACCESS_TOKEN is set in the environment. Sends a Lead
 * with the same event_id the browser pixel fires on the thank-you page, so Meta
 * dedupes the pair. Personal data is SHA-256 hashed per Meta's spec. */
const META_PIXEL_ID = process.env.META_PIXEL_ID || '847049750928220';
function sha256(v: string): string { return createHash('sha256').update(v).digest('hex'); }
async function postMetaLead(d: Lead, ip: string, ua: string): Promise<{ ok: boolean; status?: number; error?: string; skipped?: boolean }> {
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!token || !d.eventId) return { ok: false, skipped: true };
  const digits = d.phone.replace(/\D/g, '');
  const phoneE164 = digits.length === 10 ? `1${digits}` : digits;
  const [first, ...rest] = d.name.trim().toLowerCase().split(/\s+/);
  const userData: Record<string, unknown> = {
    ph: [sha256(phoneE164)],
    fn: [sha256(first || '')],
    client_ip_address: ip !== 'unknown' ? ip : undefined,
    client_user_agent: ua || undefined,
  };
  if (rest.length) userData.ln = [sha256(rest.join(' '))];
  if (d.zip) userData.zp = [sha256(d.zip.trim().toLowerCase())];
  if (d.fbp) userData.fbp = d.fbp;
  if (d.fbc) userData.fbc = d.fbc;
  const body = {
    data: [{
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id: d.eventId,
      action_source: 'website',
      event_source_url: d.landingUrl || undefined,
      user_data: userData,
      custom_data: { content_name: '$15 Tune-Up', content_category: 'hvac_tuneup', currency: 'USD', value: 15 },
    }],
  };
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 4000);
  try {
    const res = await fetch(`https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    return { ok: res.ok, status: res.status };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'capi_failed' };
  } finally {
    clearTimeout(t);
  }
}

/** Human-readable description; dedicated attribution fields carry gclid/utm/landingPage. */
function buildDescription(d: Lead): string {
  const parts = [`${d.offerLabel} 86-Point AC Tune-Up request (residential).`];
  if (d.preferredDay) parts.push(`Preferred day: ${d.preferredDay}.`);
  if (d.bestTime) parts.push(`Best time to call: ${d.bestTime}.`);
  const campaign = campaignFor(d);
  if (campaign) parts.push(`Campaign: ${campaign}.`);
  const extra: string[] = [];
  if (d.gbraid) extra.push(`gbraid=${d.gbraid}`);
  if (d.wbraid) extra.push(`wbraid=${d.wbraid}`);
  if (d.fbclid) extra.push(`fbclid=${d.fbclid}`);
  if (d.referrer) extra.push(`ref=${d.referrer}`);
  if (extra.length) parts.push(`(${extra.join(' ')})`);
  return parts.join(' ');
}

/** POST to SpeedToLead360 so the lead lands as a NEW war-room card (fires the fast first-touch text). */
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
  if (d.landingUrl) attr.landingUrl = d.landingUrl;
  if (d.fbclid) attr.fbclid = d.fbclid;
  if (d.zip) attr.zip = d.zip;
  if (d.source) attr.source = d.source;
  if (d.bestTime) attr.bestTime = d.bestTime;
  const campaign = campaignFor(d);
  if (campaign) attr.campaign = campaign;
  const payload = {
    firstName: firstName || d.name,
    lastName: rest.join(' '),
    phone: d.phone,
    email: d.email || '',
    address: '',
    serviceType: 'HVAC',
    jobType: 'tune-up',
    formName: campaign || `AC Tune-Up ${d.offerLabel} LP`,
    ...attr,
    description: buildDescription(d),
    id: `actuneup-${d.submissionId || randomUUID()}`,
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

  // Honeypot: silently accept (so bots think they succeeded) but do nothing.
  if (d.company && d.company.trim() !== '') {
    return NextResponse.json({ success: true });
  }

  const ip = clientIp(request);
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please call us and we will book it by phone.' }, { status: 429 });
  }

  const rows = [
    ['Name', d.name],
    ['Phone', d.phone],
    ['Email', d.email || '-'],
    ['ZIP', d.zip || '-'],
    ['Preferred day', d.preferredDay || '-'],
    ['Best time to call', d.bestTime || '-'],
    ['GCLID', d.gclid || '(none)'],
    ['FBCLID', d.fbclid || '(none)'],
    ['Campaign', campaignFor(d) || d.utm_campaign || '(none)'],
    ['Source page', d.pageSlug || 'ac-tune-up-2888'],
  ].map(([k, v]) => `<tr><td style="padding:8px 0;font-weight:bold;width:180px;">${esc(k)}:</td><td style="padding:8px 0;">${esc(v)}</td></tr>`).join('');

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#0d2d7a;color:#fff;padding:20px;text-align:center;"><h1 style="margin:0;">${d.offerLabel} AC Tune-Up Request</h1></div>
      <div style="padding:20px;background:#f5f5f5;">
        <div style="background:#ffe0b2;padding:12px;border-radius:5px;margin-bottom:16px;"><strong>Paid-social lead</strong> - 86-point tune-up (residential). Call to confirm ASAP; collect street address on the call.</div>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
        <p style="margin-top:16px;color:#555;font-size:12px;">Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })}</p>
      </div>
    </div>`.trim();

  const textBody = `${d.offerLabel} AC Tune-Up Request\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email || '-'}\nZIP: ${d.zip || '-'}\nPreferred day: ${d.preferredDay || '-'}\nGCLID: ${d.gclid || '(none)'}\nCampaign: ${d.utm_campaign || '(none)'}`;

  const [emailResult, stlResult, capiResult] = await Promise.allSettled([
    sendEmail({ to: 'csrteam@idesignac.com', subject: `AC Tune-Up (${d.offerLabel}): ${d.name} - ${d.zip || 'Tucson'} (${d.preferredDay || d.bestTime || 'no pref'})`, htmlBody, textBody }),
    postToSpeedToLead(d),
    d.source === 'meta-15-tuneup' ? postMetaLead(d, ip, request.headers.get('user-agent') || '') : Promise.resolve({ ok: false, skipped: true }),
  ]);

  const emailedOk = emailResult.status === 'fulfilled' && emailResult.value !== false;
  const stl = stlResult.status === 'fulfilled' ? stlResult.value : { ok: false, error: 'exception' };
  if (!stl.ok) console.error('SpeedToLead post failed:', stl);
  const capi = capiResult.status === 'fulfilled' ? capiResult.value : { ok: false, error: 'exception' };
  if (!capi.ok && !('skipped' in capi && capi.skipped)) console.error('Meta CAPI post failed:', capi);

  if (!emailedOk && !stl.ok) return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  return NextResponse.json({ success: true, speedtolead: stl.ok });
}
