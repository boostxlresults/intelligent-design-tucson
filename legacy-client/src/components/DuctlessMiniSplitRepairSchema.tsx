import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function DuctlessMiniSplitRepairSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Ductless Mini Split Repair",
    description: "Expert ductless mini split repair services in Tucson, AZ. 24/7 emergency service, all brands serviced, same-day repairs available. Refrigerant leak repair, electrical troubleshooting, compressor repair, drainage issues, and complete system diagnostics."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Air Conditioning", item: "https://www.idesignac.com/air-conditioning" },
    { position: 3, name: "Ductless Mini Split Repair", item: "https://www.idesignac.com/ductless-repair-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
