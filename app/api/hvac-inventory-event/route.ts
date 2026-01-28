import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/gmail';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100).trim(),
  lastName: z.string().min(1, 'Last name is required').max(100).trim(),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(20).trim(),
  zipCode: z.string().regex(/^[0-9]{5}$/, 'ZIP code must be 5 digits'),
  isHomeowner: z.enum(['yes', 'no'], { errorMap: () => ({ message: 'Please select if you are the homeowner' }) }),
  preferredContactTime: z.enum(['morning', 'afternoon', 'evening', 'asap'], { errorMap: () => ({ message: 'Please select a preferred contact time' }) }),
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

const contactTimeLabels: Record<string, string> = {
  morning: 'Morning (8am - 12pm)',
  afternoon: 'Afternoon (12pm - 5pm)',
  evening: 'Evening (5pm - 8pm)',
  asap: 'Call me ASAP',
};

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
    const safePhone = escapeHtml(data.phone);
    const safeZipCode = escapeHtml(data.zipCode);
    const isHomeownerText = data.isHomeowner === 'yes' ? 'Yes - Homeowner' : 'No - Renter';
    const contactTimeText = contactTimeLabels[data.preferredContactTime] || data.preferredContactTime;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #dc2626; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">HVAC INVENTORY EVENT LEAD</h1>
          <p style="margin: 10px 0 0 0; font-size: 18px;">One-Day HVAC Release - META AD LEAD</p>
        </div>
        
        <div style="padding: 20px; background-color: #fef3c7; border: 3px solid #dc2626;">
          <div style="background-color: #dc2626; color: white; padding: 10px; text-align: center; font-weight: bold; font-size: 16px; margin-bottom: 15px;">
            HIGH PRIORITY - CONTACT IMMEDIATELY
          </div>
          
          <h2 style="color: #0d2d7a; border-bottom: 2px solid #0d2d7a; padding-bottom: 10px;">
            Lead Information
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; width: 180px;">Name:</td>
              <td style="padding: 10px 0; font-size: 18px;">${safeFirstName} ${safeLastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0; font-size: 18px;"><a href="tel:${safePhone}" style="color: #dc2626; font-weight: bold;">${safePhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">ZIP Code:</td>
              <td style="padding: 10px 0;">${safeZipCode}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Homeowner:</td>
              <td style="padding: 10px 0;">${isHomeownerText}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Preferred Contact:</td>
              <td style="padding: 10px 0; font-weight: bold; color: #dc2626;">${contactTimeText}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fff; border-radius: 5px; border: 2px solid #0d2d7a;">
            <strong>Campaign:</strong> One-Day HVAC Inventory Release Event<br>
            <strong>Offer:</strong> Up to 50% off on 4 previous model year units<br>
            <strong>Source:</strong> Meta Ad / Facebook/Instagram
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #d4edda; border-radius: 5px;">
            <strong>Call Script Reminder:</strong><br>
            "Hi [Name], this is [Your Name] from Intelligent Design. I'm calling about your interest in our HVAC inventory release. We have a limited number of brand-new systems available at up to 50% off. Let me verify your address and we can schedule a time for our comfort advisor to come out today..."
          </div>
        </div>
        
        <div style="background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
          Submitted via idesignac.com/inventory-release-event<br>
          ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })}
        </div>
      </div>
    `;

    const textBody = `
HVAC INVENTORY EVENT LEAD
================================
HIGH PRIORITY - CONTACT IMMEDIATELY

Lead Information:
- Name: ${data.firstName} ${data.lastName}
- Phone: ${data.phone}
- ZIP Code: ${data.zipCode}
- Homeowner: ${isHomeownerText}
- Preferred Contact: ${contactTimeText}

Campaign: One-Day HVAC Inventory Release Event
Offer: Up to 50% off on 4 previous model year units
Source: Meta Ad / Facebook/Instagram

Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })}
    `.trim();

    await sendEmail({
      to: 'csrteam@idesignac.com',
      subject: `HVAC EVENT LEAD: ${safeFirstName} ${safeLastName} - ${safeZipCode} - ${contactTimeText}`,
      htmlBody,
      textBody,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully'
    });
  } catch (error) {
    console.error('Error processing HVAC inventory form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
