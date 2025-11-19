import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function PitchedRoofsSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Pitched Roof Installation and Repair",
    description: "Professional pitched roof installation and repair services in Tucson, AZ including gabled roofs, sloped systems, proper ventilation, and comprehensive roofing solutions for residential and commercial properties."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Roofing Services", item: "https://www.idesignac.com/roofing-tucson" },
    { position: 3, name: "Pitched Roofs", item: "https://www.idesignac.com/pitched-roofs-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
