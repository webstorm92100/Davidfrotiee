'use client';

import { useEffect, useState } from 'react';

const measurementId = 'G-6SQT165TYX';
const storageKey = 'david-frotiee-analytics-consent';
const consentDuration = 180 * 24 * 60 * 60 * 1000;
const openPreferencesEvent = 'david-frotiee:open-cookie-preferences';

type Consent = 'accepted' | 'refused';
type ConsentState = Consent | 'loading' | 'unset';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readConsent(): Consent | null {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) ?? 'null') as {
      value?: Consent;
      expiresAt?: number;
    } | null;

    if (!saved?.value || !saved.expiresAt || saved.expiresAt < Date.now()) {
      localStorage.removeItem(storageKey);
      return null;
    }

    return saved.value;
  } catch {
    return null;
  }
}

function saveConsent(value: Consent) {
  localStorage.setItem(
    storageKey,
    JSON.stringify({ value, expiresAt: Date.now() + consentDuration }),
  );
}

function removeAnalyticsCookies() {
  document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=')[0])
    .filter((name) => name.startsWith('_ga'))
    .forEach((name) => {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.davidfrotiee.com; SameSite=Lax`;
    });
}

export function AnalyticsConsent() {
  const [consent, setConsent] = useState<ConsentState>('loading');

  useEffect(() => {
    setConsent(readConsent() ?? 'unset');

    const openPreferences = () => setConsent('unset');
    window.addEventListener(openPreferencesEvent, openPreferences);
    return () => window.removeEventListener(openPreferencesEvent, openPreferences);
  }, []);

  useEffect(() => {
    if (consent !== 'accepted') return;

    const analyticsWindow = window as unknown as Record<string, unknown>;
    analyticsWindow[`ga-disable-${measurementId}`] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    if (!document.querySelector('script[data-david-analytics]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.dataset.davidAnalytics = 'true';
      document.head.appendChild(script);
    }
  }, [consent]);

  const accept = () => {
    saveConsent('accepted');
    setConsent('accepted');
  };

  const refuse = () => {
    saveConsent('refused');
    const analyticsWindow = window as unknown as Record<string, unknown>;
    analyticsWindow[`ga-disable-${measurementId}`] = true;
    removeAnalyticsCookies();
    setConsent('refused');
  };

  if (consent !== 'unset') return null;

  return (
    <aside className="cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <div>
        <strong id="cookie-title">Mesure d’audience</strong>
        <p id="cookie-description">
          Avec votre accord, Google Analytics nous aide à comprendre la fréquentation du site. Vous pouvez accepter ou refuser sans conséquence sur votre navigation.
        </p>
        <a href="/mentions-legales#cookies">En savoir plus</a>
      </div>
      <div className="cookie-actions">
        <button type="button" onClick={refuse}>Tout refuser</button>
        <button type="button" onClick={accept}>Tout accepter</button>
      </div>
    </aside>
  );
}

export function CookiePreferencesButton() {
  return (
    <button
      className="cookie-preferences-button"
      type="button"
      onClick={() => window.dispatchEvent(new Event(openPreferencesEvent))}
    >
      Gérer les cookies
    </button>
  );
}
