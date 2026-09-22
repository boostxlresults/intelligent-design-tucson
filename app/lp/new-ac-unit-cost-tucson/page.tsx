import type { Metadata } from "next";
import { Phone, Star, Check, X, Tag, CreditCard, Wrench, ClipboardCheck } from "lucide-react";
import { CAMPAIGN_PHONES } from "@/lib/campaignPhones";
import { HVACInventoryForm } from "@/components/forms/HVACInventoryForm";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";
import LpProof from "@/components/lp/LpProof";
import LpServiceArea from "@/components/lp/LpServiceArea";
import LpFaq from "@/components/lp/LpFaq";
import LpStickyCall from "@/components/lp/LpStickyCall";

export const dynamic = "force-dynamic";

const PHONE = CAMPAIGN_PHONES["/lp/new-ac-unit-cost-tucson"];
const TRUST = "23,000+ Five-Star Reviews · A+ BBB · Licensed & Insured · Veteran & Family Owned Since 1979";

export const metadata: Metadata = {
  title: "New AC Unit Cost in Tucson | Real 2026 Installed Prices",
  description: "What a new AC really costs in Tucson in 2026, by system size and efficiency, installed. What the price includes, how to compare quotes, and up to $5,000 off right now.",
  alternates: { canonical: "https://www.idesignac.com/lp/new-ac-unit-cost-tucson" },
};

const PRICE_ROWS = [
  { size: "2 to 2.5 ton", home: "Up to about 1,500 sq ft", std: "$4,800 - $6,500", high: "$6,500 - $8,500", hp: "$7,000 - $9,500" },
  { size: "3 to 3.5 ton", home: "1,500 to 2,200 sq ft", std: "$5,500 - $7,500", high: "$7,500 - $9,500", hp: "$8,000 - $11,000" },
  { size: "4 to 5 ton", home: "2,200 to 3,000+ sq ft", std: "$6,500 - $8,500", high: "$8,500 - $11,000", hp: "$9,500 - $14,000" },
];

const INCLUDED = [
  "The equipment itself, matched indoor and outdoor, sized to your home",
  "City or county permit and the inspection that goes with it",
  "A crane when the unit is on a roof, which a lot of Tucson homes are",
  "A new pad or new roof curb, not the old one reused",
  "A new thermostat, set up and explained before we leave",
  "Sealing and connecting to your existing ductwork at the plenum",
  "Removal and haul-away of the old system and all packaging",
  "Startup, refrigerant charge verification and an airflow check",
];

const NOT_INCLUDED = [
  { title: "Ductwork repairs", cost: "$300 to $800", desc: "Sealing leaks, replacing a crushed or disconnected run, fixing bad boots. Common in houses over about twenty years old and worth doing while the system is open." },
  { title: "Major duct changes", cost: "$1,500 to $4,000", desc: "Resizing or rerouting when the existing ducts cannot move the air a new system needs. This is the single most common reason a quote comes back higher than the table above." },
  { title: "Electrical panel upgrade", cost: "$1,500 to $3,000", desc: "Older Tucson panels sometimes cannot carry a modern condenser, or the disconnect and whip are not to current code. We tell you before the install date, not during." },
];

const REPLACE_SIGNS = [
  { sign: "The system is 12 years old or more", verdict: "Lean replace", desc: "Tucson runs an air conditioner harder than almost anywhere in the country. A system that might last 20 years in a mild climate is commonly at the end of its useful life here somewhere between 12 and 15. A big repair on a 12-year-old unit is money spent on borrowed time." },
  { sign: "It uses R-22 refrigerant", verdict: "Replace", desc: "R-22 has not been produced or imported since 2020. Whatever is left is reclaimed, scarce and expensive, and a refrigerant leak on an R-22 system can cost more to recharge than the repair itself. If your unit is pre-2010 there is a real chance this is you." },
  { sign: "The repair is more than a third of replacement cost", verdict: "Lean replace", desc: "A compressor or a coil on an older system routinely runs $2,000 to $4,000. Put that against the table above and the math usually says replace, especially once you count what you save on the power bill." },
  { sign: "Two or more repairs in the last two summers", verdict: "Lean replace", desc: "One failure is bad luck. A third service call in two years is a pattern, and it usually means the rest of the system is not far behind whatever just broke." },
  { sign: "Under 10 years old, one clear failure, no R-22", verdict: "Repair it", desc: "A capacitor, a contactor, a fan motor or a single leak on a newer system is a repair, not a replacement. We will tell you that, and we would rather fix it than sell you something you do not need." },
];

