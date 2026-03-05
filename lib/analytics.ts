/**
 * Analytics Event Tracking
 * 
 * Centralized event tracking for GA4 via dataLayer/GTM.
 * All conversion events are pushed to dataLayer for GTM to process.
 * 
 * Events are fired client-side only and are safe to import in any component.
 */

// Type-safe event names matching GA4 recommended events where possible
type ConversionEvent =
  | 'phone_click'
  | 'schedule_open'
  | 'schedule_complete'
  | 'form_submit'
  | 'chat_open'
  | 'quote_start'
  | 'special_offer_view'
  | 'blog_cta_click'
  | 'service_page_cta';

interface EventParams {
  event_category?: string;
  event_label?: string;
  page_location?: string;
  service_type?: string;
  location?: string;
  source_component?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * Push a custom event to the dataLayer for GTM to pick up.
 * Safe to call server-side (no-ops when window is undefined).
 */
export function trackEvent(event: ConversionEvent, params: EventParams = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params,
    page_url: window.location.href,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
  });
}

/* ------------------------------------------------------------------ */
/*  Convenience helpers – import these directly in components          */
/* ------------------------------------------------------------------ */

/** Track a click on any tel: phone link */
export function trackPhoneClick(component: string) {
  trackEvent('phone_click', {
    event_category: 'conversion',
    event_label: 'Phone Call',
    source_component: component,
  });
}

/** Track when the ServiceTitan scheduler modal opens */
export function trackScheduleOpen(component: string) {
  trackEvent('schedule_open', {
    event_category: 'conversion',
    event_label: 'Scheduler Opened',
    source_component: component,
  });
}

/** Track a successful form submission */
export function trackFormSubmit(formName: string, serviceType?: string) {
  trackEvent('form_submit', {
    event_category: 'conversion',
    event_label: formName,
    service_type: serviceType || 'general',
  });
}

/** Track when the Broccoli chat widget is opened */
export function trackChatOpen() {
  trackEvent('chat_open', {
    event_category: 'engagement',
    event_label: 'Chat Widget Opened',
  });
}

/** Track when a user starts a quote flow */
export function trackQuoteStart(serviceType: string) {
  trackEvent('quote_start', {
    event_category: 'conversion',
    event_label: 'Quote Started',
    service_type: serviceType,
  });
}

/** Track when a special offer page is viewed */
export function trackSpecialOfferView(offerName: string) {
  trackEvent('special_offer_view', {
    event_category: 'engagement',
    event_label: offerName,
  });
}

/** Track CTA clicks from blog posts */
export function trackBlogCTAClick(blogSlug: string) {
  trackEvent('blog_cta_click', {
    event_category: 'conversion',
    event_label: blogSlug,
  });
}
