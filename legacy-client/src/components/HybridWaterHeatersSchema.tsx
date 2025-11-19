import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function HybridWaterHeatersSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Hybrid Water Heater Installation",
    description: "Professional hybrid water heater installation in Tucson, AZ. Energy-efficient heat pump water heaters with expert installation. Save up to 60% on water heating costs. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Hybrid Water Heaters", item: "https://www.idesignac.com/hybrid-water-heaters-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
