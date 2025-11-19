import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function OutdoorMotionLightingSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Outdoor Motion Lighting Installation",
    description: "Professional outdoor motion lighting installation in Tucson, AZ including motion sensor lights, security lighting, dusk-to-dawn lights, LED outdoor fixtures, and motion detector systems by licensed electricians."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Electrical Services", item: "https://www.idesignac.com/electrical-services" },
    { position: 3, name: "Outdoor Motion Lighting", item: "https://www.idesignac.com/outdoor-motion-lighting-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
