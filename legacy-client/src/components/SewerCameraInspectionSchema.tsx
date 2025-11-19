import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function SewerCameraInspectionSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Sewer Camera Inspection",
    description: "Professional sewer camera inspection services in Tucson, AZ. Advanced video inspection to diagnose sewer line problems, locate blockages, and identify damage. Same-day service available. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Sewer Camera Inspection", item: "https://www.idesignac.com/sewer-camera-inspection-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
