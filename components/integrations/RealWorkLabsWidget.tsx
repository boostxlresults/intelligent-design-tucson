'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface RealWorkLabsWidgetProps {
  apiKey?: string;
  serviceType?: 'hvac' | 'plumbing' | 'solar' | 'electrical' | 'roofing' | 'all';
  zipCode?: string;
  limit?: number;
  containerId?: string;
  showLoadingState?: boolean;
}

declare global {
  interface Window {
    rwlPlugin?: {
      init: (baseUrl: string, apiKey: string, options?: any) => void;
      filter?: (options: { serviceType?: string; zipCode?: string; limit?: number }) => void;
    };
  }
}

export default function RealWorkLabsWidget({ 
  apiKey = 'Mv2yZInBciS35Sln',
  serviceType = 'all',
  zipCode,
  limit = 12,
  containerId = 'rwl-neighborhood',
  showLoadingState = true
}: RealWorkLabsWidgetProps) {
  const isInitialized = useRef(false);

  useEffect(() => {
    // Initialize RealWorkLabs plugin when ready
    const handlePluginReady = () => {
      if (window.rwlPlugin && !isInitialized.current) {
        // Initialize plugin
        window.rwlPlugin.init('https://app.realworklabs.com', apiKey);
        
        // Apply filters if provided
        if (window.rwlPlugin.filter) {
          const filterOptions: any = {};
          
          if (serviceType && serviceType !== 'all') {
            filterOptions.serviceType = serviceType;
          }
          
          if (zipCode) {
            filterOptions.zipCode = zipCode;
          }
          
          if (limit) {
            filterOptions.limit = limit;
          }
          
          // Apply filters if any are set
          if (Object.keys(filterOptions).length > 0) {
            window.rwlPlugin.filter(filterOptions);
          }
        }
        
        isInitialized.current = true;
      }
    };

    window.addEventListener('rwlPluginReady', handlePluginReady);

    // If plugin is already loaded, initialize it
    if (window.rwlPlugin && !isInitialized.current) {
      handlePluginReady();
    }

    return () => {
      window.removeEventListener('rwlPluginReady', handlePluginReady);
    };
  }, [apiKey, serviceType, zipCode, limit]);

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
      <div 
        id={containerId} 
        data-testid="rwl-widget-container"
        className="min-h-[400px]"
      >
        {showLoadingState && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
              <p className="text-muted-foreground">Loading recent projects...</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
