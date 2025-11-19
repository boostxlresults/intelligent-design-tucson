import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function SmartThermostatInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Smart Thermostat Installation",
    description: "Professional smart thermostat installation in Tucson, AZ. Expert installation of Nest, Ecobee, Honeywell, and other smart thermostats. Improve comfort and save on energy bills. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Air Conditioning", item: "https://www.idesignac.com/air-conditioning" },
    { position: 3, name: "Smart Thermostat Installation", item: "https://www.idesignac.com/smart-thermostat-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
