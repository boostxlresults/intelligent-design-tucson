"use client";

import { useState } from "react";
import { estimateSizing, SHOW_PRICE, type SizingInputs } from "@/lib/sizing/estimate";
import { SchedulerCluster } from "@/components/SchedulerCluster";
import { hasClickId } from "@/lib/attribution";
import { CheckCircle2, Ruler, AlertTriangle, Phone } from "lucide-react";

const FIELD =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary";

export default function SizingEstimator() {
  const [inputs, setInputs] = useState<SizingInputs>({
    sqft: 1800,
    insulation: "average",
    stories: 1,
    ceiling: "standard",
    sun: "average",
    windows: "average",
    occupants: 3,
  });
  const [result, setResult] = useState<ReturnType<typeof estimateSizing> | null>(null);

  const set = <K extends keyof SizingInputs>(k: K, v: SizingInputs[K]) =>
    setInputs((p) => ({ ...p, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = estimateSizing(inputs);
    setResult(r);
    try {
      (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
        event: "sizing_estimate",
        est_low_tons: r.lowTons,
        est_high_tons: r.highTons,
        gclid_present: hasClickId(),
      });
    } catch { /* noop */ }
    setTimeout(() => document.getElementById("sizing-result")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={onSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <Ruler className="w-5 h-5 text-primary" />
          <h2 className="text-xl md:text-2xl font-bold">Get Your Preliminary Sizing Range</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          We ask for the same factors a real Manual&nbsp;J load calculation weighs — not just square footage —
          so your ballpark is honest. It takes about 30&nbsp;seconds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Conditioned square footage</label>
            <input type="number" min={400} max={8000} required className={FIELD}
              value={inputs.sqft}
              onChange={(e) => set("sqft", Number(e.target.value))} />
            <p className="text-xs text-muted-foreground mt-1">The living area you cool — not the garage.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Home age / insulation</label>
            <select className={FIELD} value={inputs.insulation}
              onChange={(e) => set("insulation", e.target.value as SizingInputs["insulation"])}>
              <option value="poor">Older / drafty (pre-1990, leaky)</option>
              <option value="average">Average (1990–2010)</option>
              <option value="good">Newer / tight & well-insulated</option>
            </select>
            <p className="text-xs text-muted-foreground mt-1">Envelope tightness drives a huge share of the load.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Stories</label>
            <select className={FIELD} value={inputs.stories}
              onChange={(e) => set("stories", Number(e.target.value) as SizingInputs["stories"])}>
              <option value={1}>Single story</option>
              <option value={2}>Two story</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Ceiling height</label>
            <select className={FIELD} value={inputs.ceiling}
              onChange={(e) => set("ceiling", e.target.value as SizingInputs["ceiling"])}>
              <option value="standard">Standard (~8 ft)</option>
              <option value="high">High / vaulted</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Sun exposure</label>
            <select className={FIELD} value={inputs.sun}
              onChange={(e) => set("sun", e.target.value as SizingInputs["sun"])}>
              <option value="low">Mostly shaded</option>
              <option value="average">Average</option>
              <option value="high">Lots of west/south sun, little shade</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Windows</label>
            <select className={FIELD} value={inputs.windows}
              onChange={(e) => set("windows", e.target.value as SizingInputs["windows"])}>
              <option value="single">Older single-pane</option>
              <option value="average">Average dual-pane</option>
              <option value="efficient">Newer high-efficiency / Low-E</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">People in the home</label>
            <input type="number" min={1} max={12} className={FIELD}
              value={inputs.occupants}
              onChange={(e) => set("occupants", Number(e.target.value))} />
          </div>
        </div>

        <button type="submit"
          className="mt-6 w-full md:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover-elevate active-elevate-2">
          Show my sizing range
        </button>
      </form>

      {result && (
        <div id="sizing-result" className="mt-8 bg-card border-2 border-primary/40 rounded-xl p-6 md:p-8 shadow-sm">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Your preliminary range</p>
          <p className="text-4xl md:text-5xl font-extrabold mt-1">
            {result.lowTons} to {result.highTons} tons
          </p>
          {SHOW_PRICE && result.priceLow && result.priceHigh && (
            <p className="text-lg font-semibold mt-2">
              Estimated investment: ${result.priceLow.toLocaleString()}–${result.priceHigh.toLocaleString()}
            </p>
          )}

          <div className="mt-5 flex items-start gap-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900">
              <strong>This is a ballpark, not a quote.</strong> Anyone who sizes your system from square footage alone
              is guessing — and guessing wrong is expensive. Your exact size can only be confirmed in your home with an
              ACCA <strong>Manual&nbsp;J load calculation</strong>, a <strong>blower-door test</strong>, and a{" "}
              <strong>thermal-imaging scan</strong> — the method the U.S. Department of Energy and ACCA recommend for
              every job. An oversized unit short-cycles, never dehumidifies, and drives up your bills.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Get it sized exactly — free in-home assessment</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              We come out, run the three tests, and give you the correctly sized system for your home — no guesswork.
            </p>
            <SchedulerCluster position="middle" className="!my-0" />
            <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Prefer to talk? Call <span className="font-semibold">(520) 333-2665</span>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
