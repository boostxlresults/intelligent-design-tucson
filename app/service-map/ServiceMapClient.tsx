'use client';

import { useState, useEffect, useMemo } from 'react';
import { MapPin, Filter, ChevronDown, Calendar, Wrench, Building2, Phone } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues with Leaflet
const ServiceMapLeaflet = dynamic(() => import('./ServiceMapLeaflet'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

interface CheckIn {
  id: number;
  service_type: string;
  business_unit: string;
  description: string;
  city: string;
  state: string;
  zip: string;
  latitude: number | null;
  longitude: number | null;
  completed_at: string;
  images: string;
  tags: string;
}

interface FilterOption {
  name: string;
  count: number;
}

interface Props {
  initialCheckins: CheckIn[];
  stats: { total_jobs: number | string; total_cities: number | string; total_services: number | string };
  filters: { cities: FilterOption[]; services: FilterOption[] };
}

const SERVICE_COLORS: Record<string, string> = {
  'AC Maintenance': '#2563eb',
  'AC Repair': '#dc2626',
  'HVAC Installation': '#7c3aed',
  'HVAC Consultation': '#0891b2',
  'Plumbing': '#059669',
  'Plumbing Installation': '#10b981',
  'Drain & Sewer': '#065f46',
  'Water Heater Service': '#ea580c',
  'Solar Installation': '#eab308',
  'Roofing': '#92400e',
  'Electrical': '#f59e0b',
  'Electrical Installation': '#d97706',
};

export default function ServiceMapClient({ initialCheckins, stats, filters }: Props) {
  const [checkins, setCheckins] = useState<CheckIn[]>(initialCheckins);
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter client-side for initial data
  const filteredCheckins = useMemo(() => {
    return checkins.filter((c) => {
      if (selectedCity !== 'all' && c.city.toLowerCase() !== selectedCity.toLowerCase()) return false;
      if (selectedService !== 'all' && c.service_type.toLowerCase() !== selectedService.toLowerCase()) return false;
      return true;
    });
  }, [checkins, selectedCity, selectedService]);

  // Fetch more data when filters change (server-side for full dataset)
  useEffect(() => {
    if (selectedCity === 'all' && selectedService === 'all') {
      setCheckins(initialCheckins);
      return;
    }

    const fetchFiltered = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedCity !== 'all') params.set('city', selectedCity);
        if (selectedService !== 'all') params.set('service', selectedService);
        params.set('limit', '100');

        const resp = await fetch(`/api/service-map?${params.toString()}`);
        const data = await resp.json();
        setCheckins(data.checkins || []);
      } catch (e) {
        console.error('Error fetching filtered data:', e);
      }
      setLoading(false);
    };

    fetchFiltered();
  }, [selectedCity, selectedService, initialCheckins]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f2744] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Service Map
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Real-time verified job completions across Tucson and surrounding areas. 
            See where our technicians are delivering expert service every day.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400">{Number(stats.total_jobs).toLocaleString()}</div>
              <div className="text-sm text-blue-200">Jobs Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400">{stats.total_cities}</div>
              <div className="text-sm text-blue-200">Cities Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400">{stats.total_services}</div>
              <div className="text-sm text-blue-200">Service Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition md:hidden"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            <div className={`flex flex-wrap gap-3 w-full md:w-auto ${showFilters ? '' : 'hidden md:flex'}`}>
              {/* City Filter */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2 border rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Cities ({stats.total_jobs})</option>
                {filters.cities.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name} ({c.count})
                  </option>
                ))}
              </select>

              {/* Service Filter */}
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-2 border rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Services ({stats.total_jobs})</option>
                {filters.services.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name} ({s.count})
                  </option>
                ))}
              </select>

              {/* Reset */}
              {(selectedCity !== 'all' || selectedService !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedCity('all');
                    setSelectedService('all');
                  }}
                  className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  Clear Filters
                </button>
              )}
            </div>

            <div className="ml-auto text-sm text-gray-500">
              Showing {filteredCheckins.length} check-ins
            </div>
          </div>
        </div>
      </section>

      {/* Map + Cards Layout */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* Interactive Map */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg border">
          <ServiceMapLeaflet
            checkins={filteredCheckins}
            serviceColors={SERVICE_COLORS}
          />
        </div>

        {/* Check-in Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
                <div className="h-20 bg-gray-200 rounded mb-3" />
                <div className="h-3 bg-gray-200 rounded w-1/3" />
              </div>
            ))
          ) : (
            filteredCheckins.map((checkin) => (
              <article
                key={checkin.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100"
              >
                {/* Service Type Badge */}
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: SERVICE_COLORS[checkin.service_type] || '#6b7280' }}
                  >
                    <Wrench className="w-3 h-3" />
                    {checkin.service_type}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{checkin.city}, {checkin.state} {checkin.zip}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-4">
                  {checkin.description}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Completed {formatDate(checkin.completed_at)}</span>
                </div>
              </article>
            ))
          )}
        </div>

        {filteredCheckins.length === 0 && !loading && (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No check-ins found for the selected filters.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e3a5f] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Service in Your Area?</h2>
          <p className="text-blue-200 mb-6">
            Our team of 80+ certified technicians serves all of Greater Tucson 24/7. 
            Schedule your service today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/schedule"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
            >
              Schedule Service
            </a>
            <a
              href="tel:+15203332665"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition"
            >
              <Phone className="w-5 h-5" />
              (520) 333-2665
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
