'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface RealWorkLabsWidgetProps {
  apiKey?: string;
}

declare global {
  interface Window {
    rwlPlugin?: {
      init: (baseUrl: string, apiKey: string) => void;
    };
  }
}

export default function RealWorkLabsWidget({ 
  apiKey = 'Mv2yZInBciS35Sln' 
}: RealWorkLabsWidgetProps) {
  useEffect(() => {
    // Initialize RealWorkLabs plugin when ready
    const handlePluginReady = () => {
      if (window.rwlPlugin) {
        window.rwlPlugin.init('https://app.realworklabs.com', apiKey);
      }
    };

    window.addEventListener('rwlPluginReady', handlePluginReady);

    // If plugin is already loaded, initialize it
    if (window.rwlPlugin) {
      handlePluginReady();
    }

    return () => {
      window.removeEventListener('rwlPluginReady', handlePluginReady);
    };
  }, [apiKey]);

  return (
    <>
      {/* Load RealWorkLabs Plugin Script */}
      <Script
        src={`https://app.realworklabs.com/static/plugin/loader.js?v=${Date.now()}`}
        strategy="afterInteractive"
        onLoad={() => {
          // Trigger custom event when script loads
          window.dispatchEvent(new Event('rwlPluginReady'));
        }}
      />
      
      {/* Widget Container - RealWorkLabs will inject content here */}
      <div id="rwl-neighborhood" data-testid="rwl-widget-container" />
    </>
  );
}
