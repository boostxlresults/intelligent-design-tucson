import type { Metadata } from "next";
import { Phone, Star, Zap, Snowflake, Wind, Gauge, Droplets, ClipboardCheck } from "lucide-react";
import { CAMPAIGN_PHONES } from "@/lib/campaignPhones";
import { TuneUp15Form } from "@/components/forms/TuneUp15Form";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";
import LpProof from "@/components/lp/LpProof";
import LpServiceArea from "@/components/lp/LpServiceArea";
import LpFaq from "@/components/lp/LpFaq";
import LpStickyCall from "@/components/lp/LpStickyCall";

export const dynamic = "force-dynamic";

const PHONE = CAMPAIGN_PHONES["/lp/15-tune-up"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · NATE-Certified Technicians · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "$15 AC Tune-Up in Tucson | 15th Anniversary Special | Intelligent Design",
  description: "Our 15th anniversary gift to Tucson: the full 86-point Factory Refresh AC tune-up for $15. New customers only. No trip fee, no upsell pressure, written findings.",
  alternates: { canonical: "https://www.idesignac.com/lp/15-tune-up" },
};

const CHECKLIST = [
  {
    icon: Zap,
    group: "Electrical System",
    items: [
      "Inspect and tighten all electrical connections",
      "Test capacitor performance",
      "Check contactor condition",
      "Verify voltage and amperage",
      "Inspect wiring for damage or wear",
    ],
  },
  {
    icon: Snowflake,
    group: "Refrigerant System",
    items: [
      "Check refrigerant levels",
      "Inspect for refrigerant leaks",
      "Test pressure readings",
      "Inspect refrigerant lines",
    ],
  },
  {
    icon: Wind,
    group: "Airflow & Components",
    items: [
      "Inspect and clean evaporator coil",
      "Inspect and clean condenser coil",
      "Check blower motor and wheel",
      "Inspect air filter (replacement recommendations)",
      "Check supply and return airflow",
      "Inspect ductwork connections",
    ],
  },
  {
    icon: Gauge,
    group: "Thermostat & Controls",
    items: [
      "Calibrate thermostat",
      "Test heating/cooling cycles",
      "Verify temperature differential",
      "Check safety controls",
    ],
  },
  {
    icon: Droplets,
    group: "Drainage",
    items: [
      "Clear condensate drain line",
      "Inspect drain pan",
      "Check for moisture/water damage",
    ],
  },
  {
    icon: ClipboardCheck,
    group: "Overall System",
    items: [
      "Measure system performance",
      "Check for unusual noises or vibrations",
      "Inspect outdoor unit clearance",
      "Written report with recommendations",
    ],
  },
];

const REVIEWS = [
  {
    q: "Tech spent well over an hour, walked the whole checklist with me, and handed me a written report. Found a weak capacitor and quoted it. No pressure at all.",
    n: "Regina F.",
    a: "Casas Adobes",
  },
  {
    q: "Booked the maintenance visit online in about a minute. They showed up in the window and cleaned the coils properly, not a quick hose-off.",
    n: "Darren P.",
    a: "Vail",
  },
  {
    q: "Honestly expected a sales pitch for a new system. Got a clean bill of health and a note to keep an eye on one part. That earned my trust.",
    n: "Lucia M.",
    a: "Midtown Tucson",
  },
];

