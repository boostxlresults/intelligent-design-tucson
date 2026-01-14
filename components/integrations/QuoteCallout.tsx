"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

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
  const [isReady, setIsReady] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const pendingClickRef = useRef(false);

  const startJourney = useCallback(() => {
    if (window.ContractorCommerce?.Journey) {
      window.ContractorCommerce.Journey.start(journeyType);
      setIsWaiting(false);
      pendingClickRef.current = false;
    }
  }, [journeyType]);

  useEffect(() => {
    const checkReady = () => {
      if (window.ContractorCommerce?.Journey) {
        setIsReady(true);
        if (pendingClickRef.current) {
          startJourney();
        }
        return true;
      }
      return false;
    };

    if (checkReady()) return;

    const interval = setInterval(() => {
      if (checkReady()) {
        clearInterval(interval);
      }
    }, 300);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [startJourney]);

  const handleClick = () => {
    if (isReady) {
      startJourney();
    } else {
      setIsWaiting(true);
      pendingClickRef.current = true;
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-800/50">
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
