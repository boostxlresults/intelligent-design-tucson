import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function DuctlessMiniSplitInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Ductless Mini Split Installation",
    description: "Expert ductless mini split installation services in Tucson, AZ. Energy-efficient cooling solutions, single-zone and multi-zone systems, all premium brands. Professional installation with load calculations, permits, and comprehensive warranties."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Air Conditioning", item: "https://www.idesignac.com/air-conditioning" },
    { position: 3, name: "Ductless Mini Split Installation", item: "https://www.idesignac.com/ductless-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
