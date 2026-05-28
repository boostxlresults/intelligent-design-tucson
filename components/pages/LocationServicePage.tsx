import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle2, MapPin, Star, ArrowRight, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SchedulerCluster } from "@/components/SchedulerCluster";
import { ReviewModule } from "@/components/ReviewModule";
import TrustBar from "@/components/content/TrustBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LocationServiceEntity } from "@/data/locationServiceData";

// Map service slugs to hero images
const SERVICE_HERO_IMAGES: Record<string, string> = {
  "ac-repair": "/generated_images/Professional_AC_repair_in_Tucson_8bf9f61d.webp",
  "ac-installation": "/generated_images/AC_installation_Tucson_home_423faef7.webp",
  "ac-tune-up": "/generated_images/AC_tune-up_maintenance_Tucson_home_2437d8a1.webp",
  "heating-repair": "/generated_images/Heating_tech_heat_pump_service_fdc5a775.webp",
  "indoor-air-quality": "/generated_images/Clean_home_air_quality_system_c083313f.webp",
  "plumbing-repair": "/generated_images/Plumbing_service_work_1_bafc86b6.webp",
  "water-heater-replacement": "/generated_images/Hybrid_water_heater_installation_39259483.webp",
  "drain-cleaning": "/generated_images/Drain_cleaning_service_35e09460.webp",
  "electrical-panel-upgrade": "/generated_images/Electrical_panel_upgrade_installation_9ec32c5d.webp",
  "ev-charger-installation": "/generated_images/Electrical_panel_upgrade_installation_9ec32c5d.webp",
  "ceiling-fan-installation": "/generated_images/Ceiling_fan_installation_service_45fdef2d.webp",
  "thermalcork-roof-coating": "/generated_images/residential_roof_coating_application_05371d89.webp",
  "roof-repair": "/generated_images/Roof_repair_Tucson_5156ac7b.webp",
  "solar-panel-installation": "/generated_images/Residential_solar_installation_23ee301f.webp",
  "solar-battery-storage": "/generated_images/Solar_panels_with_AC_unit_043e3f3d.webp",
};

const DEFAULT_HERO = "/images/hero-background.png";

// Map service slugs to related service links
const RELATED_SERVICES: Record<string, Array<{ name: string; href: string }>> = {
  "ac-repair": [
    { name: "AC Installation", href: "/services/hvac/ac-installation" },
    { name: "AC Tune-Up", href: "/services/hvac/ac-tune-up" },
    { name: "Indoor Air Quality", href: "/services/hvac/indoor-air-quality" },
  ],
  "ac-installation": [
    { name: "AC Repair", href: "/services/hvac/ac-repair" },
    { name: "AC Tune-Up", href: "/services/hvac/ac-tune-up" },
    { name: "Heating Repair", href: "/services/hvac/heating-repair" },
  ],
  "ac-tune-up": [
    { name: "AC Repair", href: "/services/hvac/ac-repair" },
    { name: "AC Installation", href: "/services/hvac/ac-installation" },
    { name: "Indoor Air Quality", href: "/services/hvac/indoor-air-quality" },
  ],
  "heating-repair": [
    { name: "AC Repair", href: "/services/hvac/ac-repair" },
    { name: "AC Installation", href: "/services/hvac/ac-installation" },
    { name: "Indoor Air Quality", href: "/services/hvac/indoor-air-quality" },
  ],
  "indoor-air-quality": [
    { name: "AC Repair", href: "/services/hvac/ac-repair" },
    { name: "AC Tune-Up", href: "/services/hvac/ac-tune-up" },
    { name: "Heating Repair", href: "/services/hvac/heating-repair" },
  ],
  "plumbing-repair": [
    { name: "Water Heater Replacement", href: "/services/plumbing/water-heater-replacement" },
    { name: "Drain Cleaning", href: "/services/plumbing/drain-clearing-tucson" },
    { name: "Emergency Plumbing", href: "/services/plumbing" },
  ],
  "water-heater-replacement": [
    { name: "Plumbing Repair", href: "/services/plumbing" },
    { name: "Drain Cleaning", href: "/services/plumbing/drain-clearing-tucson" },
    { name: "Tankless Water Heaters", href: "/services/plumbing" },
  ],
  "drain-cleaning": [
    { name: "Plumbing Repair", href: "/services/plumbing" },
    { name: "Water Heater Replacement", href: "/services/plumbing/water-heater-replacement" },
    { name: "Emergency Plumbing", href: "/services/plumbing" },
  ],
  "electrical-panel-upgrade": [
    { name: "EV Charger Installation", href: "/services/electrical" },
    { name: "Ceiling Fan Installation", href: "/services/electrical" },
    { name: "Electrical Services", href: "/services/electrical" },
  ],
  "ev-charger-installation": [
    { name: "Electrical Panel Upgrade", href: "/services/electrical" },
    { name: "Solar Panel Installation", href: "/services/solar" },
    { name: "Solar Battery Storage", href: "/services/solar" },
  ],
  "ceiling-fan-installation": [
    { name: "Electrical Panel Upgrade", href: "/services/electrical" },
    { name: "EV Charger Installation", href: "/services/electrical" },
    { name: "Electrical Services", href: "/services/electrical" },
  ],
  "thermalcork-roof-coating": [
    { name: "Roof Repair", href: "/services/roofing" },
    { name: "Solar Panel Installation", href: "/services/solar" },
    { name: "Roofing Services", href: "/services/roofing" },
  ],
  "roof-repair": [
    { name: "ThermalCork Roof Coating", href: "/services/roofing" },
    { name: "Solar Panel Installation", href: "/services/solar" },
    { name: "Roofing Services", href: "/services/roofing" },
  ],
  "solar-panel-installation": [
    { name: "Solar Battery Storage", href: "/services/solar" },
    { name: "EV Charger Installation", href: "/services/electrical" },
    { name: "Electrical Panel Upgrade", href: "/services/electrical" },
  ],
  "solar-battery-storage": [
    { name: "Solar Panel Installation", href: "/services/solar" },
    { name: "EV Charger Installation", href: "/services/electrical" },
    { name: "Electrical Panel Upgrade", href: "/services/electrical" },
  ],
};

