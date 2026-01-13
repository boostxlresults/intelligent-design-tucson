import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/gmail';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const formSchema = z.object({
  clientFirstName: z.string().min(1, 'Client first name is required').max(100).trim(),
  clientLastName: z.string().min(1, 'Client last name is required').max(100).trim(),
  realtorName: z.string().min(1, 'Realtor name is required').max(200).trim(),
  clientEmail: z.string().email('Invalid email address').max(255).trim(),
  clientPhone: z.string().min(10, 'Phone number must be at least 10 digits').max(20).trim(),
  propertyAddress: z.string().min(1, 'Property address is required').max(500).trim(),
  zipCode: z.string().regex(/^[0-9]{5}$/, 'ZIP code must be 5 digits'),
});

function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

export async function POST(request: NextRequest) {
  let rawData: unknown;
  
  try {
    rawData = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON payload' },
      { status: 400 }
    );
  }

  const parseResult = formSchema.safeParse(rawData);
  
  if (!parseResult.success) {
    const errors = parseResult.error.errors.map(e => e.message).join(', ');
    return NextResponse.json(
      { error: `Validation failed: ${errors}` },
      { status: 400 }
    );
  }

  const data = parseResult.data;

  try {
    const safeClientFirstName = escapeHtml(data.clientFirstName);
    const safeClientLastName = escapeHtml(data.clientLastName);
    const safeRealtorName = escapeHtml(data.realtorName);
    const safeClientEmail = escapeHtml(data.clientEmail);
    const safeClientPhone = escapeHtml(data.clientPhone);
    const safePropertyAddress = escapeHtml(data.propertyAddress);
    const safeZipCode = escapeHtml(data.zipCode);

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #0d2d7a; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">REALTORS® Program Registration</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f5f5f5;">
          <h2 style="color: #0d2d7a; border-bottom: 2px solid #0d2d7a; padding-bottom: 10px;">
            Client Registration Details
          </h2>
          
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <strong>Referring REALTOR®:</strong> ${safeRealtorName}
          </div>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; width: 150px;">Client Name:</td>
              <td style="padding: 10px 0;">${safeClientFirstName} ${safeClientLastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Client Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${safeClientEmail}">${safeClientEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Client Phone:</td>
              <td style="padding: 10px 0;"><a href="tel:${safeClientPhone}">${safeClientPhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Property Address:</td>
              <td style="padding: 10px 0;">${safePropertyAddress}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">ZIP Code:</td>
              <td style="padding: 10px 0;">${safeZipCode}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 5px;">
            <strong>Offer Details:</strong><br>
            FREE 2-Year Deluxe Family Protection Plan ($1,200 value)<br>
            <em>Submitted via REALTORS® Program</em>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #d4edda; border-radius: 5px;">
            <strong>Next Steps:</strong><br>
            Contact the client to schedule their first comprehensive home systems inspection and activate their protection plan.
          </div>
        </div>
        
        <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
          Submitted via idesignac.com/realtors-offer<br>
          ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })}
        </div>
      </div>
    `;

    const textBody = `
REALTORS® PROGRAM REGISTRATION
==============================

Referring REALTOR®: ${data.realtorName}

Client Information:
- Name: ${data.clientFirstName} ${data.clientLastName}
- Email: ${data.clientEmail}
- Phone: ${data.clientPhone}
- Property Address: ${data.propertyAddress}
- ZIP Code: ${data.zipCode}

Offer: FREE 2-Year Deluxe Family Protection Plan ($1,200 value)

Next Steps: Contact the client to schedule their first comprehensive home systems inspection.

Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })}
    `.trim();

    await sendEmail({
      to: 'csrteam@idesignac.com',
      subject: `REALTORS® Program: ${safeClientFirstName} ${safeClientLastName} - Referred by ${safeRealtorName}`,
      htmlBody,
      textBody,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Client registered successfully'
    });
  } catch (error) {
    console.error('Error processing realtor form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    );
  }
}
