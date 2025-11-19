import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function WaterHeatersSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Water Heater Services",
    description: "Complete water heater services in Tucson, AZ. Installation, repair, and maintenance for tank, tankless, and hybrid water heaters. Expert guidance on energy-efficient options. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Water Heaters", item: "https://www.idesignac.com/water-heaters-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
