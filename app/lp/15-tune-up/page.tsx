import type { Metadata } from "next";
import Image from "next/image";
import { Poppins } from "next/font/google";
import {
  Phone,
  Star,
  ShieldCheck,
  Home,
  Gauge,
  Zap,
  Wind,
  Droplets,
  Thermometer,
  FileText,
  CalendarCheck,
  MessageSquare,
  Wrench,
  ChevronDown,
} from "lucide-react";
import { CAMPAIGN_PHONES } from "@/lib/campaignPhones";
import { reviewsData, REVIEW_TOTAL_DISPLAY } from "@/data/reviews";
import LeadForm from "@/components/lp/tuneup15/LeadForm";
import Tracking from "@/components/lp/tuneup15/Tracking";
import StickyBar from "@/components/lp/tuneup15/StickyBar";

/*
 * /lp/15-tune-up - Meta paid landing page for the $15 15th-birthday tune-up.
 * Brief: "$15 Tune-Up Landing Page Brief" (Claude Docs, 2026-10-01).
 *
 * Standalone: no header, promo banner, mega-footer or chat (gated in
 * app/layout.tsx via lib/standaloneLandingPages.ts). Own top bar, own footer,
 * own sticky bottom bar. Indexing is off; this page exists for paid traffic.
 *
 * PHONE: the brief asks for (520) 201-8588 on the page. That number is NOT on
 * the ServiceTitan DNI swap-source list, and /ac-tune-up-2888 already shipped
 * it once with the documented result: DNI found nothing to replace and every
 * call from the page lost its fbclid (see CLAUDE.md section 1). So the page
 * renders the DNI source number, which DNI swaps per session for a pool
 * number that carries the Meta click. To render 201-8588 instead, add it to
 * the DNI swap-source list in ServiceTitan first, then add it to ALLOWED in
 * scripts/check-phone-numbers.mjs and change the one constant below.
 */
const PHONE = CAMPAIGN_PHONES["/lp/15-tune-up"];
const GOOGLE_REVIEWS_URL = "https://search.google.com/local/reviews?placeid=ChIJvQ3jnG501oYRqNUFk4-5nno";
const HERO_FORM_ID = "claim";
const BOTTOM_FORM_ID = "claim-bottom";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "$15 AC Tune-Up in Tucson | 15th Birthday Special | Intelligent Design Home Services",
  description:
    "Our Factory Refresh 86-Point AC Tune-Up is $15 to celebrate 15 years in Tucson. Veteran-owned, BBB A+, 23,000+ five-star reviews. Limited appointments.",
  alternates: { canonical: "https://www.idesignac.com/lp/15-tune-up" },
  // Paid landing page: not for the index. The organic tune-up page is /services/ac-tuneup-tucson.
  robots: { index: false, follow: true },
  openGraph: {
    title: "$15 AC Tune-Up in Tucson | 15th Birthday Special",
    description: "Our Factory Refresh 86-Point AC Tune-Up is $15 to celebrate 15 years in Tucson. Limited appointments.",
    images: [{ url: "/lp/15-tune-up-hero.webp", width: 800, height: 800 }],
  },
};

const INCLUDED = [
  { icon: Gauge, text: "Refrigerant level and pressure check" },
  { icon: Zap, text: "Capacitor and electrical connection test" },
  { icon: Wind, text: "Airflow and filter inspection" },
  { icon: Droplets, text: "Condensate drain line flush" },
  { icon: Thermometer, text: "Thermostat calibration" },
  { icon: FileText, text: "Written report with photos before any repair is recommended" },
];

const TRUST_CARDS = [
  {
    icon: Home,
    title: "Locally owned",
    text: "The same Tucson family has been fixing air conditioners here since 1979. Our trucks, our technicians, our reputation.",
  },
  {
    icon: ShieldCheck,
    title: "Veteran-owned",
    text: "Veteran-owned and operated. We show up when we say we will and we do the job the way it should be done.",
  },
  {
    icon: Star,
    title: `${REVIEW_TOTAL_DISPLAY} five-star reviews`,
    text: "Tucson homeowners have rated us more than 23,000 times. The reviews are public, so read them before you book.",
  },
];

/* Real, verbatim Google reviews from data/reviews.ts. Never replace with invented text. */
const REVIEWS = reviewsData.featuredReviews.filter((r) => ["Victor Lowensten", "T G", "Joemar Decker"].includes(r.author));

