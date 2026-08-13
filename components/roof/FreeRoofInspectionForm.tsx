"use client";

import { useRef, useState } from "react";
import { attributionFields, getAttribution } from "@/lib/attribution";
import { trackFormSubmit } from "@/lib/analytics";

/** Fire a Meta pixel event if fbq is present (no-op otherwise). */
function fbq(...args: unknown[]) {
  try { (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.(...args); } catch { /* noop */ }
}
function dl(payload: Record<string, unknown>) {
  try { (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push(payload); } catch { /* noop */ }
}

const SEEING = [
  "Wet ceiling / stain",
  "Missing or broken tiles",
  "Water in garage",
  "Not sure",
  "Other",
];

export default function FreeRoofInspectionForm() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", seeing: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const started = useRef(false);
  const submissionId = useRef<string>("");
  if (!submissionId.current) {
    submissionId.current = (typeof crypto !== "undefined" && crypto.randomUUID)
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onFirstFocus = () => {
    if (started.current) return;
    started.current = true;
    dl({ event: "form_start", form_name: "free_roof_inspection" });
    fbq("trackCustom", "FormStart", { form: "free_roof_inspection" });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.phone.replace(/\D/g, "").length < 10 || !form.address.trim()) return;
    setStatus("sending");
    try {
      const _attr = getAttribution();
      const _landingPage = _attr.landing || (typeof window !== "undefined" ? window.location.pathname : "");
      const res = await fetch("/api/free-roof-inspection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, pageSlug: "free-roof-inspection", submissionId: submissionId.current, landingPage: _landingPage, ...attributionFields() }),
      });
      if (!res.ok) throw new Error("failed");
      // Conversions: GA4 (form_submit via helper -> also fires Vibe lead) + generate_lead, Meta Lead
      trackFormSubmit("free_roof_inspection", "roofing");
      dl({ event: "generate_lead", lead_type: "storm_roof_inspection", seeing: form.seeing || "unknown" });
      fbq("track", "Lead", { content_name: "Free Roof Inspection", content_category: "roofing" });
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="rounded-xl border-2 border-green-300 bg-green-50 p-6 text-center">
        <div className="text-3xl">&#9989;</div>
        <p className="mt-2 text-lg font-bold text-green-800">You&apos;re on the list for a same-day slot.</p>
        <p className="mt-1 text-sm text-green-700">Our team will call you shortly. Need it now?{" "}
          <a className="font-bold underline" href="tel:5203332665">Call (520)&nbsp;333-2665</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-3 rounded-xl border border-border bg-card p-4 shadow-lg sm:p-5" data-testid="free-roof-inspection-form">
      <input required value={form.name} onFocus={onFirstFocus} onChange={(e) => set("name", e.target.value)} placeholder="Your name" autoComplete="name" className="rounded-lg border border-border px-4 py-3 text-base" />
      <input required type="tel" value={form.phone} onFocus={onFirstFocus} onChange={(e) => set("phone", e.target.value)} placeholder="Phone number" autoComplete="tel" inputMode="tel" className="rounded-lg border border-border px-4 py-3 text-base" />
      <input required value={form.address} onFocus={onFirstFocus} onChange={(e) => set("address", e.target.value)} placeholder="Property address" autoComplete="street-address" className="rounded-lg border border-border px-4 py-3 text-base" />
      <select required value={form.seeing} onFocus={onFirstFocus} onChange={(e) => set("seeing", e.target.value)} className="rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground">
        <option value="" disabled>What are you seeing?</option>
        {SEEING.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      {status === "error" && <p className="text-sm text-red-600">Something went wrong &mdash; please call (520)&nbsp;333-2665.</p>}
      <button type="submit" disabled={status === "sending"} className="mt-1 rounded-lg bg-[#e8a020] px-6 py-4 text-lg font-extrabold text-[#0d2d7a] shadow-md transition hover:bg-[#f5b731] disabled:opacity-50">
        {status === "sending" ? "Sending…" : "Get My Free Inspection"}
      </button>
      <p className="text-center text-[11px] text-muted-foreground">No fee. No pressure. No obligation. Photo report emailed same day.</p>
    </form>
  );
}
