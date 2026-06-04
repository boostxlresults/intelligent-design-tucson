"use client";

/**
 * QuoteCallout — Native Contractor Commerce Navigator Widget
 * 
 * This component renders CC's native navigator widget (the "Get a System Quote / Let's Go!" UI)
 * which is fully managed by Contractor Commerce's own JavaScript. We don't try to call
 * any CC APIs ourselves — we just provide the container div and CC handles everything.
 * 
 * The `data-contractor-commerce` attribute triggers the ContractorCommercePlugin's
 * IntersectionObserver to load the CC script when this section enters the viewport.
 * 
 * navigator-key determines which CC journey is launched:
 * - "NzdTlJWvihCCWjsf" = HVAC System Quote
 * - "ugVQLX7twEC3x7nG" = Water Heater Quote
 */

interface QuoteCalloutProps {
  journeyType?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  navigatorKey?: string;
}

export default function QuoteCallout({
  journeyType = 'systemQuote',
  heading = 'Get a System Quote.',
  description = 'Answer a few quick questions, get an instant on-screen quote, and schedule a home visit.',
  buttonText = "Let's Go!",
  navigatorKey = 'NzdTlJWvihCCWjsf',
}: QuoteCalloutProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-800/50" data-contractor-commerce="true">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div id="concom-navigator" navigator-key={navigatorKey} className="min-h-[600px]" data-testid={`widget-${journeyType}`} />
        </div>
      </div>
    </section>
  );
}
