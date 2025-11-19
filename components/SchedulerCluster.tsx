"use client";

/**
 * SchedulerCluster Component
 * 
 * Automatically injects ServiceTitan scheduler 3 times per page:
 * 1. Hero section (top of page)
 * 2. Middle of content
 * 3. Bottom before footer
 * 
 * Usage: <SchedulerCluster position="hero" /> | "middle" | "bottom"
 */

interface SchedulerClusterProps {
  position: "hero" | "middle" | "bottom";
  className?: string;
}

export function SchedulerCluster({ position, className = "" }: SchedulerClusterProps) {
  // Position-specific styling
  const positionStyles = {
    hero: "mt-6",
    middle: "my-12",
    bottom: "mt-16 mb-8"
  };

  return (
    <div className={`scheduler-embed ${positionStyles[position]} ${className}`} data-testid={`scheduler-${position}`}>
      {/* ServiceTitan Scheduler Embed */}
      <div className="max-w-2xl mx-auto">
        <div 
          className="bg-card border border-border rounded-lg p-6 text-center hover-elevate"
          data-servicetitan-scheduler="true"
        >
          <h3 className="text-xl font-semibold mb-3">Schedule Your Service Today</h3>
          <p className="text-muted-foreground mb-4">
            Fast, reliable service from Tucson's most trusted home services company
          </p>
          <button
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover-elevate active-elevate-2"
            data-testid="button-schedule-service"
          >
            Schedule Service
          </button>
          <p className="text-sm text-muted-foreground mt-3">
            Or call us at <span className="font-semibold">(520) 333-2665</span>
          </p>
        </div>
      </div>
    </div>
  );
}
