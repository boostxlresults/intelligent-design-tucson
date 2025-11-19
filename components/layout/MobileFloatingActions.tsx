'use client';

import { Phone, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import SchedulerEmbed from "../integrations/SchedulerEmbed";

export default function MobileFloatingActions() {
  const { toast } = useToast();

  const handleChatClick = () => {
    // TODO: Integrate with your preferred live chat service
    // Popular options: Tawk.to, Drift, Intercom, LiveChat, Zendesk Chat
    console.log("Live Chat button clicked");
    toast({
      title: "Live Chat Coming Soon",
      description: "We're setting up our live chat feature. For immediate assistance, please call us at (520) 333-2665.",
      duration: 5000,
    });
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
