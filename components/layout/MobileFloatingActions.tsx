'use client';

import { useEffect, useRef } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SchedulerEmbed from "../integrations/SchedulerEmbed";

export default function MobileFloatingActions() {
  const hatchLauncherRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    // Only run HatchChat hiding on mobile
    if (typeof window === 'undefined' || window.innerWidth >= 1024) return;

    const hideHatchLauncher = () => {
      const hatchChat = document.querySelector('hatch-chat');
      if (!hatchChat?.shadowRoot) return;

      // Target the root div of the shadow DOM
      const rootDiv = hatchChat.shadowRoot.querySelector('div');
      if (rootDiv && rootDiv instanceof HTMLElement) {
        rootDiv.style.cssText = 'display: none !important;';
        // Store reference to any button for later clicking
        const btn = hatchChat.shadowRoot.querySelector('button');
        if (btn) hatchLauncherRef.current = btn;
      }
    };

    // Poll for HatchChat to load
    const checkInterval = setInterval(() => {
      const hatchChat = document.querySelector('hatch-chat');
      if (hatchChat?.shadowRoot) {
        hideHatchLauncher();
        
        // Watch for re-renders
        if (!observerRef.current) {
          observerRef.current = new MutationObserver(() => {
            hideHatchLauncher();
          });
          observerRef.current.observe(hatchChat.shadowRoot, { childList: true, subtree: true });
        }
        
        clearInterval(checkInterval);
      }
    }, 200);

    const timeout = setTimeout(() => clearInterval(checkInterval), 20000);

    return () => {
      clearInterval(checkInterval);
      clearTimeout(timeout);
      observerRef.current?.disconnect();
    };
  }, []);

  const handleChatClick = () => {
    const hatchChat = document.querySelector('hatch-chat');
    if (!hatchChat?.shadowRoot) return;

    // Temporarily show and click
    const rootDiv = hatchChat.shadowRoot.querySelector('div');
    const btn = hatchChat.shadowRoot.querySelector('button');
    
    if (rootDiv && rootDiv instanceof HTMLElement) {
      rootDiv.style.cssText = 'display: block !important;';
    }
    if (btn && btn instanceof HTMLElement) {
      btn.click();
    }
  };

  return (
    <>
      {/* Mobile Floating Action Bar - Only visible on mobile/tablet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background border-t border-border shadow-lg max-w-full overflow-hidden">
        <div className="flex items-center justify-evenly gap-1 px-2 py-3">
          {/* Call Now */}
          <Button
            size="sm"
            className="flex-1 flex flex-col items-center gap-1 h-auto py-3 bg-yellow-400 border-2 border-yellow-500 text-gray-900 hover:bg-yellow-500"
            asChild
          >
            <a href="tel:+15203332665" data-testid="button-mobile-call">
              <Phone className="w-5 h-5" />
              <span className="text-xs font-semibold">Call Now</span>
            </a>
          </Button>

          {/* Schedule */}
          <div className="flex-1">
            <SchedulerEmbed
              triggerText="Schedule"
              variant="destructive"
              size="sm"
              className="w-full flex flex-col items-center gap-1 h-auto py-3"
              iconClassName="w-5 h-5"
              textClassName="text-xs font-semibold"
              verticalLayout={true}
              data-testid="button-mobile-schedule"
            />
          </div>

          {/* Live Chat - triggers HatchChat */}
          <Button
            size="sm"
            className="flex-1 flex flex-col items-center gap-1 h-auto py-3 bg-green-600 hover:bg-green-700 text-white border-2 border-green-700"
            onClick={handleChatClick}
            data-testid="button-mobile-chat"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-semibold">Live Chat</span>
          </Button>
        </div>
      </div>
    </>
  );
}
