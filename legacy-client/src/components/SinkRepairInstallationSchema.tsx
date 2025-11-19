import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function SinkRepairInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Sink Repair & Installation",
    description: "Professional sink repair and installation services in Tucson, AZ. Kitchen sink, bathroom sink, and utility sink services. Expert repairs and new installations. Same-day service available. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Sink Repair & Installation", item: "https://www.idesignac.com/sink-repair-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
