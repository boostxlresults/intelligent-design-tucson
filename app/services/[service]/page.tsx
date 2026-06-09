import { Metadata } from "next";
import { notFound } from "next/navigation";
import * as serviceExports from "@/data/pages/services";
import type { ServicePageData } from "@/types/services";
import ServicePage from "@/components/pages/ServicePage";
import ClientSchemas from "@/components/schemas/ClientSchemas";
import { getServiceSchemas } from "@/components/schemas/ServiceSchemas";
import { generateServiceMetadata } from "@/lib/seo";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { getRelatedBlogPostsForService, getServiceTypeFromSlug } from "@/lib/seo/getRelatedBlogPosts";
import serviceManifest from "@/data/pages/services/manifest.json";
import noindexSlugs from "@/data/noindex-service-slugs.json";

// Set of location-variant slugs that should not be indexed
const NOINDEX_SLUGS = new Set<string>(noindexSlugs.slugs);

// Build lookup map from manifest: canonical slug -> dataFile
// Only map canonical slugs; aliases are handled by redirects in next.config.ts
const serviceMap: Record<string, string> = {};
Object.entries(serviceManifest.services).forEach(([canonicalSlug, info]) => {
  serviceMap[canonicalSlug] = (info as any).dataFile;
});

// Force static generation for all pages (optimal for SEO)
export const dynamic = 'force-static';
export const dynamicParams = false; // Only generate paths from generateStaticParams

export async function generateStaticParams() {
  // Generate pages for canonical slugs only
  // Aliases are handled by redirects in next.config.ts to avoid duplicate content
  const params: { service: string }[] = [];
  
  // Add canonical slugs
  Object.keys(serviceManifest.services).forEach((canonicalSlug) => {
    params.push({ service: canonicalSlug });
  });
  
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  
  // Resolve via manifest
  const dataFile = serviceMap[serviceSlug];
  if (!dataFile) {
    return {
      title: "Page Not Found | Intelligent Design",
    };
  }

  // Load data using the dataFile name
  const dataKey = `${dataFile}Data`;
  const serviceData = (serviceExports as any)[dataKey] as ServicePageData | undefined;

  if (!serviceData) {
    return {
      title: "Page Not Found | Intelligent Design",
    };
  }

  // Generate schemas for JSON-LD
  const schemas = getServiceSchemas(serviceData, serviceSlug);

  // Check if this is a location-variant page that should be noindexed
  const shouldNoIndex = NOINDEX_SLUGS.has(serviceSlug);

  // Return base metadata with noindex for location variants
  if (shouldNoIndex) {
    return generateSEOMetadata({
      title: `${serviceData.serviceName} | Intelligent Design Tucson`,
      description: serviceData.description,
      path: `/services/${serviceSlug}`,
      image: serviceData.heroImage,
      noIndex: true,
    });
  }

  // Return normal indexed metadata for core service pages
  return generateServiceMetadata(
    serviceData.serviceName,
    serviceData.h1,
    serviceData.description,
    serviceSlug,
    serviceData.heroImage
  );
}

export default async function ServicePageRoute({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: serviceSlug } = await params;
  
  // Resolve via manifest (supports both canonical slugs and aliases)
  const dataFile = serviceMap[serviceSlug];
  if (!dataFile) {
    notFound();
  }

  // Load data using the dataFile name
  const dataKey = `${dataFile}Data`;
  const serviceData = (serviceExports as any)[dataKey] as ServicePageData | undefined;

  if (!serviceData) {
    notFound();
  }

  // Generate JSON-LD schemas using CLIENT component (like GTM which works)
  const schemas = getServiceSchemas(serviceData, serviceSlug);

  // Fetch related blog posts for internal linking
  const serviceType = getServiceTypeFromSlug(serviceSlug);
  const relatedBlogPosts = await getRelatedBlogPostsForService(serviceType, 3);

  return (
    <>
      <ClientSchemas schemas={schemas} />
      <ServicePage 
        data={serviceData} 
        slug={serviceSlug} 
        relatedBlogPosts={relatedBlogPosts}
        serviceType={serviceType}
      />
    </>
  );
}
