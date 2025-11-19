import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function WaterSoftenersSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Water Softener Installation",
    description: "Professional water softener installation in Tucson, AZ. Remove hard water minerals, protect appliances, and improve water quality. Expert installation and maintenance services. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Water Softeners", item: "https://www.idesignac.com/water-softeners-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
