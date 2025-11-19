import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function SkylightsSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Skylight Installation",
    description: "Professional skylight installation and repair services in Tucson, AZ including fixed skylights, venting skylights, solar-powered skylights, and custom skylight solutions for residential homes."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Roofing Services", item: "https://www.idesignac.com/roofing-tucson" },
    { position: 3, name: "Skylights", item: "https://www.idesignac.com/skylights-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
