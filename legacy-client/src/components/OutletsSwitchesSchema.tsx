import { buildServiceSchema, buildBreadcrumbSchema } from './schema/helpers';

export default function OutletsSwitchesSchema() {
  const serviceSchema = buildServiceSchema({
    serviceType: "Outlet and Switch Installation",
    description: "Professional outlet and switch installation in Tucson, AZ including new outlets, GFCI outlets, USB outlets, smart switches, dimmer switches, outlet upgrades, and electrical safety inspections by licensed electricians."
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { position: 1, name: "Home", item: "https://www.idesignac.com" },
    { position: 2, name: "Electrical Services", item: "https://www.idesignac.com/electrical-services" },
    { position: 3, name: "Outlets & Switches", item: "https://www.idesignac.com/outlets-switches-tucson" }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
