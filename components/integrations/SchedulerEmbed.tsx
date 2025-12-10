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
  // ServiceTitan Scheduling Pro direct link
  // This opens in a new tab which avoids iframe/CORS issues
  const schedulerUrl = `https://book.servicetitan.com/?w=${process.env.NEXT_PUBLIC_SERVICETITAN_API_KEY || 'm1cp1a9zj306h48ohavpwg8w'}`;

  return (
    <Button 
      size={size} 
      variant={variant} 
      className={className}
      data-testid={dataTestId}
      asChild
    >
      <a 
        href={schedulerUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Calendar className={verticalLayout ? iconClassName : `${iconClassName} mr-2`} />
        <span className={textClassName}>{triggerText}</span>
      </a>
    </Button>
  );
}
