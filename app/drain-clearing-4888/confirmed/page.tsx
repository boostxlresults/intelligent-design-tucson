import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import ConfirmTracking from "@/components/actune/ConfirmTracking";

export const metadata: Metadata = {
  title: "You're booked — Drain Clearing Special | Intelligent Design",
  robots: "noindex, nofollow, noarchive",
  alternates: { canonical: "https://www.idesignac.com/drain-clearing-4888/confirmed" },
};

export default function DrainClearingConfirmedPage() {
  return (
    <>
      <ConfirmTracking />
      <section className="px-4 py-16 text-center">
        <div className="mx-auto max-w-xl">
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />
          <h1 className="mt-4 text-3xl font-extrabold text-primary">You&rsquo;re on the schedule</h1>
          <p className="mt-3 text-[18px] text-muted-foreground">
            Thanks! We&rsquo;ve got your request for the $48.88 drain clearing special. A team member will call you
            shortly to confirm your appointment time and address. Watch for a text and email confirmation in the next
            minute.
          </p>
          <a
            href="tel:5203486684"
            className="mx-auto mt-6 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-6 py-4 text-[18px] font-extrabold text-white shadow-md hover:brightness-110"
          >
            <Phone className="h-5 w-5" /> Click or Call (520)&nbsp;348-6684
          </a>
          <p className="mt-6 text-[15px]">
            <Link href="/" className="text-muted-foreground underline">Return to idesignac.com</Link>
          </p>
        </div>
      </section>
    </>
  );
}
