import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function DuctCleaningSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Duct Cleaning",
    description: "Professional duct cleaning services in Tucson, AZ. Remove dust, allergens, and debris from air ducts. Improve indoor air quality and HVAC efficiency. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Air Conditioning", item: "https://www.idesignac.com/air-conditioning" },
    { position: 3, name: "Duct Cleaning", item: "https://www.idesignac.com/duct-cleaning-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
