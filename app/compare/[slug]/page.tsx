import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, Star, ShieldCheck, MapPin, Check, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TrustBar from "@/components/content/TrustBar";
import { COMPARE_VERTICALS, getVertical, IDACH, type Tri } from "@/lib/compare/data";
import SecondOpinionForm from "@/components/compare/SecondOpinionForm";
import CompareAnalytics from "@/components/compare/CompareAnalytics";

const SITE = "https://www.idesignac.com";
const PHONE_DISPLAY = "(520) 333-2665";

export function generateStaticParams() {
  return COMPARE_VERTICALS.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const v = getVertical(slug);
  if (!v) return {};
  const url = `${SITE}/compare/${v.slug}`;
  return {
    title: v.title,
    description: v.description,
    alternates: { canonical: url },
    openGraph: { title: v.title, description: v.description, url, type: "website" },
    twitter: { card: "summary_large_image", title: v.title, description: v.description },
  };
}

/** Ownership cell: Yes/No/— with color. */
function own(t: Tri, goodValue: "yes" | "no") {
  if (t === "unknown") return <span className="text-neutral-400">—</span>;
  const good = t === goodValue;
  return <span className={`font-semibold ${good ? "text-emerald-600" : "text-rose-500"}`}>{t === "yes" ? "Yes" : "No"}</span>;
}
/** Capability cell for our own row / competitors. */
function cap(t: Tri) {
  if (t === "yes") return <Check className="mx-auto h-5 w-5 text-emerald-600" aria-label="Yes" />;
  if (t === "no") return <span className="text-neutral-400">—</span>;
  return <span className="text-neutral-400">—</span>;
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = getVertical(slug);
  if (!v) notFound();

  const url = `${SITE}/compare/${v.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": [v.schemaType, "LocalBusiness"],
        "@id": `${url}#business`,
        name: IDACH.name,
        alternateName: "Intelligent Design",
        url: SITE,
        telephone: "+1-520-333-2665",
        priceRange: "$$",
        address: { "@type": "PostalAddress", streetAddress: "1145 E Fort Lowell Rd", addressLocality: "Tucson", addressRegion: "AZ", postalCode: "85719", addressCountry: "US" },
        geo: { "@type": "GeoCoordinates", latitude: 32.2647, longitude: -110.9531 },
        areaServed: ["Tucson", "Oro Valley", "Marana", "Vail", "Sahuarita", "Green Valley", "Catalina Foothills"].map((c) => ({ "@type": "City", name: c })),
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.97", reviewCount: "23000", bestRating: "5", worstRating: "1" },
        sameAs: ["https://www.facebook.com/IntelligentDesignAC", "https://maps.app.goo.gl/xodux58cWvmGRLJd8", "https://www.bbb.org/us/az/tucson/profile/air-conditioning-contractor/intelligent-design-air-conditioning-plumbing-solar-electric-1286-20032256"],
      },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: v.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  const cols = ["Company", "Locally Owned", "Private Equity Owned", "Google Rating", "# Reviews", "BBB Rating", "Veteran Owned", "24/7 Emergency"];

  return (
    <div className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CompareAnalytics vertical={v.verticalLabel} />

      {/* ── HERO (family photo + brand gradient, like the homepage) ── */}
      <section className="relative flex min-h-[440px] items-center overflow-hidden md:min-h-[460px]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-family-mobile.webp" alt="The Dobbins family, owners of Intelligent Design, in Tucson" fill priority sizes="100vw" className="object-cover object-top md:hidden" />
          <Image src="/images/hero-family-desktop.webp" alt="The Dobbins family, owners of Intelligent Design, in Tucson" fill priority sizes="100vw" className="hidden object-cover md:block" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2d7a]/95 via-[#0d2d7a]/70 to-[#0d2d7a]/20" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 md:px-8 md:py-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-300 backdrop-blur-sm">
              <span>23,000 Five-Star Reviews</span><span aria-hidden>·</span><span>BBB A+</span><span aria-hidden>·</span><span>4.97★ Google</span>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] md:text-4xl lg:text-5xl">{v.h1}</h1>
            <p className="mt-4 max-w-xl text-base font-medium text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Family-owned and veteran-owned, serving Tucson since 1979 — and still here to answer the phone.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#second-opinion" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e8a020] px-6 py-3 font-bold text-[#0d2d7a] shadow-lg transition hover:bg-[#f5b731]">
                Free Second Opinion on Any Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:5203332665" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/50 bg-white/5 px-6 py-3 font-bold text-white backdrop-blur-sm transition hover:bg-white/15">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ── Intro + comparison table ── */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">Tucson {v.noun}, side by side</h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">{v.intro}</p>

        <div className="mt-6 rounded-lg bg-primary/5 px-4 py-3 text-sm font-semibold text-primary md:hidden">
          Tip: swipe the table sideways to see every column →
        </div>

        <div id="compare-table" className="mt-6 overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#0d2d7a] text-left text-white">
                {cols.map((h, i) => (
                  <th key={h} className={`whitespace-nowrap px-4 py-3 font-bold ${i === 0 ? "sticky left-0 bg-[#0d2d7a]" : "text-center"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-amber-50/70 font-medium">
                <td className="sticky left-0 whitespace-nowrap bg-amber-50 px-4 py-4 font-extrabold text-[#0d2d7a]">
                  <span className="mr-1.5 rounded bg-[#e8a020] px-1.5 py-0.5 text-[10px] font-black text-[#0d2d7a]">OUR TEAM</span>Intelligent Design
                </td>
                <td className="px-4 py-4 text-center">{own("yes", "yes")}</td>
                <td className="px-4 py-4 text-center">{own("no", "no")}</td>
                <td className="px-4 py-4 text-center font-bold">{IDACH.rating}★</td>
                <td className="px-4 py-4 text-center font-bold">{IDACH.reviews}</td>
                <td className="px-4 py-4 text-center font-bold">{IDACH.bbb}</td>
                <td className="px-4 py-4 text-center">{cap("yes")}</td>
                <td className="px-4 py-4 text-center">{cap("yes")}</td>
              </tr>
              {v.competitors.map((c) => (
                <tr key={c.anchor} className="border-t border-border hover:bg-secondary/60">
                  <td className="sticky left-0 whitespace-nowrap bg-background px-4 py-3.5">
                    <a href={`#${c.anchor}`} className="font-medium text-primary hover:underline">{c.name}</a>
                  </td>
                  <td className="px-4 py-3.5 text-center">{own(c.locallyOwned, "yes")}</td>
                  <td className="px-4 py-3.5 text-center">{own(c.peOwned, "no")}</td>
                  <td className="px-4 py-3.5 text-center">{c.rating ? `${c.rating}★` : "—"}</td>
                  <td className="px-4 py-3.5 text-center">{c.reviews ?? "—"}</td>
                  <td className="px-4 py-3.5 text-center">{c.bbb ?? "—"}</td>
                  <td className="px-4 py-3.5 text-center">{cap(c.national ? "no" : "unknown")}</td>
                  <td className="px-4 py-3.5 text-center text-neutral-400">—</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Competitor rating &amp; review figures are from public Google Business Profiles &amp; BBB.org as of {v.asOf}; verify current figures with each company. Intelligent Design&apos;s 23,000+ is an aggregate across Google, Facebook, PulseM &amp; Angi. Ownership status is per public acquisition announcements and corporate filings as of {v.asOf}; &quot;—&quot; means not independently verified.
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-5">
          <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-[#e8a020]" />
          <p className="text-sm font-semibold text-primary md:text-base">
            When you call Intelligent Design, you&apos;re calling a locally owned Tucson company — not a national private-equity platform. Same neighbors, same phone number, since 1979.
          </p>
        </div>
      </section>

      {/* ── Per-competitor cards ── */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">Tucson {v.noun}, company by company</h2>
          <div className="mt-8 space-y-5">
            {v.competitors.map((c) => (
              <div key={c.anchor} id={c.anchor} data-competitor={c.anchor} className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-primary">{c.name}</h3>
                  {c.peOwned === "yes" && <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800">Private-equity owned</span>}
                  {c.national && <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-bold text-neutral-600">National brand</span>}
                  {c.closed && <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-bold text-rose-700">No longer operating</span>}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.blurb}{" "}
                  {c.rating ? `Public rating: ${c.rating}★ (${c.reviews} Google reviews${c.bbb ? `, BBB ${c.bbb}` : ""}) as of ${v.asOf}.` : `Public rating not independently verified as of ${v.asOf}.`}
                  {c.ownerNote ? (<>{" "}{c.ownerNote}{c.peSource ? (<> (<a href={c.peSource} target="_blank" rel="noopener" className="underline">source</a>)</>) : null}</>) : null}
                </p>
                {c.closed ? (
                  <p className="mt-3 rounded-lg bg-primary/5 px-4 py-3 text-sm text-foreground">
                    Have an orphaned system from {c.name.replace(" (closed)", "")}? We service and repair it. <a href="tel:5203332665" className="font-bold text-primary underline">Call {PHONE_DISPLAY}</a>.
                  </p>
                ) : (
                  <p className="mt-3 text-sm text-foreground">
                    Before you book, compare: our 4.97★ across 23,000+ reviews, BBB A+, a locally &amp; veteran-owned team, 24/7 service with no overtime charges, and a{" "}
                    <a href="#second-opinion" className="font-bold text-primary underline">free second opinion</a> on any {v.verticalLabel.toLowerCase()} quote.{" "}
                    <a href="tel:5203332665" className="font-bold text-primary underline">Call {PHONE_DISPLAY}</a>.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Review proof ── */}
      <section className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-16">
        <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">What Tucson neighbors say</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {v.testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex gap-0.5">{[...Array(5)].map((_, s) => <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-sm italic text-foreground">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-bold text-primary">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.area}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="https://maps.app.goo.gl/xodux58cWvmGRLJd8" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary underline">
            <ShieldCheck className="h-4 w-4" /> Read all 23,000+ verified reviews →
          </a>
        </div>
      </section>

      {/* ── Second-opinion offer ── */}
      <section id="second-opinion" className="scroll-mt-24 bg-[#0d2d7a]">
        <div className="mx-auto max-w-3xl px-4 py-14 md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Got a quote from another {v.verticalLabel} company?</h2>
          <p className="mt-2 text-white/85">We&apos;ll review it free — and tell you honestly if it&apos;s fair. No pressure, no obligation.</p>
          <div className="mt-6">
            <SecondOpinionForm service={v.verticalLabel} pageSlug={v.slug} />
          </div>
        </div>
      </section>

      {/* ── FAQ accordion ── */}
      <section className="mx-auto max-w-4xl px-4 py-14 md:px-8">
        <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">Frequently asked questions</h2>
        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            {v.faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-primary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <p className="mt-10 text-center">
          <Link href={v.servicePath} className="inline-flex items-center gap-1.5 font-bold text-primary underline">
            See our Tucson {v.verticalLabel} services <ArrowRight className="h-4 w-4" />
          </Link>
        </p>
      </section>
    </div>
  );
}
