import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ResidentialRoofInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Residential Roof Installation",
    description: "Professional residential roof installation services in Tucson, AZ for new construction, additions, and custom homes. Expert installation of tile, shingle, metal, and flat roofing systems."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Roofing Services", item: "https://www.idesignac.com/roofing-tucson" },
    { position: 3, name: "Residential Roof Installation", item: "https://www.idesignac.com/residential-roof-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
