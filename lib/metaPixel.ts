/**
 * Meta pixel helpers (client only).
 *
 * The pixel base code (id 847049750928220) is loaded in app/layout.tsx with
 * strategy "afterInteractive", so a component effect can run before window.fbq
 * exists. These helpers wait for it (up to ~10 s) instead of dropping the event.
 */
type Fbq = (...args: unknown[]) => void;

function getFbq(): Fbq | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { fbq?: Fbq }).fbq;
}

export function whenFbq(cb: (fbq: Fbq) => void, tries = 40): void {
  const f = getFbq();
  if (f) {
    cb(f);
    return;
  }
  if (tries <= 0) return;
  setTimeout(() => whenFbq(cb, tries - 1), 250);
}

/** fbq('track', name, params, { eventID }) once the pixel is available. */
export function metaTrack(name: string, params: Record<string, unknown> = {}, eventId?: string): void {
  whenFbq((fbq) => {
    try {
      if (eventId) fbq("track", name, params, { eventID: eventId });
      else fbq("track", name, params);
    } catch {
      /* pixel threw; never break the page */
    }
  });
}

/** Push a GA4 event to the GTM dataLayer. */
export function ga4Event(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}
