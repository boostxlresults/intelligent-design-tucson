import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as generateFullMetadata } from "@/lib/seo/generateMetadata";
import { getPageSchemas } from "@/lib/seo/schemaRegistry";
import { SITE_URL } from "@/lib/constants";
import ClientSchemas from "@/components/schemas/ClientSchemas";
import { SchedulerCluster } from "@/components/SchedulerCluster";
import TrustBar from "@/components/content/TrustBar";
import {
  Ruler, Wind, Thermometer, XCircle, CheckCircle2, ShieldCheck,
  AlertTriangle, ArrowRight, Building2, Phone,
} from "lucide-react";

const pageSchemas = getPageSchemas({
  pageType: "info",
  canonicalUrl: `${SITE_URL}/proper-ac-sizing`,
  pageData: {},
});

export const metadata: Metadata = generateFullMetadata({
  title: "How to Correctly Size an AC in Tucson | Manual J, Not Square Footage",
  description:
    "Sizing an air conditioner from square footage is guessing. The DOE and ACCA say proper sizing requires a Manual J load calculation, a blower-door test, and a thermal-imaging scan. Here's why — and why Intelligent Design is the only Tucson contractor that measures all three. Call (520) 333-2665.",
  canonicalUrl: "/proper-ac-sizing",
  keywords: [
    "correct ac sizing tucson",
    "how to size an air conditioner",
    "manual j load calculation tucson",
    "why square footage ac sizing is wrong",
    "properly sized air conditioner",
    "oversized air conditioner problems",
    "blower door test tucson",
    "hvac load calculation tucson",
  ],
  type: "article",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the correct way to size an air conditioner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The correct method is an ACCA Manual J load calculation — the ANSI-recognized national standard — using measured data about your home. Intelligent Design pairs Manual J with a blower-door test (to measure real air infiltration) and a thermal-imaging scan (to locate insulation gaps and leaks). The U.S. Department of Energy and the Air Conditioning Contractors of America recommend a Manual J load calculation for every HVAC job, and a proper load calculation is required by national building codes.",
      },
    },
    {
      "@type": "Question",
      name: "Why is sizing an AC by square footage wrong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Square footage is only one of many variables. Insulation and air-tightness, ceiling height, window type and orientation, sun exposure, and occupancy all change the load dramatically. Sizing by square footage alone almost always leads to an oversized system, which short-cycles, never dehumidifies properly, wears out faster, and costs more to run.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my air conditioner is oversized?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An oversized AC cools the air quickly and shuts off before it can remove humidity, a pattern called short-cycling. The result is a cold-but-clammy home, uneven temperatures, more wear on the compressor, and higher energy bills. A correctly sized unit runs longer, steadier cycles — roughly 15 minutes at a time, two to three times an hour in peak heat.",
      },
    },
    {
      "@type": "Question",
      name: "What is a blower-door test and why does it matter for sizing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A blower-door test measures how much air leaks through your home's envelope. Air infiltration can account for 25–50% of the heating and cooling load in older homes, and Manual J software defaults can over-estimate it by 30–50% in tight modern homes. Measuring it directly — instead of guessing — is what makes the load calculation accurate and prevents oversizing.",
      },
    },
    {
      "@type": "Question",
      name: "Does Intelligent Design charge for the sizing assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Intelligent Design's in-home sizing assessment — Manual J load calculation, blower-door test, and thermal-imaging scan — is free with a system estimate. Call (520) 333-2665 or book online.",
      },
    },
  ],
};

const Cite = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{children}</a>
);

