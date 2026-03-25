"use client";

/**
 * Google Tag Manager Integration
 * 
 * GTM is now loaded via the post-lcp-loader script in app/layout.tsx using a
 * PerformanceObserver that fires AFTER the LCP element paints. This eliminates
 * the 1,800ms+ element render delay that was caused by GTM blocking the main
 * thread before first paint.
 * 
 * This component is kept as a no-op to avoid breaking any imports, but the
 * actual GTM initialization now happens in layout.tsx.
 * 
 * The noscript iframe fallback is also in layout.tsx.
 */
export default function GTM() {
  return null;
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}
