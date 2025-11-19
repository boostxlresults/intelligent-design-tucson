import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function GeneracInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "GENERAC Generator Installation",
    description: "Professional GENERAC whole house generator installation in Tucson, AZ including expert sizing, turnkey installation, automatic transfer switches, and comprehensive warranties by certified dealers."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com/" },
    { position: 2, name: "Electrical Services", item: "https://www.idesignac.com/electrical-services" },
    { position: 3, name: "GENERAC Generator Installation", item: "https://www.idesignac.com/generac-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
