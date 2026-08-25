"use client";

import { useRef, useState } from "react";
import { attributionFields, getAttribution } from "@/lib/attribution";

function fbq(...args: unknown[]) {
  try { (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.(...args); } catch { /* noop */ }
}
function dl(payload: Record<string, unknown>) {
  try { (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push(payload); } catch { /* noop */ }
}

const DAYS = ["This week", "Next week", "Specific date"];

function inServiceArea(zip: string): boolean {
  const z = zip.replace(/\D/g, "");
  return z.length < 5 || z.startsWith("856") || z.startsWith("857");
}

export default function DrainForm() {
  const [form, setForm] = useState({ name: "", phone: "", zip: "", email: "", preferredDay: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const started = useRef(false);
  const company = useRef<HTMLInputElement>(null);
  const submissionId = useRef<string>("");
  if (!submissionId.current) {
    submissionId.current = (typeof crypto !== "undefined" && crypto.randomUUID)
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const blur = (k: string) => setTouched((t) => ({ ...t, [k]: true }));

  const phoneDigits = form.phone.replace(/\D/g, "");
  const nameErr = touched.name && !form.name.trim() ? "Please enter your name." : "";
  const phoneErr = touched.phone && phoneDigits.length < 10 ? "Enter a 10-digit phone number." : "";
  const dayErr = touched.preferredDay && !form.preferredDay ? "Pick a preferred day." : "";
  const zipOutOfArea = form.zip.replace(/\D/g, "").length === 5 && !inServiceArea(form.zip);

  const onFirstFocus = () => {
    if (started.current) return;
    started.current = true;
    dl({ event: "form_start", form_name: "drain_clearing_4888" });
    fbq("trackCustom", "FormStart", { form: "drain_clearing_4888" });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, preferredDay: true });
    if (!form.name.trim() || phoneDigits.length < 10 || !form.preferredDay) return;
    setStatus("sending");
    try {
      const attr = getAttribution();
      const landingPage = attr.landing || (typeof window !== "undefined" ? window.location.pathname : "");
      const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
      const fbclid = params.get("fbclid") || "";
      const referrer = typeof document !== "undefined" ? document.referrer : "";
      const res = await fetch("/api/drain-clearing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          company: company.current?.value || "",
          pageSlug: "drain-clearing-4888",
          submissionId: submissionId.current,
          landingPage, fbclid, referrer,
          ...attributionFields(),
        }),
      });
      if (!res.ok) throw new Error("failed");
      window.location.href = "/drain-clearing-4888/confirmed";
    } catch {
      setStatus("error");
    }
  };

  const inputCls = "w-full rounded-lg border border-border px-4 py-3 text-[17px]";

  return (
    <form onSubmit={submit} className="grid gap-3" data-testid="drain-form" noValidate>
      <input ref={company} type="text" name="company" tabIndex={-1} autoComplete="off"
        aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />

      <div>
        <input required value={form.name} onFocus={onFirstFocus} onBlur={() => blur("name")}
          onChange={(e) => set("name", e.target.value)} placeholder="Full name" autoComplete="name"
          className={inputCls} />
        {nameErr && <p className="mt-1 text-[15px] text-[#C8101F]">{nameErr}</p>}
      </div>

      <div>
        <input required type="tel" inputMode="tel" value={form.phone} onFocus={onFirstFocus} onBlur={() => blur("phone")}
          onChange={(e) => set("phone", e.target.value)} placeholder="Mobile phone" autoComplete="tel"
          className={inputCls} />
        {phoneErr && <p className="mt-1 text-[15px] text-[#C8101F]">{phoneErr}</p>}
      </div>

      <div>
        <input inputMode="numeric" value={form.zip} onFocus={onFirstFocus}
          onChange={(e) => set("zip", e.target.value)} placeholder="ZIP code" autoComplete="postal-code"
          className={inputCls} />
        {zipOutOfArea && (
          <p className="mt-1 text-[15px] text-muted-foreground">
            That ZIP looks outside our usual area &mdash; send it anyway and we&apos;ll let you know if we can reach you.
          </p>
        )}
      </div>

      <input type="email" inputMode="email" value={form.email} onFocus={onFirstFocus}
        onChange={(e) => set("email", e.target.value)} placeholder="Email (optional)" autoComplete="email"
        className={inputCls} />

      <div>
        <select required value={form.preferredDay} onFocus={onFirstFocus} onBlur={() => blur("preferredDay")}
          onChange={(e) => set("preferredDay", e.target.value)}
          className={`${inputCls} bg-background text-foreground`}>
          <option value="" disabled>Preferred day</option>
          {DAYS.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
        {dayErr && <p className="mt-1 text-[15px] text-[#C8101F]">{dayErr}</p>}
      </div>

      {status === "error" && (
        <p className="text-[15px] text-[#C8101F]">Something went wrong &mdash; please call (520)&nbsp;348-6684.</p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="mt-1 min-h-[52px] rounded-lg bg-[#C8101F] px-6 py-4 text-[19px] font-extrabold text-white shadow-md transition hover:brightness-110 disabled:opacity-60"
        data-testid="submit-drain">
        {status === "sending" ? "Booking…" : "Book Your $48.88 Drain Clearing Special Online"}
      </button>
      <p className="text-center text-[15px] font-semibold text-foreground">No payment now. We confirm your appointment by phone.</p>
    </form>
  );
}
