'use client';

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useScheduler } from "@/components/integrations/ServiceTitanScheduler";
import { trackScheduleOpen } from "@/lib/analytics";

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent navigation — open the widget instead
    trackScheduleOpen(dataTestId);
    openScheduler();
  };

  return (
    // Wrapping in <a href="/schedule"> makes this crawlable by Google/Lighthouse.
    // The onClick handler intercepts the click and opens the ServiceTitan widget
    // instead of navigating. Users with JS disabled will navigate to /schedule.
    <a
      href="/schedule"
      onClick={handleClick}
      className="inline-flex"
      aria-label={`${triggerText} — opens scheduling widget`}
      data-testid={`link-${dataTestId}`}
    >
      <Button
        size={size}
        variant={variant}
        className={className}
        data-testid={dataTestId}
        disabled={isLoading}
        tabIndex={-1} // Prevent double-tab-stop (the <a> is the focusable element)
        aria-hidden="true" // Screen readers use the <a> label, not the button
      >
        <Calendar className={verticalLayout ? iconClassName : `${iconClassName} mr-2`} />
        <span className={textClassName}>{isLoading ? "Loading..." : triggerText}</span>
      </Button>
    </a>
  );
}
