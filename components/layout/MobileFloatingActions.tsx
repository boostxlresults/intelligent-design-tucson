'use client';

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SchedulerEmbed from "../integrations/SchedulerEmbed";
import { trackPhoneClick, trackChatOpen } from "@/lib/analytics";

export default function MobileFloatingActions() {
  const handleTextUsClick = () => {
    trackChatOpen();

    // Strategy 1: Click the actual Broccoli chat button by its known ID
    const broccoliButton = document.getElementById("broccoli-chat-widget-button");
    if (broccoliButton) {
      broccoliButton.click();
      return;
    }

    // Strategy 2: Try the widget container's first button child
    const widgetContainer = document.getElementById("broccoli-chat-widget-container");
    if (widgetContainer) {
      const btn = widgetContainer.querySelector("button");
      if (btn) {
        (btn as HTMLElement).click();
        return;
      }
    }

    // Strategy 3: Try the Broccoli JS API directly if available
    if (typeof (window as any).BroccoliChatWidget?.open === "function") {
      (window as any).BroccoliChatWidget.open();
      return;
    }

    // Strategy 4: Widget hasn't loaded yet — wait up to 5s then retry
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const btn =
        document.getElementById("broccoli-chat-widget-button") ||
        document.querySelector("#broccoli-chat-widget-container button");
      if (btn) {
        (btn as HTMLElement).click();
        clearInterval(interval);
      } else if (typeof (window as any).BroccoliChatWidget?.open === "function") {
        (window as any).BroccoliChatWidget.open();
        clearInterval(interval);
      } else if (attempts >= 10) {
        clearInterval(interval);
      }
    }, 500);
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
            <a href="tel:5203332665" data-testid="button-mobile-call" onClick={() => trackPhoneClick('mobile_floating')}>
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

          {/* Text Us - Opens Broccoli AI Chat widget */}
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
