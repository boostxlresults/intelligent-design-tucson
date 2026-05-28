import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { locationServiceData, type LocationServiceEntity } from "@/data/locationServiceData";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Service Locations | Intelligent Design Air Conditioning, Plumbing, Solar & Electric",
  description:
    "Intelligent Design serves all of Greater Tucson. Find HVAC, plumbing, solar, electrical, and roofing services near you — same-day appointments available.",
  alternates: {
    canonical: "https://www.idesignac.com/locations",
  },
};

// Build unique ZIP clusters with their services
function buildZipClusters() {
  const clusters: Record<
    string,
    { zipSlug: string; communityName: string; zipCode: string; services: Array<{ name: string; slug: string }> }
  > = {};

  for (const entity of Object.values(locationServiceData) as LocationServiceEntity[]) {
    if (!clusters[entity.zipSlug]) {
      clusters[entity.zipSlug] = {
        zipSlug: entity.zipSlug,
        communityName: entity.communityName,
        zipCode: entity.zipCode,
        services: [],
      };
    }
    clusters[entity.zipSlug].services.push({
      name: entity.serviceName,
      slug: entity.serviceSlug,
    });
  }

  return Object.values(clusters).sort((a, b) =>
    a.communityName.localeCompare(b.communityName)
  );
}

export default function LocationsIndexPage() {
  const clusters = buildZipClusters();

  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Service Areas in Greater Tucson
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Intelligent Design provides same-day HVAC, plumbing, solar, electrical, and roofing
            services across all Tucson communities. Find your neighborhood below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {clusters.map((cluster) => (
            <div
              key={cluster.zipSlug}
              className="bg-card border border-border rounded-xl p-5 hover:border-red-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                <div>
                  <h2 className="font-bold text-lg leading-tight">{cluster.communityName}</h2>
                  <p className="text-sm text-muted-foreground">ZIP {cluster.zipCode}</p>
                </div>
              </div>
              <ul className="space-y-1">
                {cluster.services.slice(0, 5).map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      href={`/locations/${cluster.zipSlug}/${svc.slug}`}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-red-600 transition-colors group"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      {svc.name}
                    </Link>
                  </li>
                ))}
                {cluster.services.length > 5 && (
                  <li className="text-sm text-muted-foreground pl-4">
                    +{cluster.services.length - 5} more services
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Don&apos;t see your neighborhood? We serve all of Greater Tucson.
          </p>
          <a
            href="tel:5203332665"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Call (520) 333-2665
          </a>
        </div>
      </div>
    </main>
  );
}
