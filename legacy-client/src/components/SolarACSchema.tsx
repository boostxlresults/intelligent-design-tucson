import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function SolarACSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Solar-Powered Air Conditioning",
    description: "Professional solar-powered air conditioning solutions in Tucson, AZ. Combine solar panels with efficient AC systems to reduce energy costs. Expert installation and integration. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Solar", item: "https://www.idesignac.com/solar-tucson" },
    { position: 3, name: "Solar AC", item: "https://www.idesignac.com/solar-ac-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
