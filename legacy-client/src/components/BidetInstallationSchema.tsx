import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function BidetInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Bidet Installation",
    description: "Professional bidet installation services in Tucson, AZ. Expert installation of bidet toilets, bidet seats, and handheld bidet attachments. Same-day service available. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Bidet Installation", item: "https://www.idesignac.com/bidet-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
