import { SITE_URL } from "@/lib/constants";
import type { LocationPageData } from "@/types/services";
import { BIZ, abs, clean, sectionToMd } from "./shared";

/** Clean markdown version of a service-area page, generated from LocationPageData. */
export function locationToMarkdown(data: LocationPageData, slug: string): string {
  const url = `${SITE_URL}/service-areas/${slug}`;
  const place = (clean(data.locationDisplayName) || clean(data.locationName)).replace(/,?\s*AZ$/i, "");
  const out: string[] = [];
  out.push(`# ${clean(data.h1)}`);
  if (data.tagline) out.push(`\n*${clean(data.tagline)}*`);
  else if (data.h2Subheading) out.push(`\n*${clean(data.h2Subheading)}*`);
  out.push(`\n**${BIZ.name}** — serving ${place}, AZ`);
  out.push(`Phone: ${BIZ.phone} · ${BIZ.address}`);
  out.push(BIZ.trust);
  if (data.zipCodes?.length) out.push(`ZIP codes served: ${data.zipCodes.join(", ")}`);
  if (data.description) out.push(`\n${clean(data.description)}`);

  if (data.services?.length) {
    out.push(`\n## Services in ${place}`);
    for (const s of data.services) out.push(`- **[${clean(s.title)}](${abs(s.link)})** — ${clean(s.description)}`);
  }
  if (data.highlights?.length) {
    out.push(`\n## Why choose Intelligent Design`);
    for (const h of data.highlights) out.push(`- **${clean(h.title)}** — ${clean(h.description)}`);
  }
  if (data.content?.sections?.length) {
    for (const s of data.content.sections) {
      const md = sectionToMd(s).replace(/\n+$/, "");
      if (md) out.push(md);
    }
  }
  if (data.faqs?.length) {
    out.push(`\n## Frequently Asked Questions`);
    for (const f of data.faqs) {
      out.push(`\n### ${clean(f.question)}`);
      out.push(clean(f.answer));
    }
  }
  out.push(`\n## Ready to get started?`);
  out.push(`Call ${BIZ.phone} or schedule online at ${SITE_URL}/schedule.`);
  out.push(`\n---`);
  out.push(`Source: ${url}`);
  return out.join("\n") + "\n";
}
