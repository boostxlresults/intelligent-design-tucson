import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ResidentialRoofInspectionSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Residential Roof Inspection",
    description: "Professional residential roof inspection services in Tucson, AZ including pre-purchase inspections, maintenance inspections, storm damage assessments, and comprehensive roof condition reports for homes."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Roofing Services", item: "https://www.idesignac.com/roofing-tucson" },
    { position: 3, name: "Residential Roof Inspection", item: "https://www.idesignac.com/residential-roof-inspection-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
