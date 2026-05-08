'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface CheckIn {
  id: number;
  service_type: string;
  city: string;
  state: string;
  zip: string;
  latitude: number | null;
  longitude: number | null;
  description: string;
  completed_at: string;
}

interface Props {
  checkins: CheckIn[];
  serviceColors: Record<string, string>;
}

// Default coordinates for Tucson area cities when lat/lng not available
const CITY_COORDS: Record<string, [number, number]> = {
  'Tucson': [32.2226, -110.9747],
  'Marana': [32.4365, -111.2253],
  'Oro Valley': [32.3909, -110.9665],
  'Green Valley': [31.8542, -111.0002],
  'Vail': [32.0478, -110.7110],
  'Sahuarita': [31.9576, -110.9554],
  'Corona de Tucson': [31.9600, -110.7800],
  'Oracle': [32.6109, -110.7720],
  'Saddlebrooke': [32.5300, -110.8700],
  'Red Rock': [32.5000, -111.2500],
  'Casas Adobes': [32.3417, -111.0108],
  'Sierra Vista': [31.5455, -110.3035],
  'TUCSON': [32.2226, -110.9747],
  'Valencia West': [32.1200, -111.1000],
  'Hereford': [31.4300, -110.2100],
};

function getCoords(checkin: CheckIn): [number, number] | null {
  if (checkin.latitude && checkin.longitude) {
    return [checkin.latitude, checkin.longitude];
  }
  // Fallback to city center with random offset for visual spread
  const cityCoords = CITY_COORDS[checkin.city];
  if (cityCoords) {
    const offset = () => (Math.random() - 0.5) * 0.04; // ~2km spread
    return [cityCoords[0] + offset(), cityCoords[1] + offset()];
  }
  return null;
}

export default function ServiceMapLeaflet({ checkins, serviceColors }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map only once
    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current, {
        center: [32.2226, -110.9747], // Tucson center
        zoom: 10,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(mapInstance.current);

      markersRef.current = L.layerGroup().addTo(mapInstance.current);
    }

    // Clear existing markers
    if (markersRef.current) {
      markersRef.current.clearLayers();
    }

    // Add markers for each check-in
    const bounds: L.LatLngExpression[] = [];

    checkins.forEach((checkin) => {
      const coords = getCoords(checkin);
      if (!coords || !markersRef.current) return;

      bounds.push(coords);

      const color = serviceColors[checkin.service_type] || '#6b7280';
      const date = new Date(checkin.completed_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

      // Create custom circle marker
      const marker = L.circleMarker(coords, {
        radius: 8,
        fillColor: color,
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.85,
      });

      marker.bindPopup(`
        <div style="min-width: 200px; font-family: system-ui, sans-serif;">
          <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: ${color};">
            ${checkin.service_type}
          </div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">
            ${checkin.city}, ${checkin.state} ${checkin.zip} • ${date}
          </div>
          <div style="font-size: 13px; color: #374151; line-height: 1.4;">
            ${checkin.description?.substring(0, 150)}${checkin.description?.length > 150 ? '...' : ''}
          </div>
        </div>
      `);

      markersRef.current.addLayer(marker);
    });

    // Fit bounds if we have markers
    if (bounds.length > 0 && mapInstance.current) {
      mapInstance.current.fitBounds(bounds as L.LatLngBoundsExpression, {
        padding: [30, 30],
        maxZoom: 12,
      });
    }
  }, [checkins, serviceColors]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapRef} className="w-full h-[500px]" />
  );
}
