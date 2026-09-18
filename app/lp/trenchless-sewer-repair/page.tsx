import type { Metadata } from "next";
import { Phone, Star, Check, X, ShieldCheck, Clock, CreditCard } from "lucide-react";
import { CAMPAIGN_PHONES } from "@/lib/campaignPhones";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";
import LpProof from "@/components/lp/LpProof";
import LpServiceArea from "@/components/lp/LpServiceArea";
import LpFaq from "@/components/lp/LpFaq";
import LpStickyCall from "@/components/lp/LpStickyCall";

export const dynamic = "force-dynamic";

const PHONE = CAMPAIGN_PHONES["/lp/trenchless-sewer-repair"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "Trenchless Sewer Repair Tucson | No Digging, Lifetime Warranty",
  description: "Trenchless sewer repair in Tucson. A new pipe cured inside your old one, no trench through the yard or slab. Lifetime warranty, most jobs in 1 to 4 days, financing available.",
  alternates: { canonical: "https://www.idesignac.com/lp/trenchless-sewer-repair" },
};

const STEPS = [
  {
    title: "1. Camera and clean the line",
    desc: "A camera goes down the existing line so we can see the damage, measure it, and confirm the pipe is a candidate for lining. Then the line is cleaned back to bare pipe wall, because the liner bonds to the pipe and anything left behind becomes a weak spot. This is also where you find out exactly what you are dealing with rather than taking someone's word for it.",
  },
  {
    title: "2. The liner goes in through an existing access point",
    desc: "A resin-saturated liner is pulled or pushed into place through a cleanout or a single small access point. No trench down the length of the run, no jackhammering a channel across the slab, no sections of the yard or driveway removed. On most Tucson homes the only visible sign afterward is where we came in.",
  },
  {
    title: "3. It cures in place into a new pipe",
    desc: "The liner is inflated against the old pipe wall and cured, so it hardens into a seamless, jointless pipe formed to the shape of the original. Joints are where roots get in and where cast iron fails first, and a cured liner does not have any. We camera the finished line and show you the result before we leave.",
  },
];

const DIG = [
  "A trench the length of the run, or a channel cut through the slab",
  "Landscaping, hardscape, driveway or patio removed and rebuilt",
  "Often a week or more of the house being torn up",
  "Frequently three separate contractors: plumber, then concrete, then landscaping",
  "Each one schedules around the others, and each one blames the last",
  "New pipe, but joints at every connection",
];

const RELINE = [
  "One small access point, usually an existing cleanout",
  "Landscaping, hardscape and slab stay where they are",
  "Most Tucson jobs finish in 1 to 4 days",
  "One contractor for prep, repair and cleanup",
  "One company accountable for the whole job and the warranty",
  "Seamless, jointless pipe with no entry points for roots",
];

const FIXES = [
  "Cast iron that has scaled, pitted or rusted thin from the inside",
  "Root intrusion at joints in clay or cast iron",
  "Cracked or separated joints",
  "Small holes and longitudinal cracks",
  "A line that has been cleared over and over because the pipe wall is rough",
  "Orangeburg and older clay tile in serviceable condition",
];

const NOT_FIXES = [
  "A section that has fully collapsed, so there is no host pipe left to line",
  "A severe belly where the pipe has sagged and holds standing water, because a liner follows the shape it is given",
  "A line that has separated and shifted far enough out of alignment that a liner cannot bridge it",
  "Pipe diameter that changes mid-run beyond what a liner can accommodate",
];

const REVIEWS = [
  {
    q: "Two other companies quoted digging up the front yard and part of the driveway. Intelligent Design lined it from the cleanout instead. Grass never got touched.",
    n: "Marcus D.",
    a: "Oro Valley",
  },
  {
    q: "1955 house, cast iron under the slab. I was braced for jackhammers in my living room. They ran the liner and were done in three days.",
    n: "Sandra K.",
    a: "Sam Hughes",
  },
  {
    q: "They camera'd it first, showed me the video, and told me straight which section could be lined and which could not. No games.",
    n: "Tom R.",
    a: "Catalina Foothills",
  },
];

