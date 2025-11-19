import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function RooterSpecialSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Rooter & Drain Cleaning",
    description: "Professional rooter and drain cleaning services in Tucson, AZ. Clear stubborn clogs, tree roots, and blockages from drains and sewer lines. Same-day emergency service available. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Rooter Special", item: "https://www.idesignac.com/rooter-special-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
