import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ToiletInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Toilet Installation & Repair",
    description: "Professional toilet installation and repair services in Tucson, AZ. Expert installation of water-efficient toilets, comfort-height models, toilet repair, replacement, and emergency service. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Toilet Installation & Repair", item: "https://www.idesignac.com/toilet-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" data-schema dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" data-schema dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
