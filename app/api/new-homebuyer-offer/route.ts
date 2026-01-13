import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/gmail';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100).trim(),
  lastName: z.string().min(1, 'Last name is required').max(100).trim(),
  email: z.string().email('Invalid email address').max(255).trim(),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(20).trim(),
  address: z.string().min(1, 'Address is required').max(500).trim(),
  zipCode: z.string().regex(/^[0-9]{5}$/, 'ZIP code must be 5 digits'),
  realtorName: z.string().max(200).trim().optional().default(''),
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
    const safeFirstName = escapeHtml(data.firstName);
    const safeLastName = escapeHtml(data.lastName);
    const safeEmail = escapeHtml(data.email);
    const safePhone = escapeHtml(data.phone);
    const safeAddress = escapeHtml(data.address);
    const safeZipCode = escapeHtml(data.zipCode);
    const safeRealtorName = data.realtorName ? escapeHtml(data.realtorName) : '';

    // Format the email content
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #0d2d7a; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">New Homebuyer Offer Submission</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f5f5f5;">
          <h2 style="color: #0d2d7a; border-bottom: 2px solid #0d2d7a; padding-bottom: 10px;">
            Customer Information
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 10px 0;">${safeFirstName} ${safeLastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0;"><a href="tel:${safePhone}">${safePhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Address:</td>
              <td style="padding: 10px 0;">${safeAddress}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">ZIP Code:</td>
              <td style="padding: 10px 0;">${safeZipCode}</td>
            </tr>
            ${safeRealtorName ? `
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Realtor/Agent:</td>
              <td style="padding: 10px 0;">${safeRealtorName}</td>
            </tr>
            ` : ''}
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 5px;">
            <strong>Offer Details:</strong><br>
            FREE 2-Year Deluxe Family Protection Plan ($1,200 value)
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #d4edda; border-radius: 5px;">
            <strong>Next Steps:</strong><br>
            Contact this customer to schedule their first comprehensive home systems inspection and activate their protection plan.
          </div>
        </div>
        
        <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
          Submitted via idesignac.com/new-homebuyer-offer<br>
          ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })}
        </div>
      </div>
    `;

    const textBody = `
NEW HOMEBUYER OFFER SUBMISSION
==============================

Customer Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone}
- Address: ${data.address}
- ZIP Code: ${data.zipCode}
${data.realtorName ? `- Realtor/Agent: ${data.realtorName}` : ''}

Offer: FREE 2-Year Deluxe Family Protection Plan ($1,200 value)

Next Steps: Contact this customer to schedule their first comprehensive home systems inspection.

Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })}
    `.trim();

    // Send email notification
    await sendEmail({
      to: 'csrteam@idesignac.com',
      subject: `New Homebuyer Offer: ${safeFirstName} ${safeLastName} - ${safeZipCode}`,
      htmlBody,
      textBody,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully'
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
