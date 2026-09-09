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

const PHONE = CAMPAIGN_PHONES["/lp/ac-not-cooling"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "AC Not Cooling in Tucson? Same-Day Repair | Intelligent Design",
  description: "AC running but not cooling? Same-day repair across Tucson, diagnostic fee waived with repair. See what our technician checks and what it typically costs.",
  alternates: { canonical: "https://www.idesignac.com/lp/ac-not-cooling" },
};

const CAUSES = [
  { title: "Dirty air filter", cost: "$0 - you can fix this", diy: true, desc: "A clogged filter chokes airflow and is the #1 cause of weak or no cooling. Pull it out; if you can't see light through it, replace it. Give the system 30–60 minutes." },
  { title: "Tripped breaker or no power", cost: "$0 - you can fix this", diy: true, desc: "Check the breaker panel for a tripped AC breaker and reset it once. Also confirm the outdoor unit's disconnect is on. If it trips again immediately, stop - that's an electrical fault for a pro." },
  { title: "Thermostat set wrong or dead batteries", cost: "$0–$20 - you can fix this", diy: true, desc: "Make sure it's set to COOL (not just FAN/ON) and the target is below room temperature. Replace the batteries. A blank or glitchy screen often just needs fresh batteries." },
  { title: "Frozen evaporator coil", cost: "~$150–$600", diy: false, desc: "Ice on the indoor coil or refrigerant line means airflow or refrigerant is off. Turn the system OFF to let it thaw, then call - running it frozen can damage the compressor." },
  { title: "Low refrigerant / a leak", cost: "~$300–$1,500", diy: false, desc: "If it blows only slightly cool and the outdoor line is icing, you may be low on refrigerant - which almost always means a leak that has to be found and sealed, not just 'topped off.'" },
  { title: "Failed run capacitor", cost: "~$150–$400", diy: false, desc: "A common, relatively inexpensive part. When it fails the fan or compressor won't start, so the system runs but never actually cools. Fast fix once diagnosed." },
  { title: "Failing compressor", cost: "$$$ - repair vs. replace", diy: false, desc: "The most serious cause. If the compressor is failing we'll give you an honest repair-vs-replace comparison rather than an automatic 'you need a new system.'" },
];

const REVIEWS = [
  { q: "The tech walked me through why it wasn't cooling, showed me the frozen coil, and it turned out to be a cheap fix - not the new system another company quoted.", n: "Karen W.", a: "Catalina Foothills" },
  { q: "Turned out to just be a capacitor. They diagnosed it in minutes, gave me the price first, and had cold air back fast. No games.", n: "Tony L.", a: "Marana" },
  { q: "Honest diagnosis. They even told me to try the filter first before booking. That's why I trust them.", n: "Sandra P.", a: "Oro Valley" },
];

const FAQ = [
  { q: "Why is my AC running but not cooling?", a: "The system has power and the fan runs, but something is stopping it from actually removing heat - most often a dirty filter or frozen coil restricting airflow, low refrigerant from a leak, or a failed capacitor keeping the compressor from starting. The quickest self-checks are the filter, the breaker, and the thermostat setting." },
  { q: "Why is my AC blowing warm or hot air?", a: "Warm air usually points to the cooling side specifically: low refrigerant (a leak), a failed compressor or capacitor, a frozen coil, or a thermostat accidentally set to HEAT or FAN. If the outdoor unit isn't running while the indoor fan is, that's a strong sign it's the compressor circuit." },
  { q: "Can I fix an AC that's not cooling myself?", a: "Some of it, safely: replace the air filter, reset a tripped breaker once, and confirm the thermostat is set to COOL with good batteries. If those don't fix it - or you see ice on the unit - turn the system off and call a professional. Refrigerant, capacitors, and compressors involve high voltage and EPA-regulated refrigerant and aren't DIY." },
  { q: "How much does it cost to fix an AC that won't cool?", a: "It ranges widely. A capacitor is often in the low hundreds; a frozen-coil clean-up is modest; a refrigerant leak repair costs more because the leak must be found and sealed. You get an exact, up-front price after the diagnosis, and the diagnostic and estimate fee is waived when you move forward with the repair." },
  { q: "How do I know if it's the compressor?", a: "Signs include the outdoor unit humming but not starting, the breaker tripping, or the system blowing warm air with the outdoor fan not spinning. It takes a technician's meter to confirm - and because the compressor is the most expensive part, we'll show you the reading and lay out repair vs. replace honestly." },
  { q: "Is it worth repairing or should I replace the system?", a: "It depends on the system's age, the cost of the specific repair, and its efficiency. As a rule of thumb, a minor repair on a system under ~10 years old is usually worth it; a major repair (like a compressor) on an older, inefficient unit may not be. Our non-commissioned technicians give you the numbers both ways and let you decide." },
];

export default function AcNotCoolingLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero - the promise, then the phone, above the fold on mobile */}
      <section className="px-4 py-6 sm:py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Tucson AC repair</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">AC Not Cooling? We&rsquo;ll Get It Cold Again Today.</h1>
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

      {/* Substance FIRST - the diagnostic that earns Landing Page Experience */}
      <section className="border-t border-border px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">What our technician will check</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">These are the seven things that stop a Tucson AC from cooling, in the order we rule them out. The first three are quick and often cost nothing, and we&rsquo;ll tell you straight if that&rsquo;s all it was.</p>
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
            <p className="mt-1 text-white/85">We&rsquo;ll diagnose it today and give you the exact price before any work.</p>
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
          <h2 className="text-3xl font-extrabold">Still not cooling? We&rsquo;ll find the problem today</h2>
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
      <LpFaq items={FAQ} heading="AC not cooling - common questions" />

      <section className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">Other AC problems we fix today</h2>
          <ul className="mt-3 space-y-2 text-[16px]">
            <li><a className="font-semibold text-primary underline" href="/lp/ac-blowing-hot-air">AC blowing hot air</a> - when the air coming out is warmer than the room</li>
            <li><a className="font-semibold text-primary underline" href="/lp/ac-fan-not-spinning">AC fan not spinning</a> - when the outdoor unit hums but the blades sit still</li>
            <li><a className="font-semibold text-primary underline" href="/services/ac-repair-tucson">AC repair in Tucson</a> - full diagnostics, pricing and warranty details</li>
            <li><a className="font-semibold text-primary underline" href="/services/emergency-ac-repair-tucson">Emergency AC repair</a> - 24/7, no overtime upcharge</li>
          </ul>
        </div>
      </section>
    </>
  );
}
