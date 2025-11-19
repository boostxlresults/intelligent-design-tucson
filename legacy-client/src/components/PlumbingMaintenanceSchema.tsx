import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function PlumbingMaintenanceSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Plumbing Maintenance",
    description: "Professional plumbing maintenance services in Tucson, AZ. Preventive maintenance to avoid costly repairs, extend system life, and ensure optimal performance. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Plumbing Maintenance", item: "https://www.idesignac.com/plumbing-maintenance-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
