import { VISITOR_ID_DISCLAIMER, PRIVACY_ANCHOR_URL } from '@/lib/legal';

/**
 * Sitewide visitor-identification & marketing communications notice.
 * Rendered in app/layout.tsx OUTSIDE LandingChromeGate so it appears
 * on ALL pages — including /ac-tune-up-2888 where the footer is hidden.
 * Must appear exactly once per page. Do not render additionally in Footer.
 */
export default function LegalStrip() {
  return (
    <div className="w-full bg-muted/40 border-t border-border">
      <p className="max-w-7xl mx-auto px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        {VISITOR_ID_DISCLAIMER.before}
        <a
          href={PRIVACY_ANCHOR_URL}
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          {VISITOR_ID_DISCLAIMER.linkText}
        </a>
        {VISITOR_ID_DISCLAIMER.after}
      </p>
    </div>
  );
}
