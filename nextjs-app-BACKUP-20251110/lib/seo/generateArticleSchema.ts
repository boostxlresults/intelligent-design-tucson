/**
 * Article Schema Generator for Next.js Migration
 * Used on blog posts for rich search results
 * 
 * Usage in Next.js page:
 * import { generateArticleSchema } from '@/lib/seo/generateArticleSchema';
 * const schema = generateArticleSchema({
 *   title: 'Blog Post Title',
 *   description: 'Description',
 *   publishedDate: '2024-01-01',
 *   modifiedDate: '2024-01-15',
 *   authorName: 'Intelligent Design Team',
 *   imageUrl: '/blog/image.jpg',
 *   canonicalUrl: '/blog/hvac/post-slug'
 * });
 */

import { BUSINESS_INFO } from './constants';

export interface ArticleSchemaOptions {
  title: string;
  description: string;
  publishedDate: string; // ISO 8601 format
  modifiedDate?: string; // ISO 8601 format
  authorName?: string;
  imageUrl: string;
  canonicalUrl: string;
}

export function generateArticleSchema(options: ArticleSchemaOptions) {
  const {
    title,
    description,
    publishedDate,
    modifiedDate,
    authorName = 'Intelligent Design Team',
    imageUrl,
    canonicalUrl
  } = options;

  const baseUrl = canonicalUrl.split('/').slice(0, 3).join('/');
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;
  const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullImageUrl,
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "url": fullCanonicalUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonicalUrl
    }
  };
}
