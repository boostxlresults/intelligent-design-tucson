import type { Metadata } from "next";
import { Phone, Star, Search, ShieldQuestion, FileText, Umbrella } from "lucide-react";
import { CAMPAIGN_PHONES } from "@/lib/campaignPhones";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";
import LpProof from "@/components/lp/LpProof";
import LpServiceArea from "@/components/lp/LpServiceArea";
import LpFaq from "@/components/lp/LpFaq";
import LpStickyCall from "@/components/lp/LpStickyCall";

export const dynamic = "force-dynamic";

const PHONE = CAMPAIGN_PHONES["/lp/sewer-line-replacement-cost"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "Sewer Line Replacement Cost in Tucson | Get a Second Opinion First",
  description: "What sewer line replacement actually costs in Tucson, what drives the price up, five things to check on your quote, and a free second look before you let anyone dig.",
  alternates: { canonical: "https://www.idesignac.com/lp/sewer-line-replacement-cost" },
};

const COSTS = [
  {
    label: "Spot repair of one bad section",
    price: "Least expensive option",
    desc: "If the camera shows a single broken joint or a short damaged run, that is what gets repaired. This is the whole reason to insist on video before agreeing to anything: a spot repair and a full replacement are not close in price, and only one of them is justified by most of what we find.",
  },
  {
    label: "Trenchless relining",
    price: "Priced after the free camera inspection",
    desc: "A new pipe cured inside the old one. We price it once we have seen the line, because the number depends on length, diameter and condition. What we will commit to in advance: relining is always less than digging the same line out from under the home, because the dig price has to include putting the slab and the yard back.",
  },
  {
    label: "Dig and replace",
    price: "Roughly $4,500 to $15,000",
    desc: "The range is wide because the pipe is the cheap part. What moves the number is depth, length, what is on top of the line, and how much has to be rebuilt afterward. A short run through open dirt in a side yard sits near the bottom. Anything requiring concrete removal sits near the top.",
  },
  {
    label: "Anything running under the house",
    price: "Always the most expensive",
    desc: "Under a slab is the worst case in every direction. It means breaking concrete inside the house, working in a confined trench, repouring, and then dealing with flooring. This is the scenario where trenchless is worth the most, because it avoids opening the slab at all.",
  },
];

const QUOTE_CHECKS = [
  {
    title: "1. Does it come with camera footage you have actually seen?",
    desc: "A replacement quote written without video is a guess, and a guess always errs toward replacing everything. If nobody put a camera in the line, or they did and you were not shown the footage, you do not yet know whether you need a full replacement, a spot repair or a liner. That one question changes the price more than any other.",
  },
  {
    title: "2. Is it the whole line, or only the part that is bad?",
    desc: "Ask which footage marks the damage sits between, and whether the rest of the line looked serviceable on camera. It is common for one joint at 18 feet to be the entire problem while the quote covers the run from the house to the street. If the answer is that it is all bad, ask to see each bad section on the video.",
  },
  {
    title: "3. Does it include putting everything back?",
    desc: "This is where dig quotes quietly grow. Breaking concrete, hauling spoil, repouring the slab or driveway, replacing sod, irrigation lines, pavers and plants is often not in the plumbing number. Ask directly: is the concrete in this price, is the landscaping in this price, and who schedules those trades. If the answer is that you arrange it, the quote is not the cost.",
  },
  {
    title: "4. Was trenchless ruled out, and on what grounds?",
    desc: "Relining will not fix a fully collapsed section, a severe belly holding standing water, or a badly misaligned joint. Those are real limits. But a company that does not own lining equipment has no reason to raise the option at all. If nobody mentioned it, that is worth a second opinion by itself.",
  },
  {
    title: "5. What is the warranty, and who honors it?",
    desc: "Get the term in writing and find out whether it covers the pipe, the labor, or both, and what happens to it if the company is sold or closes. Our HammerHead liner carries a lifetime warranty, and we have been in Tucson since 1979, which is the part that makes a long warranty worth anything.",
  },
];

