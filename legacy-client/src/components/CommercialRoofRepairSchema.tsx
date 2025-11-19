import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function CommercialRoofRepairSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Commercial Roof Repair",
    description: "Professional commercial roof repair services in Tucson, AZ including flat roof systems, TPO, EPDM, modified bitumen repairs for business properties with minimal disruption."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Commercial Roofing", item: "https://www.idesignac.com/commercial-roofing-tucson" },
    { position: 3, name: "Commercial Roof Repair", item: "https://www.idesignac.com/commercial-roof-repair-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
