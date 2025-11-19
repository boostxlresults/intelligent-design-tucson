import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function GarbageDisposalSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Garbage Disposal Installation & Repair",
    description: "Professional garbage disposal installation and repair services in Tucson, AZ. Expert installation of all major brands, disposal repair, replacement, and emergency service. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Garbage Disposal Installation & Repair", item: "https://www.idesignac.com/garbage-disposal-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" data-schema dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" data-schema dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
