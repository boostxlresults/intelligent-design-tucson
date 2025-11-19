import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function WaterHeaterRepairSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Water Heater Repair",
    description: "Professional water heater repair services in Tucson, AZ. Same-day emergency repairs for tank, tankless, and hybrid water heaters. Expert diagnostics and honest repair vs. replacement guidance. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Water Heater Repair", item: "https://www.idesignac.com/water-heater-repair-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