const REVIEWS = [
  {
    q: "Had a quote for eleven thousand to replace the whole line. Intelligent Design ran a camera, showed me one bad joint, and fixed that section. Not close to the same number.",
    n: "Bill T.",
    a: "Sam Hughes",
  },
  {
    q: "The second opinion was free and took an hour. It saved us from digging up a driveway we had just resurfaced.",
    n: "Angela P.",
    a: "Oro Valley",
  },
  {
    q: "They were straight with me that part of my line genuinely did need replacing. But they also showed me the rest was fine, so we only did what was needed.",
    n: "Hector M.",
    a: "Midvale Park",
  },
];

const FAQ = [
  {
    q: "How much does sewer line replacement cost in Tucson?",
    a: "Dig-and-replace generally runs somewhere between $4,500 and $15,000, and the pipe itself is a small part of that. What moves the number is depth, the length of the run, and what has to be removed and rebuilt on top of it. Anything running under the house is the most expensive scenario there is. A spot repair on a single bad section is the least expensive. Trenchless relining is priced after the free camera inspection, and it is always less than digging the same line out from under a home.",
  },
  {
    q: "Why are two quotes for the same job so far apart?",
    a: "Usually because they are not the same job. One may be the whole run and the other a single section; one may include concrete and landscaping restoration and the other may leave you to arrange it; one may be a dig and the other a liner. Before comparing numbers, compare what is actually being repaired and what is included in putting your property back.",
  },
  {
    q: "Do I really need the whole line replaced?",
    a: "Often not. A camera run frequently shows one failed joint or one damaged section with serviceable pipe on either side. Full replacement is the right call when the line is collapsed in multiple places, badly bellied, or so far gone that isolated repairs will not hold. The honest answer is that nobody can tell you without video, which is exactly why we make the camera inspection free.",
  },
  {
    q: "Does homeowners insurance cover sewer line replacement?",
    a: "Standard homeowners policies usually exclude the failure of the buried line itself, treating it as wear rather than a covered event, but they often do cover resulting water damage inside the home. Some carriers offer a separate service line endorsement that covers the pipe, and it is inexpensive if you already have it. In Tucson, the portion of the line in the public right of way is typically the utility's responsibility while the portion on your property is yours. Call your carrier with the camera footage and ask about both the service line endorsement and the resulting-damage coverage, because the answer is policy-specific and we are not the ones who can tell you.",
  },
  {
    q: "Is a second opinion really free?",
    a: "Yes. We run the camera, show you the footage, and tell you what we see, including when the first company was right. You are under no obligation to have us do the work. We make that offer because a meaningful share of the replacement quotes we look at turn out to be repairable for a fraction of the price, and the homeowners who find that out tend to call us again.",
  },
];