const FINANCING_STEPS = [
  { title: "1. Apply in about ten minutes", desc: "We can start the application on the phone or at the kitchen table during the free estimate. Soft pull to see what you qualify for, so looking does not affect your credit." },
  { title: "2. See the monthly number before you decide", desc: "You find out the actual payment on the actual system before anyone asks you to sign anything. With 0% financing the payment is the price divided by the term, with nothing added on top." },
  { title: "3. Install first, pay later", desc: "No payments until 2028. The system goes in, the summer is covered, and the payments start well after the heat is behind you." },
];

const REVIEWS = [
  { q: "Got three quotes. Theirs was the only one that spelled out the permit, the crane and the haul-away instead of burying it. Ended up the best value, not the cheapest sticker.", n: "Dale W.", a: "Oro Valley" },
  { q: "Replaced a 16-year-old unit in October. Cleanout pricing plus no payments until later made it doable and the house was cool by the next afternoon.", n: "Marisol G.", a: "Rita Ranch" },
  { q: "They told me my second system was fine and only needed one replaced. Could have sold me two. That is why they got the job.", n: "Ken H.", a: "Catalina Foothills" },
];

const FAQ = [
  {
    q: "How much does a new AC cost in Tucson?",
    a: "Most Tucson homes land between $6,500 and $11,000 installed, and the full range runs from about $4,800 for a small standard-efficiency system up to around $14,000 for a large high-efficiency heat pump. Those are installed prices including the permit and haul-away, before any current promotion. What moves the number is system size, efficiency tier, and whether your ductwork and electrical panel need work. The table on this page breaks it out by home size so you can find yours rather than averaging everyone else's house with your own.",
  },
  {
    q: "How long does an AC last in Arizona?",
    a: "Plan on 12 to 15 years here, against a national average closer to 15 to 20. The difference is run hours. A Tucson system runs most of the day for five or six months a year, and that is simply more wear than the same unit sees in a milder climate. Annual maintenance reliably adds years to that, and a system that has never been serviced usually comes in at the short end.",
  },
  {
    q: "Is it worth repairing a 15-year-old AC?",
    a: "Usually not, if the repair is a significant one. At 15 years a Tucson system is at or past the end of its expected life, so a $2,500 compressor buys you an unknown amount of time on a unit whose other parts are the same age. The rule we use: if the repair costs more than about a third of replacement, and the system is over 12, replacement is almost always the better spend. Small repairs on a system that is otherwise running fine are a different story, and we will say so.",
  },
  {
    q: "What size AC do I need?",
    a: "Square footage gets you in the neighborhood and no further. Proper sizing is a load calculation that accounts for insulation, window area and orientation, ceiling height, duct condition and how shaded the house is. It matters because an oversized system short-cycles, never runs long enough to pull humidity out, and wears out early, while an undersized one never catches up in July. We do the calculation as part of the free in-home estimate rather than guessing from the old unit's label, since the old unit may have been the wrong size too.",
  },
  {
    q: "Does a new AC lower my TEP bill?",
    a: "Yes, and the size of the drop depends on what you are replacing. Moving from an older 10 SEER system to a modern high-efficiency unit can cut cooling energy use meaningfully, because efficiency ratings are roughly a measure of cooling delivered per unit of electricity. A variable-speed system adds to that by running long and low instead of slamming on and off. During the free energy audit we look at your actual usage and tell you what to realistically expect rather than quoting a brochure figure.",
  },
  {
    q: "How long does installation take?",
    a: "A straightforward changeout is a single day, usually in and running by late afternoon. Add a day when there is significant ductwork, an electrical panel upgrade or a roof unit needing a crane on a tight schedule. You get the actual timeline at the estimate, with the arrival window confirmed in advance, and we do not leave a house without cooling overnight if there is any way around it.",
  },
];

