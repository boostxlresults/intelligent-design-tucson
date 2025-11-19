/**
 * Blog System Types
 * TypeScript interfaces for the blog post structure
 */

export interface BlogFrontmatter {
  title: string;
  description: string;
  category: string;
  tags: string[];
  heroImage?: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  oldUrl?: string;
  canonicalUrl?: string;
  relatedServices?: string[];
  author?: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  frontmatter: BlogFrontmatter;
  content: string;
  htmlContent: string;
  readingTime: number;
}

export interface BlogPostMeta {
  slug: string;
  category: string;
  title: string;
  description: string;
  heroImage?: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  tags: string[];
}

export const BLOG_CATEGORIES = ['hvac', 'plumbing', 'solar', 'electrical', 'roofing', 'home-tips'] as const;
export type BlogCategory = typeof BLOG_CATEGORIES[number];
