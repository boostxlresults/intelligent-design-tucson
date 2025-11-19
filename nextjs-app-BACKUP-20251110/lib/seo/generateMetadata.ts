/**
 * Metadata Generator for Next.js Migration
 * Standardizes Next.js Metadata API usage across all pages
 * 
 * NOTE: This file is for the FUTURE Next.js migration project.
 * The import error for 'next' is expected in the current React project.
 * This file will work correctly once copied to the Next.js project.
 * 
 * Usage in Next.js page:
 * import { generateMetadata } from '@/lib/seo/generateMetadata';
 * export const metadata = generateMetadata({
 *   title: 'HVAC Services Tucson',
 *   description: '...',
 *   canonicalUrl: '/hvac-tucson'
 * });
 */

// @ts-ignore - Next.js will be available in migration project
import { Metadata } from 'next';

export interface MetadataOptions {
  title: string;
  description: string;
  canonicalUrl: string;
  imageUrl?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  robots?: {
    index?: boolean;
    follow?: boolean;
    maxImagePreview?: 'none' | 'standard' | 'large';
  };
}

const DEFAULT_BASE_URL = 'https://intelligentdesignhvac.com';
const DEFAULT_IMAGE = '/og-image.jpg';

export function generateMetadata(options: MetadataOptions): Metadata {
  const {
    title,
    description,
    canonicalUrl,
    imageUrl = DEFAULT_IMAGE,
    keywords = [],
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    robots = {
      index: true,
      follow: true,
      maxImagePreview: 'large'
    }
  } = options;

  const fullUrl = canonicalUrl.startsWith('http') 
    ? canonicalUrl 
    : `${DEFAULT_BASE_URL}${canonicalUrl}`;
    
  const fullImageUrl = imageUrl.startsWith('http')
    ? imageUrl
    : `${DEFAULT_BASE_URL}${imageUrl}`;

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    alternates: {
      canonical: fullUrl
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      type,
      siteName: 'Intelligent Design Air Conditioning, Plumbing, Solar & Electric',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl]
    },
    robots: {
      index: robots.index ?? true,
      follow: robots.follow ?? true,
      googleBot: {
        index: robots.index ?? true,
        follow: robots.follow ?? true,
        'max-image-preview': robots.maxImagePreview ?? 'large'
      }
    }
  };

  // Add article-specific metadata
  if (type === 'article' && (publishedTime || modifiedTime || author)) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined
    } as any;
  }

  return metadata;
}
