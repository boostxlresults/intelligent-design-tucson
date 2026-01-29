import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Wrench, MapPin } from 'lucide-react';
import { 
  getRelatedServicesForCategory, 
  getServiceHubForCategory,
  getTopServiceAreas 
} from '@/lib/seo/internalLinking';

interface RelatedServicesProps {
  category: string;
}

export default function RelatedServices({ category }: RelatedServicesProps) {
  const serviceHub = getServiceHubForCategory(category);
  const relatedServices = getRelatedServicesForCategory(category);
  const topAreas = getTopServiceAreas(5);

  return (
    <aside className="mt-12 pt-8 border-t" data-testid="related-services-section">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold">Related Services</h3>
          </div>
          <Card className="p-4">
            <Link 
              href={serviceHub.url}
              className="block mb-4 group"
              data-testid="link-service-hub"
            >
              <Badge variant="default" className="mb-2">
                {serviceHub.name}
              </Badge>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Explore all our {serviceHub.name.toLowerCase()} offerings
                <ArrowRight className="inline-block h-4 w-4 ml-1" />
              </p>
            </Link>
            <div className="space-y-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.url}
                  href={service.url}
                  className="flex items-start gap-3 p-2 rounded-md hover-elevate"
                  data-testid={`link-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex-1">
                    <p className="font-medium text-sm">{service.name}</p>
                    <p className="text-xs text-muted-foreground">{service.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground mt-1" />
                </Link>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold">Areas We Serve</h3>
          </div>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground mb-4">
              Proudly serving Tucson and surrounding communities with expert home services.
            </p>
            <div className="flex flex-wrap gap-2">
              {topAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  data-testid={`link-area-${area.slug}`}
                >
                  <Badge variant="outline" className="cursor-pointer">
                    {area.name}
                  </Badge>
                </Link>
              ))}
              <Link href="/service-areas" data-testid="link-all-areas">
                <Badge variant="secondary" className="cursor-pointer">
                  View All Areas
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Badge>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </aside>
  );
}
