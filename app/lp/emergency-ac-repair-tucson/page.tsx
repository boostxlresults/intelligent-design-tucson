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

const PHONE = CAMPAIGN_PHONES["/lp/emergency-ac-repair-tucson"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "Emergency AC Repair in Tucson — Same Day | Intelligent Design",
  description: "No AC in the Tucson heat? Same-day emergency AC repair, 7 days a week, no overtime rates. Call now — technicians available.",
  robots: "noindex, follow",
  alternates: { canonical: "https://www.idesignac.com/lp/emergency-ac-repair-tucson" },
};

const REVIEWS = [
  { q: "AC died at 9pm with a newborn in the house. They picked up, dispatched someone fast, and had us cool again the same night. Lifesavers.", n: "Priya S.", a: "Vail" },
  { q: "Called on a Sunday when the house hit 90°. No runaround, no overtime gouging — a tech was at my door within a couple hours.", n: "Mark H.", a: "Sahuarita" },
  { q: "Fast, professional, and honest during a stressful emergency. They told me exactly what failed and fixed it on the spot.", n: "Denise R.", a: "Tucson" },
];

const FAQ = [
  { q: "Are you available right now?", a: "Yes — we take emergency AC calls same day, 7 days a week. The fastest way to get a technician dispatched is to call; a real person answers and gets you on the schedule immediately." },
  { q: "How fast can you get to me?", a: "In most of the Tucson metro we can be there the same day, often within a few hours. When you call we give you a real arrival window and text you when the technician is on the way." },
  { q: "Do you charge extra for emergency or after-hours repair?", a: "We do <strong>not</strong> charge overtime rates. You get fair, up-front pricing whether you call at 2pm or 2am, and the diagnostic and estimate fee is waived when you move forward with the repair." },
  { q: "What should I do while I wait for the technician?", a: "Turn the AC system off at the thermostat to prevent further damage (especially if the indoor coil may be frozen), close blinds and curtains to block the sun, run ceiling and box fans, and stay hydrated. If anyone in the home is elderly, very young, or has health issues, move to the coolest room or a cooler location." },
  { q: "Can you fix it tonight?", a: "Often, yes. Our trucks carry the parts that fail most often, so many emergency repairs are completed on the first visit. If a part has to be ordered, we&rsquo;ll get you a temporary solution and the fastest permanent fix possible." },
  { q: "Do you work weekends and holidays?", a: "Yes. Tucson heat doesn&rsquo;t take days off, and neither does emergency service. Call any day and we&rsquo;ll get you help." },
];

export default function EmergencyAcRepairTucsonLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero — dark, minimal, all about the call */}
      <section className="bg-[#0d1b3e] px-4 py-8 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-[15px] font-bold text-green-300">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400" /> Technicians available now
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">Emergency AC Repair in Tucson &mdash; Same Day</h1>
          <p className="mt-3 text-xl font-bold text-white">Same-day service, 7 days a week. No overtime rates.</p>
          <a href={`tel:${PHONE.tel}`} className="mx-auto mt-5 flex min-h-[60px] w-full max-w-md items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-2xl font-extrabold text-white shadow-xl hover:brightness-110">
            <Phone className="h-7 w-7" /> Call {PHONE.display}
          </a>
          <p className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/85">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {TRUST}
          </p>
        </div>
      </section>

      <LpProof reviews={REVIEWS} />

      {/* Substance — emergency-specific */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">When your AC quits in Tucson, waiting isn&rsquo;t an option</h2>
          <div className="prose prose-lg mt-3 max-w-none text-muted-foreground">
            <p>A broken air conditioner in Tucson isn&rsquo;t just uncomfortable &mdash; when it&rsquo;s 105° outside, an indoor temperature can climb into the danger zone within hours. That&rsquo;s especially serious for infants, older adults, anyone with a health condition, and pets. If your AC has stopped cooling, the safest move is to get a technician on the way now and take a few steps to stay cool while you wait.</p>
            <h3 className="text-xl font-bold text-foreground">What we do the moment you call</h3>
            <p>A real person answers, confirms your address and the problem, and dispatches the nearest available technician &mdash; same day, seven days a week. We carry the parts that most commonly fail in the heat, so a large share of emergency calls are fixed on the first visit. And because we don&rsquo;t charge overtime rates, you&rsquo;re never punished for the fact that your AC failed on a Sunday night instead of a Tuesday afternoon.</p>
            <h3 className="text-xl font-bold text-foreground">While you wait for the technician</h3>
            <p>Turn the system off at the thermostat &mdash; running a failed unit (or one with a frozen coil) can cause more damage. Close blinds and curtains on the sunny side of the house, run every fan you have, and drink water. Move anyone vulnerable to the coolest room. Then keep your phone close; we&rsquo;ll text you when the technician is en route so you know exactly when help arrives.</p>
          </div>
        </div>
      </section>

      <LpWhatHappens />

      {/* Second CTA */}
      <section className="bg-[#0d1b3e] px-4 py-10 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold">Don&rsquo;t sit in the heat &mdash; call now</h2>
          <p className="mt-2 text-lg text-white/85">Same-day emergency AC repair across the Tucson metro.</p>
          <div className="mt-5 flex flex-col items-center gap-3">
            <a href={`tel:${PHONE.tel}`} className="flex min-h-[60px] w-full max-w-md items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-2xl font-extrabold text-white shadow-xl hover:brightness-110">
              <Phone className="h-7 w-7" /> Call {PHONE.display}
            </a>
            <div className="w-full max-w-sm">
              <SchedulerEmbed triggerText="Or book the next available slot online" fullWidth size="lg" data-testid="lp-schedule" className="w-full min-h-[52px] rounded-lg !bg-white !px-4 py-3 text-[16px] font-extrabold !text-[#0d1b3e] hover:!bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      <LpServiceArea />
      <LpFaq items={FAQ} heading="Emergency AC repair questions" />
    </>
  );
}
