/**
 * Visitor identification & marketing communications disclaimer.
 * Approved legal copy — do not modify without sign-off.
 * Part 1: sitewide strip  |  Part 2: /privacy-policy#visitor-identification anchor
 */

export const VISITOR_ID_DISCLAIMER = {
  before:
    'By using this website, you acknowledge and agree that Intelligent Design Air Conditioning, Plumbing, Solar & Electric may collect information about your visit — including the pages you view and contact information associated with your device or browser — through cookies and visitor-identification technology provided by our service partners. You agree that we may use this information to contact you by email or phone regarding your inquiry, our services, and current offers. You may opt out of communications at any time using the unsubscribe link in any email or by contacting us directly. For details on what we collect, how we use it, and your choices, see our ',
  linkText: 'Privacy Policy',
  after: '.',
} as const;

/** Deep link to the visitor-identification section of our privacy policy */
export const PRIVACY_ANCHOR_URL = '/privacy-policy#visitor-identification';

// ---------------------------------------------------------------------------
// Part 2 — /privacy-policy#visitor-identification — approved copy
// Publish verbatim. Do not paraphrase or condense.
// These exports are the authoritative source; app/privacy-policy/page.tsx
// renders them with HTML markup (bold labels, mailto/tel links).
// ---------------------------------------------------------------------------

export const PART2_WHAT_COLLECT =
  'In addition to standard analytics, this website uses visitor-identification technology provided by third-party service partners. This technology may associate your visit with contact information — such as your name, email address, postal address, and phone number — drawn from our partners’ consumer databases, along with the pages you viewed, the campaign or advertisement that brought you to our site, and the dates and times of your visits.';

export const PART2_HOW_USE =
  'We use this information to (a) respond to and follow up on your apparent interest in our services, including by sending you an email or placing a call regarding the services or offers you viewed; (b) route your information to our customer-relationship and scheduling systems; and (c) match your information against our existing customer records so we do not send you duplicate or irrelevant communications.';

export const PART2_WHO_SHARE =
  'We share this information with service providers who process it on our behalf (visitor identification, email delivery, customer-relationship management, call tracking, and scheduling providers). We do not sell your personal information.';

/** "Your choices" — rendered with live mailto/tel links; split into segments */
export const PART2_CHOICES_A =
  'Every marketing email we send includes an unsubscribe link; opting out stops all marketing email from us. You may also opt out of all marketing communications, or request access to or deletion of the information described above, by emailing ';
export const PART2_CHOICES_EMAIL = 'csrteam@idesignac.com';
export const PART2_CHOICES_B = ' or calling ';
export const PART2_CHOICES_PHONE_DISPLAY = '(520) 333-2665';
export const PART2_CHOICES_PHONE_TEL = 'tel:5203332665';
export const PART2_CHOICES_C =
  '. We honor opt-out requests promptly and maintain a suppression list to prevent further contact.';

export const PART2_EFFECTIVE_DATE = 'This section was added on August 26, 2026.';
