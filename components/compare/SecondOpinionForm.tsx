"use client";

import { useState } from "react";
import { attributionFields } from "@/lib/attribution";

/**
 * Free second-opinion lead form for the conquest compare pages.
 * Captures a hidden gclid (URL param -> localStorage fallback) for ServiceTitan
 * attribution, and fires the GA4 `second_opinion_submit` event on success.
 */
export default function SecondOpinionForm({ service, pageSlug }: { service: string; pageSlug: string }) {
  const [form, setForm] = useState({ name: "", phone: "", whoQuoted: "", details: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.phone.replace(/\D/g, "").length < 10) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/second-opinion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service, pageSlug, ...attributionFields() }),
      });
      if (!res.ok) throw new Error("failed");
      try {
        (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
          event: "second_opinion_submit",
          compare_service: service,
          who_quoted: form.whoQuoted || "unknown",
        });
      } catch { /* noop */ }
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <div className="text-2xl">✅</div>
        <p className="mt-2 font-bold text-green-800">Thanks — we&apos;ll review your quote and call you back.</p>
        <p className="mt-1 text-sm text-green-700">Need it now? Call <a className="font-bold underline" href="tel:5203332665">(520) 333-2665</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-3 rounded-xl border border-border bg-card p-5 shadow-sm" data-testid="second-opinion-form">
      <div className="grid gap-3 sm:grid-cols-2">
        <input required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" autoComplete="name" className="rounded-lg border border-border px-4 py-3" />
        <input required type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="Phone number" autoComplete="tel" className="rounded-lg border border-border px-4 py-3" />
      </div>
      <input value={form.whoQuoted} onChange={(e) => set("whoQuoted", e.target.value)} placeholder="Who gave you the quote? (company name)" className="rounded-lg border border-border px-4 py-3" />
      <textarea value={form.details} onChange={(e) => set("details", e.target.value)} placeholder="Anything we should know? (optional)" rows={3} className="rounded-lg border border-border px-4 py-3" />
      {status === "error" && <p className="text-sm text-red-600">Something went wrong — please call (520) 333-2665.</p>}
      <button type="submit" disabled={status === "sending"} className="mt-1 rounded-lg bg-[#e8a020] px-6 py-3 font-bold text-[#0d2d7a] hover:bg-[#f5b731] disabled:opacity-50">
        {status === "sending" ? "Sending…" : "Get My Free Second Opinion"}
      </button>
      <p className="text-center text-[11px] text-muted-foreground">No obligation. We&apos;ll tell you honestly if your quote is fair.</p>
    </form>
  );
}
