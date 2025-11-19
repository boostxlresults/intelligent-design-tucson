import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ResidentialRoofCoatingSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Residential Roof Coating",
    description: "Professional residential roof coating services in Tucson, AZ including cool roof coatings, UV protection, reflective coatings, and energy-efficient roof restoration for homes."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Roofing Services", item: "https://www.idesignac.com/roofing-tucson" },
    { position: 3, name: "Residential Roof Coating", item: "https://www.idesignac.com/residential-roof-coating-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
