import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function SolarTaxCreditsSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Solar Tax Credits and Incentives Consultation",
    description: "Expert solar tax credits and incentives consultation in Tucson, AZ including federal ITC guidance, Arizona tax benefits, net metering assistance, and maximizing financial returns on solar investments."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Solar Services", item: "https://www.idesignac.com/solar-tucson" },
    { position: 3, name: "Solar Tax Credits", item: "https://www.idesignac.com/solar-tax-credits-arizona" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
