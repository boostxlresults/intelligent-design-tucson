import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ACServiceSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Air Conditioning Service and Maintenance",
    description: "Expert AC service and maintenance in Tucson, AZ. Professional tune-ups, preventative maintenance, and system optimization. Keep your air conditioning running efficiently with 24/7 service from highly experienced HVAC technicians. BBB A+ rated with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Air Conditioning", item: "https://www.idesignac.com/air-conditioning" },
    { position: 3, name: "AC Service", item: "https://www.idesignac.com/ac-service-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
