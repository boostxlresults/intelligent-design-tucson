import { SITE_URL } from "@/lib/constants";
import type { ContentSection } from "@/types/services";

export const BIZ = {
  name: "Intelligent Design Air Conditioning, Plumbing, Solar & Electric",
  phone: "(520) 333-2665",
  address: "4740 S Park Ave, Tucson, AZ 85714",
  trust:
    "Rated 4.97 stars from 23,000+ verified reviews · BBB A+ accredited · Family & veteran-owned, serving Tucson since 1979 · Licensed AZ ROC contractor.",
};

export function abs(u: string): string {
  if (/^https?:\/\//i.test(u)) return u;
  return `${SITE_URL}${u.startsWith("/") ? "" : "/"}${u}`;
}

/** Convert [link:/path|label] tokens to markdown links and strip stray HTML. */
export function clean(text: string | undefined): string {
  return (text || "")
    .replace(/\[link:([^\]|]+)\|([^\]]+)\]/g, (_m, url, label) => `[${String(label).trim()}](${abs(String(url).trim())})`)
    .replace(/<sup>(.*?)<\/sup>/gi, "^$1")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/[ \t]+/g, " ")
    .trim();
}

export function sectionToMd(s: ContentSection): string {
  if (!("type" in s)) {
    const parts: string[] = [];
    if (s.heading) parts.push(`\n## ${clean(s.heading)}`);
    if (s.content) parts.push(clean(s.content));
    for (const sub of s.subsections || []) {
      parts.push(`\n### ${clean(sub.heading)}`);
      parts.push(clean(sub.content));
    }
    return parts.join("\n");
  }
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
