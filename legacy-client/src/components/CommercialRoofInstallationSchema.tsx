import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function CommercialRoofInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Commercial Roof Installation",
    description: "Professional commercial roof installation services in Tucson, AZ including TPO, EPDM, modified bitumen, and built-up roofing systems for new commercial buildings and roof replacements."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Commercial Roofing", item: "https://www.idesignac.com/commercial-roofing-tucson" },
    { position: 3, name: "Commercial Roof Installation", item: "https://www.idesignac.com/commercial-roof-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
