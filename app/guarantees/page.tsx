import { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";
import { StructuredData } from "@/components/StructuredData";
import { guaranteesData } from "@/data/pages/services/guarantees";
import { 
  generateServiceMetadata,
  generateLocalBusinessSchema
} from "@/lib/seo";

export const metadata: Metadata = generateServiceMetadata(
  guaranteesData.serviceName,
  guaranteesData.h1,
  guaranteesData.description,
  guaranteesData.slug,
  guaranteesData.heroImage
);

export default function GuaranteesPage() {
  const structuredData = [generateLocalBusinessSchema()];

  return (
    <>
      <StructuredData data={structuredData} />
      <ServicePage data={guaranteesData} />
    </>
  );
}
