import type { Metadata } from "next";
import Image from "next/image";
import { Phone, ShieldCheck, Star, Camera, FileText, Home, Clock, CheckCircle2, HandCoins } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FreeRoofInspectionForm from "@/components/roof/FreeRoofInspectionForm";
import CallCta from "@/components/roof/CallCta";

import { reviewsData } from '@/data/reviews';
const SITE = "https://www.idesignac.com";
const PHONE = "(520) 333-2665";
const IDACH = "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric";

export const metadata: Metadata = {
  title: "Free Roof Inspection After the Storm | Tucson | Intelligent Design",
  description:
    "Storm damage in Tucson? Get a free, same-day roof inspection. No fee, no pressure, honest assessment, and a photo report emailed the same day. Call (520) 333-2665.",
  alternates: { canonical: `${SITE}/free-roof-inspection` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Free Roof Inspection — After the Storm",
    description: "Same-day roof inspection slots for Tucson homeowners. No fee. No pressure. Photo report emailed same day.",
    url: `${SITE}/free-roof-inspection`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Is the inspection really free?",
    a: "Yes. There is no fee and no obligation. Our technicians are non-commissioned, so you get an honest assessment — and many roofs turn out to be just fine after a storm.",
  },
  {
    q: "What if I need repairs?",
    a: "We email you a photo report and a written estimate. You decide if and when to move forward. No pressure, ever.",
  },
  {
    q: "How fast can you come out?",
    a: "We have same-day inspection slots this week. If you have an active leak, we offer 2–4 hour emergency response with priority tarping.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["RoofingContractor", "LocalBusiness"],
      "@id": `${SITE}/free-roof-inspection#business`,
      name: IDACH,
      alternateName: "Intelligent Design",
      url: SITE,
      telephone: "+1-520-333-2665",
      priceRange: "$$",
      address: { "@type": "PostalAddress", streetAddress: "1145 E Fort Lowell Rd", addressLocality: "Tucson", addressRegion: "AZ", postalCode: "85719", addressCountry: "US" },
      areaServed: ["Tucson", "Oro Valley", "Marana", "Vail", "Sahuarita", "Green Valley", "Catalina Foothills"].map((c) => ({ "@type": "City", name: c })),
      aggregateRating: { "@type": "AggregateRating", ratingValue: String(reviewsData.aggregateRating.ratingValue), reviewCount: String(reviewsData.aggregateRating.reviewCount), bestRating: "5", worstRating: "1" },
    },
    {
      "@type": "Service",
      name: "Free Roof Inspection",
      serviceType: "Residential roof inspection",
      areaServed: { "@type": "City", name: "Tucson" },
      provider: { "@id": `${SITE}/free-roof-inspection#business` },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free same-day residential roof inspection with photo report" },
    },
    { "@type": "FAQPage", "@id": `${SITE}/free-roof-inspection#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const reviews = [
  { quote: "After the July storm we had water spots on the ceiling. They came out same day, took photos, and told us the tiles were fine — no upsell at all.", name: "M. Reyes", area: "Oro Valley" },
  { quote: "Lost a few tiles in the high winds. They tarped it that afternoon and emailed a full photo report. Fast and honest.", name: "J. Carter", area: "Marana" },
  { quote: "I thought we needed a whole new roof. Their tech showed me the photos and said it just needed a small repair. Saved us thousands.", name: "D. Nguyen", area: "Catalina Foothills" },
];

export default function FreeRoofInspectionPage() {
  return (
    <div className="bg-background text-foreground pb-24 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/generated_images/Roof_repair_Tucson_5156ac7b.webp" alt="Intelligent Design roofing technician inspecting a Tucson tile roof after a storm" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d2d7a]/95 via-[#0d2d7a]/85 to-[#0d2d7a]/90" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-8 md:px-8 md:py-14">
          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e8a020] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#0d2d7a]">
                <ShieldCheck className="h-4 w-4" /> Storm Response &middot; Tucson
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white drop-shadow md:text-4xl lg:text-5xl">
                Free Roof Inspection &mdash; After the Storm
              </h1>
              <p className="mt-3 max-w-md text-base font-medium text-white/90 md:text-lg">
                Same-day slots for Tucson homeowners. No fee. No pressure. Photo report emailed same day.
              </p>
              <CallCta source="storm_hero" className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#e8a020] px-6 py-4 text-lg font-extrabold text-[#0d2d7a] shadow-lg transition hover:bg-[#f5b731] md:w-auto">
                <Phone className="h-5 w-5" /> Call {PHONE}
              </CallCta>
            </div>
            <div>
              <p className="mb-2 text-center text-sm font-bold text-white md:text-left">Or grab a same-day slot online:</p>
              <FreeRoofInspectionForm />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-4 py-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-sm font-semibold text-foreground">
            <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />4.97&#9733;</span>
            <span>23,000+ Reviews</span>
            <span>BBB A+</span>
            <span>Google Guaranteed</span>
            <span>Family &amp; Veteran-Owned Since 1979</span>
            <span className="text-muted-foreground">AZ ROC 340962 &middot; 322375 &middot; 296386 &middot; 276673</span>
          </div>
          <p className="mt-1 text-center text-[11px] text-muted-foreground">Ratings as of Aug 2026.</p>
        </div>
      </section>

      {/* SECTION 2 — WHAT'S INCLUDED */}
      <section className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">What your free inspection includes</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [Home, "Full roof walk", "Every roof type checked — tile, shingle, and foam."],
            [Camera, "Photo report same day", "You get emailed photos of exactly what we found."],
            [CheckCircle2, "Honest recommendation", "Many roofs turn out fine. We tell you the truth either way."],
            [ShieldCheck, "Priority emergency tarping", "Active leak? We can tarp it to stop the damage fast."],
            [HandCoins, "No fee, no pressure", "No cost, no obligation, no hard sell — period."],
            [Clock, "Same-day slots", "Book today and we come out this week."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Home;
            return (
              <div key={t as string} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10"><I className="h-5 w-5 text-primary" /></div>
                <div>
                  <p className="font-bold">{t as string}</p>
                  <p className="text-sm text-muted-foreground">{d as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3 — SOCIAL PROOF */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-8 md:py-14">
          <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">What Tucson neighbors say</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="mb-2 flex gap-0.5">{[...Array(5)].map((_, s) => <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-sm italic text-foreground">&ldquo;{r.quote}&rdquo;</p>
                <p className="mt-3 text-sm font-bold text-primary">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.area}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center">
            <a href="https://www.intelligentdesignreviews.com/" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary underline">
              <ShieldCheck className="h-4 w-4" /> Read all 23,000+ verified reviews
            </a>
          </p>
        </div>
      </section>

      {/* SECTION 4 — WHY US */}
      <section className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">Why Tucson homeowners call us after a storm</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["46+ years in Tucson", "Family- and veteran-owned, serving Tucson since 1979."],
            ["Every roof type", "Tile, shingle, foam, and our exclusive ThermalCork coating."],
            ["Same-day emergency tarp", "We stop active leaks fast to protect what is underneath."],
            ["Non-commissioned techs", "Our inspectors do not earn commission — so you get an honest call, not a sales pitch."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-border bg-card p-5">
              <p className="font-bold text-primary">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-14">
          <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">Quick questions</h2>
          <div className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-primary">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mt-8 text-center">
            <CallCta source="storm_faq" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground shadow hover:bg-primary/90">
              <Phone className="h-5 w-5" /> Call {PHONE} for a same-day slot
            </CallCta>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CALL FOOTER */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#0d2d7a] bg-[#0d2d7a] p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.2)] md:hidden">
        <CallCta source="storm_sticky_footer" className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#e8a020] px-6 py-3 text-lg font-extrabold text-[#0d2d7a]">
          <Phone className="h-5 w-5" /> Call {PHONE}
        </CallCta>
      </div>
    </div>
  );
}
