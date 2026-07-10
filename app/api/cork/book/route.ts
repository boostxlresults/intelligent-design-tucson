import { NextRequest, NextResponse } from "next/server";
import { updateJourney } from "@/lib/cork/journeyStore";
import { sendMail } from "@/lib/cork/mailgun";
import { createCorkBooking } from "@/lib/cork/servicetitan";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const body = (await req.json()) as {
    journeyId?: string;
    name: string;
    email: string;
    phone: string;
    zip: string;
    address: string;
    preferredDay: string;
    preferredTimeWindow: string;
    sqFt?: number;
    colorName?: string;
    priceLow?: number;
    priceHigh?: number;
  };

  const summary = `Free Cork Pool Deck Inspection request — ~${body.sqFt ?? "?"} sq ft, color ${body.colorName ?? "?"}, est. $${body.priceLow?.toLocaleString() ?? "?"}–$${body.priceHigh?.toLocaleString() ?? "?"}`;

  const booking = await createCorkBooking({
    name: body.name,
    email: body.email,
    phone: body.phone,
    address: body.address,
    zip: body.zip,
    preferredDay: body.preferredDay,
    preferredTimeWindow: body.preferredTimeWindow,
    summary,
  });

  if (body.journeyId) {
    await updateJourney(body.journeyId, {
      step_reached: "booked",
      address: body.address,
      preferred_day: body.preferredDay,
      preferred_time_window: body.preferredTimeWindow,
      servicetitan_booking_id: booking.id ?? null,
    }).catch((e) => console.error("[cork] book persist error:", e));
  }

  const notify = process.env.CORK_INTERNAL_NOTIFY_EMAIL;
  if (notify) {
    sendMail({
      to: notify,
      subject: `🌵 New Cork Deck Inspection Lead: ${body.name} (${body.zip})`,
      html: `<p><strong>${body.name}</strong> — ${body.email} — ${body.phone}</p>
<p>${body.address}</p>
<p>Preferred: ${body.preferredDay}, ${body.preferredTimeWindow}</p>
<p>${summary}</p>
<p>ServiceTitan booking: ${booking.ok ? `created (${booking.id})` : `NOT created (${booking.error}) — manual follow-up needed`}</p>`,
    }).catch((e) => console.error("[cork] notify email error:", e));
  }

  return NextResponse.json({ ok: true, servicetitan: booking.ok });
}
