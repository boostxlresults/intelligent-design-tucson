import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function GeneracRepairSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "GENERAC Generator Repair and Maintenance",
    description: "Professional GENERAC generator repair and maintenance services in Tucson, AZ by factory-trained technicians. All models serviced, genuine parts, preventive maintenance plans, and emergency repairs."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com/" },
    { position: 2, name: "Electrical Services", item: "https://www.idesignac.com/electrical-services" },
    { position: 3, name: "GENERAC Generator Repair", item: "https://www.idesignac.com/generac-repair-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
