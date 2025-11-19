import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function LightingUpgradesSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Interior Lighting Upgrades",
    description: "Professional interior lighting upgrades in Tucson, AZ including LED conversions, recessed lighting, dimmer installation, under-cabinet lighting, smart lighting systems, and modern fixture upgrades by licensed electricians."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Electrical Services", item: "https://www.idesignac.com/electrical-services" },
    { position: 3, name: "Lighting Upgrades", item: "https://www.idesignac.com/lighting-upgrades-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
