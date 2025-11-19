import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function IndoorAirQualitySchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Indoor Air Quality Solutions",
    description: "Professional indoor air quality solutions in Tucson, AZ. Air purifiers, UV lights, humidifiers, and dehumidifiers. Improve health and comfort with cleaner indoor air. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Air Conditioning", item: "https://www.idesignac.com/air-conditioning" },
    { position: 3, name: "Indoor Air Quality", item: "https://www.idesignac.com/indoor-air-quality-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
