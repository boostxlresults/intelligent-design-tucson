import { Star } from "lucide-react";
import LazyImage from "./LazyImage";

const bbbLogoUrl = "/images/bbb-logo.png";

export default function TrustBar() {
  return (
    <section className="py-8 md:py-12 bg-card border-y border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* BBB Badge */}
          <div className="flex items-center gap-4" data-testid="badge-bbb">
            <LazyImage
              src={bbbLogoUrl}
              alt="BBB A+ Accredited Business"
              className="h-20 md:h-24 w-auto"
              width={100}
              height={96}
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block h-16 w-px bg-border" />

          {/* Google Reviews */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-2xl font-bold text-foreground" data-testid="text-google-rating">
              4.97 Rating
            </p>
            <p className="text-sm text-muted-foreground">22,000+ Five-Star Reviews</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-16 w-px bg-border" />

          {/* Family Owned */}
          <div className="text-center">
            <p className="text-3xl font-bold text-primary" data-testid="text-years">45+</p>
            <p className="text-sm text-muted-foreground">Years Serving</p>
            <p className="text-sm text-muted-foreground">Tucson Families</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-16 w-px bg-border" />

          {/* Veteran Owned */}
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">Family & Veteran-Owned</p>
            <p className="text-xs text-muted-foreground mt-1">Since 1979</p>
          </div>
        </div>
      </div>
    </section>
  );
}
