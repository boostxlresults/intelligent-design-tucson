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
  title: "AC Not Cooling? Here's What's Wrong — and What It Costs | Tucson",
  description: "AC running but not cooling in Tucson? The 6 most common causes, what each costs to fix, and which you can check yourself (filter, breaker, thermostat). Then we'll diagnose it today.",
  robots: "noindex, follow",
  alternates: { canonical: "https://www.idesignac.com/lp/ac-not-cooling" },
};

const CAUSES = [
  { title: "Dirty air filter", cost: "$0 — you can fix this", diy: true, desc: "A clogged filter chokes airflow and is the #1 cause of weak or no cooling. Pull it out; if you can't see light through it, replace it. Give the system 30–60 minutes." },
  { title: "Tripped breaker or no power", cost: "$0 — you can fix this", diy: true, desc: "Check the breaker panel for a tripped AC breaker and reset it once. Also confirm the outdoor unit's disconnect is on. If it trips again immediately, stop — that's an electrical fault for a pro." },
  { title: "Thermostat set wrong or dead batteries", cost: "$0–$20 — you can fix this", diy: true, desc: "Make sure it's set to COOL (not just FAN/ON) and the target is below room temperature. Replace the batteries. A blank or glitchy screen often just needs fresh batteries." },
  { title: "Frozen evaporator coil", cost: "~$150–$600", diy: false, desc: "Ice on the indoor coil or refrigerant line means airflow or refrigerant is off. Turn the system OFF to let it thaw, then call — running it frozen can damage the compressor." },
  { title: "Low refrigerant / a leak", cost: "~$300–$1,500", diy: false, desc: "If it blows only slightly cool and the outdoor line is icing, you may be low on refrigerant — which almost always means a leak that has to be found and sealed, not just 'topped off.'" },
  { title: "Failed run capacitor", cost: "~$150–$400", diy: false, desc: "A common, relatively inexpensive part. When it fails the fan or compressor won't start, so the system runs but never actually cools. Fast fix once diagnosed." },
  { title: "Failing compressor", cost: "$$$ — repair vs. replace", diy: false, desc: "The most serious cause. If the compressor is failing we'll give you an honest repair-vs-replace comparison rather than an automatic 'you need a new system.'" },
];

const REVIEWS = [
  { q: "The tech walked me through why it wasn't cooling, showed me the frozen coil, and it turned out to be a cheap fix — not the new system another company quoted.", n: "Karen W.", a: "Catalina Foothills" },
  { q: "Turned out to just be a capacitor. They diagnosed it in minutes, gave me the price first, and had cold air back fast. No games.", n: "Tony L.", a: "Marana" },
  { q: "Honest diagnosis. They even told me to try the filter first before booking. That's why I trust them.", n: "Sandra P.", a: "Oro Valley" },
];

const FAQ = [
  { q: "Why is my AC running but not cooling?", a: "The system has power and the fan runs, but something is stopping it from actually removing heat — most often a dirty filter or frozen coil restricting airflow, low refrigerant from a leak, or a failed capacitor keeping the compressor from starting. The quickest self-checks are the filter, the breaker, and the thermostat setting." },
  { q: "Why is my AC blowing warm or hot air?", a: "Warm air usually points to the cooling side specifically: low refrigerant (a leak), a failed compressor or capacitor, a frozen coil, or a thermostat accidentally set to HEAT or FAN. If the outdoor unit isn't running while the indoor fan is, that's a strong sign it's the compressor circuit." },
  { q: "Can I fix an AC that's not cooling myself?", a: "Some of it, safely: replace the air filter, reset a tripped breaker once, and confirm the thermostat is set to COOL with good batteries. If those don't fix it &mdash; or you see ice on the unit &mdash; turn the system off and call a professional. Refrigerant, capacitors, and compressors involve high voltage and EPA-regulated refrigerant and aren't DIY." },
  { q: "How much does it cost to fix an AC that won't cool?", a: "It ranges widely. A capacitor is often in the low hundreds; a frozen-coil clean-up is modest; a refrigerant leak repair costs more because the leak must be found and sealed. You get an exact, up-front price after the diagnosis, and the diagnostic and estimate fee is waived when you move forward with the repair." },
  { q: "How do I know if it's the compressor?", a: "Signs include the outdoor unit humming but not starting, the breaker tripping, or the system blowing warm air with the outdoor fan not spinning. It takes a technician's meter to confirm &mdash; and because the compressor is the most expensive part, we'll show you the reading and lay out repair vs. replace honestly." },
  { q: "Is it worth repairing or should I replace the system?", a: "It depends on the system's age, the cost of the specific repair, and its efficiency. As a rule of thumb, a minor repair on a system under ~10 years old is usually worth it; a major repair (like a compressor) on an older, inefficient unit may not be. Our non-commissioned technicians give you the numbers both ways and let you decide." },
];

export default function AcNotCoolingLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero — content-forward, lighter sell */}
      <section className="px-4 py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Tucson AC troubleshooting</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">AC Not Cooling? Here&rsquo;s What&rsquo;s Wrong &mdash; and What It Costs</h1>
          <p className="mt-3 text-lg text-muted-foreground">Before you call anyone, here are the 6&ndash;7 most common reasons an AC runs but won&rsquo;t cool &mdash; what each typically costs, and which ones you can check yourself.</p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {TRUST}
          </p>
        </div>
      </section>

      {/* Substance FIRST — the diagnostic that earns Landing Page Experience */}
      <section className="border-t border-border px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">Why your AC isn&rsquo;t cooling &mdash; 7 common causes</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">Work down the list. The first three are free to check yourself; the rest need a technician.</p>
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
            <p className="text-xl font-bold">Checked the filter, breaker, and thermostat and it&rsquo;s still not cooling?</p>
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
      <LpFaq items={FAQ} heading="AC not cooling — common questions" />
    </>
  );
}
