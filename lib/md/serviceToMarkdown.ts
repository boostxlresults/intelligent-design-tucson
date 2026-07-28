import { SITE_URL } from "@/lib/constants";
import type { ServicePageData, ContentSection } from "@/types/services";

/**
 * Generates a clean, machine-readable markdown version of a service page from the
 * same ServicePageData the page renders from, so the .md is always in sync.
 * Served at /services/<slug>.md (see app/api/md/service/[slug]/route.ts).
 */
const BIZ = {
  name: "Intelligent Design Air Conditioning, Plumbing, Solar & Electric",
  phone: "(520) 333-2665",
  address: "4740 S Park Ave, Tucson, AZ 85714",
  trust:
    "Rated 4.97 stars from 23,000+ verified reviews · BBB A+ accredited · Family & veteran-owned, serving Tucson since 1979 · Licensed AZ ROC contractor.",
};

function abs(u: string): string {
  if (/^https?:\/\//i.test(u)) return u;
  return `${SITE_URL}${u.startsWith("/") ? "" : "/"}${u}`;
}

/** Convert [link:/path|label] tokens to markdown links and strip stray HTML. */
function clean(text: string | undefined): string {
  return (text || "")
    .replace(/\[link:([^\]|]+)\|([^\]]+)\]/g, (_m, url, label) => `[${String(label).trim()}](${abs(String(url).trim())})`)
    .replace(/<sup>(.*?)<\/sup>/gi, "^$1")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function sectionToMd(s: ContentSection): string {
  switch (s.type) {
    case "heading":
      return `\n## ${clean(s.heading)}\n`;
    case "paragraph":
      return `${clean(s.content)}\n`;
    case "list": {
      const intro = s.content ? `${clean(s.content)}\n` : "";
      const items = (s.items || []).map((i) => `- ${clean(i)}`).join("\n");
      return `${intro}${items}\n`;
    }
    case "cta":
      return `**${clean(s.heading)}** — ${clean(s.content)}\n`;
    case "testimonial":
      return `> "${clean(s.quote)}" — ${clean(s.author)}, ${clean(s.location)}\n`;
    case "howto": {
      const steps = (s.steps || []).map((st, i) => `${i + 1}. **${clean(st.name)}** — ${clean(st.description)}`).join("\n");
      return `\n## ${clean(s.heading)}\n${clean(s.description)}\n${steps}\n`;
    }
    default:
      return "";
  }
}

export function serviceToMarkdown(data: ServicePageData, slug: string): string {
  const url = `${SITE_URL}/services/${slug}`;
  const out: string[] = [];

  out.push(`# ${clean(data.h1)}`);
  if (data.tagline) out.push(`\n*${clean(data.tagline)}*`);
  out.push(`\n**${BIZ.name}** — Tucson, AZ`);
  out.push(`Phone: ${BIZ.phone} · ${BIZ.address}`);
  out.push(BIZ.trust);
  if (data.description) out.push(`\n${clean(data.description)}`);

  if (data.highlights?.length) {
    out.push(`\n## ${clean(data.whyChooseHeading) || "Why choose Intelligent Design"}`);
    for (const h of data.highlights) out.push(`- **${clean(h.title)}** — ${clean(h.description)}`);
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