export default function SewerLineReplacementCostLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero */}
      <section className="px-4 py-6 sm:py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Tucson sewer line replacement</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
            Told You Need a New Sewer Line? Read This Before You Let Anyone Dig
          </h1>
          <div className="mx-auto mt-4 max-w-xl rounded-xl border-2 border-[#C8101F] bg-[#C8101F]/5 p-5">
            <Search className="mx-auto h-7 w-7 text-[#C8101F]" />
            <p className="mt-1.5 text-[20px] font-extrabold leading-tight text-primary sm:text-[22px]">
              Free second look before you commit
            </p>
            <p className="mt-1.5 text-[15px] font-semibold text-muted-foreground">
              We put a camera in the line, show you the footage, and tell you what we see. Including when the other company was right.
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

      {/* What it actually costs */}
      <section className="border-t border-border px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">What sewer work actually costs in Tucson</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">
            Real numbers, in the order most homeowners should hope for. Where your job lands depends far more on what is on top of the pipe than on the pipe.
          </p>
          <div className="mt-6 space-y-4">
            {COSTS.map((c, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-[18px] font-bold text-foreground">{c.label}</h3>
                  <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-[13px] font-bold text-muted-foreground">{c.price}</span>
                </div>
                <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground">
            Notice what decides all of this: which repair your line actually needs. That is a question about the pipe, and it has a definite answer that twenty minutes of video will give you.
          </p>
          <div className="mt-6 rounded-xl bg-[#0d1b3e] p-6 text-center text-white">
            <p className="text-xl font-bold">Get the footage before you sign anything</p>
            <p className="mt-1 text-white/85">Free camera inspection with any drain clearing, and a free second look on an existing quote.</p>
            <a href={`tel:${PHONE.tel}`} className="mx-auto mt-4 flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-xl font-extrabold text-white shadow-lg hover:brightness-110">
              <Phone className="h-6 w-6" /> Call {PHONE.display}
            </a>
          </div>
        </div>
      </section>

      {/* Five things to check on the quote */}
      <section className="bg-muted/30 px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-[#C8101F]" />
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Five things to check on the quote in your hand</h2>
          </div>
          <p className="mt-2 text-[17px] text-muted-foreground">
            Take these to whoever gave you the number. A company doing honest work will have easy answers to all five.
          </p>
          <div className="mt-6 space-y-4">
            {QUOTE_CHECKS.map((q, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-[18px] font-bold text-foreground">{q.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who pays */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2">
            <Umbrella className="h-6 w-6 text-[#C8101F]" />
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Who pays for a failed sewer line</h2>
          </div>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            Three separate questions get tangled together here, so it helps to take them one at a time. First, where the break is. In Tucson the portion of the line running through the public right of way is generally the utility&rsquo;s to maintain, while the portion on your property is yours. A camera run tells you which side of that boundary the damage sits on, and that is worth establishing before you pay for anything.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            Second, your homeowners policy. Standard policies usually exclude the buried line failing on its own, because carriers treat that as wear rather than a sudden event. They frequently do cover the water damage that results inside the home. Many carriers also sell a separate service line endorsement that covers the pipe itself, often for very little, and plenty of homeowners have it without knowing. Call your carrier with the footage and ask about both, because the answer depends on your specific policy and we are not in a position to tell you what yours covers.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            Third, if you bought the home recently. A sewer defect that predates your purchase and was known and undisclosed is a conversation worth having with your agent or an attorney. Documented camera footage with dates is what makes that conversation possible, which is another reason to get the inspection on record early.
          </p>
        </div>
      </section>

      <LpProof reviews={REVIEWS} />

      {/* Second look block */}
      <section className="bg-muted/30 px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2">
            <ShieldQuestion className="h-6 w-6 text-[#C8101F]" />
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">What our second look involves</h2>
          </div>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            We come out, run our own camera, and go through the footage with you on the monitor. You find out which sections are actually damaged, whether the line is a candidate for relining, and what each option would cost. If the first company assessed it correctly, we say so, and you can go back to them with more confidence than you had this morning.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            There is no charge for this and no obligation. Bring us the quote you already have, tell us what you were told, and we will work through it with you.
          </p>
          <div className="mt-6 rounded-xl bg-[#0d1b3e] p-6 text-center text-white">
            <p className="text-xl font-bold">Have a replacement quote in hand?</p>
            <p className="mt-1 text-white/85">Call and say so. We will get a camera on it before anyone breaks ground.</p>
            <a href={`tel:${PHONE.tel}`} className="mx-auto mt-4 flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-xl font-extrabold text-white shadow-lg hover:brightness-110">
              <Phone className="h-6 w-6" /> Call {PHONE.display}
            </a>
          </div>
        </div>
      </section>

      {/* Second call to action */}
      <section className="bg-[#0d1b3e] px-4 py-10 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold">Do not pay to replace a line that can be repaired</h2>
          <p className="mt-2 text-lg text-white/85">Free second look, free camera inspection with any drain clearing.</p>
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
      <LpFaq items={FAQ} heading="Sewer line replacement cost - common questions" />

      <section className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">Related sewer and drain services</h2>
          <ul className="mt-3 space-y-2 text-[16px]">
            <li><a className="font-semibold text-primary underline" href="/lp/sewer-camera-inspection">Sewer camera inspection</a> - the footage that decides which repair you need</li>
            <li><a className="font-semibold text-primary underline" href="/lp/trenchless-sewer-repair">Trenchless sewer repair</a> - a new pipe inside the old one, no trench</li>
            <li><a className="font-semibold text-primary underline" href="/services/sewer-line-repair">Sewer line repair in Tucson</a> - spot repairs and full replacement</li>
            <li><a className="font-semibold text-primary underline" href="/financing">Financing options</a> - monthly payments on larger repairs</li>
            <li><a className="font-semibold text-primary underline" href="/lp/drain-keeps-clogging">Drain keeps clogging</a> - when the clog is the symptom, not the problem</li>
          </ul>
        </div>
      </section>
    </>
  );
}
