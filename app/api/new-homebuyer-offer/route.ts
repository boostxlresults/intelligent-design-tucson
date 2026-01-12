import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/gmail';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  realtorName?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();
    
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.address || !data.zipCode) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

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
              <td style="padding: 10px 0;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Address:</td>
              <td style="padding: 10px 0;">${data.address}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">ZIP Code:</td>
              <td style="padding: 10px 0;">${data.zipCode}</td>
            </tr>
            ${data.realtorName ? `
            <tr>
              <td style="padding: 10px 0; font-weight: bold;">Realtor/Agent:</td>
              <td style="padding: 10px 0;">${data.realtorName}</td>
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
      subject: `New Homebuyer Offer: ${data.firstName} ${data.lastName} - ${data.zipCode}`,
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
