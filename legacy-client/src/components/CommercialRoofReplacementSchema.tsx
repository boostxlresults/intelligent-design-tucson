import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function CommercialRoofReplacementSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Commercial Roof Replacement",
    description: "Professional commercial roof replacement services in Tucson, AZ including complete tear-off and replacement with TPO, EPDM, modified bitumen systems for business properties."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Commercial Roofing", item: "https://www.idesignac.com/commercial-roofing-tucson" },
    { position: 3, name: "Commercial Roof Replacement", item: "https://www.idesignac.com/commercial-roof-replacement-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