const FAQ = [
  {
    q: "How long does trenchless sewer repair take?",
    a: "Most Tucson jobs are done in one to four days from start to finish, including the camera inspection, cleaning the line, installing the liner, and the final camera check. Dig-and-replace on the same house is usually a week or more once you add the concrete work and the landscaping repair afterward, and those are often separate trades with separate schedules.",
  },
  {
    q: "Do you have to dig at all?",
    a: "We need one access point, and on most homes that is an existing cleanout, so nothing new gets opened up. Where there is no usable access we may need one small excavation to create it. That is a single spot, not a trench down the length of the run, and we tell you before we start whether your home needs it.",
  },
  {
    q: "How long does a pipe liner last?",
    a: "The HammerHead liner we install is rated for more than 50 years and carries a lifetime warranty. The cured liner is a seamless pipe with no joints, which matters because joints are exactly where roots enter and where cast iron starts to fail. It is also smoother than the original pipe wall, so it is less prone to catching debris.",
  },
  {
    q: "Can every sewer line be relined?",
    a: "No, and any company that tells you otherwise has not looked. Relining needs a host pipe to bond to. If a section has fully collapsed, or has sagged into a severe belly that holds standing water, or has shifted badly out of alignment, a liner will not fix it. That is what the camera inspection is for. If your line is not a candidate we tell you that and quote the repair it actually needs.",
  },
  {
    q: "Is trenchless repair cheaper than digging?",
    a: "On the great majority of Tucson jobs, yes, and the gap is widest under a slab or a mature yard. The reason is that the dig price is never only the plumbing: it includes removing and replacing concrete, hardscape and landscaping, and that work is frequently quoted by other contractors after the fact. We price the finished job, cleanup included. Your exact price comes after the free camera inspection.",
  },
  {
    q: "Do you offer financing on sewer repair?",
    a: "Yes. Financing is available and we can walk you through the options on the phone before anyone comes out, so you know what a monthly payment looks like rather than only a lump sum. A failing sewer line is not a repair most people planned for, and the point of financing is that you are not choosing between fixing it and waiting for it to get worse.",
  },
];

export default function TrenchlessSewerRepairLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero */}
      <section className="px-4 py-6 sm:py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Tucson trenchless sewer repair</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
            Trenchless Sewer Repair in Tucson: New Pipe Inside Your Old Pipe, No Digging
          </h1>
          <a
            href={`tel:${PHONE.tel}`}
            data-testid="lp-hero-call"
            className="mx-auto mt-4 flex min-h-[60px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-2xl font-extrabold text-white shadow-lg hover:brightness-110"
          >
            <Phone className="h-7 w-7" /> {PHONE.display}
          </a>
          <p className="mt-3 text-[16px] font-semibold text-foreground">
            Free camera inspection with any drain clearing &middot; Upfront price before we start
          </p>

          {/* Three badges - the whole offer in one glance */}
          <div className="mx-auto mt-5 grid max-w-2xl gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-4">
              <ShieldCheck className="mx-auto h-6 w-6 text-[#C8101F]" />
              <p className="mt-1.5 text-[15px] font-bold text-foreground">Lifetime warranty</p>
              <p className="text-[14px] text-muted-foreground">HammerHead liner, rated 50+ years</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Clock className="mx-auto h-6 w-6 text-[#C8101F]" />
              <p className="mt-1.5 text-[15px] font-bold text-foreground">1 to 4 days</p>
              <p className="text-[14px] text-muted-foreground">Not a week of a torn-up house</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <CreditCard className="mx-auto h-6 w-6 text-[#C8101F]" />
              <p className="mt-1.5 text-[15px] font-bold text-foreground">Financing available</p>
              <p className="text-[14px] text-muted-foreground">Monthly options, not just a lump sum</p>
            </div>
          </div>

          <p className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {TRUST}
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">How a pipe gets replaced without digging</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">
            Relining does not patch the old pipe. It forms a new one inside it, bonded to the old wall and cured hard. Here is the whole process.
          </p>
          <div className="mt-6 space-y-4">
            {STEPS.map((s, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-[18px] font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dig vs reline */}
      <section className="bg-muted/30 px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">Digging it up vs. relining it</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">
            The part homeowners are rarely told: a dig-and-replace quote usually covers the pipe and not the yard, the driveway or the slab it went through.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-[18px] font-bold text-foreground">Dig and replace</h3>
              <ul className="mt-3 space-y-2.5">
                {DIG.map((d, i) => (
                  <li key={i} className="flex gap-2 text-[16px] leading-relaxed text-muted-foreground">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-[#C8101F]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border-2 border-[#C8101F] bg-card p-5">
              <h3 className="text-[18px] font-bold text-foreground">Trenchless relining</h3>
              <ul className="mt-3 space-y-2.5">
                {RELINE.map((r, i) => (
                  <li key={i} className="flex gap-2 text-[16px] leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground">
            The one-contractor point is worth sitting with. When a sewer line is dug out from under a patio, someone has to break the concrete, someone has to replace the pipe, someone has to pour the concrete back, and someone has to put the landscaping right. Hire that as three or four separate jobs and every delay becomes a question of whose fault it is. We do the prep, the repair and the cleanup ourselves, so there is one company on the hook for the finished result and one warranty covering it.
          </p>
          <div className="mt-6 rounded-xl bg-[#0d1b3e] p-6 text-center text-white">
            <p className="text-xl font-bold">Find out today whether your line can be lined</p>
            <p className="mt-1 text-white/85">Camera inspection is free with any drain clearing, and you see the footage.</p>
            <a href={`tel:${PHONE.tel}`} className="mx-auto mt-4 flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-xl font-extrabold text-white shadow-lg hover:brightness-110">
              <Phone className="h-6 w-6" /> Call {PHONE.display}
            </a>
          </div>
        </div>
      </section>

      {/* What it fixes / what it does not */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">What relining fixes, and what it does not</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">
            Relining is the right answer often, not always. If it is not the answer for your line, we would rather tell you before you pay for it.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-[18px] font-bold text-foreground">Relining fixes</h3>
              <ul className="mt-3 space-y-2.5">
                {FIXES.map((f, i) => (
                  <li key={i} className="flex gap-2 text-[16px] leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-[18px] font-bold text-foreground">Relining will not fix</h3>
              <ul className="mt-3 space-y-2.5">
                {NOT_FIXES.map((f, i) => (
                  <li key={i} className="flex gap-2 text-[16px] leading-relaxed text-muted-foreground">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-[#C8101F]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty + financing */}
      <section className="bg-muted/30 px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <ShieldCheck className="h-7 w-7 text-[#C8101F]" />
              <h2 className="mt-2 text-xl font-bold text-primary">Lifetime warranty on the liner</h2>
              <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">
                We install HammerHead liner, which is rated for more than 50 years of service and carries a lifetime warranty. That warranty is ours to honor, not a manufacturer form you mail off and hope about. We have been a Tucson company since 1979, which is the part that makes a lifetime warranty mean something.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <CreditCard className="h-7 w-7 text-[#C8101F]" />
              <h2 className="mt-2 text-xl font-bold text-primary">Financing so it gets fixed now</h2>
              <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">
                Nobody budgets for a sewer line. Financing is available and we will go over the options with you on the phone, before a technician is scheduled, so you know what the monthly number looks like. A line that is leaking under a slab does not get cheaper by waiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LpProof reviews={REVIEWS} />

      {/* Second call to action */}
      <section className="bg-[#0d1b3e] px-4 py-10 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold">Before you let anyone dig, get it on camera</h2>
          <p className="mt-2 text-lg text-white/85">Free with any drain clearing. You see the footage, then you decide.</p>
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
      <LpFaq items={FAQ} heading="Trenchless sewer repair - common questions" />

      <section className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">Related sewer and drain services</h2>
          <ul className="mt-3 space-y-2 text-[16px]">
            <li><a className="font-semibold text-primary underline" href="/lp/sewer-camera-inspection">Sewer camera inspection</a> - see the damage before anyone quotes a repair</li>
            <li><a className="font-semibold text-primary underline" href="/services/trenchless-repair">Trenchless sewer repair service details</a> - full method, materials and pricing</li>
            <li><a className="font-semibold text-primary underline" href="/services/sewer-line-repair">Sewer line repair in Tucson</a> - spot repairs and full replacement</li>
            <li><a className="font-semibold text-primary underline" href="/services/cast-iron-pipe-repair-tucson">Cast iron pipe repair</a> - why mid-century Tucson pipe fails from the inside</li>
            <li><a className="font-semibold text-primary underline" href="/lp/sewer-line-replacement-cost">Sewer line replacement cost</a> - what digging actually costs, and a free second opinion</li>
            <li><a className="font-semibold text-primary underline" href="/lp/clogged-drain">Clogged drain clearing</a> - if a drain is backing up right now</li>
          </ul>
        </div>
      </section>
    </>
  );
}
