import type { Metadata } from "next";
import { Phone, Star, RotateCcw, Waves, TreePine, Video } from "lucide-react";
import { CAMPAIGN_PHONES } from "@/lib/campaignPhones";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";
import LpProof from "@/components/lp/LpProof";
import LpServiceArea from "@/components/lp/LpServiceArea";
import LpFaq from "@/components/lp/LpFaq";
import LpStickyCall from "@/components/lp/LpStickyCall";

export const dynamic = "force-dynamic";

const PHONE = CAMPAIGN_PHONES["/lp/drain-keeps-clogging"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "Drain Keeps Clogging in Tucson? Find Out Why It Comes Back",
  description: "If the same drain clogs again weeks after every snaking, the pipe is the problem. Free camera inspection with any drain clearing shows you exactly why.",
  alternates: { canonical: "https://www.idesignac.com/lp/drain-keeps-clogging" },
};

const SYMPTOMS = [
  {
    icon: RotateCcw,
    title: "It clears, then comes back in a few weeks",
    cause: "Usually a bellied section or heavy scale",
    desc: "A clean pipe with a smooth wall does not re-clog on a schedule. When it does, something in the line is catching material as it passes. The two usual causes are a sagged section that holds standing water so debris settles out in it, and years of scale narrowing the pipe until the opening is a fraction of its original diameter. Snaking punches a hole through what has collected; it does not change the pipe that collected it, so the clock restarts the day the technician leaves.",
  },
  {
    icon: Waves,
    title: "More than one fixture backs up at once",
    cause: "The blockage is in the main line",
    desc: "When one drain is slow, the problem is usually local to that fixture. When the tub backs up as you flush the toilet, or the washer drain comes up in a shower, the obstruction is downstream of everything and sits in the main line. That is a same-day call, because the next thing to overflow is the lowest fixture in the house and it will not wait for a convenient morning.",
  },
  {
    icon: TreePine,
    title: "It gets worse in certain seasons, or after rain",
    cause: "Almost always roots",
    desc: "Tucson landscaping goes looking for water and finds it at the joints in older clay and cast iron pipe. Roots enter as hairs, thicken into a mat, and catch everything passing through. Because root growth is seasonal and because saturated soil shifts pipe slightly, a root problem tends to have a rhythm to it. Cabling shears the roots back but leaves the opening they came in through, so they regrow into the same joint.",
  },
];

const FIRST_STEPS = [
  {
    title: "Clear the line so it drains",
    desc: "Nothing useful happens while the line is full, and you want your house working again today. We clear it first, with a cable or a hydro-jet depending on what is in there and what the pipe can take.",
  },
  {
    title: "Put a camera in it, free",
    desc: "With the line open, the camera goes in at no additional charge. This is the step that answers the actual question, and it is free with any drain clearing specifically so that nobody has to decide whether the diagnosis is worth paying for.",
  },
  {
    title: "Watch the footage with the technician",
    desc: "You see the pipe wall, the joints, any standing water, and any roots, on the monitor, while the technician explains what you are looking at. If there is nothing wrong with the pipe, you find that out too, and you can stop worrying about it.",
  },
  {
    title: "Decide with the evidence in front of you",
    desc: "If the pipe is sound, you paid for a clearing and got a free inspection. If it is not, you now know whether you are looking at a spot repair, a liner, or a replacement, and you have not committed to anything.",
  },
];

const REVIEWS = [
  {
    q: "Snaked that kitchen line three times in two years with two other companies. First camera anyone ran showed a belly under the slab. At least now I know.",
    n: "Karen S.",
    a: "Catalina Foothills",
  },
  {
    q: "Cleared it same day and then put the camera down for free. Roots at one joint, clear as day on the screen. Fixed that one section, no more backups.",
    n: "Miguel R.",
    a: "Rita Ranch",
  },
  {
    q: "Honestly expected to be sold a new sewer line. They showed me the pipe was fine and it was a grease problem in one spot. That is why I keep calling them.",
    n: "Janet W.",
    a: "Casas Adobes",
  },
];

const FAQ = [
  {
    q: "Why does my drain keep clogging after it is snaked?",
    a: "Because snaking treats the blockage and not the reason the blockage formed. A cable bores an opening through what has accumulated, which restores flow immediately, but it does not smooth a scaled pipe wall, lift a sagged section, or close the joint that roots came in through. Whatever caught material the first time goes on catching it. If the same drain has been cleared more than twice, the clog is a symptom and you are paying to treat the symptom on a schedule.",
  },
  {
    q: "How many times is too many before I should look inside the pipe?",
    a: "Twice. After a second clearing of the same line, a camera inspection is worth more than a third clearing, and since it is free with any drain clearing it costs you nothing to find out. Plenty of the lines we look at turn out to be fine, and that answer has value too, because it means you can stop wondering whether you are sitting on a five-figure repair.",
  },
  {
    q: "Can a camera inspection actually tell you why it keeps coming back?",
    a: "Yes, and usually within a few minutes of the camera going in. Standing water that the camera head submerges into is a belly. Rust nodules growing off the wall are scale in cast iron. White root hairs at a joint are root intrusion. Each of those has a different repair and a very different price, which is why guessing between them is expensive.",
  },
  {
    q: "Do I need to fix the pipe, or can I just keep having it cleared?",
    a: "Repeat clearing is a legitimate choice for a while, and for some homeowners it is the right one, particularly if you are selling soon or the interval is long. What you should not do is make that choice without knowing which problem you have. Roots regrow on a predictable cycle and are relatively cheap to manage. A belly under a slab that is leaking into the soil beneath your foundation is a different situation, and one you want to know about deliberately rather than discover later.",
  },
];

