import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function HomeEnergyUpgradesSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Home Energy Upgrades",
    description: "Professional home energy upgrade services in Tucson, AZ including energy audits, LED lighting conversion, smart thermostat installation, solar panel systems, HVAC optimization, and comprehensive energy efficiency improvements."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Energy Services", item: "https://www.idesignac.com/energy-efficiency" },
    { position: 3, name: "Home Energy Upgrades", item: "https://www.idesignac.com/home-energy-upgrades-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
