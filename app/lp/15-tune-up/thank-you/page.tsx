import type { Metadata } from "next";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Phone, CheckCircle2 } from "lucide-react";
import { CAMPAIGN_PHONES } from "@/lib/campaignPhones";
import ThankYouTracking from "@/components/lp/tuneup15/ThankYouTracking";

/*
 * Thank-you page for /lp/15-tune-up. The Meta Lead event and GA4 generate_lead
 * fire here (ThankYouTracking), keyed on the ?eid= the form generated, so the
 * browser event and the server-side Conversions API event dedupe.
 * No links other than the phone button, per the brief.
 *
 * The body copy does not name a phone number on purpose: DNI rewrites every
 * instance of the source number on the page, so "a text from (520) 333-2665"
 * became "a text from <pool number>" live, which is not where the text comes from.
 */
const PHONE = CAMPAIGN_PHONES["/lp/15-tune-up"];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "You're in | $15 AC Tune-Up | Intelligent Design Home Services",
  description: "Watch for a text to confirm your 2-hour window.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.idesignac.com/lp/15-tune-up/thank-you" },
};

export default function TuneUp15ThankYou() {
  return (
    <div className={`${poppins.variable} ${poppins.className} min-h-screen bg-white text-[17px] leading-relaxed text-neutral-900`}>
      <ThankYouTracking />
      <header className="h-14 bg-black text-white">
        <div className="mx-auto flex h-full max-w-5xl items-center px-4">
          <Image src="/logo-home-services.png" alt="Intelligent Design Home Services" width={62} height={32} priority className="h-8 w-auto" />
        </div>
      </header>
      <main className="mx-auto max-w-[680px] px-4 py-12 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-[#2FBF5C]" strokeWidth={1.75} aria-hidden="true" />
        <h1 className="mt-5 text-[32px] font-bold leading-tight md:text-[40px]">You&rsquo;re in. We&rsquo;ll text you in the next few minutes.</h1>
        <p className="mt-4 text-neutral-700">
          Watch for a text from Intelligent Design to confirm your 2-hour window. If you&rsquo;d rather talk now, call us.
        </p>
        <a
          href={`tel:${PHONE.tel}`}
          data-lp-call="thankyou"
          data-testid="lp15-thankyou-call"
          className="mt-8 inline-flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-[#2FBF5C] text-[18px] font-bold text-black shadow-md"
        >
          <Phone className="h-5 w-5" aria-hidden="true" /> Call {PHONE.display}
        </a>
      </main>
    </div>
  );
}
