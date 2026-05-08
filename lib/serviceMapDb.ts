import { neon } from '@neondatabase/serverless';

/**
 * Service Map Database Connection
 * Uses SERVICE_MAP_DATABASE_URL env var (set in Vercel)
 * Falls back gracefully during build time when env var may not be available
 */
export function getServiceMapDb() {
  const url = process.env.SERVICE_MAP_DATABASE_URL;
  if (!url) {
    console.warn('SERVICE_MAP_DATABASE_URL not set - service map data will be empty');
    return null;
  }
  return neon(url);
}
