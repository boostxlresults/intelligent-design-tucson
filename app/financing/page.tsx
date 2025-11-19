import { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";
import { StructuredData } from "@/components/StructuredData";
import { financingData } from "@/data/pages/services/financing";
import { 
  generateServiceMetadata,
  generateLocalBusinessSchema
} from "@/lib/seo";

export const metadata: Metadata = generateServiceMetadata(
  financingData.serviceName,
  financingData.h1,
  financingData.description,
  financingData.slug,
  financingData.heroImage
);

export default function FinancingPage() {
  const structuredData = [generateLocalBusinessSchema()];

  return (
    <>
      <StructuredData data={structuredData} />
      <ServicePage data={financingData} />
    </>
  );
}
