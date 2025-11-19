/**
 * Service Registry - Centralized service data loader
 * Provides canonical service information for navigation, redirects, and pages
 */

import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

export interface ServiceRegistryEntry {
  slug: string;
  title: string;
  category: string;
  serviceName: string;
}

let cachedRegistry: ServiceRegistryEntry[] | null = null;

/**
 * Load all service data from data/pages/services/*.ts files
 * Caches results for performance
 */
export function getServiceRegistry(): ServiceRegistryEntry[] {
  if (cachedRegistry) {
    return cachedRegistry;
  }

  const registry: ServiceRegistryEntry[] = [];
  const servicesDir = join(process.cwd(), 'data', 'pages', 'services');
  
  try {
    const files = readdirSync(servicesDir).filter(f => f.endsWith('.ts'));
    
    for (const file of files) {
      const content = readFileSync(join(servicesDir, file), 'utf-8');
      
      const slugMatch = content.match(/slug:\s*['"]([^'"]+)['"]/);
      const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
      const categoryMatch = content.match(/category:\s*['"]([^'"]+)['"]/);
      const serviceNameMatch = content.match(/serviceName:\s*['"]([^'"]+)['"]/);
      
      if (slugMatch && titleMatch) {
        registry.push({
          slug: slugMatch[1],
          title: titleMatch[1],
          category: categoryMatch ? categoryMatch[1] : 'General',
          serviceName: serviceNameMatch ? serviceNameMatch[1] : titleMatch[1]
        });
      }
    }
    
    cachedRegistry = registry;
  } catch (error) {
    console.error('Error loading service registry:', error);
  }
  
  return registry;
}

/**
 * Get services filtered by category
 */
export function getServicesByCategory(category: string): ServiceRegistryEntry[] {
  const registry = getServiceRegistry();
  return registry.filter(s => s.category === category);
}

/**
 * Get plumbing services for navigation
 */
export function getPlumbingServices(): ServiceRegistryEntry[] {
  return getServicesByCategory('Plumbing');
}

/**
 * Get roofing services for navigation
 */
export function getRoofingServices(): ServiceRegistryEntry[] {
  return getServicesByCategory('Roofing');
}

/**
 * Get HVAC services for navigation
 */
export function getHVACServices(): ServiceRegistryEntry[] {
  return getServicesByCategory('HVAC');
}

/**
 * Get electrical services for navigation
 */
export function getElectricalServices(): ServiceRegistryEntry[] {
  return getServicesByCategory('Electrical');
}

/**
 * Get solar services for navigation
 */
export function getSolarServices(): ServiceRegistryEntry[] {
  return getServicesByCategory('Solar');
}
