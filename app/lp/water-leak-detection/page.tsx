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

const PHONE = CAMPAIGN_PHONES["/lp/water-leak-detection"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "Water Leak Detection in Tucson | Found and Fixed Today",
  description: "Water leak in Tucson and you cannot find it? Non-invasive leak detection, then the repair. High bill, damp spots, running meter. Same-day service.",
  alternates: { canonical: "https://www.idesignac.com/lp/water-leak-detection" },
};

const CAUSES = [
  {
    title: "A running toilet flapper",
    cost: "$0 to about $150",
    diy: true,
    desc: "Worth ruling out before anything else, because it is free to check and it is a genuinely common cause of a bill that jumped for no obvious reason. Put a few drops of food colouring in the tank and wait twenty minutes without flushing. Colour in the bowl means the flapper is leaking, and a silent one can waste hundreds of gallons a day."
  },
  {
    title: "A dripping faucet or a leak at the handle",
    cost: "About $150 to $350",
    diy: false,
    desc: "Water at the base of the spout or seeping from the handle usually means worn cartridges or O-rings rather than anything structural. It is a small repair, but Tucson water is hard and the same mineral content that wears the seat will wear the replacement faster if the fixture is old enough to be worth replacing outright."
  },
  {
    title: "A slab leak under the foundation",
    cost: "Detection first, then a repair quote",
    diy: false,
    desc: "The signs are warm spots on the floor, the sound of running water with everything off, unexplained damp in the carpet, or a bill that climbed steadily rather than jumping. We locate these acoustically and with thermal imaging before anyone breaks concrete, because the difference between a spot repair and a reroute is a lot of money."
  },
  {
    title: "A leak in an irrigation or pool line",
    cost: "Detection first, then a repair quote",
    diy: false,
    desc: "Easy to miss in Tucson because the water disappears into the ground rather than showing up indoors. Suspect it when the meter moves with the house shut off but the landscape has a patch that is greener or a spot that never dries. We isolate the irrigation side from the house side to tell them apart before digging anything."
  },
  {
    title: "A failing water heater or its connections",
    cost: "About $150 upward",
    diy: false,
    desc: "Water pooling near the heater may be a fitting, the temperature and pressure relief valve doing exactly what it should, or the tank itself. The first two are repairs. A tank that is weeping from the body is failing and will not be fixed, and it is better to know that before it opens up while you are out."
  }
];

const REVIEWS = [
  {
    q: "Bill doubled and nobody could tell me why. They found a slab leak acoustically, marked one spot, and opened exactly that. Far less damage than I feared.",
    n: "Helen R.",
    a: "Catalina Foothills"
  },
  {
    q: "Turned out to be the irrigation, not the house. They isolated it in about twenty minutes and did not charge me for a plumbing repair I did not need.",
    n: "Andre M.",
    a: "Vail"
  },
  {
    q: "Honest about what was worth repairing versus replacing on an old water heater. No scare tactics.",
    n: "Lorraine D.",
    a: "Green Valley"
  }
];

const FAQ = [
  {
    q: "How do I know if I have a hidden water leak?",
    a: "Shut off every fixture and appliance in the house, then look at the water meter. If the low-flow indicator is still turning, water is going somewhere. Other signs are a bill that climbed without a change in habits, warm spots on a slab floor, damp or musty smells, or the sound of running water with everything off."
  },
  {
    q: "Can you find the leak without tearing up my floor?",
    a: "That is the point of leak detection. We use acoustic listening equipment, thermal imaging and line tracing to narrow a leak down to a small area before anything is opened. On a slab that is the difference between one targeted repair and cutting a trench across a room, and it is why we detect first and quote the repair second."
  },
  {
    q: "What is a slab leak and how serious is it?",
    a: "It is a leak in a water line running under the concrete foundation. It matters because the water has nowhere to go but into the slab and the soil beneath it, and left long enough that undermines the foundation and ruins flooring. It is not an emergency in the sense of needing someone at 2am, but it is not something to leave for a season either."
  },
  {
    q: "How much does leak detection cost in Tucson?",
    a: "Detection is priced separately from the repair, because until we know where the leak is nobody can honestly quote fixing it. You get the detection price before we start and the repair price once we have located it, and you decide at that point. The diagnostic and estimate fee is waived when you move forward with the repair."
  },
  {
    q: "My meter is running but I cannot find any water. What now?",
    a: "That usually means the leak is underground, in an irrigation line, or under the slab, which is exactly the case detection equipment is for. Shut off the valve to the irrigation system and check the meter again: if it stops, the leak is on the landscape side, which is a much smaller job than a leak inside the house."
  }
];

export default function WaterLeakDetectionLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero - the promise, then the phone, above the fold on mobile */}
      <section className="px-4 py-6 sm:py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Tucson leak detection</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">Water Leak? We Find It and Fix It Today.</h1>
          <a
            href={`tel:${PHONE.tel}`}
            data-testid="lp-hero-call"
            className="mx-auto mt-4 flex min-h-[60px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-2xl font-extrabold text-white shadow-lg hover:brightness-110"
          >
            <Phone className="h-7 w-7" /> {PHONE.display}
          </a>
          <p className="mt-3 text-[16px] font-semibold text-foreground">
            Same-day service &middot; 42 trucks across Tucson &middot; Upfront price before we start
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
          <p className="mt-2 text-[17px] text-muted-foreground">You can see the water, or the bill, but not where it is coming from. These are the leaks we find most often, and how we locate them without tearing up the house.</p>
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
          <h2 className="text-3xl font-extrabold">Found water and not the leak? We&rsquo;ll locate it today</h2>
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
      <LpFaq items={FAQ} heading="Water leaks - common questions" />

      <section className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">Related plumbing services</h2>
          <ul className="mt-3 space-y-2 text-[16px]">
            <li><a className="font-semibold text-primary underline" href="/services/leak-detection">Leak detection in Tucson</a> - full service details and equipment</li>
            <li><a className="font-semibold text-primary underline" href="/services/water-leak-repair">Water leak repair</a> - emergency repair once it is located</li>
            <li><a className="font-semibold text-primary underline" href="/lp/clogged-drain">Clogged drain</a> - if water is backing up rather than leaking out</li>
            <li><a className="font-semibold text-primary underline" href="/services/repipe-tucson">Repipe services</a> - when the same line keeps failing</li>
          </ul>
        </div>
      </section>
    </>
  );
}
