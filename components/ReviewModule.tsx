"use client";

import { Star } from "lucide-react";

/**
 * ReviewModule Component
 * 
 * Displays the company's 22,000+ five-star reviews
 * Appears on every page to build trust and credibility
 */

interface ReviewModuleProps {
  variant?: "compact" | "full";
  className?: string;
}

export function ReviewModule({ variant = "full", className = "" }: ReviewModuleProps) {
  const reviewCount = "22,000+";
  const rating = "5.0";

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 ${className}`} data-testid="reviews-compact">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm font-semibold">{rating}</span>
        <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
      </div>
    );
  }

  return (
    <div className={`bg-card border border-border rounded-lg p-8 ${className}`} data-testid="reviews-full">
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Trusted by Tucson Homeowners</h3>
        <div className="flex justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-3xl font-bold mb-2">{rating} out of 5 stars</p>
        <p className="text-xl text-muted-foreground mb-6">
          Based on <span className="font-semibold">{reviewCount}</span> verified reviews
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div>
            <div className="text-3xl font-bold text-primary mb-1">45+</div>
            <div className="text-sm text-muted-foreground">Years Serving Tucson</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">A+</div>
            <div className="text-sm text-muted-foreground">BBB Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Emergency Service</div>
          </div>
        </div>
      </div>
    </div>
  );
}
