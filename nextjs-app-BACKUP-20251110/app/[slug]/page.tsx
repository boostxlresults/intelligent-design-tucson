import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import * as serviceExports from '@/data/pages/services';
import * as locationExports from '@/data/pages/locations';
import type { ServicePageData, LocationPageData } from '@/types/services';

// Import the actual page components (we'll create these next)
import ServicePageComponent from '@/components/pages/ServicePage';
import LocationPageComponent from '@/components/pages/LocationPage';

// Map all data by slug
const serviceData: Record<string, ServicePageData> = Object.values(serviceExports).reduce((acc, data: ServicePageData) => {
  acc[data.slug] = data;
  return acc;
}, {} as Record<string, ServicePageData>);

const locationData: Record<string, LocationPageData> = Object.values(locationExports).reduce((acc, data: LocationPageData) => {
  acc[data.slug] = data;
  return acc;
}, {} as Record<string, LocationPageData>);

// Determine if slug is service or location
function getPageData(slug: string): { type: 'service'; data: ServicePageData } | { type: 'location'; data: LocationPageData } | null {
  if (serviceData[slug]) {
    return { type: 'service', data: serviceData[slug] };
  }
  if (locationData[slug]) {
    return { type: 'location', data: locationData[slug] };
  }
  return null;
}

// Generate static params for ALL pages (services + locations)
export async function generateStaticParams() {
  const serviceSlugs = Object.keys(serviceData).map((slug) => ({ slug }));
  const locationSlugs = Object.keys(locationData).map((slug) => ({ slug }));
  return [...serviceSlugs, ...locationSlugs];
}

// Server-side metadata generation
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const pageData = getPageData(params.slug);
  
  if (!pageData) {
    return { title: 'Page Not Found' };
  }

  // Return appropriate metadata based on type
  return {
    title: pageData.data.title,
    description: pageData.data.description,
  };
}

// Unified page component that routes to correct template
export default function UnifiedPage({ params }: { params: { slug: string } }) {
  const pageData = getPageData(params.slug);

  if (!pageData) {
    notFound();
  }

  // Render appropriate component based on type
  if (pageData.type === 'service') {
    return <ServicePageComponent data={pageData.data} />;
  } else {
    return <LocationPageComponent data={pageData.data} />;
  }
}