const FAQ = [
  {
    q: "How much does an AC tune-up cost in Tucson?",
    a: "Right now ours is $15 for new customers as our 15th anniversary special, and that is the entire charge for the visit with no trip fee added to it. AC tune up cost normally varies quite a bit around town depending on how many points the technician actually covers and whether a diagnostic or trip charge is bundled in, which is why the full checklist is published on this page. Parts, refrigerant and any repair are quoted separately and only go ahead if you approve them.",
  },
  {
    q: "What does an AC tune-up include?",
    a: "Ours is an 86-point Factory Refresh covering six areas: the electrical system, the refrigerant system, airflow and components, the thermostat and controls, drainage, and overall system performance. That means things like tightening electrical connections, testing the capacitor, checking refrigerant pressures, cleaning the evaporator and condenser coils, calibrating the thermostat and clearing the condensate drain line. The full item-by-item list is on this page so you can see exactly what a technician will do before you book.",
  },
  {
    q: "How often should I get AC maintenance in Arizona?",
    a: "Once a year at minimum, and ideally in spring before the first real heat. Arizona is harder on equipment than almost anywhere: a Tucson system runs most of the day for five or six months, so dust loads up on coils and small electrical faults get found in July at the worst possible moment. Homeowners who keep up annual ac maintenance reliably get more years out of a system than those who do not.",
  },
  {
    q: "Is a $15 tune-up really $15?",
    a: "Yes. The tune-up is $15 whether you buy anything else or not, there is no trip fee on top of it, and the technician is not paid to talk you into a repair. If something is genuinely wrong you get a written quote and you decide, on your own timeline. It is new customers only and one per system, because it is an anniversary thank-you rather than a permanent price.",
  },
  {
    q: "How long does a tune-up take?",
    a: "Plan on about an hour to ninety minutes for a single system, longer if the coils have not been cleaned in several years or the unit is on a roof. Rushing it is how points get skipped, so we would rather book the time properly than run three visits in a morning. You get the written report before the technician leaves.",
  },
  {
    q: "Can you tune up a heat pump?",
    a: "Yes. A heat pump gets the same 86-point Factory Refresh, plus a check of the reversing valve and the defrost cycle that a straight air conditioner does not have. Heat pumps run year round in Tucson rather than sitting idle all winter, so annual hvac maintenance matters more on them, not less.",
  },
];

