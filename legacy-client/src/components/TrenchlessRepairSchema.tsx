import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function TrenchlessRepairSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Trenchless Sewer Repair",
    description: "Professional trenchless sewer repair services in Tucson, AZ. No-dig pipe lining and pipe bursting solutions that save your landscaping. Fast, effective sewer line repairs with minimal disruption. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Trenchless Repair", item: "https://www.idesignac.com/trenchless-repair-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
