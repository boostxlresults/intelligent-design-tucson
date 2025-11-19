import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function HomeEnergyAuditSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Home Energy Audit",
    description: "Professional home energy audit services in Tucson, AZ including thermal imaging, insulation assessment, HVAC efficiency testing, air leak detection, and comprehensive energy-saving recommendations to reduce utility bills."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Energy Services", item: "https://www.idesignac.com/energy-efficiency" },
    { position: 3, name: "Home Energy Audit", item: "https://www.idesignac.com/home-energy-audit-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