function shortName(author: string): string {
  const parts = author.trim().split(/\s+/);
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[parts.length - 1][0]}.`;
}

const STEPS = [
  { icon: CalendarCheck, title: "Claim your spot", text: "Name, mobile number, ZIP. Thirty seconds, tops." },
  { icon: MessageSquare, title: "We text to confirm", text: "You get a text within minutes to lock in a 2-hour window that works for you." },
  { icon: Wrench, title: "A licensed tech does the work", text: "The full 86-point Factory Refresh, a written report with photos, and you pay $15." },
];

const FAQ = [
  {
    q: "Is it really $15?",
    a: "Yes. $15 is the whole price for the Factory Refresh 86-Point AC Tune-Up on one residential system. No trip fee, no diagnostic fee, nothing added at the door.",
  },
  {
    q: "Is there a catch?",
    a: "No. It is our 15th-birthday thank-you to Tucson. If the technician finds something that needs attention, you get the price in writing and you decide. If nothing is wrong, you pay $15 and we leave.",
  },
  {
    q: "How many systems can I book?",
    a: "As many as you have. It is $15 per system, and we will do them all in one visit. Just tell us how many when we text to confirm.",
  },
  {
    q: "Where do you service?",
    a: "Tucson and the surrounding area: Marana, Oro Valley, Catalina Foothills, Casas Adobes, Flowing Wells, Tanque Verde, Vail, Sahuarita, Green Valley, SaddleBrooke and Catalina.",
  },
  {
    q: "How long is the offer good?",
    a: "The $15 price is good while 15th-birthday appointments last. We book them in the order requests come in, so claim a spot now and we will schedule the visit for a day that works for you.",
  },
];

function CallButton({ placement, className = "", label }: { placement: string; className?: string; label?: string }) {
  return (
    <a
      href={`tel:${PHONE.tel}`}
      data-lp-call={placement}
      data-testid={`lp15-call-${placement}`}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-bold ${className}`}
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label || PHONE.display}</span>
    </a>
  );
}

