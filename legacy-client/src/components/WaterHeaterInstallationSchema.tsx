import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function WaterHeaterInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Water Heater Installation",
    description: "Professional water heater installation services in Tucson, AZ. Tank, tankless, and hybrid water heater installations. Expert sizing, energy-efficient options, and same-day installation available. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Water Heater Installation", item: "https://www.idesignac.com/water-heater-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
