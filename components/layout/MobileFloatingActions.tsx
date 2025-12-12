'use client';

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SchedulerEmbed from "../integrations/SchedulerEmbed";

export default function MobileFloatingActions() {
  const handleTextUsClick = () => {
    document.body.classList.add('hatch-chat-visible');
    
    setTimeout(() => {
      const hatchChat = document.querySelector('hatch-chat');
      if (hatchChat) {
        const shadowRoot = hatchChat.shadowRoot;
        if (shadowRoot) {
          const chatButton = shadowRoot.querySelector('button, .chat-button, [class*="button"], [class*="trigger"]');
          if (chatButton && chatButton instanceof HTMLElement) {
            chatButton.click();
          }
        }
      }
    }, 100);
  };

  return (
    <>
      {/* Mobile Floating Action Bar - Only visible on mobile/tablet */}
      <div className="mobile-floating-bar fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background border-t border-border shadow-lg max-w-full overflow-hidden">
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

          {/* Schedule - Using SchedulerEmbed component */}
          <SchedulerEmbed
            triggerText="Schedule"
            variant="destructive"
            size="sm"
            className="flex-1 flex flex-col items-center gap-1 h-auto py-3"
            iconClassName="w-5 h-5"
            textClassName="text-xs font-semibold"
            verticalLayout={true}
            data-testid="button-mobile-schedule"
          />

          {/* Text Us - Reveals HatchChat widget on mobile/tablet */}
          <Button
            size="sm"
            className="flex-1 flex flex-col items-center gap-1 h-auto py-3 bg-green-600 hover:bg-green-700 text-white border-2 border-green-700"
            onClick={handleTextUsClick}
            data-testid="button-mobile-chat"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-semibold">Text Us</span>
          </Button>
        </div>
      </div>
    </>
  );
}
