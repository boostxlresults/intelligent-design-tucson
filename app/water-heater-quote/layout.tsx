import type { ReactNode } from 'react';
import ContractorCommercePlugin from '@/components/integrations/ContractorCommercePlugin';

/**
 * Route-specific layout for /water-heater-quote
 * 
 * ContractorCommerce is scoped here (and /free-hvac-quote) ONLY.
 * This prevents the 880KB script and its dns-prefetch hint from
 * appearing in PageSpeed reports for any other page on the site.
 */
export default function WaterHeaterQuoteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ContractorCommercePlugin />
    </>
  );
}
