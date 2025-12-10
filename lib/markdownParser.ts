import matter from 'gray-matter';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  excerpt?: string;
  category: string;
  tags?: string[];
  heroImage?: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  oldUrl?: string;
  canonicalUrl?: string;
  relatedServices?: string[];
  author?: string;
}

export interface ParsedBlogPost {
  frontmatter: BlogPostFrontmatter;
  content: string;
  htmlContent: string;
  readingTime: number;
  tableOfContents: TableOfContentsItem[];
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export function parseMarkdown(markdownContent: string): ParsedBlogPost {
  const { data, content } = matter(markdownContent);
  
  const frontmatter = data as BlogPostFrontmatter;
  
  // Clean up the content:
  // 1. Remove the first h1 if it matches the title (to avoid duplicate h1s)
  // 2. Remove "Jump to" table of contents section that was scraped
  let cleanedContent = content;
  
  // Remove first h1 that matches the title (handle leading whitespace/newlines)
  const firstH1Match = cleanedContent.match(/^\s*#\s+(.+?)[\r\n]/);
  if (firstH1Match) {
    const h1Text = firstH1Match[1].trim();
    const titleNormalized = frontmatter.title.trim().toLowerCase();
    const h1Normalized = h1Text.toLowerCase();
    if (h1Normalized === titleNormalized || titleNormalized.includes(h1Normalized) || h1Normalized.includes(titleNormalized)) {
      cleanedContent = cleanedContent.replace(/^\s*#\s+.+?[\r\n]+/, '');
    }
  }
  
  // Remove "Jump to" navigation section (scraped artifact)
  cleanedContent = cleanedContent.replace(/^\*\*Jump to\*\*\s*\[.+?\]\(#\)\s*[\r\n]*/m, '');
  
  // Remove table of contents links at the start (numbered section links)
  // Pattern: [1) Something](#anchor) or [1.1) Something](#anchor)
  cleanedContent = cleanedContent.replace(/^\[\d+(?:\.\d+)*\)\s+[^\]]+\]\([^)]+\)\s*[\r\n]*/gm, '');
  
  const htmlContent = convertMarkdownToHTML(cleanedContent);
  
  const readingTime = calculateReadingTime(content);
  
  const tableOfContents = extractTableOfContents(cleanedContent);
  
  return {
    frontmatter,
    content: cleanedContent,
    htmlContent,
    readingTime,
    tableOfContents,
  };
}

export function convertMarkdownToHTML(markdown: string): string {
  const rawHtml = marked.parse(markdown) as string;
  
  // Note: DOMPurify only works in browser, not in SSR
  // Since our markdown content is trusted (not user-generated), 
  // we can safely return the marked output directly for SSR
  // The marked library already provides basic XSS protection
  if (typeof window !== 'undefined') {
    // Client-side: Use DOMPurify if available
    try {
      return DOMPurify.sanitize(rawHtml, {
        ALLOWED_TAGS: [
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
          'p', 'br', 'strong', 'em', 'u', 'strike',
          'ul', 'ol', 'li',
          'a', 'img',
          'blockquote', 'code', 'pre',
          'table', 'thead', 'tbody', 'tr', 'th', 'td',
          'div', 'span',
        ],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel'],
      });
    } catch {
      return rawHtml;
    }
  }
  
  // Server-side: Return marked output directly (trusted content)
  return rawHtml;
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

export function extractTableOfContents(markdown: string): TableOfContentsItem[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: TableOfContentsItem[] = [];
  let match;
  
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    
    toc.push({ id, text, level });
  }
  
  return toc;
}

export function generateArticleSchema(
  post: ParsedBlogPost,
  url: string
): Record<string, any> {
  const { frontmatter, readingTime } = post;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    image: frontmatter.heroImage || '',
    datePublished: frontmatter.publishedAt,
    dateModified: frontmatter.updatedAt || frontmatter.publishedAt,
    author: {
      '@type': 'Organization',
      name: frontmatter.author || 'Intelligent Design Air Conditioning, Plumbing, Solar, & Electric',
      url: 'https://www.idesignac.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.idesignac.com/logo.png',
      },
      sameAs: [
        'https://www.facebook.com/IDesignAC',
        'https://www.instagram.com/intelligentdesignac/',
        'https://www.youtube.com/@intelligentdesigntucson',
        'https://www.bbb.org/us/az/tucson/profile/air-conditioning-contractor/intelligent-design-air-conditioning-plumbing-solar-electric-1286-20032256',
        'https://g.page/r/CajVBZOPuZ56EBE/'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'Intelligent Design Air Conditioning, Plumbing, Solar, & Electric',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.idesignac.com/logo.png',
      },
      foundingDate: '1979',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1145 E Fort Lowell Rd',
        addressLocality: 'Tucson',
        addressRegion: 'AZ',
        postalCode: '85719',
        addressCountry: 'US'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: frontmatter.category,
    keywords: frontmatter.tags?.join(', ') || '',
    timeRequired: `PT${readingTime}M`,
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(
  breadcrumbs: BreadcrumbItem[]
): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
