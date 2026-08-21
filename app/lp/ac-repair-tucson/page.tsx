import type { Metadata } from "next";
import { Phone, Star } from "lucide-react";
import { CAMPAIGN_PHONES } from "@/lib/campaignPhones";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";
import LpProof from "@/components/lp/LpProof";
import LpWhatHappens from "@/components/lp/LpWhatHappens";
import LpServiceArea from "@/components/lp/LpServiceArea";
import LpFaq from "@/components/lp/LpFaq";
import LpStickyCall from "@/components/lp/LpStickyCall";

export const dynamic = "force-dynamic";

const PHONE = CAMPAIGN_PHONES["/lp/ac-repair-tucson"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "AC Repair in Tucson | Same-Day | Intelligent Design",
  description: "Fast, honest AC repair in Tucson with up-front pricing — most repairs done same day. Licensed & insured, 23,000+ five-star reviews. Call now.",
  robots: "noindex, follow",
  alternates: { canonical: "https://www.idesignac.com/lp/ac-repair-tucson" },
};

const REVIEWS = [
  { q: "Our AC quit on a 108° day. They had a tech out the same afternoon, fixed the capacitor, and the price was exactly what they quoted.", n: "Robert M.", a: "Oro Valley" },
  { q: "Called three companies. Intelligent Design answered, came out fastest, and didn't try to sell me a whole new system for a simple repair.", n: "Angela T.", a: "Marana" },
  { q: "Honest AC repair. The technician showed me the failed part, explained the fix, and had cold air blowing within the hour.", n: "Chris D.", a: "Catalina Foothills" },
];

const FAQ = [
  { q: "How fast can you come out for AC repair?", a: "In most cases the same day. When you call, we give you a real arrival window instead of an all-day wait, and we text you when the technician is on the way." },
  { q: "Is there a diagnostic fee?", a: "We charge a fair diagnostic fee to find the problem, and that <strong>diagnostic and estimate fee is waived when you move forward with the repair</strong>. You always see the repair price up front before any work begins." },
  { q: "What AC brands do you repair?", a: "All of them — Trane, Carrier, Lennox, Goodman, Rheem, York, Daikin, and every other major brand. Our technicians carry common parts so many repairs are finished on the first visit." },
  { q: "How much does AC repair cost in Tucson?", a: "It depends on the failure. Common fixes like a capacitor or contactor are on the lower end; refrigerant leaks or motor replacements cost more. You get an exact, up-front price after the diagnosis — nothing is done until you approve it." },
  { q: "Do you warranty your repairs?", a: "Yes. Repairs are backed by our workmanship warranty, and we stand behind the parts we install. Ask your technician for the specifics on your repair." },
  { q: "Are you licensed and insured?", a: "Yes — licensed, bonded, and insured in Arizona (AZ ROC 340962, 322375, 296386, 276673), family- and veteran-owned, serving Tucson since 1979." },
];

export default function AcRepairTucsonLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero */}
      <section className="px-4 py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Same-day service · Tucson &amp; surrounding areas</p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight text-primary sm:text-5xl">AC Repair in Tucson</h1>
          <p className="mt-3 text-lg text-muted-foreground">Fast, honest <strong>AC repair</strong> in <strong>Tucson</strong> with up-front pricing &mdash; most repairs done same day.</p>
          <a href={`tel:${PHONE.tel}`} className="mx-auto mt-5 flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-xl font-extrabold text-white shadow-lg hover:brightness-110">
            <Phone className="h-6 w-6" /> Call {PHONE.display}
          </a>
          <p className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {TRUST}
          </p>
        </div>
      </section>

      <LpProof reviews={REVIEWS} />

      {/* Substance */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">Reliable AC repair, done right the first time</h2>
          <div className="prose prose-lg mt-3 max-w-none text-muted-foreground">
            <p>When your air conditioner fails in a Tucson summer, you don&rsquo;t need a sales pitch &mdash; you need it fixed. Our technicians diagnose the actual problem, show you the failed part, and give you an exact price before touching anything. Most <strong>AC repairs in Tucson</strong> are finished the same day because our trucks are stocked with the parts that fail most often in desert heat.</p>
            <p>We repair every kind of AC problem: a system that runs but won&rsquo;t cool, warm or hot air from the vents, a unit that won&rsquo;t turn on, weak airflow, strange noises, water leaking around the air handler, and a system that keeps tripping the breaker. Common repairs include a failed <strong>run capacitor or contactor</strong>, a burned-out <strong>condenser fan motor or blower motor</strong>, a <strong>refrigerant leak</strong> and recharge, a bad <strong>thermostat or control board</strong>, and clogged condensate drains.</p>
            <h3 className="text-xl font-bold text-foreground">Why Tucson homeowners call us for repair</h3>
            <p>We charge fair, up-front pricing with <strong>no overtime rates</strong>, and the diagnostic and estimate fee is waived when you move forward with the repair. Our technicians are background-checked and non-commissioned, so you get an honest recommendation &mdash; a real repair when a repair makes sense, not a push to replace a system that has years left. We service all major brands, back our work with a warranty, and have earned 23,000+ five-star reviews across Tucson since 1979.</p>
            <p>If your AC is down right now, calling is the fastest way to get a same-day technician on the schedule. We&rsquo;ll confirm your address, get the details of the problem, and give you the soonest arrival window we have.</p>
          </div>
        </div>
      </section>

      <LpWhatHappens />

      {/* Second CTA */}
      <section className="bg-[#0d1b3e] px-4 py-10 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold">Get your AC fixed today</h2>
          <p className="mt-2 text-lg text-white/85">Same-day repair, up-front pricing, no overtime rates.</p>
          <div className="mt-5 flex flex-col items-center gap-3">
            <a href={`tel:${PHONE.tel}`} className="flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-xl font-extrabold text-white shadow-lg hover:brightness-110">
              <Phone className="h-6 w-6" /> Call {PHONE.display}
            </a>
            <div className="w-full max-w-sm">
              <SchedulerEmbed triggerText="Or schedule online" fullWidth size="lg" data-testid="lp-schedule" className="w-full min-h-[52px] rounded-lg !bg-white !px-4 py-3 text-[17px] font-extrabold !text-[#0d1b3e] hover:!bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      <LpServiceArea />
      <LpFaq items={FAQ} heading="AC repair questions Tucson homeowners ask" />
    </>
  );
}
