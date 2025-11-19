import { useState, useEffect } from "react";
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
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (isOpen && !scriptLoaded) {
      // Load ServiceTitan scheduler script
      const script = document.createElement('script');
      script.src = 'https://embed.scheduler.servicetitan.com/scheduler-v1.js';
      script.async = true;
      script.defer = true;
      script.id = 'se-widget-embed';
      script.setAttribute('data-api-key', 'm1cp1a9zj306h48ohavpwg8w');
      script.setAttribute('data-schedulerid', 'sched_vwgezlwi56yyvwdb0nzlng14');
      
      script.onload = () => {
        setScriptLoaded(true);
      };

      document.body.appendChild(script);

      return () => {
        const existingScript = document.getElementById('se-widget-embed');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [isOpen, scriptLoaded]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
      <DialogContent className="max-w-5xl w-full h-[85vh] p-0 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Schedule Service Appointment</DialogTitle>
        </VisuallyHidden>
        <div className="w-full h-full flex items-center justify-center bg-background">
          {!scriptLoaded ? (
            <div className="flex flex-col items-center gap-4 p-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="text-muted-foreground">Loading scheduler...</p>
            </div>
          ) : (
            <div id="servicetitan-scheduler-container" className="w-full h-full" />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
