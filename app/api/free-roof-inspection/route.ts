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

    await sendEmail({
      to: 'csrteam@idesignac.com',
      subject: `Storm Roof Inspection: ${d.name} — ${d.seeing || 'roof'} (${d.address})`,
      htmlBody,
      textBody,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('free-roof-inspection submit error:', e);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
