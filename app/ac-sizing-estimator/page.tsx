import { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as generateFullMetadata } from "@/lib/seo/generateMetadata";
import { getPageSchemas } from "@/lib/seo/schemaRegistry";
import { SITE_URL } from "@/lib/constants";
import ClientSchemas from "@/components/schemas/ClientSchemas";
import SizingEstimator from "@/components/sizing/SizingEstimator";
import TrustBar from "@/components/content/TrustBar";
import { ArrowRight, Ruler } from "lucide-react";

const pageSchemas = getPageSchemas({
  pageType: "info",
  canonicalUrl: `${SITE_URL}/ac-sizing-estimator`,
  pageData: {},
});

export const metadata: Metadata = generateFullMetadata({
  title: "AC Sizing Estimator Tucson | Get Your Tonnage Range in 30 Seconds",
  description:
    "Free Tucson AC sizing estimator. Get a preliminary tonnage range based on the same factors a Manual J load calculation weighs — not just square footage. Then get it sized exactly with our free in-home Manual J, blower-door, and thermal-imaging assessment. Call (520) 333-2665.",
  canonicalUrl: "/ac-sizing-estimator",
  keywords: [
    "ac sizing estimator",
    "what size ac do i need",
    "ac tonnage calculator tucson",
    "hvac sizing calculator",
    "how many tons ac for my house",
    "air conditioner size calculator tucson",
    "manual j tucson",
  ],
  type: "website",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How accurate is an online AC size calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An online estimator can give a useful ballpark range, but it cannot correctly size a system. Accurate sizing requires an in-home ACCA Manual J load calculation combined with a blower-door test (to measure real air infiltration) and a thermal-imaging scan (to find insulation gaps and leaks). That is the method the U.S. Department of Energy and the Air Conditioning Contractors of America recommend for every job. Our estimator asks for the factors Manual J weighs, but it deliberately returns a range, not a single number.",
      },
    },
    {
      "@type": "Question",
      name: "Why does the estimator give a range instead of one number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because giving a single number from a few inputs would be a guess — and guessing is exactly what causes oversized, short-cycling systems that never dehumidify and cost more to run. We show an honest range and then confirm the exact size in your home with a Manual J load calculation, a blower-door test, and a thermal-imaging scan.",
      },
    },
    {
      "@type": "Question",
      name: "What size air conditioner do I need for my Tucson home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on far more than square footage: insulation and air-tightness, ceiling height, window type, sun exposure, and occupancy all change the load. In Tucson's hot-dry climate, most homes fall between 2 and 5 tons, but the correct size for your specific home can only be determined with an in-home Manual J load calculation plus blower-door and thermal-imaging testing.",
      },
    },
  ],
};

export default function AcSizingEstimatorPage() {
  return (
    <>
      <ClientSchemas schemas={pageSchemas} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary/90 to-primary text-primary-foreground py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium mb-4">
            <Ruler className="w-4 h-4" /> Preliminary sizing range — not a guess from square footage
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            What Size AC Do You Need in Tucson?
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Get an honest tonnage range in 30 seconds — based on the same factors a Manual&nbsp;J load calculation
            weighs. Then we size it exactly, in your home, the way the DOE and ACCA say it must be done.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="py-12 md:py-16 px-4">
        <SizingEstimator />
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto rounded-xl border border-border bg-muted/30 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Why we won't just hand you a number</h2>
          <p className="text-muted-foreground">
            Plenty of "instant quote" tools will happily size your system from square footage alone. In our experience,
            that's the number-one reason Tucson homes end up with an oversized AC — one that short-cycles, never pulls
            the humidity out, wears out early, and quietly runs up the power bill. We'd rather do it right.{" "}
            <Link href="/proper-ac-sizing" className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
              See how we correctly size your system <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
