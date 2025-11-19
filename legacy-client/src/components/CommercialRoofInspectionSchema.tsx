import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function CommercialRoofInspectionSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Commercial Roof Inspection",
    description: "Professional commercial roof inspection services in Tucson, AZ including comprehensive assessments, moisture surveys, thermography, preventative maintenance, and detailed reporting for property management."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Commercial Roofing", item: "https://www.idesignac.com/commercial-roofing-tucson" },
    { position: 3, name: "Commercial Roof Inspection", item: "https://www.idesignac.com/commercial-roof-inspection-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
