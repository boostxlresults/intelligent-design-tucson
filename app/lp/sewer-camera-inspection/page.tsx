import type { Metadata } from "next";
import { Phone, Star, Gift, Video, Home, AlertTriangle } from "lucide-react";
import { CAMPAIGN_PHONES } from "@/lib/campaignPhones";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";
import LpProof from "@/components/lp/LpProof";
import LpWhatHappens from "@/components/lp/LpWhatHappens";
import LpServiceArea from "@/components/lp/LpServiceArea";
import LpFaq from "@/components/lp/LpFaq";
import LpStickyCall from "@/components/lp/LpStickyCall";

export const dynamic = "force-dynamic";

const PHONE = CAMPAIGN_PHONES["/lp/sewer-camera-inspection"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "Sewer Camera Inspection Tucson | Free With Any Drain Clearing",
  description: "Sewer camera inspection in Tucson, free with any drain clearing. See the inside of your line on video before anyone quotes a repair or digs up your yard.",
  alternates: { canonical: "https://www.idesignac.com/lp/sewer-camera-inspection" },
};

const ON_CAMERA = [
  {
    title: "Scale and tuberculation",
    desc: "Rust nodules growing inward off the pipe wall until the opening is a fraction of what it should be. On video the pipe looks like the inside of a cave rather than a smooth tube. This is why a cast iron line starts catching paper and grease long before anything is actually broken, and why snaking it only buys a few months.",
  },
  {
    title: "Pitting and a thinning wall",
    desc: "Corrosion eats the bottom of the pipe first, because that is where waste sits. On camera you see dark pocked patches along the invert, and in a line that is further gone you see daylight through the wall into surrounding soil. A pipe in this condition can be lined, but it will not survive much more cabling.",
  },
  {
    title: "Root intrusion at a joint",
    desc: "Fine white root hairs pushing through a gap in a joint, then thickening into a mat that catches everything passing by. The camera shows which joint, and we mark how far down the run and how deep it sits, so a repair can be planned to that one section instead of to the whole line.",
  },
  {
    title: "A belly holding standing water",
    desc: "The camera head goes underwater mid-run and stays there. That is a sagged section, and it is the single most useful thing an inspection can find, because a belly means the line will clog again a few weeks after every clearing no matter how well the clearing is done. Standing water also cannot be lined until the sag is addressed.",
  },
];

const BUYER_CHECKS = [
  "Cast iron or clay pipe, which is most Tucson homes built before roughly 1975",
  "Mature trees or oleander anywhere near the run between the house and the street",
  "A seller disclosure that mentions drain clearing, or a line that has been snaked more than once",
  "Any part of the line running under a slab, a driveway, a patio or a pool deck",
  "An addition or a remodel where the drain was rerouted",
];

const REVIEWS = [
  {
    q: "Watched the screen with the tech. Two joints with roots and one flat spot holding water. I finally understood why it kept backing up.",
    n: "Diane M.",
    a: "Midtown Tucson",
  },
  {
    q: "Under contract on a 1961 house. The inspection found a bad section under the driveway and we got it credited at closing. Best money I spent.",
    n: "Aaron L.",
    a: "Winterhaven",
  },
  {
    q: "Another company told me the whole line had to be replaced. Intelligent Design put a camera in it and showed me only one section was bad. Huge difference in price.",
    n: "Rosa V.",
    a: "Flowing Wells",
  },
];

const FAQ = [
  {
    q: "How much does a sewer camera inspection cost in Tucson?",
    a: "It is free with any drain clearing. If you are having a line cleared anyway, the camera goes in afterward at no additional charge and you see the footage yourself. That is deliberate on our part: a clearing without a look inside is how homeowners end up paying for the same clearing three times and only then finding out the pipe was the problem.",
  },
  {
    q: "What can a camera actually see?",
    a: "The inside of the pipe wall along the whole run: scale and rust buildup in cast iron, cracks, separated or offset joints, root intrusion and where it entered, sagged sections holding standing water, foreign objects, and collapsed pipe. It also tells us the material and the diameter. We can mark how far down the line a problem sits and how deep it is, which is what keeps a repair confined to one section instead of the whole run.",
  },
  {
    q: "Do I get to see the video?",
    a: "Yes, and we would rather you watched it live with the technician than take a summary afterward. You can see the monitor while the camera runs, ask what something is, and have it explained on the spot. If a repair gets recommended, you will have seen the reason for it with your own eyes before anyone quotes a number.",
  },
  {
    q: "Should I get a sewer inspection before buying a house in Tucson?",
    a: "On any home built before the mid-1970s, yes. A standard home inspection does not include the sewer line, and the line is one of the most expensive things in the house to repair. Cast iron and clay pipe of that era is at or past the end of its service life, and Tucson landscaping puts roots right where the pipe joints are. Finding it before closing turns a five-figure surprise into a negotiation.",
  },
  {
    q: "How long does an inspection take?",
    a: "Usually 30 to 60 minutes once there is access, which normally means an existing cleanout. Most of that is the camera run itself and going through what it found with you. If the line is blocked it has to be cleared first, since a camera cannot see through a full blockage, and that is the case where the inspection is free with the clearing.",
  },
];

