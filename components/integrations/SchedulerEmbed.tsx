'use client';

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
    _scheduler?: {
      show: (config: { schedulerId: string }) => void;
    };
  }
}

const SCHEDULER_ID = 'sched_vwgezlwi56yyvwdb0nzlng14';

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

  const handleClick = () => {
    // Use ServiceTitan's official _scheduler.show() method
    // Script is loaded globally in app/layout.tsx
    if (window._scheduler?.show) {
      window._scheduler.show({ schedulerId: SCHEDULER_ID });
    } else {
      console.error('ServiceTitan scheduler not loaded. Check that the script is in layout.tsx');
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
