import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function SolarMaintenanceSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Solar Panel Maintenance and Monitoring",
    description: "Professional solar panel maintenance and monitoring services in Tucson, AZ including panel cleaning, system inspections, performance monitoring, inverter maintenance, and repair services to maximize solar energy production."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Solar Services", item: "https://www.idesignac.com/solar-tucson" },
    { position: 3, name: "Solar Maintenance", item: "https://www.idesignac.com/solar-maintenance-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
