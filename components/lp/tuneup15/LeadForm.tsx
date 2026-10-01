"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { captureLpAttribution, lpAttributionQuery, readMetaCookies } from "@/lib/lpAttribution";
import { ga4Event } from "@/lib/metaPixel";

/**
 * The $15 tune-up lead form. Name, mobile phone, ZIP, optional best time.
 * No email. Posts to /api/ac-tune-up, then sends the visitor to the
 * thank-you page with the ad parameters and the Meta event id on the URL.
 * The Lead pixel event fires on the thank-you page only, never here.
 */
const BEST_TIMES = ["Morning", "Afternoon", "Evening"] as const;
const SOURCE = "meta-15-tuneup";
const PAGE_SLUG = "15-tune-up";
const THANK_YOU_PATH = "/lp/15-tune-up/thank-you";

type Errors = { name?: string; phone?: string; zip?: string; form?: string };

function digitsOnly(v: string): string {
  let d = v.replace(/\D/g, "");
  if (d.length === 11 && d.startsWith("1")) d = d.slice(1);
  return d.slice(0, 10);
}

function formatPhone(v: string): string {
  const d = digitsOnly(v);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function newEventId(): string {
  try {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  } catch {
    /* fall through */
  }
  return `lp15-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export default function LeadForm({ id, phoneTel, phoneDisplay }: { id: string; phoneTel: string; phoneDisplay: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [bestTime, setBestTime] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    captureLpAttribution();
  }, []);

  const onStart = () => {
    if (started.current) return;
    started.current = true;
    ga4Event("form_start", { form_id: "tuneup15", form_name: "$15 Tune-Up" });
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your name.";
    if (digitsOnly(phone).length !== 10) e.phone = "Please enter a 10-digit mobile number.";
    if (!/^85\d{3}$/.test(zip)) e.zip = "We serve the Tucson area. Please enter a local ZIP code.";
    return e;
  };

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (e.name || e.phone || e.zip) return;

    const form = ev.currentTarget;
    const honeypot = (form.elements.namedItem("lp_hp") as HTMLInputElement | null)?.value || "";

    setSubmitting(true);
    const eventId = newEventId();
    const attr = captureLpAttribution();
    const cookies = readMetaCookies();

    try {
      const res = await fetch("/api/ac-tune-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: formatPhone(phone),
          zip,
          bestTime,
          offerLabel: "$15",
          pageSlug: PAGE_SLUG,
          source: SOURCE,
          landingUrl: attr.landing_url || window.location.href,
          landingPage: window.location.pathname,
          referrer: attr.referrer || "",
          eventId,
          fbp: cookies.fbp || "",
          fbc: cookies.fbc || "",
          utm_source: attr.utm_source || "",
          utm_medium: attr.utm_medium || "",
          utm_campaign: attr.utm_campaign || "",
          utm_content: attr.utm_content || "",
          utm_term: attr.utm_term || "",
          fbclid: attr.fbclid || "",
          gclid: attr.gclid || "",
          gbraid: attr.gbraid || "",
          wbraid: attr.wbraid || "",
          lp_hp: honeypot,
        }),
      });
      if (!res.ok) {
        let msg = "Something went wrong. Please call us and we will book it by phone.";
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {
          /* not JSON */
        }
        throw new Error(msg);
      }
      ga4Event("form_submit", { form_id: "tuneup15", form_name: "$15 Tune-Up" });
      const qs = lpAttributionQuery({ eid: eventId });
      window.location.assign(`${THANK_YOU_PATH}${qs ? `?${qs}` : ""}`);
    } catch (err) {
      setErrors({ form: err instanceof Error ? err.message : "Something went wrong." });
      setSubmitting(false);
    }
  };

  const input =
    "block h-14 w-full rounded-lg border-2 bg-white px-4 text-[17px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#2FBF5C] focus:border-[#2FBF5C]";
  const ok = "border-neutral-300";
  const bad = "border-red-600";

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-3" data-testid={`form-tuneup-15-${id}`}>
      <div>
        <label htmlFor={`${id}-name`} className="sr-only">Name</label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Name"
          value={name}
          onFocus={onStart}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${id}-name-err` : undefined}
          className={`${input} ${errors.name ? bad : ok}`}
        />
        {errors.name && <p id={`${id}-name-err`} className="mt-1 text-[15px] font-semibold text-red-700">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor={`${id}-phone`} className="sr-only">Mobile phone</label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Mobile phone"
          value={phone}
          onFocus={onStart}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? `${id}-phone-err` : undefined}
          className={`${input} ${errors.phone ? bad : ok}`}
        />
        {errors.phone && <p id={`${id}-phone-err`} className="mt-1 text-[15px] font-semibold text-red-700">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor={`${id}-zip`} className="sr-only">ZIP code</label>
        <input
          id={`${id}-zip`}
          name="zip"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          placeholder="ZIP code"
          maxLength={5}
          value={zip}
          onFocus={onStart}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
          aria-invalid={!!errors.zip}
          aria-describedby={errors.zip ? `${id}-zip-err` : undefined}
          className={`${input} ${errors.zip ? bad : ok}`}
        />
        {errors.zip && <p id={`${id}-zip-err`} className="mt-1 text-[15px] font-semibold text-red-700">{errors.zip}</p>}
      </div>

      <fieldset>
        <legend className="mb-2 text-[15px] font-semibold text-neutral-700">Best time to call (optional)</legend>
        <div className="flex gap-2">
          {BEST_TIMES.map((t) => {
            const on = bestTime === t;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={on}
                onClick={() => setBestTime(on ? "" : t)}
                className={`h-12 flex-1 rounded-lg border-2 text-[16px] font-semibold transition ${
                  on ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300 bg-white text-neutral-800"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Honeypot: hidden from people, filled by bots. The API silently drops any
          submission that fills it. The field was first named "company" with a
          "Company" label, and Chrome autofill filled it with the visitor's business
          name on the very first live test, which made a real lead look like a bot.
          Browser autofill keys on names and labels it recognizes, so this one
          uses a name and label it never will. Do not rename it to anything
          resembling a real contact field. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${id}-lp-hp`}>Leave this blank</label>
        <input id={`${id}-lp-hp`} name="lp_hp" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      {/* Read by ServiceTitan's web-form capture, which scrapes every form on the
          site and creates its own lead; this names the form in that record. */}
      <input type="hidden" name="form_name" value="Meta | $15 Tune-up Special | URL Traffic" />

      {errors.form && (
        <p role="alert" className="rounded-lg bg-red-50 p-3 text-[15px] font-semibold text-red-700">
          {errors.form}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        data-testid={`button-submit-tuneup-15-${id}`}
        className="flex h-14 w-full items-center justify-center rounded-lg bg-[#2FBF5C] text-[18px] font-bold text-black shadow-md transition hover:brightness-105 disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" /> Sending...
          </>
        ) : (
          "Claim My $15 Tune-Up"
        )}
      </button>

      <p className="text-center text-[16px] text-neutral-700">
        Or call{" "}
        <a href={`tel:${phoneTel}`} data-lp-call="form" className="font-bold text-neutral-900 underline underline-offset-2">
          {phoneDisplay}
        </a>{" "}
        &middot; We answer 24/7
      </p>

      <p className="text-[13px] leading-snug text-neutral-500">
        By submitting, you agree to receive a call and text from Intelligent Design about your appointment. Msg &amp; data rates may apply.
      </p>
    </form>
  );
}
