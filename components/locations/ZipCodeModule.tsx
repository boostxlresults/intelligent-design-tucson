'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Home, Thermometer, CheckCircle2 } from 'lucide-react';
import { getLocationSEOData, formatZipCodesForDisplay } from '@/lib/seo/locationData';

interface ZipCodeModuleProps {
  locationSlug: string;
  locationName: string;
}

export default function ZipCodeModule({ locationSlug, locationName }: ZipCodeModuleProps) {
  const locationData = getLocationSEOData(locationSlug);
  
  if (!locationData) {
    return null;
  }

  return (
    <section id="zip-codes" className="py-16 bg-gradient-to-b from-background to-muted/30 scroll-mt-20" data-testid="section-zip-codes">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold" data-testid="heading-zip-codes">
              Service Areas & ZIP Codes in {locationName}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proudly serving all neighborhoods and ZIP codes throughout {locationName} and surrounding areas
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card data-testid="card-zip-codes">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">ZIP Codes We Serve</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {locationData.zipCodes.slice(0, 12).map((zip) => (
                  <Badge key={zip} variant="outline" className="text-sm">
                    {zip}
                  </Badge>
                ))}
                {locationData.zipCodes.length > 12 && (
                  <Badge variant="secondary" className="text-sm">
                    +{locationData.zipCodes.length - 12} more
                  </Badge>
                )}
              </div>
              {locationData.population && (
                <p className="mt-4 text-sm text-muted-foreground">
                  Serving {locationData.population} residents in {locationName}
                </p>
              )}
            </CardContent>
          </Card>

          <Card data-testid="card-neighborhoods">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Neighborhoods</h3>
              </div>
              <ul className="space-y-2">
                {locationData.neighborhoods.slice(0, 6).map((neighborhood) => (
                  <li key={neighborhood} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{neighborhood}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card data-testid="card-local-info">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Thermometer className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Local Expertise</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {locationData.climateInfo}
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium">Common local issues we address:</p>
                <ul className="space-y-1">
                  {locationData.localIssues.slice(0, 4).map((issue) => (
                    <li key={issue} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {locationData.landmarks.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Serving near popular landmarks: {locationData.landmarks.slice(0, 4).join(' • ')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
