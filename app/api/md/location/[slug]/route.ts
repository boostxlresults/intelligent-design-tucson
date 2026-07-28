import * as locationExports from "@/data/pages/locations";
import type { LocationPageData } from "@/types/services";
import { locationToMarkdown } from "@/lib/md/locationToMarkdown";

export const dynamic = "force-static";
export const dynamicParams = false;

function isLoc(v: unknown): v is LocationPageData {
  return (
    !!v &&
    typeof v === "object" &&
    typeof (v as LocationPageData).slug === "string" &&
    typeof (v as LocationPageData).locationName === "string"
  );
}

const map: Record<string, LocationPageData> = {};
for (const v of Object.values(locationExports)) if (isLoc(v)) map[v.slug] = v;

export function generateStaticParams() {
  return Object.keys(map).map((slug) => ({ slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = map[slug];
  if (!d) return new Response("Not found", { status: 404 });
  return new Response(locationToMarkdown(d, slug), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
