"use client";

import { useEffect } from 'react';

const PLUGIN_KEY = "D32QhwUokdL5YZLParGpbxc7TuBTkYanGNQSR4zd";
const PLUGIN_SRC = `https://plugin.contractorcommerce.com?key=${PLUGIN_KEY}`;

/**
 * ContractorCommerce Plugin — IntersectionObserver Lazy Loader
 * 
 * Previous issue: Loading this script with "afterInteractive" or "lazyOnload"
 * still caused ~986 KiB of JS to execute on every page, contributing to
 * 3,030ms TBT and 20 long main-thread tasks.
 * 
 * New strategy: Only load the script when a [data-contractor-commerce] element
 * (i.e., a QuoteCallout section) enters the viewport. On pages with no
 * QuoteCallout, the script NEVER loads — saving 986 KiB on 95%+ of page views.
 * 
 * On pages WITH a QuoteCallout, the script loads when the user scrolls near it,
 * which is always before they could click the button.
 * 
 * Fallback: If the user clicks the quote button before scrolling to it,
 * QuoteCallout.tsx already handles this with a pending click queue.
 */
export default function ContractorCommercePlugin() {
  useEffect(() => {
    let loaded = false;

    const loadScript = () => {
      if (loaded) return;
      loaded = true;

      const script = document.createElement('script');
      script.src = PLUGIN_SRC;
      script.async = true;
      document.body.appendChild(script);
    };

    // Check if any QuoteCallout sections exist on this page
    const targets = document.querySelectorAll('[data-contractor-commerce]');

    if (targets.length === 0) {
      // No QuoteCallout on this page — don't load the script at all
      return;
    }

    // Use IntersectionObserver to load only when the section is near the viewport
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              observer.disconnect();
              loadScript();
            }
          });
        },
        {
          // Start loading when the section is 500px away from entering the viewport
          // This gives the script time to load before the user reaches it
          rootMargin: '500px 0px',
          threshold: 0,
        }
      );

      targets.forEach((target) => observer.observe(target));

      return () => observer.disconnect();
    } else {
      // Fallback for browsers without IntersectionObserver
      loadScript();
    }
  }, []);

  return null;
}
