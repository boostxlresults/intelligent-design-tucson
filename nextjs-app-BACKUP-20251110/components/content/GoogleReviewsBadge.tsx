import { Star, ExternalLink } from "lucide-react";
import { SiGoogle } from "react-icons/si";

interface GoogleReviewsBadgeProps {
  rating?: number;
  reviewCount?: string;
  variant?: "compact" | "full";
  className?: string;
}

export default function GoogleReviewsBadge({
  rating = 5.0,
  reviewCount = "22,000+",
  variant = "full",
  className = "",
}: GoogleReviewsBadgeProps) {
  const googleReviewsUrl = "https://maps.app.goo.gl/eLz89dNv9q3MdQ9s8";
  
  // Always display 5.0 rating with all stars filled (actual rating is 4.97)
  const displayRating = 5.0;

  if (variant === "compact") {
    return (
      <a
        href={googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 bg-background border border-border hover-elevate active-elevate-2 px-4 py-2 rounded-lg transition-colors ${className}`}
        data-testid="link-google-reviews-compact"
      >
        <SiGoogle className="w-5 h-5 text-primary" />
        <div className="flex items-center gap-1">
          <span className="font-bold text-foreground">{displayRating}</span>
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        </div>
        <span className="text-sm text-muted-foreground">
          ({reviewCount})
        </span>
      </a>
    );
  }

  return (
    <a
      href={googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`block bg-background border border-border hover-elevate active-elevate-2 p-6 rounded-lg transition-colors ${className}`}
      data-testid="link-google-reviews-full"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <SiGoogle className="w-8 h-8 text-primary" />
        </div>
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-3xl font-bold text-foreground">{displayRating}</span>
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          </div>
          <p className="text-sm text-muted-foreground">
            Based on {reviewCount} Google reviews
          </p>
        </div>
      </div>

      {/* Star Rating Display - All 5 stars filled */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-primary font-semibold">
        <span>Read our reviews</span>
        <ExternalLink className="w-4 h-4" />
      </div>
    </a>
  );
}
