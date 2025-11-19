import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ShingleRoofsSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Asphalt Shingle Roofing",
    description: "Professional asphalt shingle roofing services in Tucson, AZ including architectural shingles, 3-tab shingles, installation, repair, and replacement for residential properties."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Roofing Services", item: "https://www.idesignac.com/roofing-tucson" },
    { position: 3, name: "Shingle Roofs", item: "https://www.idesignac.com/shingle-roofs-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
