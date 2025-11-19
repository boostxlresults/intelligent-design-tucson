"use client";

import { useEffect, useState } from 'react';
import { hasAnalyticsConsent } from '@/lib/cookieConsent';

export default function GTM() {
  const id = "GTM-WKG99GJ";
  const [shouldLoad, setShouldLoad] = useState(false);
  
  useEffect(() => {
    const checkConsent = () => {
      const hasConsent = hasAnalyticsConsent();
      setShouldLoad(hasConsent);
      
      if (hasConsent && typeof window !== 'undefined' && !window.dataLayer) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
      }
    };
    
    checkConsent();
    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'id-cookie-consent') {
        checkConsent();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <>
      <script
        id="gtm-init"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${id}');
          `
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${id}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}
