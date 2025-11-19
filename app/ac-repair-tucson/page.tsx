import { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";
import { StructuredData } from "@/components/StructuredData";
import { acrepairData } from "@/data/pages/services/acrepair";
import { 
  generateServiceMetadata,
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from "@/lib/seo";

/**
 * AC Repair Tucson Page
 * 
 * Pilot page demonstrating full Next.js architecture:
 * - Server-Side Rendering (SSR)
 * - ServiceTitan scheduler 3x (hero, middle, bottom)
 * - 22,000+ reviews module
 * - Complete SEO metadata and structured data
 * - DNI phone tracking
 */

export const metadata: Metadata = generateServiceMetadata(
  acrepairData.serviceName,
  acrepairData.h1,
  acrepairData.description,
  acrepairData.slug,
  acrepairData.heroImage
);

export default function ACRepairPage() {
  // Generate all structured data schemas
  const structuredData = [
    generateLocalBusinessSchema(),
    generateServiceSchema(
      acrepairData.serviceName,
      acrepairData.description,
      acrepairData.slug
    ),
    // FAQs are nested in a ServiceFAQs object
    generateFAQSchema(acrepairData.faqs?.faqs || []),
    generateBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "AC Services", path: "/ac" },
      { name: "AC Repair", path: `/${acrepairData.slug}` },
    ]),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <ServicePage data={acrepairData} />
    </>
  );
}
