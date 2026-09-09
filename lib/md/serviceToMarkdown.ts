import { SITE_URL } from "@/lib/constants";
import type { ServicePageData } from "@/types/services";
import { BIZ, clean, sectionToMd } from "./shared";

/** Clean markdown version of a service page, generated from ServicePageData. */
export function serviceToMarkdown(data: ServicePageData, slug: string): string {
  const url = `${SITE_URL}/services/${slug}`;
  const out: string[] = [];
  out.push(`# ${clean(data.h1)}`);
  if (data.tagline) out.push(`\n*${clean(data.tagline)}*`);
  out.push(`\n**${BIZ.name}** - Tucson, AZ`);
  out.push(`Phone: ${BIZ.phone} · ${BIZ.address}`);
  out.push(BIZ.trust);
  if (data.description) out.push(`\n${clean(data.description)}`);

  if (data.highlights?.length) {
    out.push(`\n## ${clean(data.whyChooseHeading) || "Why choose Intelligent Design"}`);
    for (const h of data.highlights) out.push(`- **${clean(h.title)}** - ${clean(h.description)}`);
  }
  if (data.content?.sections?.length) {
    if (data.content.mainHeading) out.push(`\n## ${clean(data.content.mainHeading)}`);
    for (const s of data.content.sections) {
      const md = sectionToMd(s).replace(/\n+$/, "");
      if (md) out.push(md);
    }
  }
  const faqItems = [
    ...(data.faqs && data.faqs.faqs ? data.faqs.faqs : []),
    ...(data.commonQuestions ? data.commonQuestions : []),
  ];
  if (faqItems.length) {
    out.push(`\n## Frequently Asked Questions`);
    for (const f of faqItems) {
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
