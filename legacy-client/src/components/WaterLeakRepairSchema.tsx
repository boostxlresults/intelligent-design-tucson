import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function WaterLeakRepairSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Water Leak Repair",
    description: "Professional water leak repair services in Tucson, AZ. Emergency leak repairs for pipes, fixtures, and water lines. Fast response, expert detection, and reliable repairs. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Water Leak Repair", item: "https://www.idesignac.com/water-leak-repair-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
