import { MetadataRoute } from 'next';
import serviceManifest from '@/data/pages/services/manifest.json';
import serviceLocationsManifest from '@/data/pages/service-locations/manifest.json';
import locationManifest from '@/data/pages/locations/manifest.json';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

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

  // Service pages (standalone services from services object)
  Object.keys(serviceManifest.services).forEach((serviceKey) => {
    // Skip internal keys that aren't actual pages
    if (serviceKey.startsWith('_')) return;
    
    // Convert manifest key to URL format if needed
    const urlSlug = SERVICE_NAME_REVERSE_MAP[serviceKey] || serviceKey;
    
    entries.push({
      url: `${SITE_URL}/${urlSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Service + Location pages (from service-locations manifest)
  serviceLocationsManifest.forEach((entry) => {
    entries.push({
      url: `${SITE_URL}/${entry.service}-${entry.location}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Location pages
  Object.keys(locationManifest.locations).forEach((locationSlug) => {
    entries.push({
      url: `${SITE_URL}/${locationSlug}`,
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
