import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function SolarTubularLightsSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Solar Tubular Light Installation",
    description: "Professional solar tubular light and tubular skylight installation services in Tucson, AZ providing natural daylighting, energy-efficient lighting solutions, and reduced electricity costs for homes."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Roofing Services", item: "https://www.idesignac.com/roofing-tucson" },
    { position: 3, name: "Solar Tubular Lights", item: "https://www.idesignac.com/solar-tubular-lights-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
