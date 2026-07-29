interface LocationMapProps {
  className?: string;
}

/**
 * Responsive, lazy-loaded Google Maps embed of the Intelligent Design location.
 * 16:9 aspect ratio, deferred (loading="lazy") so it doesn't affect above-the-fold performance.
 */
export default function LocationMap({ className = "" }: LocationMapProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-border ${className}`}
      style={{ aspectRatio: "16 / 9" }}
    >
      <iframe
        title="Intelligent Design Air Conditioning, Plumbing, Solar & Electric location on Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.510151372964!2d-110.9540688!3d32.265512199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d6746e9ce30dbd%3A0x7a9eb98f9305d5a8!2sIntelligent%20Design%20Air%20Conditioning%2C%20Plumbing%2C%20Solar%2C%20%26%20Electric!5e1!3m2!1sen!2sus!4v1785345499294!5m2!1sen!2sus"
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
