import { Metadata } from "next";
import { notFound } from "next/navigation";
import * as serviceExports from "@/data/pages/services";
import type { ServicePageData } from "@/types/services";
import ServicePage from "@/components/pages/ServicePage";
import ClientSchemas from "@/components/schemas/ClientSchemas";
import { getServiceSchemas } from "@/components/schemas/ServiceSchemas";
import { generateServiceMetadata } from "@/lib/seo";
import serviceManifest from "@/data/pages/services/manifest.json";

// Build lookup map from manifest: canonical slug -> dataFile
const serviceMap: Record<string, string> = {};
Object.entries(serviceManifest.services).forEach(([canonicalSlug, info]) => {
  serviceMap[canonicalSlug] = (info as any).dataFile;
});

// Add alias mappings: legacy slug -> dataFile
Object.entries(serviceManifest.aliases).forEach(([alias, canonicalSlug]) => {
  const info = (serviceManifest.services as any)[canonicalSlug as string];
  if (info) {
    serviceMap[alias] = info.dataFile;
  }
});

// Force static generation for all pages (optimal for SEO)
export const dynamic = 'force-static';
export const dynamicParams = false; // Only generate paths from generateStaticParams

export async function generateStaticParams() {
  // Generate pages for BOTH canonical slugs AND aliases for SEO
  const params: { service: string }[] = [];
  
  // Add canonical slugs
  Object.keys(serviceManifest.services).forEach((canonicalSlug) => {
    params.push({ service: canonicalSlug });
  });
  
  // Add alias slugs (short versions without -tucson)
  Object.keys(serviceManifest.aliases).forEach((alias) => {
    params.push({ service: alias });
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

  // Return base metadata (schemas handled by ClientSchemas component)
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

  return (
    <>
      <ClientSchemas schemas={schemas} />
      <ServicePage data={serviceData} />
    </>
  );
}
