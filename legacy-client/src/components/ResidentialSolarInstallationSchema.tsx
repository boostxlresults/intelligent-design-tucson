import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ResidentialSolarInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Residential Solar Panel Installation",
    description: "Professional residential solar panel installation services in Tucson, AZ including complete system design, premium equipment, federal tax credits, and energy independence for homeowners."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Solar Services", item: "https://www.idesignac.com/solar-tucson" },
    { position: 3, name: "Residential Solar Installation", item: "https://www.idesignac.com/residential-solar-installation-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