export default function ProperAcSizingPage() {
  return (
    <>
      <ClientSchemas schemas={pageSchemas} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/90 to-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4" /> The DOE &amp; ACCA method — done right in Tucson
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Sizing Your AC From Square Footage Is Guessing.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            After 46 years of installing systems in Tucson homes, we can tell you: the only honest way to size one
            is to actually <strong>measure</strong> your house — a Manual&nbsp;J load calculation, a blower-door test,
            and a thermal-imaging scan. It's the method the Department of Energy and ACCA call for, and it's how we
            size every system we put in.
          </p>
          <div className="mt-8">
            <SchedulerCluster position="hero" className="!mt-0" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* The problem */}
      <section className="py-14 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why the "instant square-footage quote" fails you</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Type your square footage into an online tool and it will confidently spit out a tonnage. The problem?
            Square footage is just one of dozens of variables. Two identical-size homes across the street from each
            other can need very different systems depending on insulation, air leakage, windows, ceiling height, and how
            much desert sun they take. Sizing on square footage alone almost always produces an{" "}
            <strong>oversized</strong> system — the single most common and most expensive HVAC mistake.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              ["Short-cycling", "It blasts cold, hits the thermostat, and shuts off — over and over — before it can do its real job."],
              ["A cold, clammy house", "Short cycles never run long enough to pull humidity out of the air. You feel cold and sticky at the same time."],
              ["Higher power bills", "All that stopping and starting wastes energy — a bigger unit costs more to buy and more to run."],
              ["Early failure", "Constant cycling wears out the compressor faster, shortening the life of a system you just paid for."],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900">
              A right-sized AC runs long, steady cycles — about 15 minutes at a time, 2–3 times an hour in peak heat —
              which is exactly what dehumidifies your home and keeps bills down.{" "}
              <Cite href="https://indoortemp.com/resources/oversized-air-conditioner-problem">(Fire &amp; Ice)</Cite>
            </p>
          </div>
        </div>
      </section>

      {/* Punchy comparison */}
      <section className="py-14 md:py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Square-footage guess vs. the measured method</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Here's the difference between what most quotes are built on and what actually determines the right system for your home.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-xl border-2 border-rose-200 bg-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-rose-500" />
                <h3 className="text-lg font-bold">The square-footage "instant quote"</h3>
              </div>
              <ul className="space-y-2 text-sm">
                {["One input: square footage", "Ignores insulation & air leakage", "Ignores windows, sun, ceiling height",
                  "No measurement of your actual home", "Usually oversizes the system", "Not how DOE or ACCA say to do it"].map((x) => (
                  <li key={x} className="flex gap-2 text-muted-foreground"><XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border-2 border-emerald-300 bg-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <h3 className="text-lg font-bold">Our measured, in-home method</h3>
              </div>
              <ul className="space-y-2 text-sm">
                {["ACCA Manual J load calculation (the ANSI standard)", "Blower-door test measures real air infiltration",
                  "Thermal-imaging scan finds insulation gaps & leaks", "Accounts for windows, orientation, sun & occupancy",
                  "Sizes for correct, steady cycles — real dehumidification", "The method DOE & ACCA recommend for every job"].map((x) => (
                  <li key={x} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>{x}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The three tests */}
      <section className="py-14 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">The three measurements that get it right</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Intelligent Design is the Tucson contractor that actually performs all three — every time.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              [Ruler, "Manual J load calculation", "The ANSI-recognized national standard from ACCA. It calculates your home's real heat gain and loss — room by room — instead of assuming. A proper Manual J is required by national building codes."],
              [Wind, "Blower-door test", "Measures exactly how much air leaks through your home's envelope. Infiltration can be 25–50% of the load in older homes — measuring it, instead of guessing, is what keeps the calculation honest."],
              [Thermometer, "Thermal-imaging scan", "An infrared camera reveals hidden insulation gaps, thermal bridging, and leaks a tape measure never could — so the load reflects your home as it actually performs."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Ruler;
              return (
                <div key={t as string} className="rounded-xl border border-border bg-card p-6">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <I className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{t as string}</h3>
                  <p className="text-sm text-muted-foreground">{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authority block */}
      <section className="py-14 md:py-20 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Don't take our word for it</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              A Manual&nbsp;J load calculation is the <strong>ANSI-recognized national standard</strong> for residential
              HVAC sizing, and a proper load calculation is <strong>required by national building codes</strong> and most
              state and local jurisdictions.{" "}
              <Cite href="https://www.acca.org/standards/technical-manuals/manual-j">(ACCA)</Cite>{" "}
              <Cite href="https://basc.pnnl.gov/library/acca-manual-j-residential-load-calculation">(DOE Building America / PNNL)</Cite>
            </p>
            <p>
              A Manual&nbsp;J load evaluation is a procedure recommended by <strong>both the Air Conditioning Contractors
              of America (ACCA) and the U.S. Department of Energy for every HVAC job.</strong>{" "}
              <Cite href="https://indoortemp.com/resources/oversized-air-conditioner-problem">(Fire &amp; Ice)</Cite>
            </p>
            <p>
              Measured infiltration from a blower-door test is considered the gold standard for load accuracy, because
              software defaults systematically over-estimate leakage in tight homes and cause equipment oversizing.{" "}
              <Cite href="https://www.greenbuildingadvisor.com/question/how-do-i-calculate-infiltration-heat-loss-based-on-blower-door-test-results">(GreenBuildingAdvisor)</Cite>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Get your system sized the right way — free</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Curious what size you might need? Start with our honest 30-second range, then let us confirm it exactly in
            your home with the full Manual&nbsp;J, blower-door, and thermal-imaging assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link href="/ac-sizing-estimator"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-semibold hover-elevate">
              Try the sizing estimator <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:5203332665"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-md font-semibold hover-elevate">
              <Phone className="w-4 h-4" /> (520) 333-2665
            </a>
          </div>
          <SchedulerCluster position="bottom" className="!mt-0" />
        </div>
      </section>
    </>
  );
}
