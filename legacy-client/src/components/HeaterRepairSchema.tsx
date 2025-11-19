import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function HeaterRepairSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Heater Repair",
    description: "Professional heater repair services in Tucson, AZ. Fast, reliable repairs for all heater types including furnaces, heat pumps, and electric heaters. 24/7 emergency service available. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Heating", item: "https://www.idesignac.com/heating-tucson" },
    { position: 3, name: "Heater Repair", item: "https://www.idesignac.com/heater-repair-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
