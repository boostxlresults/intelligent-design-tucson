import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import LocationPage from '@/components/pages/LocationPage';
import ClientSchemas from '@/components/schemas/ClientSchemas';
import { getLocationSchemas } from '@/components/schemas/LocationSchemas';
import { generateLocationMetadata } from '@/lib/seo';
import type { LocationPageData } from '@/types/services';

// Import all location data
import * as locations from '@/data/pages/locations';

// Type guard to check if a value is valid LocationPageData
function isLocationPageData(value: unknown): value is LocationPageData {
  return (
    typeof value === 'object' &&
    value !== null &&
    'slug' in value &&
    'title' in value &&
    'description' in value &&
    'h1' in value &&
    typeof (value as LocationPageData).slug === 'string'
  );
}

// Build locationData map from all exports
const locationData: Record<string, LocationPageData> = {};
for (const [key, value] of Object.entries(locations)) {
  if (isLocationPageData(value)) {
    locationData[value.slug] = value;
  }
}

// Force static generation for all pages (optimal for SEO)
export const dynamic = 'force-static';
export const dynamicParams = false; // Only generate paths from generateStaticParams

// Generate static params for all locations at build time
export async function generateStaticParams() {
  return Object.keys(locationData).map((slug) => ({
    slug,
  }));
}

// Generate metadata for each location page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = locationData[slug];

  if (!data) {
    return {
      title: 'Location Not Found',
      description: 'The requested location could not be found.',
    };
  }

  // Return base metadata (schemas handled by ClientSchemas component)
  return generateLocationMetadata(data.locationName, data.description, data.slug);
}

// Location page component
export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = locationData[slug];

  if (!data) {
    notFound();
  }

  // Generate JSON-LD schemas using ClientSchemas component
  const schemas = getLocationSchemas(data);

  return (
    <>
      <ClientSchemas schemas={schemas} />
      <LocationPage data={data} />
    </>
  );
}