export default function NewAcUnitCostTucsonLp() {
  return (
    <>
      <LpStickyCall />

      {/* Hero */}
      <section className="px-4 py-6 sm:py-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-[#C8101F]">Tucson AC replacement pricing</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
            What a New AC Really Costs in Tucson (2026 Prices, Nothing Hidden)
          </h1>

          {/* Offer banner */}
          <div className="mx-auto mt-4 max-w-xl rounded-xl border-2 border-[#C8101F] bg-[#C8101F]/5 p-5">
            <Tag className="mx-auto h-7 w-7 text-[#C8101F]" />
            <p className="mt-1.5 text-[20px] font-extrabold leading-tight text-primary sm:text-[22px]">
              Inventory Cleanout Special: up to $5,000 off
            </p>
            <p className="mt-1.5 text-[15px] font-semibold text-muted-foreground">
              No payments until 2028 &middot; 0% financing &middot; Free in-home replacement estimate
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
            Free in-home replacement estimate &middot; Free energy audit &middot; 42 trucks across Tucson
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {TRUST}
          </p>
        </div>
      </section>

      {/* The number, immediately */}
      <section className="border-t border-border px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">2026 installed prices by system size</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">
            Installed, including the permit and haul-away. These are list prices before the Inventory Cleanout Special, so what you actually pay is lower.
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[640px] border-collapse bg-card text-left">
              <thead>
                <tr className="bg-[#0d1b3e] text-white">
                  <th className="px-4 py-3 text-[15px] font-bold">System size</th>
                  <th className="px-4 py-3 text-[15px] font-bold">Standard efficiency<br /><span className="font-semibold text-white/75">14-15 SEER2, single-stage</span></th>
                  <th className="px-4 py-3 text-[15px] font-bold">High efficiency<br /><span className="font-semibold text-white/75">17+ SEER2, two-stage or variable</span></th>
                  <th className="px-4 py-3 text-[15px] font-bold">Heat pump<br /><span className="font-semibold text-white/75">High efficiency</span></th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-muted/30" : ""}>
                    <td className="border-t border-border px-4 py-3 text-[16px]">
                      <span className="font-bold text-foreground">{r.size}</span>
                      <br />
                      <span className="text-[14px] text-muted-foreground">{r.home}</span>
                    </td>
                    <td className="border-t border-border px-4 py-3 text-[16px] font-semibold text-foreground">{r.std}</td>
                    <td className="border-t border-border px-4 py-3 text-[16px] font-semibold text-foreground">{r.high}</td>
                    <td className="border-t border-border px-4 py-3 text-[16px] font-semibold text-foreground">{r.hp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
            Most Tucson homes land between $6,500 and $11,000 installed. Ductwork repairs ($300 to $800), major duct changes ($1,500 to $4,000) or an electrical panel upgrade ($1,500 to $3,000) are the usual reasons a quote runs higher.
          </p>

          <div className="mt-6 rounded-xl bg-[#0d1b3e] p-6 text-center text-white">
            <p className="text-xl font-bold">Want your actual number, not a range?</p>
            <p className="mt-1 text-white/85">Free in-home replacement estimate, including the load calculation. No obligation.</p>
            <a href={`tel:${PHONE.tel}`} className="mx-auto mt-4 flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-xl font-extrabold text-white shadow-lg hover:brightness-110">
              <Phone className="h-6 w-6" /> Call {PHONE.display}
            </a>
          </div>
        </div>
      </section>

      {/* What is and is not included */}
      <section className="bg-muted/30 px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">What the price includes, and what it does not</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">
            Quotes are only comparable when they cover the same work. Here is exactly what is inside our number.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-[#C8101F] bg-card p-5">
              <h3 className="text-[18px] font-bold text-foreground">Included in the price above</h3>
              <ul className="mt-3 space-y-2.5">
                {INCLUDED.map((x, i) => (
                  <li key={i} className="flex gap-2 text-[16px] leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-[18px] font-bold text-foreground">Priced separately when your home needs it</h3>
              <div className="mt-3 space-y-4">
                {NOT_INCLUDED.map((x, i) => (
                  <div key={i}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[16px] font-bold text-foreground">
                        <X className="h-5 w-5 shrink-0 text-[#C8101F]" />{x.title}
                      </span>
                      <span className="rounded-full bg-muted px-3 py-1 text-[13px] font-bold text-muted-foreground">{x.cost}</span>
                    </div>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{x.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="h-6 w-6 text-[#C8101F]" />
              <h3 className="text-[19px] font-bold text-foreground">If a quote comes in well under these numbers, ask what was left out</h3>
            </div>
            <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">
              A number far below this table is usually not a better deal, it is a different scope. The things most often missing are the permit and inspection, the crane on a roof unit, a new pad or curb, the thermostat, duct sealing at the plenum, and haul-away of the old equipment. Sometimes it is the equipment itself: a builder-grade unit or a mismatched indoor and outdoor pairing that never hits its rated efficiency. Ask any contractor to put those eight lines in writing and the quotes become comparable in about a minute.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
              We would rather you did that with every quote you get, including ours. A second opinion costs you nothing and it is the single best protection against paying for a system you did not need or a scope you did not understand.
            </p>
          </div>
        </div>
      </section>

      {/* Repair or replace */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-[#C8101F]" />
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Repair or replace: the honest rule of thumb</h2>
          </div>
          <p className="mt-2 text-[17px] text-muted-foreground">
            Not everyone reading a price table needs a new system. Here is how we decide, and we will tell you when the answer is repair.
          </p>
          <div className="mt-6 space-y-4">
            {REPLACE_SIGNS.map((r, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-[18px] font-bold text-foreground">{r.sign}</h3>
                  <span className={`rounded-full px-3 py-1 text-[13px] font-bold ${r.verdict === "Repair it" ? "bg-green-100 text-green-800" : "bg-muted text-muted-foreground"}`}>{r.verdict}</span>
                </div>
                <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-border bg-card p-5">
            <p className="text-[16px] font-bold text-foreground">Not sure which camp you are in? Start with the symptom.</p>
            <ul className="mt-3 space-y-2 text-[16px]">
              <li><a className="font-semibold text-primary underline" href="/lp/ac-not-cooling">AC running but not cooling</a></li>
              <li><a className="font-semibold text-primary underline" href="/lp/ac-blowing-hot-air">AC blowing hot air</a></li>
              <li><a className="font-semibold text-primary underline" href="/lp/ac-not-turning-on">AC will not turn on</a></li>
              <li><a className="font-semibold text-primary underline" href="/lp/ac-fan-not-spinning">Outside fan not spinning</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="bg-muted/30 px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">Why replacing in the fall beats replacing in July</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">
            Right now you are shopping. In July you would be deciding in a hot house with whoever can get there. Those are very different negotiating positions, and the offer below only exists in the off season.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { t: "Inventory Cleanout Special: up to $5,000 off", d: "We clear out current stock ahead of next season. It comes off the list prices in the table above." },
              { t: "No payments until 2028", d: "The system goes in now and the payments start well after the summer it protects you through." },
              { t: "0% financing", d: "Nothing added on top of the price. The monthly payment is the price divided across the term." },
              { t: "Free in-home replacement estimate", d: "Including a real load calculation, not a guess from the old unit's label. No obligation and no charge." },
              { t: "Free energy audit", d: "We look at your actual usage and where the house is losing conditioned air, so the efficiency number means something." },
              { t: "Scheduling you can actually pick", d: "In the fall you choose the install date. In July you take what is available." },
            ].map((x, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <div>
                    <p className="text-[17px] font-bold text-foreground">{x.t}</p>
                    <p className="mt-1 text-[16px] leading-relaxed text-muted-foreground">{x.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2">
            <CreditCard className="h-6 w-6 text-[#C8101F]" />
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Financing: no payments until 2028, 0% interest</h2>
          </div>
          <p className="mt-2 text-[17px] text-muted-foreground">
            Three steps, and you find out the monthly number before you commit to anything.
          </p>
          <div className="mt-6 space-y-4">
            {FINANCING_STEPS.map((s, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-[18px] font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Financing is subject to approved credit. We will go through the terms with you in plain language before anything is signed.
          </p>
        </div>
      </section>

      <LpProof reviews={REVIEWS} />

      {/* CTA with form */}
      <section className="bg-[#0d1b3e] px-4 py-10 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold">Free In-Home Replacement Estimate</h2>
          <p className="mt-2 text-lg text-white/85">
            Real load calculation, your actual price, and the cleanout discount applied. No obligation.
          </p>
          <div className="mt-5 flex flex-col items-center gap-3">
            <a href={`tel:${PHONE.tel}`} className="flex min-h-[56px] w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-xl font-extrabold text-white shadow-lg hover:brightness-110">
              <Phone className="h-6 w-6" /> Call {PHONE.display}
            </a>
            <div className="w-full max-w-sm">
              <SchedulerEmbed triggerText="Or schedule online" fullWidth size="lg" data-testid="lp-schedule" className="w-full min-h-[52px] rounded-lg !bg-white !px-4 py-3 text-[16px] font-extrabold !text-[#0d1b3e] hover:!bg-gray-100" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-xl">
          <HVACInventoryForm />
        </div>
      </section>

      <LpServiceArea />
      <LpFaq items={FAQ} heading="New AC cost in Tucson - common questions" />

      <section className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-primary">Related AC services</h2>
          <ul className="mt-3 space-y-2 text-[16px]">
            <li><a className="font-semibold text-primary underline" href="/services/ac-installation-tucson">AC installation in Tucson</a> - full service details, brands and process</li>
            <li><a className="font-semibold text-primary underline" href="/proper-ac-sizing">Proper AC sizing</a> - why square footage alone is guessing</li>
            <li><a className="font-semibold text-primary underline" href="/ac-sizing-estimator">AC sizing estimator</a> - get in the right range before the estimate</li>
            <li><a className="font-semibold text-primary underline" href="/services/ac-repair-tucson">AC repair in Tucson</a> - if a repair is still the right call</li>
            <li><a className="font-semibold text-primary underline" href="/financing">Financing options</a> - terms and how approval works</li>
          </ul>
        </div>
      </section>
    </>
  );
}
