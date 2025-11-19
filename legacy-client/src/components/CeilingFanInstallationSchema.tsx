import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function CeilingFanInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Ceiling Fan Installation",
    description: "Professional ceiling fan installation services in Tucson, AZ including new fan installations, ceiling fan replacement, fan upgrades, wiring, electrical work, and balance adjustments by licensed electricians."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Electrical Services", item: "https://www.idesignac.com/electrical-services" },
    { position: 3, name: "Ceiling Fan Installation", item: "https://www.idesignac.com/ceiling-fan-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
