'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Script from "next/script";

declare global {
  interface Window {
    SE?: {
      open?: () => void;
      toggle?: () => void;
    };
  }
}

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
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handleClick = () => {
    // Try to open ServiceTitan's scheduler widget
    if (window.SE?.open) {
      window.SE.open();
      return;
    }
    
    // Look for the ServiceTitan widget button and click it
    const stButton = document.querySelector('[data-se-widget], .se-widget-button, [class*="servicetitan"], button[onclick*="SE"]');
    if (stButton instanceof HTMLElement) {
      stButton.click();
      return;
    }
    
    // Fallback: Try to find any element with scheduling-related attributes
    const schedulerElements = document.querySelectorAll('[data-schedulerid], [data-api-key*="m1cp1a9"]');
    schedulerElements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.click();
      }
    });
  };

  return (
    <>
      {/* ServiceTitan Scheduling Pro Widget Script */}
      <Script
        id="se-widget-embed"
        src="https://embed.scheduler.servicetitan.com/scheduler-v1.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
        data-api-key="m1cp1a9zj306h48ohavpwg8w"
        data-schedulerid="sched_vwgezlwi56yyvwdb0nzlng14"
      />
      <Button 
        size={size} 
        variant={variant} 
        className={className}
        data-testid={dataTestId}
        onClick={handleClick}
        data-se-widget="true"
        data-api-key="m1cp1a9zj306h48ohavpwg8w"
        data-schedulerid="sched_vwgezlwi56yyvwdb0nzlng14"
      >
        <Calendar className={verticalLayout ? iconClassName : `${iconClassName} mr-2`} />
        <span className={textClassName}>{triggerText}</span>
      </Button>
    </>
  );
}
