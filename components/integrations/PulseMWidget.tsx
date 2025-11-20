'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface PulseMWidgetProps {
  containerId?: string;
  showLoadingState?: boolean;
  className?: string;
}

export default function PulseMWidget({ 
  containerId = 'pulsem-reviews-container',
  showLoadingState = true,
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
      
      {/* Widget Container */}
      <div 
        id={containerId} 
        data-testid="pulsem-widget-container"
        className={`min-h-[400px] ${className}`}
      >
        {showLoadingState && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
              <p className="text-muted-foreground">Loading reviews...</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
