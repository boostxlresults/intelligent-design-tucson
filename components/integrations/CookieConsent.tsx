'use client';

import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { hasConsent, setConsent } from '@/lib/cookieConsent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = hasConsent();
    setIsVisible(!consent);
  }, []);

  const handleAcceptAll = () => {
    setConsent('all');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    setConsent('essential');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 w-full max-w-[340px] md:max-w-[380px]">
      <Card className="bg-card border-border shadow-lg">
        <div className="p-4">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h2 className="text-base font-bold" data-testid="text-cookie-banner-title">
              This Website Uses Cookies
            </h2>
            <button
              onClick={handleClose}
              className="flex-shrink-0 p-0.5 rounded-md hover-elevate active-elevate-2"
              aria-label="Close cookie banner"
              data-testid="button-close-cookie-banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-muted-foreground mb-3" data-testid="text-cookie-banner-description">
            We use cookies to enhance user experience, personalize ads on and off our sites, and to analyze performance and traffic on our site. We share information about your use with third-parties for advertising and analytics purposes. You may opt-out of targeting cookies by clicking "Reject Targeting Cookies". By continuing to use this website you agree to our use of cookies and the terms of our{' '}
            <a 
              href="/privacy-policy" 
              className="underline hover:text-foreground"
              data-testid="link-privacy-policy"
            >
              Privacy Policy
            </a> in the footer.
          </p>

          {/* Buttons */}
          <div className="flex gap-2">
            <Button 
              onClick={handleAcceptAll}
              size="sm"
              className="flex-1 text-xs"
              data-testid="button-accept-all-cookies"
            >
              Accept Targeting Cookies
            </Button>
            <Button 
              onClick={handleEssentialOnly}
              variant="outline"
              size="sm"
              className="flex-1 text-xs"
              data-testid="button-essential-cookies"
            >
              Reject Targeting Cookies
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
