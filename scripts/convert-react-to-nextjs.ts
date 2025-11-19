#!/usr/bin/env tsx

/**
 * React to Next.js Page Converter
 * 
 * Converts React CSR pages to Next.js SSR data structures
 * Extracts: metadata, content, FAQs, images, schemas
 * 
 * Usage:
 *   tsx scripts/convert-react-to-nextjs.ts --type service --file client/src/pages/ACRepair.tsx
 *   tsx scripts/convert-react-to-nextjs.ts --type location --file client/src/pages/Tucson.tsx
 *   tsx scripts/convert-react-to-nextjs.ts --type all
 */

import * as fs from 'fs';
import * as path from 'path';

interface ConversionResult {
  success: boolean;
  file: string;
  output?: string;
  error?: string;
}

// Extract metadata from MetaHead component
function extractMetadata(content: string): {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
} {
  const metadata: any = {};

  // Extract title
  const titleMatch = content.match(/title=["']([^"']+)["']/);
  if (titleMatch) metadata.title = titleMatch[1];

  // Extract description
  const descMatch = content.match(/const description = ['"]([^'"]+)['"]/);
  if (descMatch) metadata.description = descMatch[1];

  // Extract canonical
  const canonicalMatch = content.match(/canonical=["']([^"']+)["']/);
  if (canonicalMatch) metadata.canonical = canonicalMatch[1];

  // Extract OG image
  const ogImageMatch = content.match(/og:image.*?content:.*?imageUrl/);
  if (ogImageMatch) {
    const imageUrlMatch = content.match(/imageUrl = `\$\{SITE_URL\}\$\{([^}]+)\}/);
    if (imageUrlMatch) metadata.ogImage = imageUrlMatch[1];
  }

  // Extract OG image alt
  const ogAltMatch = content.match(/og:image:alt.*?content:.*?["']([^"']+)["']/);
  if (ogAltMatch) metadata.ogImageAlt = ogAltMatch[1];

  return metadata;
}

// Extract H1 heading
function extractH1(content: string): string | null {
  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  return h1Match ? h1Match[1].trim() : null;
}

// Extract hero subheading (usually H2 with text-yellow-400)
function extractSubheading(content: string): string | null {
  const subMatch = content.match(/<p className="text-2xl[^"]*text-yellow-400[^"]*">([^<]+)<\/p>/);
  return subMatch ? subMatch[1].trim() : null;
}

// Extract tagline
function extractTagline(content: string): string | null {
  const tagMatch = content.match(/<p className="text-xl mb-8[^"]*">([^<]+)<\/p>/);
  return tagMatch ? tagMatch[1].trim() : null;
}

// Extract hero image from import or inline style
function extractHeroImage(content: string): {
  src?: string;
  alt?: string;
} {
  const result: any = {};

  // Try multiple patterns for image imports
  // Pattern 1: import xxxImage from '@assets/...'
  let importMatch = content.match(/import (\w+Image) from ["']@assets\/([^"']+)["']/);
  if (importMatch) {
    result.src = `/${importMatch[2]}`;
  }

  // Pattern 2: import { xxx } from '@assets/...'
  if (!result.src) {
    const namedImportMatch = content.match(/import \{ ([^}]+) \} from ["']@assets\/([^"']+)["']/);
    if (namedImportMatch) {
      result.src = `/${namedImportMatch[2]}`;
    }
  }

  // Pattern 3: Check for backgroundImage style with variable
  if (!result.src) {
    const bgMatch = content.match(/backgroundImage: `url\(\$\{(\w+)\}\)`/);
    if (bgMatch) {
      // Try to find where this variable is imported
      const varName = bgMatch[1];
      const varImport = content.match(new RegExp(`import ${varName} from ["']@assets\/([^"']+)["']`));
      if (varImport) {
        result.src = `/${varImport[1]}`;
      }
    }
  }

  // Pattern 4: Direct path in backgroundImage
  if (!result.src) {
    const directBgMatch = content.match(/backgroundImage: ["']url\(([^)]+)\)["']/);
    if (directBgMatch) {
      result.src = directBgMatch[1];
    }
  }

  // Extract alt text from image - try multiple patterns
  let altMatch = content.match(/alt=["']([^"']*(?:technician|service|home|Tucson|Arizona|HVAC|plumb|solar|electric|roof)[^"']*)["']/i);
  if (altMatch) {
    result.alt = altMatch[1];
  }

  // If no alt found, try generic pattern
  if (!result.alt) {
    altMatch = content.match(/heroImageAlt\s*=\s*["']([^"']+)["']/);
    if (altMatch) {
      result.alt = altMatch[1];
    }
  }

  return result;
}

// Extract highlights from CheckCircle2 sections
function extractHighlights(content: string): Array<{ title: string; description: string }> {
  const highlights: Array<{ title: string; description: string }> = [];
  
  const highlightRegex = /<div className="flex gap-3 items-start[^>]*>[\s\S]*?<CheckCircle2[^>]*>[\s\S]*?<p className="font-semibold[^>]*>([^<]+)<\/p>[\s\S]*?<p className="text-sm[^>]*>([^<]+)<\/p>/g;
  
  let match;
  while ((match = highlightRegex.exec(content)) !== null) {
    highlights.push({
      title: match[1].trim(),
      description: match[2].trim()
    });
  }

  return highlights;
}

// Extract FAQ data file references
function extractFAQReference(content: string): string | null {
  const faqMatch = content.match(/import \{ (\w+FAQs) \} from ['"]@\/data\/faqs\/(\w+)['"]/);
  if (faqMatch) {
    return `@/data/faqs/${faqMatch[2]}::${faqMatch[1]}`;
  }
  return null;
}

// Extract CommonQuestions data file references
function extractCommonQuestionsReference(content: string): string | null {
  const cqMatch = content.match(/import \{ (\w+CommonQuestions) \} from ['"]@\/data\/commonQuestions\/(\w+)['"]/);
  if (cqMatch) {
    return `@/data/commonQuestions/${cqMatch[2]}::${cqMatch[1]}`;
  }
  return null;
}

// Convert service page
function convertServicePage(filePath: string): ConversionResult {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath, '.tsx');
    
    // Extract all data
    const metadata = extractMetadata(content);
    const h1 = extractH1(content);
    const subheading = extractSubheading(content);
    const tagline = extractTagline(content);
    const heroImage = extractHeroImage(content);
    const highlights = extractHighlights(content);
    const faqRef = extractFAQReference(content);
    const cqRef = extractCommonQuestionsReference(content);

    // Generate slug from canonical URL or fileName
    let slug = '';
    if (metadata.canonical) {
      slug = metadata.canonical.replace('https://www.idesignac.com/', '').replace(/^\//, '');
    } else {
      // Convert camelCase to kebab-case properly
      slug = fileName
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, ''); // Remove leading dash
    }

    // Determine service name and category
    const serviceName = fileName.replace(/([A-Z])/g, ' $1').trim();
    let category: 'HVAC' | 'Plumbing' | 'Solar' | 'Electrical' | 'Roofing' = 'HVAC';
    
    if (fileName.toLowerCase().includes('plumb') || fileName.toLowerCase().includes('drain')) {
      category = 'Plumbing';
    } else if (fileName.toLowerCase().includes('solar') || fileName.toLowerCase().includes('generator')) {
      category = 'Solar';
    } else if (fileName.toLowerCase().includes('electric') || fileName.toLowerCase().includes('panel')) {
      category = 'Electrical';
    } else if (fileName.toLowerCase().includes('roof')) {
      category = 'Roofing';
    }

    // Build TypeScript data structure
    const dataStructure = `
// Auto-generated from ${fileName}.tsx
import type { ServicePageData } from '@/types/services';
${faqRef ? `import { ${faqRef.split('::')[1]} } from '${faqRef.split('::')[0]}';` : ''}
${cqRef ? `import { ${cqRef.split('::')[1]} } from '${cqRef.split('::')[0]}';` : ''}

export const ${fileName.toLowerCase()}Data: ServicePageData = {
  // SEO & Meta
  title: ${metadata.title ? `'${metadata.title}'` : `'${serviceName}'`},
  description: ${metadata.description ? `'${metadata.description}'` : `'${serviceName} in Tucson, AZ'`},
  slug: '${slug}',
  
  // Hero Section
  h1: ${h1 ? `'${h1}'` : `'${serviceName}'`},
  h2Subheading: ${subheading ? `'${subheading}'` : `'Expert ${serviceName} in Tucson'`},
  tagline: ${tagline ? `'${tagline}'` : `'24/7 Service | Expert Technicians'`},
  heroImage: ${heroImage.src ? `'${heroImage.src}'` : `'/images/placeholder.webp'`},
  heroImageAlt: ${heroImage.alt ? `'${heroImage.alt}'` : `'${serviceName} in Tucson'`},
  
  // Service Info
  serviceName: '${serviceName}',
  category: '${category}',
  
  // Content
  highlights: ${JSON.stringify(highlights, null, 2)},
  content: {
    mainHeading: 'Best ${serviceName} Company in Tucson, AZ',
    sections: [
      // TODO: Extract content sections from React page
    ]
  },
  
  // Interactive Content
  faqs: ${faqRef ? faqRef.split('::')[1] : '[]'},
  commonQuestions: ${cqRef ? cqRef.split('::')[1] : '[]'},
};
`;

    // Write output file
    const outputDir = 'nextjs-app/data/pages/services';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, `${fileName.toLowerCase()}.ts`);
    fs.writeFileSync(outputPath, dataStructure);

    return {
      success: true,
      file: filePath,
      output: outputPath
    };

  } catch (error: any) {
    return {
      success: false,
      file: filePath,
      error: error.message
    };
  }
}

// Convert location page
function convertLocationPage(filePath: string): ConversionResult {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath, '.tsx');
    
    const metadata = extractMetadata(content);
    const h1 = extractH1(content);
    const tagline = extractTagline(content);
    const heroImage = extractHeroImage(content);

    // Extract location name and generate slug
    const locationName = fileName.replace(/([A-Z])/g, ' $1').trim();
    let slug = '';
    if (metadata.canonical) {
      slug = metadata.canonical.replace('https://www.idesignac.com/', '').replace(/^\//, '');
    } else {
      // Convert camelCase to kebab-case properly
      slug = fileName
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, ''); // Remove leading dash
    }

    // Extract services grid
    const servicesRegex = /{\s*icon:\s*(\w+),\s*title:\s*["']([^"']+)["'],\s*description:\s*["']([^"']+)["'],\s*link:\s*["']([^"']+)["']\s*}/g;
    const services: any[] = [];
    let match;
    while ((match = servicesRegex.exec(content)) !== null) {
      services.push({
        icon: match[1],
        title: match[2],
        description: match[3],
        link: match[4]
      });
    }

    const dataStructure = `
// Auto-generated from ${fileName}.tsx
import type { LocationPageData } from '@/types/services';

export const ${fileName.toLowerCase()}Data: LocationPageData = {
  // SEO & Meta
  title: ${metadata.title ? `'${metadata.title}'` : `'${locationName} Home Services'`},
  description: ${metadata.description ? `'${metadata.description}'` : `'Home services in ${locationName}, AZ'`},
  slug: '${slug}',
  
  // Hero Section
  h1: ${h1 ? `'${h1}'` : `'${locationName} Home Services'`},
  tagline: ${tagline ? `'${tagline}'` : `'Proudly Serving ${locationName} Since 1979'`},
  heroImage: ${heroImage.src ? `'${heroImage.src}'` : `'/images/placeholder.webp'`},
  heroImageAlt: ${heroImage.alt ? `'${heroImage.alt}'` : `'${locationName} Arizona skyline'`},
  
  // Location Info
  locationName: '${locationName}',
  locationDisplayName: '${locationName}, AZ',
  
  // Services
  services: ${JSON.stringify(services, null, 2)},
  
  // Content
  content: {
    sections: []
  },
  
  // FAQ
  faqs: [
    // TODO: Extract FAQs from useEffect schema
  ],
  
  // NAP
  showOfficeInfo: true
};
`;

    const outputDir = 'nextjs-app/data/pages/locations';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, `${fileName.toLowerCase()}.ts`);
    fs.writeFileSync(outputPath, dataStructure);

    return {
      success: true,
      file: filePath,
      output: outputPath
    };

  } catch (error: any) {
    return {
      success: false,
      file: filePath,
      error: error.message
    };
  }
}

// Main conversion logic
async function main() {
  const args = process.argv.slice(2);
  const typeArg = args.find(arg => arg.startsWith('--type='))?.split('=')[1];
  const fileArg = args.find(arg => arg.startsWith('--file='))?.split('=')[1];

  if (!typeArg) {
    console.log('Usage: tsx scripts/convert-react-to-nextjs.ts --type=<service|location|all> [--file=<path>]');
    process.exit(1);
  }

  const results: ConversionResult[] = [];

  if (fileArg) {
    // Convert single file
    console.log(`Converting ${fileArg}...`);
    
    if (typeArg === 'service') {
      results.push(convertServicePage(fileArg));
    } else if (typeArg === 'location') {
      results.push(convertLocationPage(fileArg));
    }
  } else if (typeArg === 'all') {
    // Convert all files
    console.log('Converting all React pages to Next.js...\n');
    
    const pagesDir = 'client/src/pages';
    const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

    // Categorize files (simple heuristic based on naming patterns)
    const locationPages = ['Tucson', 'OroValley', 'Marana', 'Sahuarita', 'Vail', 'CatalinaFoothills', 'GreenValley', 'TanqueVerde', 'CasasAdobes', 'AvraValley', 'RitaRanch', 'Flowing Wells', 'Catalina', 'DrexelHeights', 'SummitView', 'Corona de Tucson', 'SouthTucson', 'TortolitaMountains', 'SierraMojena', 'PictureRocks'];
    
    for (const file of files) {
      const fileName = path.basename(file, '.tsx');
      const filePath = path.join(pagesDir, file);

      // Skip non-page files
      if (['not-found', 'App', 'BlogIndex', 'BlogCategory', 'BlogPost', 'AreasWeServe', 'AboutUs', 'Careers', 'Contact', 'Privacy', 'Terms'].includes(fileName)) {
        continue;
      }

      // Determine page type
      if (locationPages.includes(fileName)) {
        console.log(`[LOCATION] Converting ${file}...`);
        results.push(convertLocationPage(filePath));
      } else {
        console.log(`[SERVICE] Converting ${file}...`);
        results.push(convertServicePage(filePath));
      }
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('CONVERSION SUMMARY');
  console.log('='.repeat(60));
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`✅ Successful: ${successful.length}`);
  console.log(`❌ Failed: ${failed.length}`);
  console.log(`📊 Total: ${results.length}`);

  if (successful.length > 0) {
    console.log('\n✅ Successfully converted:');
    successful.forEach(r => {
      console.log(`   ${path.basename(r.file)} → ${r.output}`);
    });
  }

  if (failed.length > 0) {
    console.log('\n❌ Failed conversions:');
    failed.forEach(r => {
      console.log(`   ${path.basename(r.file)}: ${r.error}`);
    });
  }

  console.log('\n' + '='.repeat(60));
}

main().catch(console.error);
