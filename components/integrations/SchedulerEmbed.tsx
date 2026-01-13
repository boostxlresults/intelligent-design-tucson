'use client';

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useScheduler } from "@/components/integrations/ServiceTitanScheduler";

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
  const { openScheduler, isLoading } = useScheduler();

  return (
    <Button 
      size={size} 
      variant={variant} 
      className={className}
      data-testid={dataTestId}
      onClick={openScheduler}
      disabled={isLoading}
    >
      <Calendar className={verticalLayout ? iconClassName : `${iconClassName} mr-2`} />
      <span className={textClassName}>{isLoading ? "Loading..." : triggerText}</span>
    </Button>
  );
}
