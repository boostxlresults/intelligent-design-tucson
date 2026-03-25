import type { ReactNode } from 'react';
import ContractorCommercePlugin from '@/components/integrations/ContractorCommercePlugin';

/**
 * Route-specific layout for /free-hvac-quote
 * 
 * ContractorCommerce is scoped here (and /water-heater-quote) ONLY.
 * This prevents the 880KB script and its dns-prefetch hint from
 * appearing in PageSpeed reports for any other page on the site.
 */
export default function HvacQuoteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ContractorCommercePlugin />
    </>
  );
}
