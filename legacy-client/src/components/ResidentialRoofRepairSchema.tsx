import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ResidentialRoofRepairSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Residential Roof Repair",
    description: "Professional residential roof repair services in Tucson, AZ including leak repair, tile replacement, shingle repair, and emergency storm damage repair for homes."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Roofing Services", item: "https://www.idesignac.com/roofing-tucson" },
    { position: 3, name: "Residential Roof Repair", item: "https://www.idesignac.com/residential-roof-repair-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