export default function TuneUp15Lp() {
  return (
    <>
      <LpStickyCall secondaryHref="#book" secondaryLabel="Book online" />

      {/* Hero */}
      <section className="px-4 py-6 sm:py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">15th Anniversary Special</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
            $15 Factory Refresh AC Tune-Up in Tucson
          </h1>
          <p className="mt-3 text-[16px] font-semibold text-muted-foreground">
            Celebrating 15 years as Intelligent Design (2011-2026). Same family serving Tucson since 1979.
          </p>

          {/* Two actions, side by side, above the fold */}
          <div className="mx-auto mt-5 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE.tel}`}
              data-testid="lp-hero-call"
              className="flex min-h-[60px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-4 py-4 text-[20px] font-extrabold text-white shadow-lg hover:brightness-110"
            >
              <Phone className="h-6 w-6" /> {PHONE.display}
            </a>
            <div className="flex-1">
              <SchedulerEmbed
                triggerText="Book online"
                fullWidth
                size="lg"
                data-testid="lp-hero-schedule"
                className="w-full min-h-[60px] rounded-lg !bg-[#0d1b3e] !px-4 py-4 text-[20px] font-extrabold !text-white shadow-lg hover:brightness-125"
              />
            </div>
          </div>

          <p className="mt-4 text-[17px] font-bold text-foreground">
            $15. No trip fee. No upsell pressure. Written findings before any repair is recommended.
          </p>
          <p className="mt-1.5 text-[16px] font-semibold text-muted-foreground">
            New customers only.<a href="#offer-terms" className="ml-0.5 text-[#C8101F] underline">*</a> &middot; Same-week appointments available.
          </p>

          <p className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {TRUST}
          </p>
        </div>
      </section>

      {/* The checklist */}
      <section className="border-t border-border px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            What&rsquo;s Included in Our 86-Point Factory Refresh Tune-Up
          </h2>
          <p className="mt-2 text-[17px] text-muted-foreground">
            Published in full so you can see exactly what a technician does before you book. Six areas, every one of them checked on every visit.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {CHECKLIST.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-6 w-6 shrink-0 text-[#C8101F]" />
                    <h3 className="text-[18px] font-bold text-foreground">{c.group}</h3>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {c.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-[16px] leading-relaxed text-muted-foreground">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8101F]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Offer terms, directly under the checklist, normal body size */}
          <div id="offer-terms" className="mt-6 scroll-mt-4 rounded-xl border border-border bg-card p-6">
            <h3 className="text-[19px] font-bold text-foreground">Offer terms</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              *15th Anniversary $15 Factory Refresh Tune-Up: new customers only, residential central AC or heat pump systems inside our service area, one per system, while anniversary appointments last. Repairs, parts and refrigerant are quoted separately and only with your approval. Cannot be combined with other offers. Ask an Intelligent Design Customer Care team member for details.
            </p>
          </div>

          <div className="mt-6 rounded-xl bg-[#0d1b3e] p-6 text-center text-white">
            <p className="text-xl font-bold">Book the whole checklist for $15</p>
            <p className="mt-1 text-white/85">Takes about a minute online, or call and we will book it for you.</p>
            <div className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE.tel}`} className="flex min-h-[56px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-4 py-4 text-lg font-extrabold text-white shadow-lg hover:brightness-110">
                <Phone className="h-6 w-6" /> Call {PHONE.display}
              </a>
              <div className="flex-1">
                <SchedulerEmbed triggerText="Book online" fullWidth size="lg" data-testid="lp-mid-schedule" className="w-full min-h-[56px] rounded-lg !bg-white !px-4 py-4 text-lg font-extrabold !text-[#0d1b3e] hover:!bg-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why $15 */}
      <section className="bg-muted/30 px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">Why $15?</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            It is our fifteenth year as Intelligent Design and this is the thank-you to the Tucson homeowners who got us here. A tuned system also draws less power and is far less likely to quit on a 110-degree afternoon, which is worth more to both of us than the price of the visit. And if the technician finds something wrong, you get a written quote and you decide, on your own timeline, with nobody leaning on you.
          </p>
          <p className="mt-4 rounded-xl border-2 border-[#C8101F] bg-[#C8101F]/5 p-5 text-[18px] font-bold text-primary">
            The tune-up is $15 whether you buy anything else or not.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
            If you have been searching for an air conditioner tune up near me and comparing what each company actually covers, that is exactly why the whole 86-point checklist is printed above rather than summarized. We run 42 trucks across Tucson and the surrounding towns, so the technician who shows up is local and NATE-certified.
          </p>
        </div>
      </section>

      <LpProof reviews={REVIEWS} />

      {/* Booking CTA */}
      <section id="book" className="scroll-mt-4 bg-[#0d1b3e] px-4 py-10 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold">Book your $15 Factory Refresh Tune-Up</h2>
          <p className="mt-2 text-lg text-white/85">
            Same-week appointments available. Book online in about 60 seconds, or leave your details and a Customer Care team member will call you back.
          </p>
          <div className="mx-auto mt-5 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <a href={`tel:${PHONE.tel}`} className="flex min-h-[56px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-4 py-4 text-lg font-extrabold text-white shadow-lg hover:brightness-110">
              <Phone className="h-6 w-6" /> Call {PHONE.display}
            </a>
            <div className="flex-1">
              <SchedulerEmbed triggerText="Book online" fullWidth size="lg" data-testid="lp-book-schedule" className="w-full min-h-[56px] rounded-lg !bg-white !px-4 py-4 text-lg font-extrabold !text-[#0d1b3e] hover:!bg-gray-100" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-xl">
          <TuneUp15Form />
        </div>
      </section>

      <LpServiceArea />
      <LpFaq items={FAQ} heading="AC tune-up in Tucson - common questions" />

      <section className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">Related AC services</h2>
          <ul className="mt-3 space-y-2 text-[16px]">
            <li><a className="font-semibold text-primary underline" href="/services/ac-tuneup-tucson">AC tune-up service details</a> - what maintenance covers and how often it is due</li>
            <li><a className="font-semibold text-primary underline" href="/services/ac-repair-tucson">AC repair in Tucson</a> - if something is already wrong</li>
            <li><a className="font-semibold text-primary underline" href="/lp/ac-not-cooling">AC running but not cooling</a> - start here if it is not keeping up today</li>
            <li><a className="font-semibold text-primary underline" href="/services/duct-cleaning-tucson">Duct cleaning</a> - when airflow is the problem rather than the unit</li>
            <li><a className="font-semibold text-primary underline" href="/family-protection-plans">Family Protection Plans</a> - maintenance on a schedule, handled for you</li>
          </ul>
        </div>
      </section>
    </>
  );
}
