import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ACRepairSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Air Conditioning Repair",
    description: "Professional AC repair services in Tucson, AZ. 24/7 emergency air conditioning repair, maintenance, and installation. Fast response times, expert HVAC technicians with 17+ years average experience. BBB A+ rated with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Air Conditioning", item: "https://www.idesignac.com/air-conditioning" },
    { position: 3, name: "AC Repair", item: "https://www.idesignac.com/ac-repair-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
