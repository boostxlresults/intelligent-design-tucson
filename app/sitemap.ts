import { MetadataRoute } from 'next';
import serviceManifest from '@/data/pages/services/manifest.json';
import locationManifest from '@/data/pages/locations/manifest.json';
import noindexSlugs from '@/data/noindex-service-slugs.json';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

// Location-variant slugs excluded from sitemap (noindexed)
const NOINDEX_SET = new Set(noindexSlugs.slugs);

const SITE_URL = 'https://www.idesignac.com';

// Service name mapping for URL generation
const SERVICE_NAME_REVERSE_MAP: Record<string, string> = {
  'h-v-a-c': 'hvac',
};

// Blog categories
const BLOG_CATEGORIES = ['hvac', 'plumbing', 'solar', 'electrical', 'roofing', 'home-tips'];

async function getBlogPosts(): Promise<{ category: string; slug: string; lastModified: Date }[]> {
  const posts: { category: string; slug: string; lastModified: Date }[] = [];
  const blogBasePath = path.join(process.cwd(), 'public', 'content', 'blog');

  for (const category of BLOG_CATEGORIES) {
    try {
      const categoryPath = path.join(blogBasePath, category);
      const files = await fs.readdir(categoryPath);
      const mdFiles = files.filter(file => file.endsWith('.md'));

      for (const file of mdFiles) {
        const filePath = path.join(categoryPath, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const { data } = matter(content);
        
        const slug = file.replace('.md', '');
        const lastModified = data.updatedAt 
          ? new Date(data.updatedAt) 
          : data.publishedAt 
            ? new Date(data.publishedAt) 
            : new Date();

        posts.push({
          category,
          slug,
          lastModified,
        });
      }
    } catch (error) {
      console.error(`Error reading blog category ${category}:`, error);
    }
  }

  return posts;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  
  // Homepage
  entries.push({
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // Core pages
  const corePages = [
    '/about',
    '/contact',
    '/careers',
    '/customer-reviews',
    '/financing',
    '/family-protection-plans',
    '/guarantees',
    '/privacy-policy',
    '/service-areas',
    '/special-offers',
    '/resources',
    '/blog',
  ];

  corePages.forEach((page) => {
    entries.push({
      url: `${SITE_URL}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Service pages (from services manifest - only include core pages, exclude location variants)
  Object.keys(serviceManifest.services).forEach((serviceKey) => {
    // Skip internal keys that aren't actual pages
    if (serviceKey.startsWith('_')) return;
    
    // Skip location-variant pages (noindexed for duplicate content)
    if (NOINDEX_SET.has(serviceKey)) return;
    
    // Convert manifest key to URL format if needed
    const urlSlug = SERVICE_NAME_REVERSE_MAP[serviceKey] || serviceKey;
    
    entries.push({
      url: `${SITE_URL}/services/${urlSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // NOTE: Service + Location pages are already included via serviceManifest.services above
  // The service-locations manifest uses legacy slugs without hyphens (e.g., "casasadobes")
  // which don't match the actual page URLs (e.g., "casas-adobes"), so we skip it.

  // Location pages (service area pages - canonical URL uses /service-areas/ prefix)
  Object.keys(locationManifest.locations).forEach((locationSlug) => {
    entries.push({
      url: `${SITE_URL}/service-areas/${locationSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Blog category pages
  BLOG_CATEGORIES.forEach((category) => {
    entries.push({
      url: `${SITE_URL}/blog/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    });
  });

  // Individual blog posts
  const blogPosts = await getBlogPosts();
  blogPosts.forEach((post) => {
    entries.push({
      url: `${SITE_URL}/blog/${post.category}/${post.slug}`,
      lastModified: post.lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return entries;
}
