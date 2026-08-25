import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Star, ShieldCheck, BadgeCheck, Clock, Check } from "lucide-react";
import DrainForm from "@/components/drain/DrainForm";
import DrainStickyBar from "@/components/drain/DrainStickyBar";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";

const PRICE = "$48.88";
const ADD_PRICE = "$28.88";
const PHONE = "5203486684";
const PHONE_DISPLAY = "(520) 348-6684";
const CANONICAL = "https://www.idesignac.com/drain-clearing-4888";

export const metadata: Metadata = {
  title: `Drain Clearing Special — ${PRICE} | Intelligent Design (Tucson)`,
  description:
    `Limited-time ${PRICE} drain clearing special for Tucson homeowners. Single drain, ground-level cleanout, up to 75 ft. Book online in under a minute.`,
  robots: "noindex, nofollow, noarchive",
  alternates: { canonical: CANONICAL },
};

const STEPS = [
  { title: "Diagnose the blockage", desc: "Your tech locates the clog and tells you the cause before any work starts. No surprises." },
  { title: "Access the cleanout", desc: "We work from a ground-level cleanout — required for this offer. If yours isn’t accessible, we’ll let you know right away." },
  { title: "Clear the drain", desc: "We machine-snake or hydro-jet the blockage up to 75 feet. Most clogs are gone in one pass." },
  { title: "Test the flow", desc: "We run water to confirm the drain is fully clear before we pack up." },
  { title: "Tell you what we found", desc: "We explain the cause and flag anything worth watching — no pressure, just the facts." },
];

