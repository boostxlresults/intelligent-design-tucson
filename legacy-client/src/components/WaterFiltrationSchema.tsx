import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function WaterFiltrationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Water Filtration System Installation",
    description: "Professional water filtration system installation in Tucson, AZ. Whole-house water filters, reverse osmosis systems, and under-sink filters. Remove contaminants and improve water quality. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Water Filtration", item: "https://www.idesignac.com/water-filtration-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