const TRUST_BADGES = [
  "Licensed & Insured",
  "Same-Day Service",
  "Upfront Pricing",
  "100% Satisfaction Guarantee",
];

interface LocationServicePageProps {
  entity: LocationServiceEntity;
}

export default function LocationServicePage({ entity }: LocationServicePageProps) {
  const heroImage = SERVICE_HERO_IMAGES[entity.serviceSlug] ?? DEFAULT_HERO;
  const relatedServices = RELATED_SERVICES[entity.serviceSlug] ?? [];

  return (
    <article className="min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${entity.serviceName} in ${entity.communityName}, AZ ${entity.zipCode}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-blue-900/20" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-white">{entity.communityName}</span>
              <span>/</span>
              <span className="text-yellow-300">{entity.serviceName}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {entity.h1}
            </h1>
            <p className="text-xl md:text-2xl text-yellow-400 font-semibold mb-4">
              Tucson's Most Trusted Home Services — Since 1979
            </p>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl">
              {entity.introParagraph}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/25"
                >
                  <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:5203332665"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
                data-testid="cta-call"
              >
                <Phone className="w-5 h-5" />
                Call (520) 333-2665
              </a>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/40 text-white hover:bg-white/20 font-semibold px-8 py-4 text-lg"
                data-testid="cta-schedule"
                data-servicetitan-scheduler="true"
              >
                Schedule Online
              </Button>
            </div>

            {/* Review stars */}
            <div className="flex items-center gap-2 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white font-semibold ml-1">23,000+ Five-Star Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <TrustBar />

      {/* ── Why Choose Us ── */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why {entity.communityName} Homeowners Choose Intelligent Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <CheckCircle2 className="w-8 h-8 text-red-600" />,
                title: "Same-Day Service",
                desc: `Fast response to ${entity.communityName} and surrounding ZIP ${entity.zipCode}. Most calls scheduled same day.`,
              },
              {
                icon: <Wrench className="w-8 h-8 text-red-600" />,
                title: "Expert Technicians",
                desc: "NATE-certified, background-checked technicians with years of experience on all makes and models.",
              },
              {
                icon: <MapPin className="w-8 h-8 text-red-600" />,
                title: "Local to Tucson",
                desc: `Family & veteran-owned since 1979. We know ${entity.communityName} — near ${entity.localLandmarks || "local landmarks"}.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3 shadow-sm"
              >
                {item.icon}
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scheduler (middle) ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SchedulerCluster position="middle" />
      </div>

      {/* ── Reviews ── */}
      <section id="reviews" className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ReviewModule variant="full" />
        </div>
      </section>

      {/* ── FAQ ── */}
      {entity.faqQuestion && (
        <section id="faqs" className="py-12 md:py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {entity.faqQuestion}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {entity.faqAnswer}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Do you serve {entity.communityName}, AZ {entity.zipCode}?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Yes! Intelligent Design Air Conditioning, Plumbing, Solar, &amp; Electric proudly serves {entity.communityName} and the {entity.zipCode} ZIP code area. We offer same-day and emergency service throughout Greater Tucson.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  What is the typical cost for {entity.serviceName} in {entity.communityName}?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {entity.priceRange
                    ? `${entity.serviceName} in ${entity.communityName} typically ranges from ${entity.priceRange}. We provide upfront pricing before any work begins — no surprises.`
                    : `We provide upfront pricing before any work begins. Call us at (520) 333-2665 for a free estimate on ${entity.serviceName} in ${entity.communityName}.`}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      )}

      {/* ── Related Services ── */}
      {relatedServices.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Other Services in {entity.communityName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex items-center justify-between bg-card border border-border rounded-lg px-5 py-4 hover:border-red-500 hover:shadow-md transition-all group"
                >
                  <span className="font-semibold group-hover:text-red-600 transition-colors">
                    {svc.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-red-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom Scheduler ── */}
      <section id="schedule" className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Schedule {entity.serviceName} in {entity.communityName}
            </h2>
            <p className="text-muted-foreground text-lg">
              Same-day appointments available. Call{" "}
              <a href="tel:5203332665" className="font-bold text-red-600 hover:underline">
                (520) 333-2665
              </a>{" "}
              or book online below.
            </p>
          </div>
          <SchedulerCluster position="bottom" />
        </div>
      </section>
    </article>
  );
}