function Booking() {
  return (
    <section id="book" className="bg-muted/40 py-10">
      <div className="mx-auto max-w-xl px-4">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-lg sm:p-6">
          <h2 className="text-2xl font-extrabold text-primary">Book your {PRICE} drain clearing</h2>
          <p className="mt-1 text-[17px] text-muted-foreground">Takes under a minute. No payment now.</p>
          <div className="mt-4">
            <DrainForm />
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
            By submitting, you authorize Intelligent Design to contact you by phone, text, and email about your
            request, including by automated means. Consent is not a condition of purchase. Message and data rates
            may apply.
          </p>
          <p className="mt-3 border-t border-border pt-3 text-[13px] leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Offer terms:</strong> The {PRICE} price covers one drain clearing
            on one drain in a single-family residence. Additional drains are{" "}
            <span className="font-semibold text-foreground">{ADD_PRICE}</span> each. Must be the homeowner.
            Up to 75 ft. Must be a ground-level cleanout. Residential only; not valid on commercial properties.
            Cannot be combined with other offers. Offer expires{" "}
            <span className="font-semibold text-foreground">September 15, 2026</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function DrainClearing4888Page() {
  return (
    <>
      <DrainStickyBar />

      {/* Hero */}
      <section className="bg-[#0d1b3e] px-4 py-9 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[15px] font-bold uppercase tracking-wide text-white/80">
            Limited time &middot; Tucson and surrounding areas
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">
            Drain Clearing Special &mdash; <span className="text-[#ff5a5f]">{PRICE}</span>
          </h1>
          <p className="mt-3 text-xl font-bold text-white">Cleared fast. Priced honestly. No surprise fees.</p>
          <p className="mt-3 text-[17px] text-white/85">
            Slow drains and clogs get worse over time. Our plumbers clear the blockage up to 75 ft from a
            ground-level cleanout &mdash; and tell you exactly what caused it before they leave.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="w-full max-w-sm">
              <SchedulerEmbed
                triggerText={`Book Your ${PRICE} Drain Clearing Special Online`}
                fullWidth
                size="lg"
                data-testid="hero-book"
                className="w-full min-h-[52px] rounded-lg !bg-[#C8101F] !whitespace-normal !px-4 py-3 text-center text-[16px] leading-tight font-extrabold !text-white shadow-lg hover:!bg-[#a50d19] sm:text-[18px]"
              />
            </div>
            <a
              href={`tel:${PHONE}`}
              className="mx-auto flex w-full max-w-sm min-h-[52px] items-center justify-center gap-2 rounded-lg bg-[#FFD100] px-6 py-4 text-[19px] font-extrabold text-[#1A1A1A] shadow-md hover:brightness-105"
            >
              <Phone className="h-5 w-5" /> Click or Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-card px-4 py-4">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-[15px] font-semibold text-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" /> 4.97 &middot; 23,000+ reviews
          </span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-5 w-5 text-primary" /> In business since 1979</span>
          <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-5 w-5 text-primary" /> AZ ROC 340962</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-5 w-5 text-primary" /> Licensed plumbers</span>
        </div>
      </section>

      {/* Booking form */}
      <Booking />

      {/* What we do */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">What happens during your visit</h2>
          <p className="mt-2 text-[17px] text-muted-foreground">
            A drain clearing visit isn&rsquo;t a mystery. Here&rsquo;s exactly what your {PRICE} gets you.
          </p>
          <div className="mt-6 space-y-4">
            {STEPS.map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[13px] font-extrabold text-white">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-[16px] text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent pricing */}
      <section className="bg-muted/40 px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">No surprise charges</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            The {PRICE} covers one drain, cleared. If we get there and find the situation needs something beyond
            a standard clearing &mdash; a camera inspection, hydro-jetting, or a repair &mdash; we&rsquo;ll tell you
            what we found, quote it in writing, and wait for your go-ahead before doing anything extra.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
            Our plumbers are not paid on commission. They don&rsquo;t have a reason to oversell you. If the drain
            needs a basic clearing, that&rsquo;s what we do.
          </p>
          <ul className="mt-5 space-y-2">
            {[
              `${PRICE} for one drain (up to 75 ft, ground-level cleanout)`,
              `${ADD_PRICE} for each additional drain`,
              "Repairs quoted separately — no work without your approval",
              "No overtime charges on standard calls",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[16px] text-foreground">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Social proof */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">What Tucson neighbors say</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { q: "Kitchen drain was completely backed up. They came out fast, cleared it, and showed me what caused it. Honest pricing, no upsell.", n: "Karen M.", a: "Marana" },
              { q: "Called in the morning, had a tech here by afternoon. Cleared the bathroom drain in under an hour. Exactly what they quoted.", n: "Robert T.", a: "Oro Valley" },
              { q: "The tech explained everything before starting. No pressure to buy anything extra. Drain has been flowing perfectly since.", n: "Linda S.", a: "Catalina Foothills" },
            ].map((r, i) => (
              <figure key={i} className="rounded-xl border border-border bg-card p-4">
                <div className="mb-2 flex gap-0.5">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
                <blockquote className="text-[15px] text-foreground">&ldquo;{r.q}&rdquo;</blockquote>
                <figcaption className="mt-2 text-[14px] font-semibold text-muted-foreground">{r.n} &middot; {r.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-muted/40 px-4 py-6">
        <p className="mx-auto max-w-3xl text-center text-[17px] text-foreground">
          <strong>Serving Tucson and surrounding areas including Marana, Oro Valley, Catalina Foothills, Sahuarita, Vail, and SaddleBrooke.</strong>
        </p>
      </section>

      {/* FAQ */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">Quick questions</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: `Is ${PRICE} the total price?`, a: `Yes — for one drain, cleared, up to 75 ft from a ground-level cleanout. If we find anything that needs additional work, we quote it before doing anything. No surprises.` },
              { q: "What counts as a ground-level cleanout?", a: "A ground-level cleanout is a capped pipe, usually 3–4 inches in diameter, at or near floor level — often in a garage, laundry room, or outside near the foundation. If you’re not sure whether yours qualifies, our tech will confirm on arrival." },
              { q: "What if the blockage is farther than 75 ft?", a: "We’ll tell you right away and give you options — extended snaking, camera inspection to locate the blockage, or hydro-jetting. You decide what to do next; there’s no pressure." },
              { q: "Do I have to be the homeowner?", a: "Yes — this offer is for homeowners only, not renters or commercial properties." },
              { q: "How long does the visit take?", a: "Most standard drain clearings take 30 to 60 minutes. We’ll give you a better estimate once we’ve assessed the situation." },
              { q: "What if you can’t clear the drain?", a: "If we can’t clear it with standard snaking, we’ll tell you why and what the next step would cost before you spend another dollar. You’re never on the hook for work you didn’t approve." },
            ].map((f, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-[18px] font-bold text-foreground">{f.q}</h3>
                <p className="mt-1.5 text-[16px] leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#0d1b3e] px-4 py-10 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold">
            Drain Clearing Special &mdash; <span className="text-[#ff5a5f]">{PRICE}</span>
          </h2>
          <p className="mt-2 text-xl font-bold">Cleared fast. Priced honestly. No surprise fees.</p>
          <div className="mt-5 flex flex-col items-center gap-3">
            <div className="w-full max-w-sm">
              <SchedulerEmbed
                triggerText={`Book Your ${PRICE} Drain Clearing Special Online`}
                fullWidth
                size="lg"
                data-testid="closing-book"
                className="w-full min-h-[52px] rounded-lg !bg-[#C8101F] !whitespace-normal !px-4 py-3 text-center text-[16px] leading-tight font-extrabold !text-white shadow-lg hover:!bg-[#a50d19] sm:text-[18px]"
              />
            </div>
            <a
              href={`tel:${PHONE}`}
              className="mx-auto flex w-full max-w-sm min-h-[52px] items-center justify-center gap-2 rounded-lg bg-[#FFD100] px-6 py-4 text-[19px] font-extrabold text-[#1A1A1A] shadow-md hover:brightness-105"
            >
              <Phone className="h-5 w-5" /> Click or Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Reduced footer */}
      <footer className="border-t border-border bg-card px-4 py-8">
        <div className="mx-auto max-w-3xl text-center">
          <Link href="/" className="inline-block">
            <Image src="/logo.png" alt="Intelligent Design Air Conditioning, Plumbing, Solar & Electric" width={220} height={44} className="mx-auto h-11 w-auto" />
          </Link>
          <p className="mt-3 text-[16px]">
            <a href={`tel:${PHONE}`} className="font-extrabold text-primary">{PHONE_DISPLAY}</a>
          </p>
          <p className="mt-2 text-[14px] text-muted-foreground">
            Serving Tucson, Marana, Oro Valley, Catalina Foothills, Sahuarita, Vail &amp; SaddleBrooke.
          </p>
          <p className="mt-2 text-[13px] text-muted-foreground">
            Licensed, Bonded &amp; Insured &middot; AZ ROC 340962, ROC 322375, ROC 296386, ROC 276673
          </p>
          <p className="mt-3 text-[13px] text-muted-foreground">
            Price is for a single drain in the home. Must be the homeowner. Up to 75 ft. Must be a ground level cleanout.
          </p>
          <p className="mt-3 text-[14px]">
            <a href="/privacy" className="text-muted-foreground underline">Privacy Policy</a>
            <span className="mx-2 text-muted-foreground">&middot;</span>
            <a href="/terms" className="text-muted-foreground underline">Terms of Service</a>
          </p>
        </div>
      </footer>
    </>
  );
}
