import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { generateMetadata as generateFullMetadata } from '@/lib/seo/generateMetadata';
import * as serviceExports from '@/data/pages/services';
import * as locationExports from '@/data/pages/locations';
import serviceManifest from '@/data/pages/services/manifest.json';
import locationManifest from '@/data/pages/locations/manifest.json';
import serviceLocationsManifest from '@/data/pages/service-locations/manifest.json';
import type { ServicePageData, LocationPageData } from '@/types/services';

interface DynamicServiceLocationPageProps {
  params: Promise<{ slug: string }>;
}

// Force static generation for all pages (optimal for SEO)
export const dynamic = 'force-static';
export const dynamicParams = false; // Only generate paths from generateStaticParams

// Generate static params for all service-location AND location slugs at root level
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  // First, add flat service slugs from services object that include hyphens
  Object.keys(serviceManifest.services).forEach((slug) => {
    if (slug.includes('-')) {
      params.push({ slug });
    }
  });
  
  // Then, add service-location combinations from service-locations manifest
  serviceLocationsManifest.forEach((entry) => {
    // Build flat slug: service-location (e.g., hvac-tucson, plumbing-orovalley)
    params.push({ slug: `${entry.service}-${entry.location}` });
  });
  
  // Finally, add location-only slugs (e.g., oro-valley, gladden-farms)
  Object.keys(locationManifest.locations).forEach((slug) => {
    params.push({ slug });
  });
  
  return params;
}

// Service name mapping: URL format → Manifest key format
const SERVICE_NAME_MAP: Record<string, string> = {
  'hvac': 'h-v-a-c',
  'h-v-a-c': 'h-v-a-c',
};

// Reverse mapping: Manifest key → URL format (for generateStaticParams)
const SERVICE_NAME_REVERSE_MAP: Record<string, string> = {
  'h-v-a-c': 'hvac',
};

// Parse slug to get service data from manifest (check both flat and nested)
function getServiceData(slug: string): { dataFile: string; type: 'service' } | null {
  // First, try flat services lookup
  const flatData = (serviceManifest.services as any)[slug];
  if (flatData) {
    return { ...flatData, type: 'service' };
  }
  
  // Then, try service-location combinations from service-locations manifest
  // Parse slug into service-location (e.g., hvac-tucson → hvac + tucson)
  const parts = slug.split('-');
  if (parts.length < 2) return null;
  
  // Try different combinations (service could be multi-word like "solar-installation")
  for (let i = 1; i < parts.length; i++) {
    const service = parts.slice(0, i).join('-');
    const location = parts.slice(i).join('-');
    
    // Find matching entry in service-locations manifest
    const manifestEntry = serviceLocationsManifest.find(
      entry => entry.service === service && entry.location === location
    );
    
    if (manifestEntry) {
      return { 
        dataFile: manifestEntry.file.replace('.ts', ''),
        type: 'service' 
      };
    }
  }
  
  return null;
}

// Parse slug to get location data from manifest
function getLocationData(slug: string): { dataFile: string; type: 'location' } | null {
  const locationData = (locationManifest.locations as any)[slug];
  if (locationData) {
    return { ...locationData, type: 'location' };
  }
  return null;
}

// Get page data (try service first, then location)
function getPageData(slug: string): { dataFile: string; type: 'service' | 'location' } | null {
  // Try service data first
  const serviceData = getServiceData(slug);
  if (serviceData) {
    return serviceData;
  }
  
  // Fall back to location data
  return getLocationData(slug);
}

// Generate metadata for SEO (full implementation with canonical, OG, Twitter)
export async function generateMetadata({ params }: DynamicServiceLocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const manifestEntry = getPageData(slug);
  
  if (!manifestEntry) {
    return {
      title: "Page Not Found | Intelligent Design",
    };
  }

  // Load data using dataFile based on type
  const dataKey = `${manifestEntry.dataFile}Data`;
  
  if (manifestEntry.type === 'service') {
    const serviceData = (serviceExports as any)[dataKey] as ServicePageData | undefined;
    if (!serviceData) {
      return { title: "Page Not Found | Intelligent Design" };
    }
    
    // Use comprehensive metadata generator with full SEO stack
    return generateFullMetadata({
      title: serviceData.title,
      description: serviceData.description,
      canonicalUrl: `/${slug}`,
      imageUrl: serviceData.heroImage,
      type: 'website'
    });
  } else {
    const locationData = (locationExports as any)[dataKey] as LocationPageData | undefined;
    if (!locationData) {
      return { title: "Page Not Found | Intelligent Design" };
    }
    
    // Use comprehensive metadata generator with full SEO stack
    return generateFullMetadata({
      title: locationData.title,
      description: locationData.description,
      canonicalUrl: `/${slug}`,
      imageUrl: locationData.heroImage,
      type: 'website'
    });
  }
}

// Main page component - handles root-level service-location AND location URLs
export default async function DynamicRoute({ params }: DynamicServiceLocationPageProps) {
  const { slug } = await params;
  const manifestEntry = getPageData(slug);
  
  if (!manifestEntry) {
    notFound();
  }

  // Load data using dataFile based on type
  const dataKey = `${manifestEntry.dataFile}Data`;
  
  if (manifestEntry.type === 'service') {
    const serviceData = (serviceExports as any)[dataKey] as ServicePageData | undefined;
    if (!serviceData) {
      notFound();
    }
    
    // Use ServicePage component for service pages
    // NOTE: JSON-LD schemas are now injected by proxy.ts at network boundary
    const ServicePage = (await import('@/components/pages/ServicePage')).default;
    return <ServicePage data={serviceData} />;
  } else {
    const locationData = (locationExports as any)[dataKey] as LocationPageData | undefined;
    if (!locationData) {
      notFound();
    }
    
    // Use LocationPage component for location pages
    // NOTE: JSON-LD schemas are now injected by proxy.ts at network boundary
    const LocationPage = (await import('@/components/pages/LocationPage')).default;
    return <LocationPage data={locationData} />;
  }
}
