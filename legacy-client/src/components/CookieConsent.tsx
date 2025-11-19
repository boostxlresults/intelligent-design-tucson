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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="max-w-4xl mx-auto bg-card border-border shadow-lg">
        <div className="p-4 md:p-6">
          <div className="flex items-start gap-4">
            {/* Cookie Icon */}
            <div className="flex-shrink-0 mt-1">
              <Cookie className="w-6 h-6 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold mb-2" data-testid="text-cookie-banner-title">
                Cookie Preferences
              </h2>
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-cookie-banner-description">
                We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. 
                You can choose to accept all cookies or only essential cookies needed for basic site functionality.
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                By clicking "Accept All", you consent to our use of cookies for analytics and marketing. 
                See our{' '}
                <a 
                  href="/privacy-policy" 
                  className="underline hover:text-foreground"
                  data-testid="link-privacy-policy"
                >
                  Privacy Policy
                </a>{' '}
                for more information.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-initial"
                  data-testid="button-accept-all-cookies"
                >
                  Accept All
                </Button>
                <Button 
                  onClick={handleEssentialOnly}
                  variant="outline"
                  className="flex-1 sm:flex-initial"
                  data-testid="button-essential-cookies"
                >
                  Essential Only
                </Button>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="flex-shrink-0 p-1 rounded-md hover-elevate active-elevate-2"
              aria-label="Close cookie banner"
              data-testid="button-close-cookie-banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
