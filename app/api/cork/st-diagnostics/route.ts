import { NextRequest, NextResponse } from "next/server";

/**
 * TEMPORARY diagnostics — lists ServiceTitan booking provider tags and business
 * units so the correct IDs can be identified during setup.
 * Guarded by ?key=<SERVICETITAN_TENANT_ID>. REMOVE BEFORE MERGING TO MAIN
 * (tracked in PR checklist).
 */
export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  const tenant = process.env.SERVICETITAN_TENANT_ID;
  const appKey = process.env.SERVICETITAN_APP_KEY;
  const clientId = process.env.SERVICETITAN_CLIENT_ID;
  const clientSecret = process.env.SERVICETITAN_CLIENT_SECRET;

  if (!tenant || key !== tenant) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  if (!appKey || !clientId || !clientSecret)
    return NextResponse.json({ error: "servicetitan_env_missing", have: { appKey: !!appKey, clientId: !!clientId, clientSecret: !!clientSecret } }, { status: 503 });

  const tokenRes = await fetch("https://auth.servicetitan.io/connect/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "client_credentials", client_id: clientId, client_secret: clientSecret }),
  });
  if (!tokenRes.ok) return NextResponse.json({ error: "auth_failed", status: tokenRes.status, detail: await tokenRes.text() }, { status: 502 });
  const { access_token } = (await tokenRes.json()) as { access_token: string };
  const headers = { Authorization: `Bearer ${access_token}`, "ST-App-Key": appKey };

  const [providersRes, unitsRes] = await Promise.all([
    fetch(`https://api.servicetitan.io/crm/v2/tenant/${tenant}/booking-provider-tags?pageSize=100`, { headers }),
    fetch(`https://api.servicetitan.io/settings/v2/tenant/${tenant}/business-units?active=true&pageSize=200`, { headers }),
  ]);

  const providers = providersRes.ok ? await providersRes.json() : { error: providersRes.status, detail: await providersRes.text() };
  const unitsRaw = unitsRes.ok ? ((await unitsRes.json()) as { data?: Array<{ id: number; name?: string }> }) : null;
  const units = unitsRaw?.data?.map((u) => ({ id: u.id, name: u.name })) ?? { error: unitsRes.status };

  return NextResponse.json({
    auth: "ok",
    bookingProviderTags: providers,
    businessUnits: units,
    roofingMatch: unitsRaw?.data?.find((u) => (u.name ?? "").toLowerCase().includes("roofing")) ?? "NOT FOUND — set SERVICETITAN_BUSINESS_UNIT_ID manually",
  });
}
