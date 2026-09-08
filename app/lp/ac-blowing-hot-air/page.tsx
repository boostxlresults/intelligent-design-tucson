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

const PHONE = CAMPAIGN_PHONES["/lp/ac-blowing-hot-air"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "AC Blowing Hot Air in Tucson? Same-Day Repair | Intelligent Design",
  description: "AC blowing hot or warm air in Tucson? Same-day repair, diagnostic fee waived with repair. See the usual causes and what each typically costs to fix.",
  alternates: { canonical: "https://www.idesignac.com/lp/ac-blowing-hot-air" },
};

const CAUSES = [
  {
    title: "Thermostat switched to HEAT or FAN",
    cost: "$0 — you can fix this",
    diy: true,
    desc: "It sounds obvious, but it is genuinely one of the most common causes we drive out for. Confirm the mode is COOL, not HEAT and not FAN/ON. On FAN the blower moves room-temperature air continuously, which feels exactly like hot air from the vents."
  },
  {
    title: "Dirty air filter choking airflow",
    cost: "$0 — you can fix this",
    diy: true,
    desc: "A clogged filter starves the system of air. Not enough air moves across the coil, the coil ices, and what reaches your vents is weak and warm. Pull the filter; if you cannot see light through it, replace it and give the system 30–60 minutes."
  },
  {
    title: "Outdoor breaker tripped",
    cost: "$0 — you can fix this",
    diy: true,
    desc: "If the indoor blower has power but the outdoor condenser does not, you get airflow with no cooling — air at room temperature or warmer. Check for a tripped AC breaker and the outdoor disconnect. Reset it once. If it trips again immediately, stop and call: that is an electrical fault."
  },
  {
    title: "Low refrigerant from a leak",
    cost: "~$300–$1,500",
    diy: false,
    desc: "Refrigerant is not consumed, so if the charge is low there is a leak. Without enough refrigerant the system cannot move heat out of the house, and the air turns warm. The leak has to be found and sealed, not simply topped off — a recharge alone leaks straight back out."
  },
  {
    title: "Failed run capacitor",
    cost: "~$150–$400",
    diy: false,
    desc: "The capacitor gives the compressor the jolt it needs to start. When it fails the fan often keeps turning while the compressor never engages, so the system blows air that was never cooled. Tucson heat degrades capacitors roughly three times faster than a mild climate. Inexpensive and fast once diagnosed."
  },
  {
    title: "Failing compressor",
    cost: "$$$ — repair vs. replace",
    diy: false,
    desc: "The compressor is the heart of the cooling cycle. If it has failed, no amount of airflow will produce cold air. This is the expensive one, so we will show you the meter reading and lay out repair against replacement honestly rather than defaulting to a new system."
  }
];

const REVIEWS = [
  {
    q: "Came out the same afternoon when our air went warm. Turned out to be the capacitor, not the compressor another company had told us. Saved us thousands.",
    n: "Marcus R.",
    a: "Rita Ranch"
  },
  {
    q: "Honest and fast. Showed me the refrigerant reading, explained the leak, and gave me the price before touching anything.",
    n: "Denise K.",
    a: "Vail"
  },
  {
    q: "They told me to check the thermostat mode first over the phone. It was on FAN. They could have charged me for a visit and did not.",
    n: "Paul H.",
    a: "Casas Adobes"
  }
];

const FAQ = [
  {
    q: "Why is my AC blowing hot air instead of cold?",
    a: "Something has stopped the cooling side specifically while the blower keeps running. The most common causes are a thermostat set to HEAT or FAN, a tripped outdoor breaker, low refrigerant from a leak, a failed run capacitor, or a failing compressor. If the indoor fan is running but the outdoor unit is silent, the problem is almost always in the compressor circuit."
  },
  {
    q: "Can I fix an AC blowing hot air myself?",
    a: "Some causes, safely. Confirm the thermostat is set to COOL and below room temperature, replace a clogged air filter, and reset a tripped breaker once. If none of that works, or the breaker trips again straight away, turn the system off and call. Refrigerant, capacitors and compressors involve high voltage and EPA-regulated refrigerant and are not DIY."
  },
  {
    q: "How much does it cost to fix an AC blowing hot air?",
    a: "It depends entirely on the cause. A capacitor is usually in the low hundreds. A refrigerant leak repair costs more because the leak has to be located and sealed. A compressor failure is the expensive scenario and is where repair-versus-replace becomes a real decision. You get an exact price after diagnosis, and the diagnostic and estimate fee is waived when you move forward with the repair."
  },
  {
    q: "Is it dangerous to keep running an AC that blows hot air?",
    a: "It can damage the system. If the cause is a frozen coil or a struggling compressor, continuing to run it makes the failure worse and more expensive. If your AC is blowing warm and you can hear the outdoor unit straining or humming without starting, switch it off and call rather than leaving it running."
  },
  {
    q: "How fast can you get here?",
    a: "We run 42 fully stocked service vehicles positioned across metro Tucson, Oro Valley, Marana, Sahuarita and Vail, and we complete the majority of AC repairs on the first visit because the common parts are already on the truck. Same-day service is the norm, and emergency repair is available 24/7 with no overtime upcharge."
  }
];

export default function AcBlowingHotAirLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero — the promise, then the phone, above the fold on mobile */}
      <section className="px-4 py-6 sm:py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Tucson AC repair</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">AC Blowing Hot Air? We&rsquo;ll Get It Cold Again Today.</h1>
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

      {/* Substance — what earns Landing Page Experience, after the CTA */}
      <section className="border-t border-border px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">What usually causes this</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">When the air coming out is warmer than the room, the cooling side has stopped working &mdash; not the fan. These are the causes we see most in Tucson, in the order we rule them out.</p>
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
          <h2 className="text-3xl font-extrabold">Still blowing hot? We&rsquo;ll fix it today</h2>
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
      <LpFaq items={FAQ} heading="AC blowing hot air — common questions" />

      <section className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">Other AC problems we fix today</h2>
          <ul className="mt-3 space-y-2 text-[16px]">
            <li><a className="font-semibold text-primary underline" href="/lp/ac-not-cooling">AC not cooling</a> &mdash; when it runs but never gets cold</li>
            <li><a className="font-semibold text-primary underline" href="/lp/ac-fan-not-spinning">AC fan not spinning</a> &mdash; when the outdoor unit hums but the blades sit still</li>
            <li><a className="font-semibold text-primary underline" href="/services/ac-repair-tucson">AC repair in Tucson</a> &mdash; full diagnostics, pricing and warranty details</li>
            <li><a className="font-semibold text-primary underline" href="/services/emergency-ac-repair-tucson">Emergency AC repair</a> &mdash; 24/7, no overtime upcharge</li>
          </ul>
        </div>
      </section>
    </>
  );
}
