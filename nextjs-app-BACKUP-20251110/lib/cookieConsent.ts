const CONSENT_STORAGE_KEY = 'id-cookie-consent';

export type ConsentLevel = 'all' | 'essential' | null;

export interface CookieConsent {
  level: ConsentLevel;
  timestamp: number;
}

export function getConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!stored) return null;
  
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function setConsent(level: ConsentLevel): void {
  if (typeof window === 'undefined') return;
  
  const consent: CookieConsent = {
    level,
    timestamp: Date.now()
  };
  
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  
  if (level === 'all') {
    enableAnalytics();
  } else {
    disableAnalytics();
  }
}

export function hasConsent(): boolean {
  const consent = getConsent();
  return consent !== null;
}

export function hasAnalyticsConsent(): boolean {
  const consent = getConsent();
  return consent?.level === 'all';
}

function enableAnalytics(): void {
  if (typeof window === 'undefined') return;
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    consent_analytics: 'granted',
    consent_marketing: 'granted'
  });
}

function disableAnalytics(): void {
  if (typeof window === 'undefined') return;
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    consent_analytics: 'denied',
    consent_marketing: 'denied'
  });
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}
