import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function CircuitBreakersSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Circuit Breaker Repair and Replacement",
    description: "Professional circuit breaker repair and replacement in Tucson, AZ including breaker troubleshooting, AFCI/GFCI breaker installation, panel breaker replacement, and electrical safety inspections by licensed electricians."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Electrical Services", item: "https://www.idesignac.com/electrical-services" },
    { position: 3, name: "Circuit Breakers", item: "https://www.idesignac.com/circuit-breakers-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
