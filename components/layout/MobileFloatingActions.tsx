'use client';

import { useEffect, useRef } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SchedulerEmbed from "../integrations/SchedulerEmbed";

export default function MobileFloatingActions() {
  const hatchLauncherRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Only run on mobile/tablet
    if (window.innerWidth >= 1024) return;

    const hideHatchLauncher = () => {
      const hatchChat = document.querySelector('hatch-chat');
      if (!hatchChat?.shadowRoot) return;

      // Find the launcher button inside shadow DOM
      const launcher = hatchChat.shadowRoot.querySelector('button, [role="button"], .launcher, [class*="launcher"], [class*="bubble"]');
      if (launcher && launcher instanceof HTMLElement) {
        hatchLauncherRef.current = launcher;
        launcher.style.visibility = 'hidden';
        launcher.style.pointerEvents = 'none';
        launcher.style.opacity = '0';
        launcher.style.position = 'fixed';
        launcher.style.bottom = '-9999px';
      }
    };

    // Wait for HatchChat to load and hide launcher
    const checkInterval = setInterval(() => {
      const hatchChat = document.querySelector('hatch-chat');
      if (hatchChat?.shadowRoot) {
        hideHatchLauncher();
        
        // Watch for mutations in case widget re-renders
        const observer = new MutationObserver(() => {
          hideHatchLauncher();
        });
        observer.observe(hatchChat.shadowRoot, { childList: true, subtree: true });
        
        clearInterval(checkInterval);
      }
    }, 500);

    // Cleanup after 10 seconds if widget never loads
    const timeout = setTimeout(() => clearInterval(checkInterval), 10000);

    return () => {
      clearInterval(checkInterval);
      clearTimeout(timeout);
    };
  }, []);

  const handleChatClick = () => {
    // Click the hidden launcher button to open the chat
    if (hatchLauncherRef.current) {
      // Temporarily make it clickable
      const launcher = hatchLauncherRef.current;
      const originalPointerEvents = launcher.style.pointerEvents;
      launcher.style.pointerEvents = 'auto';
      launcher.click();
      launcher.style.pointerEvents = originalPointerEvents;
      return;
    }

    // Fallback: try to find and click the launcher
    const hatchChat = document.querySelector('hatch-chat');
    if (hatchChat?.shadowRoot) {
      const launcher = hatchChat.shadowRoot.querySelector('button, [role="button"]');
      if (launcher && launcher instanceof HTMLElement) {
        launcher.click();
      }
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
