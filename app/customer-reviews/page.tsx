import { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";
import { StructuredData } from "@/components/StructuredData";
import { customerreviewsData } from "@/data/pages/services/customerreviews";
import { 
  generateServiceMetadata,
  generateLocalBusinessSchema,
  generateReviewSchema
} from "@/lib/seo";

export const metadata: Metadata = generateServiceMetadata(
  customerreviewsData.serviceName,
  customerreviewsData.h1,
  customerreviewsData.description,
  customerreviewsData.slug,
  customerreviewsData.heroImage
);

export default function CustomerReviewsPage() {
  const structuredData = [
    generateLocalBusinessSchema(),
    generateReviewSchema(),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <ServicePage data={customerreviewsData} />
    </>
  );
}
