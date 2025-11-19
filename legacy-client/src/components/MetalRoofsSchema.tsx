import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function MetalRoofsSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Metal Roofing Installation and Repair",
    description: "Expert metal roofers in Tucson, AZ specializing in metal roof install using premium 22-24-26 gauge materials. Standing seam metal roofers, corrugated metal roofing Tucson, energy-efficient cool roof systems for residential and commercial properties."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Roofing Services", item: "https://www.idesignac.com/roofing-tucson" },
    { position: 3, name: "Metal Roofs", item: "https://www.idesignac.com/metal-roofs-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
