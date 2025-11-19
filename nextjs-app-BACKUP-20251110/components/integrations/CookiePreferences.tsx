'use client';

import { useState } from 'react';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { setConsent, getConsent } from '@/lib/cookieConsent';

export default function CookiePreferences() {
  const [open, setOpen] = useState(false);
  const currentConsent = getConsent();

  const handleAcceptAll = () => {
    setConsent('all');
    setOpen(false);
    window.location.reload();
  };

  const handleEssentialOnly = () => {
    setConsent('essential');
    setOpen(false);
    window.location.reload();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="text-sm text-primary-foreground/60 hover-elevate px-2 py-1 rounded-md transition-colors inline-flex items-center gap-2"
          data-testid="button-cookie-preferences"
        >
          <Cookie className="w-4 h-4" />
          Cookie Preferences
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Cookie Preferences</DialogTitle>
          <DialogDescription>
            Manage your cookie consent preferences. Changes will take effect immediately.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          {/* Current Status */}
          <div className="p-4 bg-muted rounded-md">
            <p className="text-sm font-medium mb-1">Current Setting:</p>
            <p className="text-sm text-muted-foreground">
              {currentConsent?.level === 'all' 
                ? 'All cookies accepted (Analytics & Marketing enabled)'
                : currentConsent?.level === 'essential'
                ? 'Essential cookies only (Analytics & Marketing disabled)'
                : 'No preference set'}
            </p>
          </div>

          {/* Cookie Types */}
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-sm mb-1">Essential Cookies</h4>
              <p className="text-xs text-muted-foreground">
                Required for basic site functionality. These cannot be disabled.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1">Analytics & Marketing Cookies</h4>
              <p className="text-xs text-muted-foreground">
                Help us understand how visitors use our site and improve our services. Includes Google Analytics and Google Tag Manager.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-2">
            <Button 
              onClick={handleAcceptAll}
              className="w-full"
              data-testid="button-accept-all-modal"
            >
              Accept All Cookies
            </Button>
            <Button 
              onClick={handleEssentialOnly}
              variant="outline"
              className="w-full"
              data-testid="button-essential-modal"
            >
              Essential Cookies Only
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            For more information, see our{' '}
            <a 
              href="/privacy-policy" 
              className="underline hover:text-foreground"
              data-testid="link-privacy-policy-modal"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