export default function TuneUp15LandingPage() {
  return (
    <div className={`${poppins.variable} ${poppins.className} bg-white text-[17px] leading-relaxed text-neutral-900`}>
      <Tracking />

      {/* Sticky top bar: 56px, logo left, phone right */}
      <header className="sticky top-0 z-40 h-14 bg-black text-white">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4">
          <Image src="/logo-home-services.png" alt="Intelligent Design Home Services" width={62} height={32} priority className="h-8 w-auto" />
          <CallButton placement="topbar" className="h-12 bg-white px-4 text-[16px] text-black" />
        </div>
      </header>

      {/* Hero: black band, yellow price, green CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 pb-10 pt-6 md:grid-cols-2 md:items-start md:gap-10 md:pb-14 md:pt-12">
          <div>
            <p className="text-[15px] font-bold uppercase tracking-wide text-[#FFCD29]">15th Birthday Special &middot; Tucson</p>
            <h1 className="mt-2 text-[44px] font-bold leading-[1.05] md:text-[56px]">
              <span className="text-[#FFCD29]">$15</span> <span className="whitespace-nowrap">AC Tune-Up</span>
            </h1>
            <p className="mt-3 text-[18px] leading-snug text-white/90 md:text-[20px]">
              Our Factory Refresh 86-Point AC Tune-Up is $15 to celebrate 15 years in Tucson. Limited appointments.
            </p>
            <p className="mt-4 text-[14px] font-bold text-white/85 md:text-[15px]">
              <span className="whitespace-nowrap">Veteran-Owned &middot;</span>{" "}
              <span className="whitespace-nowrap">BBB A+ &middot;</span>{" "}
              <span className="whitespace-nowrap">{REVIEW_TOTAL_DISPLAY} Five-Star Reviews</span>
            </p>

            {/* On desktop the ad creative sits here, beside the form. On phones it moves below the form so the button stays above the fold. */}
            <div className="mt-6 hidden md:block">
              <Image
                src="/lp/15-tune-up-hero.webp"
                alt="Intelligent Design Home Services 15th Birthday: Factory Refresh 86-Point AC Tune-Up for only $15"
                width={800}
                height={800}
                priority
                sizes="(min-width: 768px) 480px, 100vw"
                className="h-auto w-full max-w-[480px] rounded-xl"
              />
            </div>
          </div>

          <div id={HERO_FORM_ID} className="scroll-mt-16 rounded-xl bg-white p-4 text-neutral-900 shadow-xl md:p-6">
            <LeadForm id="hero" phoneTel={PHONE.tel} phoneDisplay={PHONE.display} />
          </div>

          <div className="md:hidden">
            <Image
              src="/lp/15-tune-up-hero.webp"
              alt="Intelligent Design Home Services 15th Birthday: Factory Refresh 86-Point AC Tune-Up for only $15"
              width={800}
              height={800}
              sizes="100vw"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* What your $15 gets you */}
      <section className="mx-auto max-w-[680px] px-4 py-12">
        <h2 className="text-[28px] font-bold leading-tight md:text-[34px]">What your $15 gets you</h2>
        <ul className="mt-6 space-y-4">
          {INCLUDED.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2FBF5C]/15">
                <Icon className="h-5 w-5 text-[#1f8f43]" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="pt-0.5">{text}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-neutral-700">
          A licensed tech does the work. No sales quota, no pressure. If something needs attention, you get the price in writing before we touch it.
        </p>
      </section>

      {/* Trust */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-[680px] px-4 py-12">
          <h2 className="text-[28px] font-bold leading-tight md:text-[34px]">Tucson-owned since 1979. Still Tucson-owned.</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {TRUST_CARDS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-neutral-200 bg-white p-5">
                <Icon className="h-6 w-6 text-neutral-900" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-3 text-[18px] font-bold leading-snug">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-neutral-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-[680px] px-4 py-12">
        <h2 className="text-[28px] font-bold leading-tight md:text-[34px]">What Tucson homeowners say</h2>
        <div className="mt-6 space-y-4">
          {REVIEWS.map((r) => (
            <figure key={r.author} className="rounded-xl border border-neutral-200 p-5">
              <div className="flex items-center gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FFCD29] text-[#FFCD29]" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 text-[16px] leading-relaxed text-neutral-800">&ldquo;{r.reviewBody}&rdquo;</blockquote>
              <figcaption className="mt-3 text-[15px] font-bold">
                {shortName(r.author)} <span className="font-normal text-neutral-500">&middot; Google review</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block font-bold text-neutral-900 underline underline-offset-4"
        >
          Read all {REVIEW_TOTAL_DISPLAY} reviews
        </a>
      </section>

      {/* Steps */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-[680px] px-4 py-12">
          <h2 className="text-[28px] font-bold leading-tight md:text-[34px]">Booked in 60 seconds</h2>
          <ol className="mt-6 space-y-5">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[18px] font-bold leading-snug">
                    {i + 1}. {title}
                  </h3>
                  <p className="mt-1 text-neutral-700">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ: native details/summary, no JS */}
      <section className="mx-auto max-w-[680px] px-4 py-12">
        <h2 className="text-[28px] font-bold leading-tight md:text-[34px]">Questions</h2>
        <div className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQ.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-[18px] font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="pb-5 text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id={BOTTOM_FORM_ID} className="scroll-mt-16 bg-black text-white">
        <div className="mx-auto max-w-[680px] px-4 py-12">
          <h2 className="text-[30px] font-bold leading-tight md:text-[36px]">
            Claim your <span className="text-[#FFCD29]">$15</span> tune-up
          </h2>
          <p className="mt-2 text-white/85">Limited 15th-birthday appointments. Takes about 30 seconds.</p>
          <div className="mt-6 rounded-xl bg-white p-4 text-neutral-900 shadow-xl md:p-6">
            <LeadForm id="bottom" phoneTel={PHONE.tel} phoneDisplay={PHONE.display} />
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-neutral-200 pb-24 md:pb-8">
        <div className="mx-auto max-w-[680px] px-4 py-8 text-center">
          <Image src="/logo.png" alt="Intelligent Design" width={160} height={45} className="mx-auto h-auto w-40" />
          <p className="mt-4 text-[15px] text-neutral-700">
            Intelligent Design Home Services &middot; Tucson, AZ &middot; AZ ROC #340962 &middot;{" "}
            <a href={`tel:${PHONE.tel}`} data-lp-call="footer" className="font-bold text-neutral-900">
              {PHONE.display}
            </a>
          </p>
          <p className="mt-3 text-[14px] text-neutral-500">
            <a href="/privacy-policy" className="underline underline-offset-2">Privacy</a>
            <span aria-hidden="true"> &middot; </span>
            <a href="/terms" className="underline underline-offset-2">Terms</a>
          </p>
        </div>
      </footer>

      <StickyBar phoneTel={PHONE.tel} watchId={HERO_FORM_ID} claimHref={`#${BOTTOM_FORM_ID}`} />
    </div>
  );
}
