/**
 * ServiceTitan booking writer.
 * Env: SERVICETITAN_CLIENT_ID, SERVICETITAN_CLIENT_SECRET, SERVICETITAN_TENANT_ID,
 *      SERVICETITAN_APP_KEY, optional SERVICETITAN_BOOKING_PROVIDER_ID.
 * NOTE: Joey has a read/write ServiceTitan app already built — wire its exact
 * booking endpoint/business unit/job type here once creds + details are supplied.
 * Fails gracefully: lead is always persisted + emailed even if booking fails.
 */

async function getToken(): Promise<string | null> {
  const id = process.env.SERVICETITAN_CLIENT_ID;
  const secret = process.env.SERVICETITAN_CLIENT_SECRET;
  if (!id || !secret) return null;
  const res = await fetch("https://auth.servicetitan.io/connect/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: id,
      client_secret: secret,
    }),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { access_token?: string };
  return data.access_token ?? null;
}

export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  preferredDay: string;
  preferredTimeWindow: string;
  summary: string;
}

export async function createCorkBooking(req: BookingRequest): Promise<{ ok: boolean; id?: string; error?: string }> {
  const tenant = process.env.SERVICETITAN_TENANT_ID;
  const appKey = process.env.SERVICETITAN_APP_KEY;
  const provider = process.env.SERVICETITAN_BOOKING_PROVIDER_ID;
  const token = await getToken();
  if (!token || !tenant || !appKey || !provider) {
    console.warn("[cork] ServiceTitan not fully configured; booking deferred to manual follow-up");
    return { ok: false, error: "servicetitan_unconfigured" };
  }
  try {
    const res = await fetch(
      `https://api.servicetitan.io/crm/v2/tenant/${tenant}/booking-provider/${provider}/bookings`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "ST-App-Key": appKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: "Cork Pool Deck Journey — idesignac.com",
          name: req.name,
          summary: `${req.summary}\nPreferred: ${req.preferredDay} ${req.preferredTimeWindow}\nAddress: ${req.address}`,
          isFirstTimeClient: true,
          contacts: [
            { type: "Email", value: req.email },
            { type: "MobilePhone", value: req.phone },
          ],
        }),
      }
    );
    if (!res.ok) {
      const text = await res.text();
      console.error("[cork] ServiceTitan booking failed:", res.status, text);
      return { ok: false, error: `servicetitan_${res.status}` };
    }
    const data = (await res.json()) as { id?: number | string };
    return { ok: true, id: String(data.id ?? "") };
  } catch (e) {
    console.error("[cork] ServiceTitan booking exception:", e);
    return { ok: false, error: "servicetitan_exception" };
  }
}
