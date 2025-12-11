'use client';

import { Phone, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SchedulerEmbed from "../integrations/SchedulerEmbed";

declare global {
  interface Window {
    hatchChat?: {
      open?: () => void;
      toggle?: () => void;
    };
  }
}

export default function MobileFloatingActions() {
  const handleChatClick = () => {
    // HatchChat uses a web component with shadow DOM
    // Try to click the button inside its shadow root
    const hatchChat = document.querySelector('hatch-chat');
    if (hatchChat?.shadowRoot) {
      const button = hatchChat.shadowRoot.querySelector('button, [role="button"], .chat-button, [class*="button"]');
      if (button && button instanceof HTMLElement) {
        button.click();
        return;
      }
    }
    
    // Fallback: Try to click the hatch-chat element itself
    if (hatchChat instanceof HTMLElement) {
      hatchChat.click();
      return;
    }
    
    // Last fallback: Try common chat widget APIs
    if (window.hatchChat?.open) {
      window.hatchChat.open();
      return;
    }
    if (window.hatchChat?.toggle) {
      window.hatchChat.toggle();
      return;
    }
  };

  return (
    <>
      {/* Mobile Floating Action Bar - Only visible on mobile */}
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

          {/* Schedule - Using SchedulerEmbed directly */}
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

          {/* Live Chat */}
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
