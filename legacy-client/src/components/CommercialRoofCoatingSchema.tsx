import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function CommercialRoofCoatingSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Commercial Roof Coating",
    description: "Professional commercial roof coating services in Tucson, AZ including cool roof coatings, silicone coatings, acrylic coatings for energy savings and extended roof life on commercial buildings."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Commercial Roofing", item: "https://www.idesignac.com/commercial-roofing-tucson" },
    { position: 3, name: "Commercial Roof Coating", item: "https://www.idesignac.com/commercial-roof-coating-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
