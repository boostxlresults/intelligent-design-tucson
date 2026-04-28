import type { ReactNode } from 'react';
import Script from 'next/script';
import ContractorCommercePlugin from '@/components/integrations/ContractorCommercePlugin';

/**
 * Route-specific layout for /free-hvac-quote
 * 
 * ContractorCommerce is scoped here (and /water-heater-quote) ONLY.
 * This prevents the 880KB script and its dns-prefetch hint from
 * appearing in PageSpeed reports for any other page on the site.
 * 
 * Google Ads Tag (AW-802891052) is added here as a belt-and-suspenders
 * approach to ensure conversion tracking works on this page, since
 * GTM's trigger configuration was not detecting conversions from the
 * ContractorCommerce widget. This ensures Google Ads can attribute
 * leads from the HVAC Quote tool.
 */
export default function HvacQuoteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Google Ads Tag - ensures conversion tracking on this landing page */}
      <Script
        id="gtag-hvac-quote"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-802891052"
      />
      <Script
        id="gtag-hvac-config"
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
      <ContractorCommercePlugin />
    </>
  );
}
