import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function HeaterServiceSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Heater Service & Maintenance",
    description: "Professional heater service and maintenance in Tucson, AZ. Preventive maintenance to keep your heating system running efficiently. Extend equipment life and prevent costly repairs. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Heating", item: "https://www.idesignac.com/heating-tucson" },
    { position: 3, name: "Heater Service", item: "https://www.idesignac.com/heater-service-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
