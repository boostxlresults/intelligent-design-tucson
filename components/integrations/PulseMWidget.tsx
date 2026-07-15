'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * PulseMWidget — Floating social proof review popup by PulseM/Speetra
 *
 * HOW IT WORKS:
 * The PulseM embed script (embed-pulsemweb-gsd.js) fetches widget settings,
 * then dynamically loads review-widget.js which registers a <review-widget>
 * custom element and calls document.body.appendChild() to mount it.
 * The widget is a floating popup — it does NOT render inline.
 *
 * CRITICAL BUG FIXED:
 * Previous version ran cleanupPulseM() on component unmount even from the
 * /customer-reviews page. This removed the review-widget.js script, but
 * customElements.define() cannot be called twice — so on re-mount the
 * custom element definition existed but the Vue app instance was gone,
 * producing a dead shell element with no content.
 *
 * FIX:
 * - Load the script once on mount; never remove it (it's a floating widget,
 *   not page-specific content that needs cleanup).
 * - Only suppress the widget's VISIBILITY on non-reviews pages by hiding
 *   the review-widget element via CSS class on <body>.
 * - On /customer-reviews, show the widget.
 * - On all other pages, hide it via body class so the floating popup
 *   doesn't distract from other page content.
 */
export default function PulseMWidget() {
  const pathname = usePathname();
  const scriptLoadedRef = useRef(false);

  // Load the PulseM script ONLY on the reviews page, where the widget is shown.
  // It used to load on every page (mounting a Vue widget for no visible benefit),
  // which hurt mobile INP. Once loaded it persists for the session.
  useEffect(() => {
    if (pathname !== '/customer-reviews') return;
    if (scriptLoadedRef.current) return;
    if (document.getElementById('pulsem-embed-gsd')) {
      scriptLoadedRef.current = true;
      return;
    }

    scriptLoadedRef.current = true;
    const script = document.createElement('script');
    script.id = 'pulsem-embed-gsd';
    script.src = 'https://static.speetra.com/embed-pulsemweb-gsd.js';
    script.setAttribute('data-id', '3c6726153cb6483806907b70d6fae3496e2ef6d0a4077d6259c4407abcd67caf');
    script.defer = true;
    document.body.appendChild(script);
  }, [pathname]); // (re)check on navigation so it loads when the user opens /customer-reviews

  // Show/hide the widget based on current page
  useEffect(() => {
    const isReviewsPage = pathname === '/customer-reviews';

    if (isReviewsPage) {
      // Show the widget on the reviews page
      document.body.classList.remove('pulsem-hidden');
    } else {
      // Hide the widget on all other pages
      document.body.classList.add('pulsem-hidden');
    }

    return () => {
      // On unmount, hide the widget (safe — doesn't destroy the script)
      document.body.classList.add('pulsem-hidden');
    };
  }, [pathname]);

  // Renders nothing — the widget appends itself to document.body
  return null;
}
