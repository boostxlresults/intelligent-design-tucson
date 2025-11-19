import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ElectricalPanelUpgradesSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Electrical Panel Upgrade",
    description: "Professional electrical panel upgrade services in Tucson, AZ including 200 amp panel upgrades, main panel replacement, circuit additions, subpanel installation, and modern safety feature installation by licensed electricians."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Electrical Services", item: "https://www.idesignac.com/electrical-services" },
    { position: 3, name: "Panel Upgrades", item: "https://www.idesignac.com/electrical-panel-upgrades-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
