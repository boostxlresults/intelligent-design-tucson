import type { Metadata } from "next";
import { Phone, Star, Wrench, CheckCircle2 } from "lucide-react";
import { CAMPAIGN_PHONES } from "@/lib/campaignPhones";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";
import LpProof from "@/components/lp/LpProof";
import LpWhatHappens from "@/components/lp/LpWhatHappens";
import LpServiceArea from "@/components/lp/LpServiceArea";
import LpFaq from "@/components/lp/LpFaq";
import LpStickyCall from "@/components/lp/LpStickyCall";

export const dynamic = "force-dynamic";

const PHONE = CAMPAIGN_PHONES["/lp/ac-fan-not-spinning"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "AC Fan Not Spinning in Tucson? Same-Day Repair | Intelligent Design",
  description: "Outdoor AC fan not spinning or humming in Tucson? Same-day repair, diagnostic fee waived with repair. The usual causes and what each typically costs.",
  alternates: { canonical: "https://www.idesignac.com/lp/ac-fan-not-spinning" },
};

const CAUSES = [
  {
    title: "Tripped breaker or pulled disconnect",
    cost: "$0 - you can fix this",
    diy: true,
    desc: "If the outdoor unit is completely dead - no hum, no movement - start at the breaker panel and the disconnect box beside the condenser. Reset the breaker once. If it trips again immediately, stop there; a breaker that keeps tripping is telling you something is drawing too much current."
  },
  {
    title: "Debris jamming the blades",
    cost: "$0 - you can fix this",
    diy: true,
    desc: "Palo verde litter, a stray plastic bag or monsoon debris can physically block the fan. With the power off at the disconnect, look down through the top grille. If something is obviously wedged in there, clearing it may be the whole repair. Never put your hand in with the power on."
  },
  {
    title: "Failed run capacitor",
    cost: "~$150–$400",
    diy: false,
    desc: "This is the single most common cause of a fan that hums but will not spin. The capacitor supplies the starting torque; without it the motor sits there buzzing and drawing current. It is an inexpensive part, but a bulged or leaking capacitor should be replaced by a technician - they hold a charge even with the power off."
  },
  {
    title: "Burned-out fan motor",
    cost: "~$400–$900",
    diy: false,
    desc: "If the capacitor tests good and the blades still will not turn - or they spin freely by hand but not under power - the motor itself has usually failed. Running a system with a dead condenser fan overheats the compressor quickly, which is why we treat this as a same-day call rather than something that can wait."
  },
  {
    title: "Failed contactor",
    cost: "~$150–$350",
    diy: false,
    desc: "The contactor is the electrical switch that sends power to the outdoor unit. Its contacts pit and corrode over years of Tucson summers, and when they fail the fan and compressor get no power at all. Often the fix on an outdoor unit that is silent while the indoor blower runs normally."
  },
  {
    title: "Overheated compressor on thermal cutout",
    cost: "Diagnosis required",
    diy: false,
    desc: "Some systems shut the outdoor unit down on a thermal overload to protect themselves. The unit goes quiet, then may restart later as though nothing happened. That intermittent pattern needs a meter to catch, and ignoring it usually ends in a compressor failure."
  }
];

const REVIEWS = [
  {
    q: "Outdoor fan was humming but not turning. They had the capacitor on the truck and it was running again in under an hour.",
    n: "Alicia T.",
    a: "Oro Valley"
  },
  {
    q: "Explained why the fan mattered - that running it that way would cook the compressor. Glad I called instead of waiting the weekend out.",
    n: "Ray M.",
    a: "East Tucson"
  },
  {
    q: "Showed up when they said, showed me the burnt motor, quoted before starting. No upsell to a whole new system.",
    n: "Bev C.",
    a: "Green Valley"
  }
];

const FAQ = [
  {
    q: "Why is my AC fan humming but not spinning?",
    a: "A hum with no motion almost always means the fan motor is getting power but has no starting torque, and the usual culprit is a failed run capacitor. It is a common and relatively inexpensive part. Switch the system off rather than leaving it humming - the motor is drawing current and heating up while it is stalled."
  },
  {
    q: "Can I push the fan blade to start it?",
    a: "Technicians sometimes do this with an insulated tool as a diagnostic test, but it is not something to try yourself. The disconnect must be pulled first, capacitors hold a dangerous charge even with the power off, and a blade that starts once will stall again within minutes. If the fan needs a push to start, the capacitor or motor needs replacing."
  },
  {
    q: "Is it safe to run my AC with the outdoor fan not spinning?",
    a: "No - switch it off. The outdoor fan exists to move heat out of the refrigerant. Without it the compressor overheats fast, and a stalled fan is one of the quickest ways to turn a low-hundreds repair into a compressor replacement. Turn the system off at the thermostat and call."
  },
  {
    q: "How much does it cost to fix an AC fan that will not spin?",
    a: "A capacitor is typically in the low hundreds and is the most common fix. A contactor is similar. A condenser fan motor replacement runs higher. You get the exact price after diagnosis and before any work starts, and the diagnostic and estimate fee is waived when you move forward with the repair."
  },
  {
    q: "How fast can you get someone out?",
    a: "Same day in most cases. We run 42 fully stocked service vehicles across metro Tucson, Oro Valley, Marana, Sahuarita and Vail, and capacitors, contactors and common fan motors are carried on the truck - so the majority of these repairs are finished on the first visit. Emergency service is available 24/7 with no overtime upcharge."
  }
];

