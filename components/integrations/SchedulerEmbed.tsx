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
    _scheduler?: {
      show: (config: { schedulerId: string }) => void;
    };
  }
}

const SCHEDULER_ID = process.env.NEXT_PUBLIC_SERVICETITAN_SCHEDULER_ID || 'sched_vwgezlwi56yyvwdb0nzlng14';
const API_KEY = process.env.NEXT_PUBLIC_SERVICETITAN_API_KEY || 'm1cp1a9zj306h48ohavpwg8w';

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

  useEffect(() => {
    // Load ServiceTitan Scheduling Pro script
    const existingScript = document.getElementById('servicetitan-scheduler-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'servicetitan-scheduler-script';
      script.src = `https://book.servicetitan.com/js/sb.min.js?w=${API_KEY}`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleClick = () => {
    // Use ServiceTitan's official _scheduler.show() method
    if (window._scheduler?.show) {
      window._scheduler.show({ schedulerId: SCHEDULER_ID });
    } else {
      // Fallback: open in new tab if script hasn't loaded yet
      window.open(`https://book.servicetitan.com/?w=${API_KEY}`, '_blank', 'noopener,noreferrer');
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
