import type { ReactNode } from 'react';
import Script from 'next/script';

/**
 * Route-specific layout for /new-air-conditioner
 * 
 * This is the dedicated Google Ads landing page for AC replacement keywords.
 * Google Ads Tag (AW-802891052) ensures conversion attribution.
 */
export default function NewAirConditionerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Google Ads Tag - ensures conversion tracking on this landing page */}
      <Script
        id="gtag-new-ac"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-802891052"
      />
      <Script
        id="gtag-new-ac-config"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-802891052');
        `}
      </Script>
      {children}
    </>
  );
}
