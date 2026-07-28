import { CORE_PAGES } from "@/data/md/corePages";
import { BIZ } from "@/lib/md/shared";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CORE_PAGES).map((slug) => ({ slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = CORE_PAGES[slug];
  if (!p) return new Response("Not found", { status: 404 });
  const md =
    [
      `# ${p.h1}`,
      `\n${p.description}`,
      `\n**${BIZ.name}** — Tucson, AZ`,
      `Phone: ${BIZ.phone} · ${BIZ.address}`,
      BIZ.trust,
      `\n${p.body}`,
      `\n## Ready to get started?`,
      `Call ${BIZ.phone} or schedule online at ${SITE_URL}/schedule.`,
      `\n---`,
      `Source: ${SITE_URL}/${slug}`,
    ].join("\n") + "\n";
  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
