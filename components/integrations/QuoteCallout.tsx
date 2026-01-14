"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

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
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleClick = () => {
    if (window.ContractorCommerce?.Journey) {
      setIsLoading(true);
      try {
        window.ContractorCommerce.Journey.start(journeyType);
      } catch (error) {
        toast({
          title: "Quote Tool Loading",
          description: "Please wait a moment and try again, or call us at (520) 333-2712.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      toast({
        title: "Quote Tool Loading",
        description: "The quote tool is still loading. Please wait a moment or call us at (520) 333-2712.",
      });
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
            disabled={isLoading}
            className="bg-[#c41230] hover:bg-[#a10f28] text-white text-lg px-12 py-6 h-auto rounded-md font-semibold shadow-lg"
            data-testid="button-quote-callout"
          >
            {isLoading ? 'Loading...' : buttonText}
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
