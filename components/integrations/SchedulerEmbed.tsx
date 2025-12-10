'use client';

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface SchedulerEmbedProps {
  triggerText?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  verticalLayout?: boolean;
  "data-testid"?: string;
}

declare global {
  interface Window {
    ServiceTitan?: {
      setTrackingInfo?: (info: { key: string }) => void;
      openBookingWidget?: () => void;
    };
  }
}

export default function SchedulerEmbed({
  triggerText = "Schedule Now",
  variant = "default",
  size = "lg",
  className = "",
  iconClassName = "w-5 h-5",
  textClassName = "",
  verticalLayout = false,
  "data-testid": dataTestId = "button-schedule",
}: SchedulerEmbedProps) {
  const apiKey = process.env.NEXT_PUBLIC_SERVICETITAN_API_KEY || 'm1cp1a9zj306h48ohavpwg8w';

  useEffect(() => {
    // Load ServiceTitan Scheduling Pro script
    const existingScript = document.getElementById('servicetitan-scheduler-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'servicetitan-scheduler-script';
      script.src = 'https://book.servicetitan.com/js/sb.min.js';
      script.async = true;
      script.onload = () => {
        // Initialize with API key once script is loaded
        if (window.ServiceTitan?.setTrackingInfo) {
          window.ServiceTitan.setTrackingInfo({ key: apiKey });
        }
      };
      document.head.appendChild(script);
    }
  }, [apiKey]);

  const handleClick = () => {
    // Try ServiceTitan's built-in widget opener
    if (window.ServiceTitan?.openBookingWidget) {
      window.ServiceTitan.openBookingWidget();
    } else {
      // Fallback: open in new tab if widget isn't available
      window.open(`https://book.servicetitan.com/?w=${apiKey}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Button 
      size={size} 
      variant={variant} 
      className={className}
      data-testid={dataTestId}
      onClick={handleClick}
    >
      <Calendar className={verticalLayout ? iconClassName : `${iconClassName} mr-2`} />
      <span className={textClassName}>{triggerText}</span>
    </Button>
  );
}
