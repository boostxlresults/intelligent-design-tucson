/**
 * Lightweight in-memory rate limiter for the public cork API routes.
 * Best-effort (per serverless instance) — enough to stop a single-source flood
 * from running up Anthropic/Gemini spend or spamming ServiceTitan/email.
 * For production-grade distributed limits, back this with Vercel KV / Upstash.
 */
type Entry = { count: number; reset: number };
const hits = new Map<string, Entry>();

export function clientIp(req: Request): string {
  const h = req.headers;
  const fwd = h.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0].trim() : "") || h.get("x-real-ip") || "unknown";
}

/** returns true if allowed, false if the caller has exceeded `limit` in `windowMs`. */
export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (now > v.reset) hits.delete(k);
  }
  const e = hits.get(key);
  if (!e || now > e.reset) {
    hits.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  if (e.count >= limit) return false;
  e.count++;
  return true;
}
