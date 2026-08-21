export type FaqItem = { q: string; a: string };

export default function LpFaq({ items, heading = "Questions homeowners ask" }: { items: FaqItem[]; heading?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a.replace(/<[^>]+>/g, "") },
    })),
  };
  return (
    <section className="border-t border-border px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">{heading}</h2>
        <div className="mt-5 space-y-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-[18px] font-bold text-foreground">{it.q}</h3>
              <p className="mt-1.5 text-[16px] leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: it.a }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
