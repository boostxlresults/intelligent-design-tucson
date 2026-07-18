import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/gmail';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(120).trim(),
  phone: z.string().min(10, 'Phone must be at least 10 digits').max(20).trim(),
  service: z.string().min(1).max(60).trim(),
  whoQuoted: z.string().max(160).trim().optional().default(''),
  details: z.string().max(1000).trim().optional().default(''),
  gclid: z.string().max(200).trim().optional().default(''),
  gbraid: z.string().max(200).trim().optional().default(''),
  wbraid: z.string().max(200).trim().optional().default(''),
  utm_campaign: z.string().max(200).trim().optional().default(''),
  utm_source: z.string().max(120).trim().optional().default(''),
  utm_medium: z.string().max(120).trim().optional().default(''),
  utm_term: z.string().max(200).trim().optional().default(''),
  pageSlug: z.string().max(80).trim().optional().default(''),
});

function esc(t: string): string {
  const m: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return t.replace(/[&<>"']/g, (c) => m[c] || c);
}

export async function POST(request: NextRequest) {
  let raw: unknown;
  try { raw = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const parsed = formSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: `Validation failed: ${parsed.error.errors.map(e => e.message).join(', ')}` }, { status: 400 });
  }
  const d = parsed.data;

  try {
    const rows = [
      ['Name', d.name],
      ['Phone', d.phone],
      ['Service', d.service],
      ['Who quoted them', d.whoQuoted || '—'],
      ['Details', d.details || '—'],
      ['GCLID', d.gclid || '(none)'],
      ['GBRAID', d.gbraid || '(none)'],
      ['WBRAID', d.wbraid || '(none)'],
      ['Campaign', d.utm_campaign || '(none)'],
      ['Source page', d.pageSlug || '(compare)'],
    ].map(([k, v]) => `<tr><td style="padding:8px 0;font-weight:bold;width:170px;">${esc(k)}:</td><td style="padding:8px 0;">${esc(v)}</td></tr>`).join('');

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#0d2d7a;color:#fff;padding:20px;text-align:center;"><h1 style="margin:0;">Free Second-Opinion Request</h1></div>
        <div style="padding:20px;background:#f5f5f5;">
          <div style="background:#fff3cd;padding:12px;border-radius:5px;margin-bottom:16px;"><strong>Conquest lead</strong> — competitor comparison page (${esc(d.service)})</div>
          <table style="width:100%;border-collapse:collapse;">${rows}</table>
          <p style="margin-top:16px;color:#555;font-size:12px;">Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })}</p>
        </div>
      </div>`.trim();

    const textBody = `Free Second-Opinion Request\nName: ${d.name}\nPhone: ${d.phone}\nService: ${d.service}\nWho quoted: ${d.whoQuoted || '-'}\nDetails: ${d.details || '-'}\nGCLID: ${d.gclid || '(none)'}\nSource: ${d.pageSlug}`;

    await sendEmail({
      to: 'csrteam@idesignac.com',
      subject: `Second Opinion (${d.service}): ${d.name} — quoted by ${d.whoQuoted || 'unknown'}`,
      htmlBody,
      textBody,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('second-opinion submit error:', e);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
