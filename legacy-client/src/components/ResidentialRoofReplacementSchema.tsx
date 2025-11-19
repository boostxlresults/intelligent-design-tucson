import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ResidentialRoofReplacementSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Residential Roof Replacement",
    description: "Professional residential roof replacement services in Tucson, AZ. Complete tear-off and replacement of tile, shingle, metal, and flat roofing systems with expert installation and comprehensive warranties."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Roofing Services", item: "https://www.idesignac.com/roofing-tucson" },
    { position: 3, name: "Residential Roof Replacement", item: "https://www.idesignac.com/residential-roof-replacement-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
