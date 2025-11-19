import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

export default function LazyImage({ 
  src, 
  alt, 
  priority = false,
  className = '',
  width,
  height,
  fill = false,
}: LazyImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      priority={priority}
      className={className}
    />
  );
}
