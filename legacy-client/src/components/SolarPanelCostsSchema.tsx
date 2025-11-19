import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function SolarPanelCostsSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Solar Panel Cost Analysis and Consultation",
    description: "Comprehensive solar panel cost analysis and consultation in Tucson, AZ including pricing breakdowns, financing options, ROI calculations, and total cost of ownership to help homeowners make informed solar investment decisions."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Solar Services", item: "https://www.idesignac.com/solar-tucson" },
    { position: 3, name: "Solar Panel Costs", item: "https://www.idesignac.com/solar-panel-costs-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
