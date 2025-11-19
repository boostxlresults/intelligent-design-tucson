interface GoogleMapEmbedProps {
  width?: string;
  height?: string;
  className?: string;
}

export default function GoogleMapEmbed({
  width = "100%",
  height = "450",
  className = "",
}: GoogleMapEmbedProps) {
  // Official Google Business Profile embed for Intelligent Design Tucson
  const businessEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7257.020302745928!2d-110.9540688!3d32.265512199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d6746e9ce30dbd%3A0x7a9eb98f9305d5a8!2sIntelligent%20Design%20Air%20Conditioning%2C%20Plumbing%2C%20Solar%2C%20%26%20Electric!5e1!3m2!1sen!2sus!4v1762191663859!5m2!1sen!2sus";
  
  const address = "1145 E Fort Lowell Rd, Tucson, AZ 85719";

  return (
    <div className={`relative ${className}`} data-testid="container-google-map">
      <iframe
        src={businessEmbedUrl}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Intelligent Design Tucson Location Map"
        className="rounded-lg w-full"
        data-testid="iframe-google-map"
      />
      <div className="mt-3 text-sm text-muted-foreground text-center">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-elevate px-3 py-1 rounded-md inline-block text-primary font-semibold"
          data-testid="link-directions"
        >
          Get Directions →
        </a>
      </div>
    </div>
  );
}
