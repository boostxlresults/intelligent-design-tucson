import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function DuctSealingSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Duct Sealing",
    description: "Professional duct sealing services in Tucson, AZ. Aeroseal technology to seal leaks from the inside. Improve HVAC efficiency and reduce energy bills. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Air Conditioning", item: "https://www.idesignac.com/air-conditioning" },
    { position: 3, name: "Duct Sealing", item: "https://www.idesignac.com/duct-sealing-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
