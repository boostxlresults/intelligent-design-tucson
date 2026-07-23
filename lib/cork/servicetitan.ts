/**
 * ServiceTitan booking writer.
 * Env: SERVICETITAN_CLIENT_ID, SERVICETITAN_CLIENT_SECRET, SERVICETITAN_TENANT_ID,
 *      SERVICETITAN_APP_KEY, SERVICETITAN_BOOKING_PROVIDER_ID,
 *      optional SERVICETITAN_BUSINESS_UNIT_ID (numeric override)
 *      optional SERVICETITAN_BUSINESS_UNIT_HINT (name match, default "roofing")
 * Business unit is auto-resolved by name via the Settings API and cached.
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

let cachedBusinessUnitId: number | null = null;

async function resolveBusinessUnitId(token: string, tenant: string, appKey: string): Promise<number | null> {
  const override = process.env.SERVICETITAN_BUSINESS_UNIT_ID;
  if (override) return Number(override);
  if (cachedBusinessUnitId) return cachedBusinessUnitId;
  const hint = (process.env.SERVICETITAN_BUSINESS_UNIT_HINT ?? "roofing").toLowerCase();
  try {
    const res = await fetch(
      `https://api.servicetitan.io/settings/v2/tenant/${tenant}/business-units?active=true&pageSize=200`,
      { headers: { Authorization: `Bearer ${token}`, "ST-App-Key": appKey } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { data?: Array<{ id: number; name?: string; officialName?: string }> };
    const match = data.data?.find(
      (bu) => (bu.name ?? "").toLowerCase().includes(hint) || (bu.officialName ?? "").toLowerCase().includes(hint)
    );
    if (match) {
      cachedBusinessUnitId = match.id;
      return match.id;
    }
    console.warn(`[cork] No ServiceTitan business unit matched hint "${hint}"`);
    return null;
  } catch (e) {
    console.error("[cork] business unit lookup failed:", e);
    return null;
  }
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
    const businessUnitId = await resolveBusinessUnitId(token, tenant, appKey);
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
          ...(businessUnitId ? { businessUnitId } : {}),
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