export default function AcFanNotSpinningLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero - the promise, then the phone, above the fold on mobile */}
      <section className="px-4 py-6 sm:py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Tucson AC repair</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">AC Fan Not Spinning? Same-Day Repair in Tucson.</h1>
          <a
            href={`tel:${PHONE.tel}`}
            data-testid="lp-hero-call"
            className="mx-auto mt-4 flex min-h-[60px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-2xl font-extrabold text-white shadow-lg hover:brightness-110"
          >
            <Phone className="h-7 w-7" /> {PHONE.display}
          </a>
          <p className="mt-3 text-[16px] font-semibold text-foreground">
            Same-day repair &middot; 42 trucks across Tucson &middot; Diagnostic fee waived with repair
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {TRUST}
          </p>
        </div>
      </section>

      {/* Substance - what earns Landing Page Experience, after the CTA */}
      <section className="border-t border-border px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">What usually causes this</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">A fan that hums but will not turn, or does not move at all, points to a short list of parts. Here is what we check, in order - and please switch the system off while it is stuck.</p>
          <div className="mt-6 space-y-4">
            {CAUSES.map((c, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-[18px] font-bold text-foreground">{i + 1}. {c.title}</h3>
                  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[13px] font-bold ${c.diy ? "bg-green-100 text-green-800" : "bg-muted text-muted-foreground"}`}>
                    {c.diy ? <CheckCircle2 className="h-4 w-4" /> : <Wrench className="h-4 w-4" />}{c.cost}
                  </span>
                </div>
                <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-[#0d1b3e] p-6 text-center text-white">
            <p className="text-xl font-bold">Want it diagnosed today instead?</p>
            <p className="mt-1 text-white/85">We&rsquo;ll find the cause and give you the exact price before any work.</p>
            <a href={`tel:${PHONE.tel}`} className="mx-auto mt-4 flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-xl font-extrabold text-white shadow-lg hover:brightness-110">
              <Phone className="h-6 w-6" /> Call {PHONE.display}
            </a>
          </div>
        </div>
      </section>

      <LpProof reviews={REVIEWS} />
      <LpWhatHappens />

      {/* Second CTA */}
      <section className="bg-[#0d1b3e] px-4 py-10 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold">Fan still not turning? We&rsquo;ll be out today</h2>
          <p className="mt-2 text-lg text-white/85">Honest diagnosis, up-front price, no pressure to replace.</p>
          <div className="mt-5 flex flex-col items-center gap-3">
            <a href={`tel:${PHONE.tel}`} className="flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-xl font-extrabold text-white shadow-lg hover:brightness-110">
              <Phone className="h-6 w-6" /> Call {PHONE.display}
            </a>
            <div className="w-full max-w-sm">
              <SchedulerEmbed triggerText="Or schedule a diagnosis online" fullWidth size="lg" data-testid="lp-schedule" className="w-full min-h-[52px] rounded-lg !bg-white !px-4 py-3 text-[16px] font-extrabold !text-[#0d1b3e] hover:!bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      <LpServiceArea />
      <LpFaq items={FAQ} heading="AC fan not spinning - common questions" />

      <section className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">Other AC problems we fix today</h2>
          <ul className="mt-3 space-y-2 text-[16px]">
            <li><a className="font-semibold text-primary underline" href="/lp/ac-not-cooling">AC not cooling</a> - when it runs but never gets cold</li>
            <li><a className="font-semibold text-primary underline" href="/lp/ac-blowing-hot-air">AC blowing hot air</a> - when the air coming out is warmer than the room</li>
            <li><a className="font-semibold text-primary underline" href="/services/ac-repair-tucson">AC repair in Tucson</a> - full diagnostics, pricing and warranty details</li>
            <li><a className="font-semibold text-primary underline" href="/services/emergency-ac-repair-tucson">Emergency AC repair</a> - 24/7, no overtime upcharge</li>
          </ul>
        </div>
      </section>
    </>
  );
}
