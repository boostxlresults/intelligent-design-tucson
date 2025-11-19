import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function DuctInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Duct Installation",
    description: "Professional duct installation services in Tucson, AZ. New ductwork installation for optimal HVAC performance and energy efficiency. Expert design and installation. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Air Conditioning", item: "https://www.idesignac.com/air-conditioning" },
    { position: 3, name: "Duct Installation", item: "https://www.idesignac.com/duct-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
