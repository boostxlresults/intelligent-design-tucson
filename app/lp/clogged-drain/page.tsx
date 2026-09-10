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

const PHONE = CAMPAIGN_PHONES["/lp/clogged-drain"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "Clogged Drain in Tucson? Cleared Today | Intelligent Design",
  description: "Clogged drain in Tucson? Same-day drain clearing, guaranteed. Sinks, tubs, toilets and main lines. Camera inspection if it keeps coming back.",
  alternates: { canonical: "https://www.idesignac.com/lp/clogged-drain" },
};

const CAUSES = [
  {
    title: "Hair and soap in a tub or shower",
    cost: "Usually a straightforward clear",
    diy: true,
    desc: "The most common clog in any house, and the one most likely to come out with a drain claw before you call anyone. If the water drains slowly rather than not at all, and it is only that one fixture, this is usually it. If it comes back within weeks, the buildup is further down the line than a claw reaches."
  },
  {
    title: "Grease and food in a kitchen sink",
    cost: "Usually a straightforward clear",
    diy: false,
    desc: "Grease goes down warm and hardens on the pipe wall a few feet in, then catches everything after it. Boiling water and store-bought chemicals rarely reach it and the caustic ones can damage older pipes. A cable or hydro-jet clears the wall properly rather than punching a hole through the middle of it."
  },
  {
    title: "Tree roots in the main line",
    cost: "Camera inspection first",
    diy: false,
    desc: "Tucson landscaping finds water. Roots enter through joints in older clay or cast iron pipe and grow into a mat that catches everything. The tell is more than one fixture backing up at once, or a toilet that gurgles when the washer drains. This needs a camera before anyone quotes, because the fix depends on how much pipe is involved."
  },
  {
    title: "A bellied or broken pipe",
    cost: "Camera inspection first",
    diy: false,
    desc: "A section that has sagged collects standing water and debris, so the line clogs again a few weeks after every clearing. If you have had the same drain cleared more than twice, the clog is a symptom and the pipe is the problem. A camera shows it in minutes and stops you paying for the same clearing over and over."
  },
  {
    title: "Flushed items and buildup in a toilet",
    cost: "Usually a straightforward clear",
    diy: true,
    desc: "Wipes marketed as flushable are not, and they are the single most common cause of a toilet that will not clear with a plunger. If a plunger and an auger do not move it, stop before you overflow the bowl. If the tub backs up when you flush, the blockage is past the toilet and in the main line."
  }
];

const REVIEWS = [
  {
    q: "Kitchen sink had been slow for months and I had tried everything from the hardware store. They cabled it properly and it has been perfect since.",
    n: "Renee A.",
    a: "Casas Adobes"
  },
  {
    q: "Third company to clear the same line. First one to put a camera down it and show me the root intrusion. At least now I know what I am dealing with.",
    n: "Curtis B.",
    a: "Midtown Tucson"
  },
  {
    q: "Came out on a Sunday when the main backed up. Quoted before starting, cleared it, no weekend surcharge.",
    n: "Priya N.",
    a: "Rita Ranch"
  }
];

const FAQ = [
  {
    q: "Why does my drain keep clogging after it is cleared?",
    a: "A clog that returns is a symptom, not the problem. The usual reasons are roots growing back through a joint, a bellied section of pipe collecting standing water, or heavy scale buildup narrowing the line. If the same drain has been cleared more than twice, a camera inspection is worth more than another clearing, because it tells you whether you are paying to treat something that needs repairing."
  },
  {
    q: "Are chemical drain cleaners safe to use first?",
    a: "We would rather you did not. They often fail to reach a grease or root clog, the caustic ones can damage older pipes and fixtures, and if they do not clear the line the technician then has to work in standing chemicals. A plunger or a drain claw is fine to try. After that, call."
  },
  {
    q: "Multiple drains are backing up at once. What does that mean?",
    a: "That points to the main line rather than any single fixture. When one drain is slow the problem is usually local; when the tub backs up as you flush the toilet, or the washer drain comes up in a shower, the blockage is downstream of everything. That is a same-day call, because the next thing to back up is usually the lowest fixture in the house."
  },
  {
    q: "How much does drain clearing cost in Tucson?",
    a: "It depends on access and what is in the line. A straightforward fixture clog through an existing cleanout is at the low end. Main line work, hydro-jetting, or anything needing a camera costs more. You get an upfront price before we start, and if we recommend a camera we tell you why first."
  },
  {
    q: "Do you guarantee the drain stays clear?",
    a: "We stand behind our drain clearing. If a line we cleared backs up again in a way that points to our work rather than to a pipe defect we already flagged, we come back and put it right. Where a camera shows roots or a broken pipe, we tell you that up front rather than clearing it repeatedly and letting you find out later."
  }
];

export default function CloggedDrainLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero - the promise, then the phone, above the fold on mobile */}
      <section className="px-4 py-6 sm:py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Tucson drain clearing</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">Clogged Drain? Cleared Today, Guaranteed.</h1>
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
          <p className="mt-2 text-[17px] text-muted-foreground">Where the water backs up tells us a lot about where the clog is. Here is what we find most often in Tucson homes.</p>
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
          <h2 className="text-3xl font-extrabold">Water not going down? We&rsquo;ll clear it today</h2>
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
      <LpFaq items={FAQ} heading="Clogged drains - common questions" />

      <section className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">Related plumbing services</h2>
          <ul className="mt-3 space-y-2 text-[16px]">
            <li><a className="font-semibold text-primary underline" href="/services/drain-clearing">Drain clearing in Tucson</a> - full service details and pricing</li>
            <li><a className="font-semibold text-primary underline" href="/services/sewer-camera-inspection">Sewer camera inspection</a> - when a clog keeps coming back</li>
            <li><a className="font-semibold text-primary underline" href="/lp/water-leak-detection">Water leak detection</a> - if you also see water where it should not be</li>
            <li><a className="font-semibold text-primary underline" href="/services/plumbing-tucson">Plumbing services in Tucson</a> - licensed plumbers, 24/7</li>
          </ul>
        </div>
      </section>
    </>
  );
}
