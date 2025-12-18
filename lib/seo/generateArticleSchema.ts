/**
 * Article Schema Generator for Next.js Migration
 * Enhanced for blog posts with rich search results and AI/LLM visibility
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
 *   canonicalUrl: '/blog/hvac/post-slug',
 *   articleSection: 'HVAC',
 *   keywords: ['air conditioning', 'hvac repair'],
 *   wordCount: 1500
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
  articleSection?: string; // Category (HVAC, Plumbing, etc.)
  keywords?: string[]; // Article keywords/tags
  wordCount?: number; // Approximate word count
  readingTime?: string; // e.g., "5 min read"
}

export function generateArticleSchema(options: ArticleSchemaOptions) {
  const {
    title,
    description,
    publishedDate,
    modifiedDate,
    authorName = 'Intelligent Design Team',
    imageUrl,
    canonicalUrl,
    articleSection,
    keywords,
    wordCount,
    readingTime
  } = options;

  const baseUrl = canonicalUrl.split('/').slice(0, 3).join('/');
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;
  const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": fullImageUrl,
      "width": "1200",
      "height": "630"
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "author": {
      "@id": `${baseUrl}/#organization`
    },
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "url": fullCanonicalUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullCanonicalUrl
    },
    "inLanguage": "en-US",
    "copyrightHolder": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name
    },
    "copyrightYear": new Date(publishedDate).getFullYear()
  };

  if (articleSection) {
    schema.articleSection = articleSection;
  }

  if (keywords && keywords.length > 0) {
    schema.keywords = keywords.join(', ');
  }

  if (wordCount) {
    schema.wordCount = wordCount;
  }

  if (readingTime) {
    schema.timeRequired = readingTime;
  }

  return schema;
}
