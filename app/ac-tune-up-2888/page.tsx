import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star, ShieldCheck, BadgeCheck, Clock } from "lucide-react";
import TuneUpForm from "@/components/actune/TuneUpForm";
import StickyBar from "@/components/actune/StickyBar";
import Checklist86 from "@/components/actune/Checklist86";

const PRICE = "$28.88";
const CANONICAL = "https://www.idesignac.com/ac-tune-up-2888";

export const metadata: Metadata = {
  title: "86-Point AC Tune-Up — $28.88 | Intelligent Design (Tucson)",
  description:
    "Limited-time $28.88 86-point AC tune-up for Tucson homeowners, with a 1-Year No Breakdown Guarantee. Book online in under a minute.",
  robots: "noindex, nofollow, noarchive",
  alternates: { canonical: CANONICAL },
};

function Booking() {
  return (
    <section id="book" className="bg-muted/40 py-10">
      <div className="mx-auto max-w-xl px-4">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-lg sm:p-6">
          <h2 className="text-2xl font-extrabold text-primary">Book your {PRICE} tune-up</h2>
          <p className="mt-1 text-[17px] text-muted-foreground">Takes under a minute. No payment now.</p>
          <div className="mt-4">
            <TuneUpForm />
          </div>
          {/* TCPA disclosure directly beneath the submit button */}
          <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
            By submitting, you authorize Intelligent Design to contact you by phone, text, and email about your
            request, including by automated means. Consent is not a condition of purchase. Message and data rates
            may apply.
          </p>
          {/* Offer terms — visible near the form */}
          <p className="mt-3 border-t border-border pt-3 text-[13px] leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Offer terms:</strong> The {PRICE} price covers one 86-point
            precision tune-up on one residential cooling system. Additional systems are{" "}
            <span className="font-semibold text-foreground">[ADD&rsquo;L-SYSTEM PRICE]</span> each. Residential
            only; not valid on commercial equipment. Cannot be combined with other offers. Repair parts and labor
            are not included. Offer expires{" "}
            <span className="font-semibold text-foreground">[OFFER EXPIRATION DATE]</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function AcTuneUp2888Page() {
  return (
    <>
      <StickyBar />

      {/* 4.2 Hero — dark, red price, matches the ad */}
      <section className="bg-[#0d1b3e] px-4 py-9 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-white/80">
            Limited time &middot; Tucson and surrounding areas
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">
            86-Point AC Tune-Up &mdash; <span className="text-[#ff5a5f]">{PRICE}</span>
          </h1>
          <p className="mt-3 text-xl font-bold text-white">Includes a 1-Year No Breakdown Guarantee.</p>
          <p className="mt-3 text-[17px] text-white/85">
            According to the experts, 80% of your HVAC system&rsquo;s reliability, longevity, and efficiency is
            dictated by proper routine maintenance and installation.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a href="#book"
              className="mx-auto inline-flex min-h-[52px] w-full max-w-sm items-center justify-center rounded-lg bg-[#C8101F] px-6 py-4 text-[19px] font-extrabold text-white shadow-lg hover:brightness-110">
              Book Your {PRICE} AC Maintenance Special Online
            </a>
            <a href="tel:5202018588" className="text-[17px] font-bold text-white underline underline-offset-4">
              Click or Call (520)&nbsp;201-8588
            </a>
          </div>
        </div>
      </section>

      {/* 4.3 Trust strip */}
      <section className="border-b border-border bg-card px-4 py-4">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-[15px] font-semibold text-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /> 4.97 &middot; 23,000+ reviews
          </span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-5 w-5 text-primary" /> In business since 1979</span>
          <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-5 w-5 text-primary" /> AZ ROC 340962</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-5 w-5 text-primary" /> Background-checked technicians</span>
        </div>
      </section>

      {/* 4.4 Booking form (second thing on the page) */}
      <Booking />

      {/* 4.5 What the 86 points cover */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">What we check &mdash; all 86 points</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">
            A precision tune-up isn&rsquo;t a quick look. Here&rsquo;s what a {PRICE} visit actually includes.
          </p>
          <div className="mt-5">
            <Checklist86 />
          </div>
        </div>
      </section>

      {/* 4.6 The guarantee, explained */}
      <section className="bg-muted/40 px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">1-Year No Breakdown Guarantee</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            If your system has a covered breakdown within 12 months of your tune-up, we&rsquo;ll come back out and
            waive the diagnostic fee &mdash; you only pay for any parts and repair needed. It&rsquo;s our way of
            standing behind the work: we tuned it, so we&rsquo;ll be the ones to look at it first.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            The guarantee covers the cooling system we serviced. It doesn&rsquo;t cover pre-existing failures found
            during the visit, damage from power surges or storms, or systems that are already past the point of
            repair &mdash; and in those cases we&rsquo;ll tell you honestly and up front, before any work.
          </p>
        </div>
      </section>

      {/* 4.7 Social proof */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">What Tucson neighbors say</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { q: "Booked the $28.88 tune-up and the tech was on time, thorough, and never once tried to sell me a new system.", n: "Maria G.", a: "Oro Valley" },
              { q: "They caught a weak capacitor before it left us without AC in July. Cheapest insurance I&rsquo;ve bought all year.", n: "David R.", a: "Marana" },
              { q: "Honest, professional maintenance visit. Emailed me photos of everything they checked. Will use again.", n: "Susan L.", a: "Catalina Foothills" },
            ].map((r, i) => (
              <figure key={i} className="rounded-xl border border-border bg-card p-4">
                <div className="mb-2 flex gap-0.5">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
                <blockquote className="text-[15px] text-foreground" dangerouslySetInnerHTML={{ __html: `&ldquo;${r.q}&rdquo;` }} />
                <figcaption className="mt-2 text-[14px] font-semibold text-muted-foreground">{r.n} &middot; {r.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 4.8 Service area */}
      <section className="bg-muted/40 px-4 py-6">
        <p className="mx-auto max-w-3xl text-center text-[17px] text-foreground">
          <strong>Serving Tucson and surrounding areas including Marana, Oro Valley, Catalina Foothills, Sahuarita, Vail, and SaddleBrooke.</strong>
        </p>
      </section>

      {/* 4.9 FAQ (expanded by default) */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">Quick questions</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: `Is ${PRICE} the total price?`, a: `Yes. ${PRICE} covers the full 86-point tune-up on one residential cooling system. If we find something that needs a repair, we&rsquo;ll show you and quote it before doing any work &mdash; no surprises.` },
              { q: "How long does the visit take?", a: "Most tune-ups take about 45 to 75 minutes, depending on your system and how many units you have." },
              { q: "Will you try to sell me a new system?", a: "No. Our technicians aren&rsquo;t paid on commission. If your system is healthy, we&rsquo;ll tell you it&rsquo;s healthy. We only recommend a replacement when a repair genuinely doesn&rsquo;t make sense &mdash; and we&rsquo;ll explain why." },
              { q: "What if I need a repair?", a: "We&rsquo;ll show you what we found, quote it up front, and let you decide. Your 1-Year No Breakdown Guarantee starts the day of your tune-up." },
            ].map((f, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-[18px] font-bold text-foreground">{f.q}</h3>
                <p className="mt-1.5 text-[16px] leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: f.a }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.10 Closing CTA */}
      <section className="bg-[#0d1b3e] px-4 py-10 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold">
            86-Point AC Tune-Up &mdash; <span className="text-[#ff5a5f]">{PRICE}</span>
          </h2>
          <p className="mt-2 text-xl font-bold">Includes a 1-Year No Breakdown Guarantee.</p>
          <a href="#book"
            className="mx-auto mt-5 inline-flex min-h-[52px] w-full max-w-sm items-center justify-center rounded-lg bg-[#C8101F] px-6 py-4 text-[19px] font-extrabold text-white shadow-lg hover:brightness-110">
            Book Your {PRICE} AC Maintenance Special Online
          </a>
          <p className="mt-3 text-[16px] text-white/85">
            Click or Call <a href="tel:5202018588" className="font-bold underline underline-offset-4">(520) 201-8588</a>
          </p>
        </div>
      </section>

      {/* Reduced footer */}
      <footer className="border-t border-border bg-card px-4 py-8">
        <div className="mx-auto max-w-3xl text-center">
          <Link href="/" className="inline-block">
            <Image src="/logo.png" alt="Intelligent Design Air Conditioning, Plumbing, Solar & Electric" width={220} height={44} className="mx-auto h-11 w-auto" />
          </Link>
          <p className="mt-3 text-[16px]">
            <a href="tel:5202018588" className="font-extrabold text-primary">(520) 201-8588</a>
          </p>
          <p className="mt-2 text-[14px] text-muted-foreground">
            Serving Tucson, Marana, Oro Valley, Catalina Foothills, Sahuarita, Vail &amp; SaddleBrooke.
          </p>
          <p className="mt-2 text-[13px] text-muted-foreground">
            Licensed, Bonded &amp; Insured &middot; AZ ROC 340962, ROC 322375, ROC 296386, ROC 276673
          </p>
          <p className="mt-3 text-[14px]">
            <a href="/privacy" className="text-muted-foreground underline">Privacy Policy</a>
            <span className="mx-2 text-muted-foreground">&middot;</span>
            <a href="/terms" className="text-muted-foreground underline">Terms of Service</a>
          </p>
        </div>
      </footer>
    </>
  );
}
