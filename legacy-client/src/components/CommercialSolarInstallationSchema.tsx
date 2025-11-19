import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function CommercialSolarInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Commercial Solar Panel Installation",
    description: "Professional commercial solar panel installation services in Tucson, AZ including large-scale system design, commercial-grade equipment, 30% federal tax credits, MACRS accelerated depreciation, and substantial energy cost reduction for businesses. Complete turnkey installations from 20kW to multi-megawatt systems."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Solar Services", item: "https://www.idesignac.com/solar-tucson" },
    { position: 3, name: "Commercial Solar Installation", item: "https://www.idesignac.com/commercial-solar-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
