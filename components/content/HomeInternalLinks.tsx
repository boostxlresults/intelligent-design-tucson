import Link from "next/link";

/**
 * Crawlable internal-link block for the homepage.
 *
 * The homepage is the site's most authoritative page but was rendering only 15
 * unique internal targets against 14 external links, with ZERO links to the
 * /compare pages and ZERO to /service-areas. That starves the money pages of
 * the equity the homepage collects. (2026-09-09)
 *
 * Plain <Link> elements, real anchor text, present in the initial HTML - no
 * hover-mounted menus, so crawlers actually see them.
 */

const SERVICES: { href: string; label: string }[] = [
  { href: "/services/ac-repair-tucson", label: "AC repair in Tucson" },
  { href: "/services/ac-installation-tucson", label: "AC installation in Tucson" },
  { href: "/services/emergency-ac-repair-tucson", label: "Emergency AC repair" },
  { href: "/services/ac-tuneup-tucson", label: "AC tune-up" },
  { href: "/services/heat-pumps-tucson", label: "Heat pumps" },
  { href: "/services/hvac-tucson", label: "HVAC services in Tucson" },
  { href: "/services/plumbing-tucson", label: "Plumbing in Tucson" },
  { href: "/services/water-heater-installation", label: "Water heater installation" },
  { href: "/services/drain-clearing", label: "Drain clearing" },
  { href: "/services/leak-detection", label: "Leak detection" },
  { href: "/services/electrical-tucson", label: "Electrical services in Tucson" },
  { href: "/services/electrical-panel-upgrades", label: "Electrical panel upgrades" },
  { href: "/services/generac-installation", label: "Generac generator installation" },
  { href: "/services/roofing-tucson", label: "Roofing in Tucson" },
  { href: "/services/residential-roof-repair", label: "Residential roof repair" },
  { href: "/services/solar", label: "Solar services in Tucson" },
];

const AREAS: { href: string; label: string }[] = [
  { href: "/service-areas/tucson", label: "Tucson" },
  { href: "/service-areas/east-tucson", label: "East Tucson" },
  { href: "/service-areas/oro-valley", label: "Oro Valley" },
  { href: "/service-areas/marana", label: "Marana" },
  { href: "/service-areas/vail", label: "Vail" },
  { href: "/service-areas/sahuarita", label: "Sahuarita" },
  { href: "/service-areas/green-valley", label: "Green Valley" },
  { href: "/service-areas/catalina-foothills", label: "Catalina Foothills" },
  { href: "/service-areas/casas-adobes", label: "Casas Adobes" },
  { href: "/service-areas/rita-ranch", label: "Rita Ranch" },
  { href: "/service-areas/drexel-heights", label: "Drexel Heights" },
  { href: "/service-areas/corona-de-tucson", label: "Corona de Tucson" },
];

const COMPARE: { href: string; label: string }[] = [
  { href: "/compare/tucson-hvac-companies", label: "Best HVAC companies in Tucson" },
  { href: "/compare/tucson-plumbers", label: "Best plumbers in Tucson" },
  { href: "/compare/tucson-roofing-companies", label: "Best roofing companies in Tucson" },
  { href: "/compare/tucson-solar-companies", label: "Best solar companies in Tucson" },
];

function LinkList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-[15px] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((i) => (
        <li key={i.href}>
          <Link href={i.href} className="text-primary underline-offset-2 hover:underline">
            {i.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function HomeInternalLinks() {
  return (
    <section className="border-t border-border bg-muted/20 py-14" aria-labelledby="explore-heading">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 id="explore-heading" className="text-2xl font-bold text-primary sm:text-3xl">
          Explore our services across Tucson
        </h2>

        <h3 className="mt-8 text-lg font-semibold text-foreground">Services we provide</h3>
        <LinkList items={SERVICES} />

        <h3 className="mt-8 text-lg font-semibold text-foreground">Areas we serve</h3>
        <LinkList items={AREAS} />

        <h3 className="mt-8 text-lg font-semibold text-foreground">Comparing Tucson contractors?</h3>
        <p className="mt-1 text-[15px] text-muted-foreground">
          Side-by-side ratings, ownership and guarantees, with our own numbers in the same table.
        </p>
        <LinkList items={COMPARE} />
      </div>
    </section>
  );
}
