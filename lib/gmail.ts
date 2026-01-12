// Project-specific SMTP email sending using nodemailer
// Uses Gmail SMTP with app password - credentials stored in project secrets only
import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  htmlBody: string;
  textBody?: string;
}

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error('SMTP credentials not configured. Set SMTP_USER and SMTP_PASS in project secrets.');
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendEmail({ to, subject, htmlBody, textBody }: EmailOptions): Promise<boolean> {
  try {
    const transporter = getTransporter();
    
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      text: textBody || htmlBody.replace(/<[^>]*>/g, ''),
      html: htmlBody,
    });

    console.log(`Email sent successfully to ${to}`);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}
