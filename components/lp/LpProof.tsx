import { Star } from "lucide-react";

export default function LpProof({ reviews }: { reviews: { q: string; n: string; a: string }[] }) {
  return (
    <section className="bg-muted/30 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-4 sm:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="rounded-xl border border-border bg-card p-4">
              <div className="mb-2 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <blockquote className="text-[15px] text-foreground" dangerouslySetInnerHTML={{ __html: `&ldquo;${r.q}&rdquo;` }} />
              <figcaption className="mt-2 text-[14px] font-semibold text-muted-foreground">{r.n} &middot; {r.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
