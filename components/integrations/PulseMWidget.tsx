'use client';

import { useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function PulseMWidget() {
  const pathname = usePathname();
  const observerRef = useRef<MutationObserver | null>(null);

  // Cleanup function to remove all PulseM elements on non-reviews pages
  const cleanupPulseM = useCallback(() => {
    // Remove the main script
    const scriptEl = document.getElementById('pulsem-embed-gsd');
    if (scriptEl) {
      scriptEl.remove();
    }
    
    // Remove the widget script
    const widgetScript = document.getElementById('pulsem-embed-widget-review');
    if (widgetScript) {
      widgetScript.remove();
    }

    // Remove any PulseM/Speetra scripts and elements
    document.querySelectorAll('script[src*="speetra"], script[src*="pulsem"]').forEach(el => el.remove());
    document.querySelectorAll('[id*="pulsem"], [class*="pulsem"], [id*="speetra"], [class*="speetra"], [data-pulsem], [class*="gsd-"]').forEach(el => el.remove());
    document.querySelectorAll('iframe[src*="speetra"], iframe[src*="pulsem"]').forEach(el => el.remove());

    // Remove any fixed-position elements with review-related content
    document.querySelectorAll('*').forEach(el => {
      const htmlEl = el as HTMLElement;
      try {
        const computedStyle = window.getComputedStyle(htmlEl);
        if (computedStyle.position === 'fixed') {
          const text = htmlEl.textContent || '';
          const innerHTML = htmlEl.innerHTML || '';
          // Check for PulseM floating badge indicators
          if (
            (text.includes('23K') && text.includes('Review')) ||
            (text.includes('23000') && text.includes('Review')) ||
            innerHTML.includes('pulsem') ||
            innerHTML.includes('speetra') ||
            htmlEl.id.includes('pulsem') ||
            htmlEl.id.includes('speetra') ||
            htmlEl.className.includes('pulsem') ||
            htmlEl.className.includes('speetra')
          ) {
            htmlEl.remove();
          }
        }
      } catch {
        // Ignore errors from getComputedStyle
      }
    });
  }, []);

  // Start a MutationObserver to continuously remove PulseM elements on non-reviews pages
  const startObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new MutationObserver((mutations) => {
      let needsCleanup = false;
      for (const mutation of mutations) {
        for (const node of Array.from(mutation.addedNodes)) {
          if (node instanceof HTMLElement) {
            const id = node.id || '';
            const className = node.className || '';
            const innerHTML = node.innerHTML || '';
            if (
              id.includes('pulsem') ||
              id.includes('speetra') ||
              (typeof className === 'string' && (className.includes('pulsem') || className.includes('speetra'))) ||
              innerHTML.includes('pulsem') ||
              innerHTML.includes('speetra') ||
              innerHTML.includes('23K')
            ) {
              needsCleanup = true;
              break;
            }
          }
        }
        if (needsCleanup) break;
      }
      if (needsCleanup) {
        cleanupPulseM();
      }
    });

    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }, [cleanupPulseM]);

  const stopObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  // Main effect for loading/cleanup based on pathname
  useEffect(() => {
    // Not on customer-reviews page - cleanup and start observer
    if (pathname !== '/customer-reviews') {
      cleanupPulseM();
      startObserver();
      
      // Run cleanup periodically for the first few seconds after navigation
      const intervals = [100, 500, 1000, 2000, 3000];
      const timeouts = intervals.map(delay => 
        setTimeout(cleanupPulseM, delay)
      );
      
      return () => {
        timeouts.forEach(clearTimeout);
        stopObserver();
      };
    }

    // On customer-reviews page - load the widget
    stopObserver();
    
    const existingScript = document.getElementById('pulsem-embed-gsd');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'pulsem-embed-gsd';
      script.src = 'https://static.speetra.com/embed-pulsemweb-gsd.js';
      script.setAttribute('data-id', '3c6726153cb6483806907b70d6fae3496e2ef6d0a4077d6259c4407abcd67caf');
      script.defer = true;
      document.body.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      cleanupPulseM();
    };
  }, [pathname, cleanupPulseM, startObserver, stopObserver]);

  // The PulseM review-widget.js registers a <review-widget> custom element
  // and appends it directly to document.body — no container div is needed.
  // We render nothing; the widget self-renders into the page.
  return null;
}
