import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function HeaterTuneupSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Heater Tune-Up",
    description: "Professional heater tune-up services in Tucson, AZ. Comprehensive inspection, cleaning, and optimization to ensure peak performance. Prevent breakdowns and improve efficiency. 45+ years experience with 22,000+ five-star reviews."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Heating", item: "https://www.idesignac.com/heating-tucson" },
    { position: 3, name: "Heater Tune-Up", item: "https://www.idesignac.com/heater-tuneup-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
