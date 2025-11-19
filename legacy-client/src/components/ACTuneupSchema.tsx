import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function ACTuneupSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Air Conditioning Tune-Up",
    description: "Professional AC tune-up services in Tucson, AZ. Comprehensive 24-point inspection, cleaning, testing, and optimization to maximize efficiency and prevent breakdowns."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Air Conditioning", item: "https://www.idesignac.com/#services" },
    { position: 3, name: "AC Tune-Up", item: "https://www.idesignac.com/ac-tuneup-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
