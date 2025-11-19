import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function DrainClearingSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Drain Clearing",
    description: "Professional drain clearing services in Tucson, AZ. Fast, effective solutions for clogged drains, slow drains, and sewer backups. Same-day service available. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Drain Clearing", item: "https://www.idesignac.com/drain-clearing-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