export default function DrainKeepsCloggingLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero */}
      <section className="px-4 py-6 sm:py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Tucson repeat drain clogs</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
            Drain Keeps Clogging After You Snake It? The Clog Isn&rsquo;t the Problem, the Pipe Is
          </h1>
          <a
            href={`tel:${PHONE.tel}`}
            data-testid="lp-hero-call"
            className="mx-auto mt-4 flex min-h-[60px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-2xl font-extrabold text-white shadow-lg hover:brightness-110"
          >
            <Phone className="h-7 w-7" /> {PHONE.display}
          </a>
          <p className="mt-3 text-[16px] font-semibold text-foreground">
            Cleared today &middot; Free camera inspection with any drain clearing &middot; Upfront price before we start
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {TRUST}
          </p>
        </div>
      </section>

      {/* Symptom matcher */}
      <section className="border-t border-border px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">Which one sounds like your house?</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">
            How a drain misbehaves says a great deal about why. Find yours below, then confirm it with a camera rather than taking anyone&rsquo;s word for it, ours included.
          </p>
          <div className="mt-6 space-y-4">
            {SYMPTOMS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                      <Icon className="mt-0.5 h-6 w-6 shrink-0 text-[#C8101F]" />
                      <h3 className="text-[18px] font-bold text-foreground">{s.title}</h3>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-[13px] font-bold text-muted-foreground">{s.cause}</span>
                  </div>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 rounded-xl bg-[#0d1b3e] p-6 text-center text-white">
            <p className="text-xl font-bold">Stop paying for the same clog</p>
            <p className="mt-1 text-white/85">We clear it today and show you why it keeps happening, at no extra charge.</p>
            <a href={`tel:${PHONE.tel}`} className="mx-auto mt-4 flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-xl font-extrabold text-white shadow-lg hover:brightness-110">
              <Phone className="h-6 w-6" /> Call {PHONE.display}
            </a>
          </div>
        </div>
      </section>

      {/* What we do first */}
      <section className="bg-muted/30 px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2">
            <Video className="h-6 w-6 text-[#C8101F]" />
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">What we do first</h2>
          </div>
          <p className="mt-2 text-[17px] text-muted-foreground">
            In this order, on the same visit. You are not asked to decide anything until you have seen the inside of your own pipe.
          </p>
          <div className="mt-6 space-y-4">
            {FIRST_STEPS.map((s, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-[18px] font-bold text-foreground">{i + 1}. {s.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground">
            A quick word on chemical drain cleaners, since most people have tried them by this point: they rarely reach a grease or root clog, the caustic ones can damage older pipe, and if they fail the technician then has to work in standing chemicals. A plunger or a drain claw is fine. After that, it is worth calling.
          </p>
        </div>
      </section>

      <LpProof reviews={REVIEWS} />

      {/* Second call to action */}
      <section className="bg-[#0d1b3e] px-4 py-10 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold">Cleared today, and you find out why</h2>
          <p className="mt-2 text-lg text-white/85">Free camera inspection with any drain clearing. No obligation to repair anything.</p>
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
      <LpFaq items={FAQ} heading="Repeat drain clogs - common questions" />

      <section className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">What to do once you know the cause</h2>
          <ul className="mt-3 space-y-2 text-[16px]">
            <li><a className="font-semibold text-primary underline" href="/lp/sewer-camera-inspection">Sewer camera inspection</a> - see exactly what is in your line, free with any clearing</li>
            <li><a className="font-semibold text-primary underline" href="/lp/trenchless-sewer-repair">Trenchless sewer repair</a> - fix roots and scale without a trench through the yard</li>
            <li><a className="font-semibold text-primary underline" href="/lp/sewer-line-replacement-cost">Sewer line replacement cost</a> - what the repairs run, and a free second opinion</li>
            <li><a className="font-semibold text-primary underline" href="/lp/clogged-drain">Clogged drain clearing</a> - if a drain is backing up right now</li>
            <li><a className="font-semibold text-primary underline" href="/services/drain-clearing">Drain clearing in Tucson</a> - full service details and pricing</li>
          </ul>
        </div>
      </section>
    </>
  );
}
