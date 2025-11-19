import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function DuctRepairSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Duct Repair",
    description: "Professional duct repair services in Tucson, AZ. Fix leaky ducts, improve energy efficiency, and restore proper airflow. Same-day service available. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Air Conditioning", item: "https://www.idesignac.com/air-conditioning" },
    { position: 3, name: "Duct Repair", item: "https://www.idesignac.com/duct-repair-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
