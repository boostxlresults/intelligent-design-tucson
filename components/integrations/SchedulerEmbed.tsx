'use client';

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

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
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = process.env.NEXT_PUBLIC_SERVICETITAN_API_KEY || 'm1cp1a9zj306h48ohavpwg8w';
  const schedulerUrl = `https://book.servicetitan.com/?w=${apiKey}`;

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      setIsLoading(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button 
          size={size} 
          variant={variant} 
          className={className}
          data-testid={dataTestId}
        >
          <Calendar className={verticalLayout ? iconClassName : `${iconClassName} mr-2`} />
          <span className={textClassName}>{triggerText}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Schedule Service Appointment</DialogTitle>
        </VisuallyHidden>
        <div className="w-full h-full relative">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="text-muted-foreground">Loading scheduler...</p>
            </div>
          )}
          <iframe
            src={schedulerUrl}
            className="w-full h-full border-0"
            title="Schedule Service Appointment"
            onLoad={() => setIsLoading(false)}
            allow="geolocation"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
