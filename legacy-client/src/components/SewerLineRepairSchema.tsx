import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function SewerLineRepairSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Sewer Line Repair",
    description: "Professional sewer line repair services in Tucson, AZ. Traditional and trenchless repair methods for broken, cracked, or collapsed sewer lines. Emergency repairs available. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Sewer Line Repair", item: "https://www.idesignac.com/sewer-line-repair-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
