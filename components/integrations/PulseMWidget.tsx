'use client';

import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface PulseMWidgetProps {
  containerId?: string;
  className?: string;
}

export default function PulseMWidget({ 
  containerId = 'pulsem-reviews-container',
  className = ''
}: PulseMWidgetProps) {
  const pathname = usePathname();

  // Cleanup function to remove all PulseM elements
  const cleanupPulseM = useCallback(() => {
    // Clear the container
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '';
    }

    // Remove the script to prevent it from running on other pages
    const scriptEl = document.getElementById('pulsem-embed-gsd');
    if (scriptEl) {
      scriptEl.remove();
    }

    // Remove any PulseM/Speetra elements that may have been added to body
    const pulsemElements = document.querySelectorAll('[id*="pulsem"], [class*="pulsem"], [id*="speetra"], [class*="speetra"], [data-pulsem], [class*="gsd-"]');
    pulsemElements.forEach(el => el.remove());

    // Also check for any iframes or floating widgets PulseM might create
    const floatingWidgets = document.querySelectorAll('iframe[src*="speetra"], iframe[src*="pulsem"]');
    floatingWidgets.forEach(el => el.remove());

    // Remove any fixed-position buttons or divs that might be the floating badge
    // Target the specific "23K Reviews" floating button
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(btn => {
      const text = btn.textContent || '';
      if (text.includes('23K') || (text.includes('Reviews') && btn.style.position === 'fixed')) {
        btn.remove();
      }
    });

    // Remove any fixed elements containing review-related text
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      const htmlEl = el as HTMLElement;
      const computedStyle = window.getComputedStyle(htmlEl);
      if (computedStyle.position === 'fixed') {
        const text = htmlEl.textContent || '';
        // Check if this is the PulseM floating badge (23K Reviews)
        if (text.includes('23K') && text.includes('Reviews')) {
          htmlEl.remove();
        }
      }
    });
  }, [containerId]);

  // Load script effect
  useEffect(() => {
    // Only load on customer-reviews page
    if (pathname !== '/customer-reviews') {
      cleanupPulseM();
      return;
    }

    // Only load the script when on the customer-reviews page
    const existingScript = document.getElementById('pulsem-embed-gsd');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'pulsem-embed-gsd';
      script.src = 'https://static.speetra.com/embed-pulsemweb-gsd.js';
      script.setAttribute('data-id', '3c6726153cb6483806907b70d6fae3496e2ef6d0a4077d6259c4407abcd67caf');
      script.defer = true;
      document.body.appendChild(script);
    }

    // Cleanup on unmount or pathname change
    return () => {
      cleanupPulseM();
    };
  }, [pathname, cleanupPulseM]);

  // Don't render anything if not on customer-reviews page
  if (pathname !== '/customer-reviews') {
    return null;
  }

  return (
    <div 
      id={containerId} 
      data-testid="pulsem-widget-container"
      className={`min-h-[400px] ${className}`}
    />
  );
}
