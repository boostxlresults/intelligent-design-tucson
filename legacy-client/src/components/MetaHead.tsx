import { Helmet } from 'react-helmet-async';

interface OpenGraphTag {
  property: string;
  content: string;
}

interface TwitterTag {
  name: string;
  content: string;
}

interface MetaHeadProps {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
  openGraph?: OpenGraphTag[];
  twitter?: TwitterTag[];
}

export function MetaHead({
  title,
  description,
  canonical,
  robots = 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  openGraph = [],
  twitter = [],
}: MetaHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robots} />
      
      {openGraph.map((tag, index) => (
        <meta key={`og-${index}`} property={tag.property} content={tag.content} />
      ))}
      
      {twitter.map((tag, index) => (
        <meta key={`twitter-${index}`} name={tag.name} content={tag.content} />
      ))}
    </Helmet>
  );
}
