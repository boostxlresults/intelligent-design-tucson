import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

function mark(t: Tri, kind: "local" | "pe" | "vet") {
  if (t === "yes") return <span className={kind === "pe" ? "font-bold text-amber-600" : "font-bold text-emerald-600"}>✓</span>;
  if (t === "no") return <span className="text-neutral-400">✗</span>;
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
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: v.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <div className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CompareAnalytics vertical={v.verticalLabel} />

      {/* Hero trust bar */}
      <section className="bg-[#0d2d7a] text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-amber-300">
            <span>23,000 Five-Star Reviews</span><span aria-hidden>·</span>
            <span>BBB A+ Rating</span><span aria-hidden>·</span>
            <span>4.97★ Google Rating</span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">{v.h1}</h1>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#second-opinion" className="rounded-lg bg-[#e8a020] px-6 py-3 text-center font-bold text-[#0d2d7a] hover:bg-[#f5b731]">Free Second Opinion on Any Quote</a>
            <a href="tel:5203332665" className="rounded-lg border border-white/40 px-6 py-3 text-center font-bold text-white hover:bg-white/10">Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      {/* Intro + comparison table */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{v.intro}</p>

        <div id="compare-table" className="mt-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[880px] border-collapse text-sm">
            <thead>
              <tr className="bg-secondary text-left">
                {["Company", "Google Rating", "# Reviews", "BBB", "Locally Owned", "PE-Owned", "Veteran Owned", "24/7 Emergency", "Free 2nd Opinion", "Financing", "Warranty"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-3 py-3 font-bold text-primary">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#0d2d7a]/5 font-medium">
                <td className="sticky left-0 whitespace-nowrap bg-[#eef2fb] px-3 py-3 font-extrabold text-[#0d2d7a]">Intelligent Design ★</td>
                <td className="px-3 py-3 font-bold">{IDACH.rating}★</td>
                <td className="px-3 py-3 font-bold">{IDACH.reviews}</td>
                <td className="px-3 py-3">{IDACH.bbb}</td>
                <td className="px-3 py-3">{mark("yes", "local")}</td>
                <td className="px-3 py-3">{mark("no", "pe")}</td>
                <td className="px-3 py-3">{mark("yes", "vet")}</td>
                <td className="px-3 py-3 font-bold text-emerald-600">Yes</td>
                <td className="px-3 py-3 font-bold text-emerald-600">Yes</td>
                <td className="px-3 py-3 font-bold text-emerald-600">Yes</td>
                <td className="px-3 py-3 text-xs">{v.warranty}</td>
              </tr>
              {v.competitors.map((c) => (
                <tr key={c.anchor} className="border-t border-border">
                  <td className="sticky left-0 whitespace-nowrap bg-background px-3 py-3">
                    <a href={`#${c.anchor}`} className="text-primary hover:underline">{c.name}</a>
                  </td>
                  <td className="px-3 py-3">{c.rating ? `${c.rating}★` : "—"}</td>
                  <td className="px-3 py-3">{c.reviews ?? "—"}</td>
                  <td className="px-3 py-3">{c.bbb ?? "—"}</td>
                  <td className="px-3 py-3">{mark(c.locallyOwned, "local")}</td>
                  <td className="px-3 py-3">{mark(c.peOwned, "pe")}</td>
                  <td className="px-3 py-3">{mark(c.national ? "no" : "unknown", "vet")}</td>
                  <td className="px-3 py-3 text-neutral-400">—</td>
                  <td className="px-3 py-3 text-neutral-400">—</td>
                  <td className="px-3 py-3 text-neutral-400">—</td>
                  <td className="px-3 py-3 text-neutral-400">—</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 max-w-3xl text-xs text-muted-foreground">
          Competitor rating &amp; review figures are from public Google Business Profiles &amp; BBB.org as of {v.asOf}; verify current figures with each company. Intelligent Design&apos;s 23,000+ is an aggregate across Google, Facebook, PulseM &amp; Angi. Ownership status is per public acquisition announcements and corporate filings as of {v.asOf}; &quot;—&quot; means not independently verified. Operational columns (24/7, second opinion, financing, warranty) reflect Intelligent Design&apos;s verified offerings; confirm competitor specifics with each company.
        </p>
        <p className="mt-4 max-w-3xl rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-primary">
          When you call Intelligent Design, you&apos;re calling a locally owned Tucson company — not a national private-equity platform.
        </p>
      </section>

      {/* Per-competitor sections */}
      <section className="mx-auto max-w-4xl px-4 pb-6">
        <h2 className="text-2xl font-bold text-primary">Tucson {v.noun}, company by company</h2>
        <div className="mt-6 space-y-8">
          {v.competitors.map((c) => (
            <div key={c.anchor} id={c.anchor} data-competitor={c.anchor} className="scroll-mt-24 border-b border-border pb-6">
              <h3 className="text-lg font-bold text-primary">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {c.blurb}{" "}
                {c.rating ? `Public rating: ${c.rating}★ (${c.reviews} Google reviews${c.bbb ? `, BBB ${c.bbb}` : ""}) as of ${v.asOf}.` : `Public rating not independently verified as of ${v.asOf}.`}
                {c.ownerNote ? (
                  <>{" "}{c.ownerNote}{c.peSource ? (<> (<a href={c.peSource} target="_blank" rel="noopener" className="underline">source</a>)</>) : null}</>
                ) : null}
              </p>
              {c.closed ? (
                <p className="mt-2 text-sm text-foreground">
                  Have an orphaned system from {c.name.replace(" (closed)", "")}? Intelligent Design services and repairs it. Call{" "}
                  <a href="tel:5203332665" className="font-bold text-primary underline">{PHONE_DISPLAY}</a>.
                </p>
              ) : (
                <p className="mt-2 text-sm text-foreground">
                  Before you book, compare: Intelligent Design&apos;s 4.97★ across 23,000+ reviews, BBB A+, a locally owned &amp; veteran-owned team, 24/7 service with no overtime charges, and a <a href="#second-opinion" className="font-bold text-primary underline">free second opinion</a> on any {v.verticalLabel.toLowerCase()} quote.{" "}
                  <a href="tel:5203332665" className="font-bold text-primary underline">Call {PHONE_DISPLAY}</a>.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Review proof */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-2xl font-bold text-primary">What Tucson neighbors say</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {v.testimonials.map((t, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <p className="text-sm italic text-foreground">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-3 text-sm font-bold text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.area}</p>
              </div>
            ))}
          </div>
          <a href="https://maps.app.goo.gl/xodux58cWvmGRLJd8" target="_blank" rel="noopener" className="mt-6 inline-block text-sm font-bold text-primary underline">
            Read all 23,000+ reviews on Google →
          </a>
        </div>
      </section>

      {/* Second-opinion offer */}
      <section id="second-opinion" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-12">
        <h2 className="text-2xl font-bold text-primary">Got a quote from another {v.verticalLabel} company?</h2>
        <p className="mt-2 text-muted-foreground">We&apos;ll review it free — and tell you honestly if it&apos;s fair. No pressure, no obligation.</p>
        <div className="mt-6">
          <SecondOpinionForm service={v.verticalLabel} pageSlug={v.slug} />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="text-2xl font-bold text-primary">Frequently asked questions</h2>
          <div className="mt-6 space-y-5">
            {v.faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-bold text-primary">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm">
            <Link href={v.servicePath} className="font-bold text-primary underline">See our Tucson {v.verticalLabel} services →</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
