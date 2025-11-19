import { MetadataRoute } from 'next';
import serviceManifest from '@/data/pages/services/manifest.json';
import locationManifest from '@/data/pages/locations/manifest.json';

const SITE_URL = 'https://www.intelligentdesignac.com';

// Service name mapping for URL generation
const SERVICE_NAME_REVERSE_MAP: Record<string, string> = {
  'h-v-a-c': 'hvac',
};

export default function sitemap(): MetadataRoute.Sitemap {
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

  // Service + Location pages (from serviceLocations)
  Object.entries(serviceManifest.serviceLocations || {}).forEach(([service, locations]: [string, any]) => {
    Object.keys(locations).forEach((location) => {
      // Convert service key to URL format (h-v-a-c → hvac)
      const urlService = SERVICE_NAME_REVERSE_MAP[service] || service;
      const slug = `${urlService}-${location}`;
      
      entries.push({
        url: `${SITE_URL}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });
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

  // Blog posts (if you have a blog index)
  // TODO: Add blog post URLs from blog manifest if needed

  return entries;
}
