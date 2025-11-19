import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function TileRoofsSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Clay and Concrete Tile Roofing",
    description: "Professional clay and concrete tile roofing services in Tucson, AZ including Spanish tile, mission tile, barrel tile, S-tile installation, repair, and restoration for residential and commercial properties."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Roofing Services", item: "https://www.idesignac.com/roofing-tucson" },
    { position: 3, name: "Tile Roofs", item: "https://www.idesignac.com/tile-roofs-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
