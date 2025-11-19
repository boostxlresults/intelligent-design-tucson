import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function LeakDetectionSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Leak Detection",
    description: "Professional leak detection services in Tucson, AZ. Advanced technology to locate hidden water leaks, slab leaks, and pipe leaks. Prevent water damage with early detection. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Plumbing", item: "https://www.idesignac.com/plumbing-tucson" },
    { position: 3, name: "Leak Detection", item: "https://www.idesignac.com/leak-detection-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
