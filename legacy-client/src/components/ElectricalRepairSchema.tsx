import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ElectricalRepairSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Electrical Repair",
    description: "Professional electrical repair services in Tucson, AZ including 24/7 emergency service, circuit breaker repair, outlet and switch repair, wiring repairs, and electrical troubleshooting by licensed electricians."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com/" },
    { position: 2, name: "Electrical Services", item: "https://www.idesignac.com/electrical-services" },
    { position: 3, name: "Electrical Repair", item: "https://www.idesignac.com/electrical-repair-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
