import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceLocationPage from '@/components/pages/ServiceLocationPage';
import ClientSchemas from '@/components/schemas/ClientSchemas';
import { getServiceLocationSchemas } from '@/components/schemas/ServiceLocationSchemas';
import { generateServiceLocationMetadata } from '@/lib/seo';
import * as serviceExports from '@/data/pages/services';
import serviceLocationsManifest from '@/data/pages/service-locations/manifest.json';
import type { ServicePageData } from '@/types/services';

interface ServiceLocationPageProps {
  params: Promise<{
    service: string;
    location: string;
  }>;
}

// Force static generation for all pages (optimal for SEO)
export const dynamic = 'force-static';
export const dynamicParams = false; // Only generate paths from generateStaticParams

// Generate static params for all service×location combinations from manifest
export async function generateStaticParams() {
  return serviceLocationsManifest.map(entry => ({
    service: entry.service,
    location: entry.location
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const { service, location } = await params;
  
  // Find entry in manifest
  const manifestEntry = serviceLocationsManifest.find(
    entry => entry.service === service && entry.location === location
  );
  
  if (!manifestEntry) {
    return {
      title: "Page Not Found | Intelligent Design",
    };
  }

  // Load data using file name
  const dataKey = `${manifestEntry.file.replace('.ts', '')}Data`;
  const serviceData = (serviceExports as any)[dataKey] as ServicePageData | undefined;

  if (!serviceData) {
    return {
      title: "Page Not Found | Intelligent Design",
    };
  }

  // Extract location name for title (capitalize and format)
  const locationName = location
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Generate schemas for JSON-LD
  const schemas = getServiceLocationSchemas(serviceData, service, location, locationName);
  
  // Return base metadata (schemas handled by ClientSchemas component)
  return generateServiceLocationMetadata(
    serviceData.serviceName,
    locationName,
    serviceData.description,
    service,
    location
  );
}

// Main page component - renders the service location page
export default async function ServiceLocationRoute({ params }: ServiceLocationPageProps) {
  const { service, location } = await params;
  
  // Find entry in manifest
  const manifestEntry = serviceLocationsManifest.find(
    entry => entry.service === service && entry.location === location
  );
  
  if (!manifestEntry) {
    notFound();
  }

  // Load data using file name
  const dataKey = `${manifestEntry.file.replace('.ts', '')}Data`;
  const serviceData = (serviceExports as any)[dataKey] as ServicePageData | undefined;

  if (!serviceData) {
    notFound();
  }
  
  // Extract location name for title (capitalize and format)
  const locationName = location
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Generate schemas for JSON-LD
  const schemas = getServiceLocationSchemas(serviceData, service, location, locationName);
  
  // Render the service location page with schemas
  return (
    <>
      <ClientSchemas schemas={schemas} />
      <ServiceLocationPage serviceData={serviceData} service={service} location={location} />
    </>
  );
}
