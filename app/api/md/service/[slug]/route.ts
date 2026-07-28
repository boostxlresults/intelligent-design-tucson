import * as serviceExports from "@/data/pages/services";
import serviceManifest from "@/data/pages/services/manifest.json";
import type { ServicePageData } from "@/types/services";
import { serviceToMarkdown } from "@/lib/md/serviceToMarkdown";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(serviceManifest.services).map((slug) => ({ slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const info = (serviceManifest.services as Record<string, { dataFile: string }>)[slug];
  if (!info) return new Response("Not found", { status: 404 });
  const data = (serviceExports as Record<string, unknown>)[`${info.dataFile}Data`] as ServicePageData | undefined;
  if (!data) return new Response("Not found", { status: 404 });
  const md = serviceToMarkdown(data, slug);
  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
