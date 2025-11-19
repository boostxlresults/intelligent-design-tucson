import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function HeaterInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Heater Installation",
    description: "Professional heater installation services in Tucson, AZ. Expert installation of furnaces, heat pumps, and electric heaters. Energy-efficient solutions for optimal comfort. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Heating", item: "https://www.idesignac.com/heating-tucson" },
    { position: 3, name: "Heater Installation", item: "https://www.idesignac.com/heater-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
