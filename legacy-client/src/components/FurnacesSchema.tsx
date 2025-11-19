import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function FurnacesSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Furnace Installation & Repair",
    description: "Professional furnace installation and repair services in Tucson, AZ. Expert service for gas and electric furnaces. Energy-efficient installations and reliable repairs. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Heating", item: "https://www.idesignac.com/heating-tucson" },
    { position: 3, name: "Furnaces", item: "https://www.idesignac.com/furnaces-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
