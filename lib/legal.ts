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
