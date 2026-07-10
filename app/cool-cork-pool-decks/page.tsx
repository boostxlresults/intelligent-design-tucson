import type { Metadata } from "next";
import VisualizerLauncher from "@/components/cork/VisualizerLauncher";

export const metadata: Metadata = {
  title: "Cool Cork Pool Decks Tucson | Walk Barefoot at 109° | Intelligent Design",
  description:
    "Stop burning your feet on scorching concrete. Sprayed cork pool decks stay barefoot-cool in Tucson summer, erase cracks permanently, and grip when wet. Visualize your deck and get an instant price range.",
  alternates: { canonical: "https://idesignac.com/cool-cork-pool-decks" },
  openGraph: {
    title: "Cool Cork Pool Decks — Barefoot at 109°F",
    description: "See your own pool deck resurfaced in premium sprayed cork, cracks erased — with an instant price range.",
    url: "https://idesignac.com/cool-cork-pool-decks",
    type: "website",
  },
};

const FAQS = [
  {
    q: "How much cooler is a cork deck than concrete?",
    a: "Cork is a natural insulator — the same material used in spacecraft heat shields. While bare concrete and pavers in Tucson can exceed 150°F and burn skin in seconds, a sprayed cork surface stays dramatically cooler and comfortable for bare feet even on 109°F days.",
  },
  {
    q: "Does cork really cover cracks in my existing deck?",
    a: "Yes. Sprayed cork bonds over your existing concrete or cool deck and bridges cracks, creating one seamless, flexible surface. Because it flexes with temperature swings, it resists re-cracking far better than rigid coatings.",
  },
  {
    q: "Is it slippery when wet?",
    a: "The opposite — the granular cork texture provides excellent wet traction, which is why it's used around pools, splash pads, and spas.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential pool decks are completed in 2–3 days, including prep and cure. No demolition, no jackhammers, no weeks of construction mess.",
  },
  {
    q: "Who installs it?",
    a: "Intelligent Design is Tucson's only certified ThermalCork Solutions applicator — the highest-grade sprayed cork system available.",
  },
  {
    q: "How accurate is the online price range?",
    a: "The visualizer measures your deck from a photo and gives an honest range. Your free in-person deck inspection turns that range into an exact, locked quote.",
  },
];

export default function CorkPoolDecksPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cork Pool Deck Resurfacing",
    provider: { "@type": "HomeAndConstructionBusiness", name: "Intelligent Design Air Conditioning, Plumbing, Solar & Electric", areaServed: "Tucson, AZ" },
    description: "Premium ThermalCork sprayed cork pool deck resurfacing — cool underfoot, crack-free, slip-resistant.",
  };

  return (
    <main className="bg-white text-neutral-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 lg:pt-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block rounded-full bg-[#A64A2E]/10 px-4 py-1 text-sm font-semibold text-[#A64A2E]">Tucson's only certified ThermalCork applicator</p>
            <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              It was <span className="text-[#A64A2E]">109° outside</span> when this photo was taken.
            </h1>
            <p className="mt-5 text-lg text-neutral-600">
              He's lying on the pool deck. Barefoot. In July. In Tucson. That's a sprayed cork deck — and until you've felt one, you won't believe a pool deck can do that.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              <li className="flex gap-3"><span aria-hidden>🔥</span><span><strong>Stop burning feet.</strong> Concrete hits 150°F+ in summer. Cork stays barefoot-comfortable.</span></li>
              <li className="flex gap-3"><span aria-hidden>🪨</span><span><strong>Stop staring at cracks.</strong> Cork bridges and erases them — one seamless surface, permanently.</span></li>
              <li className="flex gap-3"><span aria-hidden>💦</span><span><strong>Stop the slips.</strong> Granular texture grips even soaking wet.</span></li>
            </ul>
            <div className="mt-8">
              <VisualizerLauncher variant="hero" />
            </div>
            <p className="mt-3 text-sm text-neutral-500">Snap one photo of your deck → see it corked in your color → instant price range. About 2 minutes.</p>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] max-h-[560px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#A64A2E]/20 to-[#A64A2E]/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/cork/hero-cork-deck.jpg" alt="Boy lying comfortably barefoot on a terracotta cork pool deck on a 109 degree Tucson day" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 left-6 rounded-2xl bg-white shadow-xl px-5 py-3 border border-neutral-100">
              <div className="text-xs uppercase tracking-wide text-neutral-500">Outside temp when taken</div>
              <div className="text-2xl font-extrabold text-[#A64A2E]">109°F</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CORK */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">Why Tucson pool decks fail — and why cork doesn't</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-neutral-100">
              <h3 className="font-bold text-lg">The heat problem</h3>
              <p className="mt-2 text-neutral-600">Concrete, pavers, even "cool deck" absorb and radiate desert heat. Cork is a natural thermal insulator — the same reason it protects spacecraft on re-entry. Your deck stops being a stovetop.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-neutral-100">
              <h3 className="font-bold text-lg">The cracking problem</h3>
              <p className="mt-2 text-neutral-600">Tucson's temperature swings crack rigid surfaces — and rigid coatings crack right along with them. Sprayed cork flexes. It bridges existing cracks and keeps them from telegraphing back through.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-neutral-100">
              <h3 className="font-bold text-lg">The safety problem</h3>
              <p className="mt-2 text-neutral-600">Wet smooth concrete sends people to urgent care. Cork's granular surface grips wet feet, which is exactly what you want three steps from a pool.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">See your deck corked — before you spend a dollar</h2>
          <p className="mt-2 text-neutral-600 max-w-2xl">Our visualizer measures your deck from one photo, shows it resurfaced in any of 12 ThermalCork colors (cracks gone), and gives you an honest price range on the spot.</p>
          <div className="mt-8 grid sm:grid-cols-4 gap-4 text-sm">
            {[
              ["1", "Snap a photo", "Phone camera or upload — any angle that shows your deck."],
              ["2", "AI measures it", "Square footage estimated automatically. Exclude areas with a finger swipe."],
              ["3", "Pick your color", "Photoreal renders of YOUR deck in every ThermalCork color."],
              ["4", "Get your range", "Instant price range + emailed report. Free inspection locks the exact number."],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-neutral-200 p-5">
                <div className="h-8 w-8 rounded-full bg-[#A64A2E] text-white flex items-center justify-center font-bold">{n}</div>
                <div className="mt-3 font-semibold">{t}</div>
                <p className="mt-1 text-neutral-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold">Cork pool deck questions, answered</h2>
          <div className="mt-8 divide-y divide-neutral-200">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none font-semibold flex justify-between items-center">
                  {f.q}
                  <span className="text-[#A64A2E] group-open:rotate-45 transition text-xl" aria-hidden>+</span>
                </summary>
                <p className="mt-2 text-neutral-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold">Your deck. Your color. Your price. Two minutes.</h2>
          <p className="mt-3 text-neutral-600">One Tucson summer from now, your deck is either still burning feet and growing cracks — or it's the coolest surface in the backyard.</p>
          <div className="mt-8">
            <VisualizerLauncher variant="footer" />
          </div>
        </div>
      </section>
    </main>
  );
}
