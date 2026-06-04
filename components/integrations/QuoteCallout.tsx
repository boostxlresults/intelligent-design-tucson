"use client";

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { trackQuoteStart } from '@/lib/analytics';

declare global {
  interface Window {
    ContractorCommerce?: {
      Journey: {
        start: (journeyType: string) => void;
      };
    };
  }
}

interface QuoteCalloutProps {
  journeyType?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
}

export default function QuoteCallout({
  journeyType = 'systemQuote',
  heading = 'Get a System Quote.',
  description = 'Answer a few quick questions, get an instant on-screen quote, and schedule a home visit.',
  buttonText = "Let's Go!",
}: QuoteCalloutProps) {
  const [isWaiting, setIsWaiting] = useState(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cleanup = () => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleClick = () => {
    trackQuoteStart(journeyType);

    // Always try to call Journey.start() directly on every click
    // This avoids any stale state issues
    if (window.ContractorCommerce?.Journey) {
      try {
        window.ContractorCommerce.Journey.start(journeyType);
        return; // Success — done
      } catch (e) {
        // Journey.start() threw — fall through to waiting state
      }
    }

    // CC not ready yet — show loading and poll until it's available
    setIsWaiting(true);
    cleanup();

    pollRef.current = setInterval(() => {
      if (window.ContractorCommerce?.Journey) {
        try {
          window.ContractorCommerce.Journey.start(journeyType);
          setIsWaiting(false);
          cleanup();
        } catch (e) {
          // Keep polling
        }
      }
    }, 300);

    // Give up after 10 seconds — reset button so user isn't stuck
    timeoutRef.current = setTimeout(() => {
      setIsWaiting(false);
      cleanup();
    }, 10000);
  };

  return (
    <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-800/50" data-contractor-commerce="true">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-quote-callout">
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-quote-callout-description">
            {description}
          </p>
          <Button
            size="lg"
            onClick={handleClick}
            disabled={isWaiting}
            className="bg-[#c41230] hover:bg-[#a10f28] text-white text-lg px-12 py-6 h-auto rounded-md font-semibold shadow-lg"
            data-testid="button-quote-callout"
          >
            {isWaiting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Loading Quote Tool...
              </>
            ) : buttonText}
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            Powered by{' '}
            <a
              href="https://www.contractorcommerce.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a9cd4] hover:underline"
            >
              Contractor Commerce
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
