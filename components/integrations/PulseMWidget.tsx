'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface PulseMWidgetProps {
  containerId?: string;
  className?: string;
}

export default function PulseMWidget({ 
  containerId = 'pulsem-reviews-container',
  className = ''
}: PulseMWidgetProps) {
  useEffect(() => {
    // Cleanup function to remove any existing PulseM elements when component unmounts
    return () => {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [containerId]);

  return (
    <>
      {/* PulseM Review Widget Script */}
      <Script
        id="pulsem-embed-gsd"
        src="https://static.speetra.com/embed-pulsemweb-gsd.js"
        data-id="3c6726153cb6483806907b70d6fae3496e2ef6d0a4077d6259c4407abcd67caf"
        strategy="afterInteractive"
        defer
      />
      
      {/* Widget Container - PulseM will populate this */}
      <div 
        id={containerId} 
        data-testid="pulsem-widget-container"
        className={`min-h-[400px] ${className}`}
      />
    </>
  );
}
