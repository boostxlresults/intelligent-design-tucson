import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function FlatRoofsSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Flat Roof Installation and Repair",
    description: "Professional flat roof installation and repair services in Tucson, AZ including TPO, EPDM, modified bitumen, and built-up roofing systems for commercial and residential properties."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Roofing Services", item: "https://www.idesignac.com/roofing-tucson" },
    { position: 3, name: "Flat Roofs", item: "https://www.idesignac.com/flat-roofs-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
