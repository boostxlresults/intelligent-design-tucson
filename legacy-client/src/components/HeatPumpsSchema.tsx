import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function HeatPumpsSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Heat Pump Installation & Repair",
    description: "Professional heat pump installation and repair services in Tucson, AZ. Energy-efficient heating and cooling solutions. Expert installation, repair, and maintenance. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Heating", item: "https://www.idesignac.com/heating-tucson" },
    { position: 3, name: "Heat Pumps", item: "https://www.idesignac.com/heat-pumps-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
