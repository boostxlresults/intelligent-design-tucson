import type { Metadata } from "next";
import Image from "next/image";
import { Phone, ShieldCheck, Star, Wrench, DollarSign, Clock, CheckCircle2, BadgePercent } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";

import { reviewsData } from '@/data/reviews';
const SITE = "https://www.idesignac.com";
const PHONE_DISPLAY = "(520) 201-8588";
const PHONE_TEL = "5202018588";
const IDACH = "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric";

export const metadata: Metadata = {
  title: "Free AC Repair Quote | $0 Dispatch & Diagnostic | Tucson | Intelligent Design",
  description:
    "$0 Dispatch Fee, $0 Diagnostic, 10% off repairs, and a 1-Year No Breakdown Guarantee. Same-day AC repair in Tucson. Licensed & insured, 23,000+ five-star reviews. Call (520) 201-8588.",
  alternates: { canonical: `${SITE}/free-ac-repair-quote` },
  robots: { index: false, follow: true },
  openGraph: {
    title: "AC Repair Special — $0 Dispatch, $0 Diagnostic + 10% OFF",
    description: "Same-day AC repair in Tucson with $0 dispatch fee, $0 diagnostic, 10% off your repair, and a 1-Year No Breakdown Guarantee.",
    url: `${SITE}/free-ac-repair-quote`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Is the dispatch fee really $0?",
    a: "Yes. When you book through this offer, there is no dispatch fee and no diagnostic charge — you only pay if you approve a repair. You get the exact price up front before we touch anything.",
  },
  {
    q: "What does the 10% off repairs cover?",
    a: "The discount applies to the total cost of the repair — parts and labor — performed on your visit. It cannot be combined with other promotional offers.",
  },
  {
    q: "What is the 1-Year No Breakdown Guarantee?",
    a: "If the same issue returns within 12 months of your repair, we come back and fix it at no additional charge. It covers the specific repair we performed.",
  },
  {
    q: "How fast can you come out?",
    a: "In most cases, same day. When you call or schedule, we give you a real arrival window — not an all-day wait. We text you when the technician is on the way.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — licensed, bonded, and insured in Arizona (AZ ROC 340962, 322375, 296386, 276673), family- and veteran-owned, serving Tucson since 1979.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HVACBusiness", "LocalBusiness"],
      "@id": `${SITE}/free-ac-repair-quote#business`,
      name: IDACH,
      alternateName: "Intelligent Design",
      url: SITE,
      telephone: "+1-520-201-8588",
      priceRange: "$$",
      address: { "@type": "PostalAddress", streetAddress: "1145 E Fort Lowell Rd", addressLocality: "Tucson", addressRegion: "AZ", postalCode: "85719", addressCountry: "US" },
      areaServed: ["Tucson", "Oro Valley", "Marana", "Vail", "Sahuarita", "Green Valley", "Catalina Foothills"].map((c) => ({ "@type": "City", name: c })),
      aggregateRating: { "@type": "AggregateRating", ratingValue: String(reviewsData.aggregateRating.ratingValue), reviewCount: String(reviewsData.aggregateRating.reviewCount), bestRating: "5", worstRating: "1" },
    },
    {
      "@type": "Service",
      name: "AC Repair — $0 Dispatch & Diagnostic Special",
      serviceType: "Air conditioning repair",
      areaServed: { "@type": "City", name: "Tucson" },
      provider: { "@id": `${SITE}/free-ac-repair-quote#business` },
      offers: {
        "@type": "Offer",
        name: "AC Repair Special",
        description: "$0 dispatch fee, $0 diagnostic, 10% off repairs, 1-Year No Breakdown Guarantee",
        priceCurrency: "USD",
        eligibleRegion: { "@type": "City", name: "Tucson" },
      },
    },
    { "@type": "FAQPage", "@id": `${SITE}/free-ac-repair-quote#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const reviews = [
  { quote: "AC went out on a Saturday. They came same day, no extra charge, found a bad capacitor, and had us cool again in under an hour. Honest price, no pressure.", name: "T. Morales", area: "Marana" },
  { quote: "Three other companies wanted to charge just to come out. Intelligent Design showed up, diagnosed it for free, and the repair was way less than I expected.", name: "K. Hoffman", area: "Oro Valley" },
  { quote: "Tech showed me exactly what failed, gave me the price before touching anything, and fixed it on the spot. That 1-year guarantee gave me real peace of mind.", name: "R. Castillo", area: "Catalina Foothills" },
];

export default function FreeAcRepairQuotePage() {
  return (
    <div className="bg-background text-foreground pb-24 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated_images/AC_tune-up_maintenance_Tucson_home_2437d8a1.png"
            alt="Intelligent Design technician repairing an air conditioner at a Tucson home"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d2d7a]/95 via-[#0d2d7a]/85 to-[#0d2d7a]/90" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-8 md:px-8 md:py-14">
          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e8a020] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#0d2d7a]">
                <ShieldCheck className="h-4 w-4" /> AC Repair Special &middot; Tucson
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white drop-shadow md:text-4xl lg:text-5xl">
                Free AC Repair Quote &mdash; $0 Dispatch &amp; $0 Diagnostic
              </h1>
              <p className="mt-3 max-w-md text-base font-medium text-white/90 md:text-lg">
                Same-day service &middot; 10% off your repair &middot; 1-Year No Breakdown Guarantee
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#e8a020] px-6 py-4 text-lg font-extrabold text-[#0d2d7a] shadow-lg transition hover:bg-[#f5b731] md:w-auto"
              >
                <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <p className="mb-2 text-center text-sm font-bold text-white md:text-left">Or schedule your same-day visit online:</p>
              <div className="rounded-xl bg-white p-4 shadow-lg">
                <SchedulerEmbed
                  triggerText="Schedule Online — It&rsquo;s Fast &amp; Free"
                  fullWidth
                  size="lg"
                  data-testid="hero-schedule"
                  className="w-full min-h-[52px] rounded-lg !bg-[#0d2d7a] !px-4 py-3 text-[17px] font-extrabold !text-white hover:!bg-[#0d2d7a]/90"
                />
                <p className="mt-2 text-center text-[11px] text-gray-500">No credit card. No obligation. Same-day slots available.</p>
              </div>
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

      {/* WHAT'S INCLUDED */}
      <section className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">What&rsquo;s included with your AC Repair Special</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [DollarSign, "$0 Dispatch Fee", "We come to you at no charge — the trip is on us when you book this offer."],
            [Wrench, "$0 Diagnostic", "We find the problem for free. You get the exact repair price before we touch anything."],
            [BadgePercent, "10% Off Your Repair", "Your repair total — parts and labor — is discounted 10% when you move forward."],
            [ShieldCheck, "1-Year No Breakdown Guarantee", "If the same issue returns within 12 months, we fix it free. No questions asked."],
            [Clock, "Same-Day Service", "Real arrival windows, not all-day waits. We text you when the tech is on the way."],
            [CheckCircle2, "Up-Front Pricing", "Non-commissioned techs give you an honest quote. Nothing starts until you approve it."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof DollarSign;
            return (
              <div key={t as string} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <I className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold">{t as string}</p>
                  <p className="text-sm text-muted-foreground">{d as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SOCIAL PROOF */}
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

      {/* WHY US */}
      <section className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">Why Tucson homeowners call us</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["46+ years in Tucson", "Family- and veteran-owned, serving Tucson since 1979. We&rsquo;re not a call center — we&rsquo;re your neighbors."],
            ["All brands, all systems", "Trane, Carrier, Lennox, Goodman, Rheem, York, Daikin — every major brand. Most repairs finished on the first visit."],
            ["Non-commissioned technicians", "Our techs don&rsquo;t earn commission on upsells. You get an honest recommendation, not a sales pitch."],
            ["No overtime rates", "Same price day or night, weekday or weekend. No surprise charges when you need us most."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-border bg-card p-5">
              <p className="font-bold text-primary">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: d }} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-14">
          <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">Common questions about this offer</h2>
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
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground shadow hover:bg-primary/90"
            >
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY} for same-day service
            </a>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CALL FOOTER */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#0d2d7a] bg-[#0d2d7a] p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.2)] md:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#e8a020] px-6 py-3 text-lg font-extrabold text-[#0d2d7a]"
        >
          <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
