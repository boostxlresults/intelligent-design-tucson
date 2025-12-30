import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
}

/**
 * HeroSection Component
 * 
 * Optimized hero section with Next.js Image for better LCP.
 * Uses priority loading for above-the-fold hero images.
 * 
 * @param imageSrc - Path to hero image (should be WebP for best performance)
 * @param imageAlt - Alt text for accessibility
 * @param overlayOpacity - Overlay opacity 0-1 (default 0.85)
 */
export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  overlayOpacity = 0.85,
  children,
  className = "",
}: HeroSectionProps) {
  return (
    <section className={`relative py-16 md:py-24 overflow-hidden ${className}`}>
      {/* Background Image - Optimized with Next.js Image and priority loading */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: `rgba(13, 45, 122, ${overlayOpacity})` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-4xl">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            data-testid="text-hero-title"
          >
            {title}
          </h1>
          {subtitle && (
            <p 
              className="text-xl text-white/90 mb-8"
              data-testid="text-hero-subtitle"
            >
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
