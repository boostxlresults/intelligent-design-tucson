import { Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";

export default function Hero() {
  return (
    <section className="relative min-h-[450px] md:min-h-[500px] flex items-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-van.webp"
          alt="Intelligent Design service van and professional technician at a Tucson Arizona home, providing HVAC, plumbing, solar, electrical, and roofing services"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Left-to-right gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10"></div>
      </div>

      {/* Content - Positioned on left side */}
      <div className="relative z-10 w-full px-4 md:px-6 lg:px-8 pt-6 md:pt-8 lg:pt-12 pb-8 md:pb-10">
        <div className="max-w-3xl md:ml-12 lg:ml-16 xl:ml-24">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Tucson's Highest-Rated Home Service Experts
          </h1>

          {/* Services Subheading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-4 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:whitespace-nowrap">
            HVAC • Plumbing • Roofing • Solar • Electrical
          </h2>

          {/* Subheadline */}
          <div className="mb-4 space-y-2">
            <p className="text-lg md:text-xl text-white font-semibold drop-shadow-[0_8px_24px_rgba(0,0,0,1)] drop-shadow-[0_4px_12px_rgba(0,0,0,1)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Family-Owned | Veteran-Owned | Locally Owned Since 1979
            </p>
            <div className="space-y-2 text-white">
              <p className="text-base md:text-lg flex items-center gap-2 drop-shadow-[0_8px_24px_rgba(0,0,0,1)] drop-shadow-[0_4px_12px_rgba(0,0,0,1)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <span>⚡</span> Fast Response Times
              </p>
              <p className="text-base md:text-lg flex items-center gap-2 drop-shadow-[0_8px_24px_rgba(0,0,0,1)] drop-shadow-[0_4px_12px_rgba(0,0,0,1)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <span>👨‍🔧</span> Expert, Certified Technicians
              </p>
              <p className="text-base md:text-lg flex items-center gap-2 drop-shadow-[0_8px_24px_rgba(0,0,0,1)] drop-shadow-[0_4px_12px_rgba(0,0,0,1)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <span>🏠</span> Guaranteed Satisfaction for Every Tucson Home
              </p>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mb-4 text-gray-300 drop-shadow-[0_24px_64px_rgba(0,0,0,1)] drop-shadow-[0_16px_48px_rgba(0,0,0,1)] drop-shadow-[0_8px_32px_rgba(0,0,0,1)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {/* Mobile: Stacked layout */}
            <div className="md:hidden flex flex-col items-center space-y-1">
              <div className="flex items-center gap-1.5" data-testid="text-rating">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-lg">4.97 Rating</span>
              </div>
              <div className="font-semibold text-lg" data-testid="text-reviews">
                22,000+ <span className="text-2xl">⭐⭐⭐⭐⭐</span> Reviews
              </div>
              <div className="flex items-center gap-4 mt-2">
                <span className="font-semibold text-lg" data-testid="text-bbb">BBB A+</span>
                <span className="text-gray-300/80">•</span>
                <span className="font-semibold text-lg" data-testid="text-availability">24/7 Service</span>
              </div>
            </div>
            
            {/* Desktop: Single line */}
            <div className="hidden md:flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex items-center gap-1.5" data-testid="text-rating">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-lg">4.97 Rating</span>
              </div>
              <span className="text-gray-300/80">•</span>
              <span className="font-semibold text-lg" data-testid="text-reviews">22,000+ ⭐⭐⭐⭐⭐ Reviews</span>
              <span className="text-gray-300/80">•</span>
              <span className="font-semibold text-lg" data-testid="text-bbb">BBB A+</span>
              <span className="text-gray-300/80">•</span>
              <span className="font-semibold text-lg" data-testid="text-availability">24/7 Service</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <SchedulerEmbed
              triggerText="Schedule Service"
              variant="destructive"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            />
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 h-auto bg-yellow-400 border-2 border-yellow-500 text-gray-900 hover:bg-yellow-500 font-bold"
              asChild
            >
              <a href="tel:+15203332665" data-testid="button-call-emergency">
                <Phone className="w-5 h-5 mr-2" />
                Call: (520) 333-2665
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
