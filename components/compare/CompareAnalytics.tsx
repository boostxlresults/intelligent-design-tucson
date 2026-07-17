"use client";

import { useEffect } from "react";

/**
 * Fires GA4 dataLayer events for the compare pages:
 *  - compare_table_view       when the comparison table scrolls into view
 *  - competitor_section_view  once per competitor section (by anchor id)
 */
export default function CompareAnalytics({ vertical }: { vertical: string }) {
  useEffect(() => {
    const push = (event: string, extra: Record<string, unknown> = {}) => {
      try {
        (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event, compare_vertical: vertical, ...extra });
      } catch { /* noop */ }
    };

    const observers: IntersectionObserver[] = [];

    const table = document.getElementById("compare-table");
    if (table) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { push("compare_table_view"); io.disconnect(); }
        });
      }, { threshold: 0.25 });
      io.observe(table);
      observers.push(io);
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-competitor]"));
    if (sections.length) {
      const seen = new Set<string>();
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          const id = (en.target as HTMLElement).dataset.competitor || "";
          if (en.isIntersecting && id && !seen.has(id)) {
            seen.add(id);
            push("competitor_section_view", { competitor: id });
          }
        });
      }, { threshold: 0.5 });
      sections.forEach((s) => io.observe(s));
      observers.push(io);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, [vertical]);

  return null;
}
