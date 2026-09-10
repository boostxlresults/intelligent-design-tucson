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

const PHONE = CAMPAIGN_PHONES["/lp/ac-not-turning-on"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "AC Not Turning On in Tucson? Same-Day Repair | Intelligent Design",
  description: "AC not turning on at all in Tucson? Same-day repair, diagnostic fee waived with repair. The usual causes and what each typically costs to fix.",
  alternates: { canonical: "https://www.idesignac.com/lp/ac-not-turning-on" },
};

const CAUSES = [
  {
    title: "Tripped breaker or pulled disconnect",
    cost: "$0 - you can fix this",
    diy: true,
    desc: "Start at the panel. An AC breaker that has tripped sits between ON and OFF, so push it fully OFF then back ON. Also check the disconnect box beside the outdoor unit. Reset once. If it trips again straight away, stop and call: something is drawing too much current and resetting it repeatedly is how compressors get destroyed."
  },
  {
    title: "Thermostat dead, wrong mode, or out of batteries",
    cost: "$0 - you can fix this",
    diy: true,
    desc: "A blank screen usually means dead batteries. A screen that works but does nothing usually means the mode is on HEAT or OFF, or the set point is above room temperature. Set it to COOL and at least five degrees below the current reading, then wait a few minutes for the delay timer."
  },
  {
    title: "Condensate float switch tripped",
    cost: "$0 to about $200",
    diy: true,
    desc: "Most Tucson systems have a safety switch that cuts all power when the drain pan fills. It is designed to shut the system down rather than let water damage your ceiling. If the pan is full, the drain line is clogged and needs clearing. This is the single most common reason a healthy system goes completely dead in monsoon season."
  },
  {
    title: "Failed contactor",
    cost: "About $150 to $350",
    diy: false,
    desc: "The contactor is the relay that sends power to the outdoor unit. Its contacts pit and corrode after years of Tucson summers, and when they weld shut or burn open the outdoor unit gets nothing. Often the answer when the thermostat calls for cooling and the outdoor unit stays completely silent."
  },
  {
    title: "Blown capacitor",
    cost: "About $150 to $400",
    diy: false,
    desc: "The capacitor gives the motors the jolt they need to start. When it fails you may hear a hum with no movement, or nothing at all. It is an inexpensive part and usually a same-visit repair, but the capacitor holds a charge even with the power off, so it is not a DIY replacement."
  },
  {
    title: "Failed transformer or control board",
    cost: "Diagnosis required",
    diy: false,
    desc: "The low-voltage side runs the thermostat and the controls. If the transformer or board has failed, the thermostat goes dark and nothing responds. It takes a meter to confirm, and the cost depends on the part, which is why we quote it before touching anything."
  }
];

const REVIEWS = [
  {
    q: "Woke up to nothing at all in July. They were here the same morning, found a tripped float switch and a clogged drain line, and had it running in under an hour.",
    n: "Gerald P.",
    a: "East Tucson"
  },
  {
    q: "Told me over the phone to check the breaker before they dispatched. It was not that, but I appreciated that they tried to save me the trip charge.",
    n: "Monica S.",
    a: "Oro Valley"
  },
  {
    q: "Contactor had burned out. Showed me the part, quoted before starting, done in an hour. No upsell to a new system.",
    n: "Dale W.",
    a: "Marana"
  }
];

const FAQ = [
  {
    q: "Why did my AC suddenly stop working completely?",
    a: "A system that goes from working to completely dead is almost always electrical or a safety cutoff rather than a worn-out part. The usual causes are a tripped breaker, a tripped condensate float switch, a failed contactor or capacitor, or a dead thermostat. Check the breaker and the thermostat batteries first, then call rather than resetting the breaker repeatedly."
  },
  {
    q: "Should I keep resetting the breaker?",
    a: "Reset it once. If it trips again immediately, stop. A breaker that keeps tripping is doing its job: something downstream is drawing too much current, and forcing it back on can damage the compressor or start a fire. That is a call for a technician, not another reset."
  },
  {
    q: "My thermostat is blank. Is that the AC or the thermostat?",
    a: "Usually the thermostat, and usually the batteries. Replace them first. If the screen stays blank with fresh batteries, the low-voltage transformer or the control board has likely failed, or a float switch has cut power to the whole system. All three need a meter to tell apart."
  },
  {
    q: "How much does it cost to fix an AC that will not turn on?",
    a: "It depends entirely on which link in the chain failed. A float switch and drain clearing is modest. A capacitor or contactor is typically in the low hundreds. A transformer or control board is more. You get an exact price after diagnosis and before any work starts, and the diagnostic and estimate fee is waived when you move forward with the repair."
  },
  {
    q: "How fast can you get here?",
    a: "Same day in most cases. We run 42 fully stocked service vehicles across metro Tucson, Oro Valley, Marana, Sahuarita and Vail, and capacitors, contactors and float switches are carried on the truck, so most of these repairs finish on the first visit. Emergency service is available 24/7 with no overtime upcharge."
  }
];

export default function AcNotTurningOnLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero - the promise, then the phone, above the fold on mobile */}
      <section className="px-4 py-6 sm:py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Tucson AC repair</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">AC Not Turning On? We&rsquo;ll Have It Running Today.</h1>
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
          <p className="mt-2 text-[17px] text-muted-foreground">Nothing at all when you call for cool air points to a short list of causes. Here is what we check, in the order we rule them out.</p>
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

      {/* Second call to action */}
      <section className="bg-[#0d1b3e] px-4 py-10 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold">Still dead? We&rsquo;ll be out today</h2>
          <p className="mt-2 text-lg text-white/85">Honest diagnosis, up-front price, no pressure.</p>
          <div className="mt-5 flex flex-col items-center gap-3">
            <a href={`tel:${PHONE.tel}`} className="flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-xl font-extrabold text-white shadow-lg hover:brightness-110">
              <Phone className="h-6 w-6" /> Call {PHONE.display}
            </a>
            <div className="w-full max-w-sm">
              <SchedulerEmbed triggerText="Or schedule online" fullWidth size="lg" data-testid="lp-schedule" className="w-full min-h-[52px] rounded-lg !bg-white !px-4 py-3 text-[16px] font-extrabold !text-[#0d1b3e] hover:!bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      <LpServiceArea />
      <LpFaq items={FAQ} heading="AC not turning on - common questions" />

      <section className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">Other AC problems we fix today</h2>
          <ul className="mt-3 space-y-2 text-[16px]">
            <li><a className="font-semibold text-primary underline" href="/lp/ac-not-cooling">AC not cooling</a> - it runs but never gets cold</li>
            <li><a className="font-semibold text-primary underline" href="/lp/ac-blowing-hot-air">AC blowing hot air</a> - the air is warmer than the room</li>
            <li><a className="font-semibold text-primary underline" href="/lp/ac-fan-not-spinning">AC fan not spinning</a> - the outdoor unit hums but the blades sit still</li>
            <li><a className="font-semibold text-primary underline" href="/services/ac-repair-tucson">AC repair in Tucson</a> - full diagnostics, pricing and warranty details</li>
            <li><a className="font-semibold text-primary underline" href="/services/emergency-ac-repair-tucson">Emergency AC repair</a> - 24/7, no overtime upcharge</li>
          </ul>
        </div>
      </section>
    </>
  );
}
