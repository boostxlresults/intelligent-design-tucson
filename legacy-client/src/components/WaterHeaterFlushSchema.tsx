import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function WaterHeaterFlushSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Water Heater Flush & Maintenance",
    description: "Professional water heater flush and maintenance services in Tucson, AZ. Extend water heater lifespan, improve efficiency, and prevent costly repairs. Same-day service available. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Water Heater Flush", item: "https://www.idesignac.com/water-heater-flush-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
