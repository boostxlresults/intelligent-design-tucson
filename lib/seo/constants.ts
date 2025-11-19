/**
 * Canonical Business Profile for Next.js Migration
 * 
 * Single source of truth for all NAP (Name, Address, Phone) data across all schemas.
 * This will replace client/src/components/schema/constants.ts in the Next.js migration.
 * 
 * CRITICAL: Values match current production data exactly.
 */

export const BUSINESS_INFO = {
  name: "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
  phone: "+1-520-333-2665",
  email: "info@idesignac.com",
  
  address: {
    street: "1145 E Fort Lowell Rd",
    city: "Tucson",
    state: "AZ",
    zip: "85719",
    country: "US"
  },
  
  geo: {
    latitude: 32.2655122,
    longitude: -110.9540688
  }
} as const;