export default function SewerCameraInspectionLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero - H1, then the offer, then the phone */}
      <section className="px-4 py-6 sm:py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Tucson sewer camera inspection</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
            Sewer Camera Inspection in Tucson: See Exactly What&rsquo;s Wrong Before Anyone Digs
          </h1>

          {/* The conversion lever. Second thing on screen, by design. */}
          <div className="mx-auto mt-4 max-w-xl rounded-xl border-2 border-[#C8101F] bg-[#C8101F]/5 p-5">
            <Gift className="mx-auto h-7 w-7 text-[#C8101F]" />
            <p className="mt-1.5 text-[20px] font-extrabold leading-tight text-primary sm:text-[22px]">
              Free sewer camera inspection with any drain clearing
            </p>
            <p className="mt-1.5 text-[15px] font-semibold text-muted-foreground">
              You watch the footage with the technician. No charge, no obligation to repair anything.
            </p>
          </div>

          <a
            href={`tel:${PHONE.tel}`}
            data-testid="lp-hero-call"
            className="mx-auto mt-4 flex min-h-[60px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-2xl font-extrabold text-white shadow-lg hover:brightness-110"
          >
            <Phone className="h-7 w-7" /> {PHONE.display}
          </a>
          <p className="mt-3 text-[16px] font-semibold text-foreground">
            Same-day appointments &middot; 42 trucks across Tucson &middot; Upfront price before we start
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {TRUST}
          </p>
        </div>
      </section>

      {/* Why you look first */}
      <section className="border-t border-border px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">Why a camera goes in before a shovel</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            A sewer repair quote written without video is a guess, and guesses run in one direction: toward replacing the whole line. A camera turns that into a measured problem. It shows which section is bad, what the pipe is made of, how deep it sits and how far from the house, and whether the pipe can be relined from the inside instead of dug out.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            That is the difference between a spot repair and a full replacement, and between relining through a cleanout and a trench across your front yard. It is also the only way to tell a clog from a pipe problem. If the same drain has been cleared more than twice, the clog is a symptom and something in the pipe is causing it. Twenty minutes of video answers that permanently.
          </p>
          <div className="mt-6 rounded-xl bg-[#0d1b3e] p-6 text-center text-white">
            <p className="text-xl font-bold">Get eyes in your line today</p>
            <p className="mt-1 text-white/85">Free with any drain clearing, and you keep what you learn either way.</p>
            <a href={`tel:${PHONE.tel}`} className="mx-auto mt-4 flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-xl font-extrabold text-white shadow-lg hover:brightness-110">
              <Phone className="h-6 w-6" /> Call {PHONE.display}
            </a>
          </div>
        </div>
      </section>

      {/* What cast iron failure looks like on camera */}
      <section className="bg-muted/30 px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2">
            <Video className="h-6 w-6 text-[#C8101F]" />
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">What cast iron failure looks like on camera</h2>
          </div>
          <p className="mt-2 text-[17px] text-muted-foreground">
            Most Tucson homes built before the mid-1970s have cast iron or clay drain pipe, and it fails from the inside where nothing on the surface shows it. These are the four things our technicians find most often.
          </p>
          <div className="mt-6 space-y-4">
            {ON_CAMERA.map((c, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-[18px] font-bold text-foreground">{i + 1}. {c.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground">
            Three of these four can usually be repaired without digging, by curing a new liner inside the existing pipe. A severe belly is the exception, because a liner takes the shape of the pipe it is formed in. Which category your line falls into is exactly what the inspection settles.
          </p>
        </div>
      </section>

      {/* Home buyers */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-[#C8101F]" />
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Buying a house? Inspect the sewer line before you close</h2>
          </div>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            A standard home inspection stops at the drain opening. Nobody looks inside the line, and the line is one of the costliest repairs the house can hand you. In Tucson that matters more than in newer markets, because so much of our housing stock is mid-century and sitting on original cast iron with mature trees over the top of it.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            An inspection during your due-diligence window costs a fraction of the repair and gives you documented footage. Found before closing, a bad section becomes a credit or a seller repair. Found after, it is yours. Check the sewer line on any home with these traits:
          </p>
          <ul className="mt-4 space-y-2.5">
            {BUYER_CHECKS.map((b, i) => (
              <li key={i} className="flex gap-2 text-[16px] leading-relaxed text-muted-foreground">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#C8101F]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
            Tell us you are under contract when you call and we will work to your inspection deadline.
          </p>
        </div>
      </section>

      <LpProof reviews={REVIEWS} />
      <LpWhatHappens />

      {/* Second call to action */}
      <section className="bg-[#0d1b3e] px-4 py-10 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold">Stop guessing about your sewer line</h2>
          <p className="mt-2 text-lg text-white/85">Free camera inspection with any drain clearing. See it yourself, then decide.</p>
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
      <LpFaq items={FAQ} heading="Sewer camera inspection - common questions" />

      <section className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">Related sewer and drain services</h2>
          <ul className="mt-3 space-y-2 text-[16px]">
            <li><a className="font-semibold text-primary underline" href="/lp/trenchless-sewer-repair">Trenchless sewer repair</a> - a new pipe cured inside the old one, no trench</li>
            <li><a className="font-semibold text-primary underline" href="/services/sewer-camera-inspection">Sewer camera inspection service details</a> - equipment, process and pricing</li>
            <li><a className="font-semibold text-primary underline" href="/services/sewer-line-repair">Sewer line repair in Tucson</a> - spot repairs and full replacement</li>
            <li><a className="font-semibold text-primary underline" href="/services/cast-iron-pipe-repair-tucson">Cast iron pipe repair</a> - what happens to mid-century Tucson pipe</li>
            <li><a className="font-semibold text-primary underline" href="/lp/sewer-line-replacement-cost">Sewer line replacement cost</a> - what the repairs run, and a free second opinion</li>
            <li><a className="font-semibold text-primary underline" href="/lp/drain-keeps-clogging">Drain keeps clogging</a> - when the clog is a symptom of the pipe</li>
            <li><a className="font-semibold text-primary underline" href="/lp/clogged-drain">Clogged drain clearing</a> - if something is backing up right now</li>
          </ul>
        </div>
      </section>
    </>
  );
}
