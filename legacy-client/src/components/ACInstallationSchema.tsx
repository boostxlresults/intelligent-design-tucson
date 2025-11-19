import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ACInstallationSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Air Conditioning Installation",
    description: "Professional AC installation in Tucson, AZ. Expert new air conditioning system installation with energy-efficient units, proper sizing, and guaranteed quality workmanship. BBB A+ rated with 22,000+ five-star reviews. 24/7 emergency installation available."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    {
      position: 1,
      name: "Home",
      item: "https://www.idesignac.com"
    },
    {
      position: 2,
      name: "Air Conditioning",
      item: "https://www.idesignac.com/air-conditioning"
    },
    {
      position: 3,
      name: "AC Installation",
      item: "https://www.idesignac.com/ac-installation-tucson"
    }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
