/**
 * FAQ Audit Script
 * 
 * Scans all service pages to:
 * 1. Count FAQ questions rendered on each page
 * 2. Verify presence of FAQ schema components
 * 3. Identify pages missing FAQs or below minimum 11 questions
 * 
 * Usage: tsx scripts/auditFAQs.ts
 */

import * as fs from 'fs';
import * as path from 'path';

interface FAQAuditResult {
  pageName: string;
  filePath: string;
  hasVisualFAQs: boolean;
  visualFAQCount: number;
  hasSchemaComponent: boolean;
  schemaFAQCount: number;
  meetsMinimum: boolean; // At least 11 questions
  notes: string[];
}

const SERVICE_PAGES_DIR = path.join(process.cwd(), 'client', 'src', 'pages');
const SCHEMA_COMPONENTS_DIR = path.join(process.cwd(), 'client', 'src', 'components');

// Exclude non-service pages
const EXCLUDED_PAGES = [
  'Home.tsx',
  'AboutUs.tsx',
  'Contact.tsx',
  'Careers.tsx',
  'Financing.tsx',
  'Guarantees.tsx',
  'CustomerReviews.tsx',
  'VideoTestimonials.tsx',
  'RecentProjects.tsx',
  'Resources.tsx',
  'AreasWeServe.tsx',
  'BlogCategory.tsx',
  'BlogIndex.tsx',
  'BlogPost.tsx',
  'KnowledgeHub.tsx',
  'not-found.tsx',
  'WhyTucsonChoosesIntelligentDesign.tsx',
  'NewHomebuyerOffer.tsx',
  'RealtorsOffer.tsx',
  'FamilyProtectionPlans.tsx'
];

// City silo pages (should also have FAQs eventually)
const CITY_PAGES = [
  'Tucson.tsx',
  'OroValley.tsx',
  'Marana.tsx',
  'Vail.tsx',
  'Sahuarita.tsx',
  'GreenValley.tsx',
  'AvraValley.tsx',
  'CasasAdobes.tsx',
  'Catalina.tsx',
  'CoronaDeTucson.tsx',
  'Cortaro.tsx',
  'DrexelHeights.tsx',
  'PictureRocks.tsx',
  'Rillito.tsx',
  'Tortolita.tsx',
  'TucsonEstates.tsx'
];

/**
 * Count FAQ questions rendered in page TSX
 */
function countVisualFAQs(content: string): number {
  // Look for patterns like:
  // <h3>Question text?</h3> followed by answer paragraphs
  // Or FAQ question headers
  const questionPatterns = [
    /<h[23][^>]*>[^<]*\?[^<]*<\/h[23]>/gi,  // H2/H3 with question marks
    /question:\s*["']([^"']+\?)/gi,          // question: "text?" in data
    /"name":\s*"[^"]+\?"/g                    // JSON schema questions
  ];
  
  let maxCount = 0;
  for (const pattern of questionPatterns) {
    const matches = content.match(pattern);
    if (matches) {
      maxCount = Math.max(maxCount, matches.length);
    }
  }
  
  return maxCount;
}

/**
 * Count FAQ questions in schema component
 */
function countSchemaFAQs(schemaPath: string): number {
  if (!fs.existsSync(schemaPath)) {
    return 0;
  }
  
  const content = fs.readFileSync(schemaPath, 'utf-8');
  
  // Look for FAQ schema mainEntity array items
  const questionMatches = content.match(/"@type":\s*"Question"/g);
  return questionMatches ? questionMatches.length : 0;
}

/**
 * Find schema component for a page
 */
function findSchemaComponent(pageName: string): string | null {
  // Convert page name to schema component name
  // e.g., ACRepair.tsx -> ACRepairSchema.tsx
  const schemaName = pageName.replace('.tsx', 'Schema.tsx');
  const schemaPath = path.join(SCHEMA_COMPONENTS_DIR, schemaName);
  
  if (fs.existsSync(schemaPath)) {
    return schemaPath;
  }
  
  return null;
}

/**
 * Audit a single page
 */
function auditPage(filePath: string, pageName: string): FAQAuditResult {
  const content = fs.readFileSync(filePath, 'utf-8');
  const visualFAQCount = countVisualFAQs(content);
  const schemaPath = findSchemaComponent(pageName);
  const schemaFAQCount = schemaPath ? countSchemaFAQs(schemaPath) : 0;
  
  const notes: string[] = [];
  const hasVisualFAQs = visualFAQCount > 0;
  const hasSchemaComponent = schemaPath !== null;
  const meetsMinimum = visualFAQCount >= 11 && schemaFAQCount >= 11;
  
  if (!hasVisualFAQs) {
    notes.push('No visual FAQs found on page');
  } else if (visualFAQCount < 11) {
    notes.push(`Only ${visualFAQCount} visual FAQs (need 11 minimum)`);
  }
  
  if (!hasSchemaComponent) {
    notes.push('No schema component found');
  } else if (schemaFAQCount === 0) {
    notes.push('Schema component exists but no FAQ schema found');
  } else if (schemaFAQCount < 11) {
    notes.push(`Only ${schemaFAQCount} schema FAQs (need 11 minimum)`);
  }
  
  if (hasVisualFAQs && hasSchemaComponent && visualFAQCount !== schemaFAQCount) {
    notes.push(`Mismatch: ${visualFAQCount} visual vs ${schemaFAQCount} schema FAQs`);
  }
  
  return {
    pageName,
    filePath,
    hasVisualFAQs,
    visualFAQCount,
    hasSchemaComponent,
    schemaFAQCount,
    meetsMinimum,
    notes
  };
}

/**
 * Run full audit
 */
function runAudit() {
  console.log('🔍 Starting FAQ Audit...\n');
  
  const files = fs.readdirSync(SERVICE_PAGES_DIR).filter(f => f.endsWith('.tsx'));
  
  // Categorize pages
  const servicePages = files.filter(f => 
    !EXCLUDED_PAGES.includes(f) && !CITY_PAGES.includes(f)
  );
  
  const cityPages = files.filter(f => CITY_PAGES.includes(f));
  
  console.log(`📊 Found ${servicePages.length} service pages and ${cityPages.length} city pages to audit\n`);
  
  // Audit service pages
  console.log('=== SERVICE PAGES ===\n');
  const serviceResults: FAQAuditResult[] = [];
  
  for (const file of servicePages) {
    const filePath = path.join(SERVICE_PAGES_DIR, file);
    const result = auditPage(filePath, file);
    serviceResults.push(result);
  }
  
  // Sort by FAQ count (descending)
  serviceResults.sort((a, b) => b.visualFAQCount - a.visualFAQCount);
  
  // Display results
  for (const result of serviceResults) {
    const status = result.meetsMinimum ? '✅' : result.hasVisualFAQs ? '⚠️' : '❌';
    console.log(`${status} ${result.pageName}`);
    console.log(`   Visual FAQs: ${result.visualFAQCount} | Schema FAQs: ${result.schemaFAQCount}`);
    if (result.notes.length > 0) {
      result.notes.forEach(note => console.log(`   ⚠️  ${note}`));
    }
    console.log('');
  }
  
  // Summary statistics
  console.log('=== SERVICE PAGES SUMMARY ===\n');
  const withFAQs = serviceResults.filter(r => r.hasVisualFAQs).length;
  const withSchema = serviceResults.filter(r => r.hasSchemaComponent).length;
  const meetingMin = serviceResults.filter(r => r.meetsMinimum).length;
  const needWork = serviceResults.filter(r => !r.meetsMinimum).length;
  
  console.log(`Total Service Pages: ${serviceResults.length}`);
  console.log(`✅ With Visual FAQs: ${withFAQs} (${Math.round(withFAQs/serviceResults.length*100)}%)`);
  console.log(`✅ With FAQ Schema: ${withSchema} (${Math.round(withSchema/serviceResults.length*100)}%)`);
  console.log(`✅ Meeting Minimum (11+ FAQs): ${meetingMin} (${Math.round(meetingMin/serviceResults.length*100)}%)`);
  console.log(`⚠️  Need Work: ${needWork}\n`);
  
  // Audit city pages
  console.log('=== CITY PAGES ===\n');
  const cityResults: FAQAuditResult[] = [];
  
  for (const file of cityPages) {
    const filePath = path.join(SERVICE_PAGES_DIR, file);
    const result = auditPage(filePath, file);
    cityResults.push(result);
  }
  
  cityResults.sort((a, b) => b.visualFAQCount - a.visualFAQCount);
  
  for (const result of cityResults) {
    const status = result.meetsMinimum ? '✅' : result.hasVisualFAQs ? '⚠️' : '❌';
    console.log(`${status} ${result.pageName}`);
    console.log(`   Visual FAQs: ${result.visualFAQCount} | Schema FAQs: ${result.schemaFAQCount}`);
    if (result.notes.length > 0) {
      result.notes.forEach(note => console.log(`   ⚠️  ${note}`));
    }
    console.log('');
  }
  
  const cityWithFAQs = cityResults.filter(r => r.hasVisualFAQs).length;
  console.log(`\n📊 City Pages with FAQs: ${cityWithFAQs}/${cityResults.length}\n`);
  
  // Priority recommendations
  console.log('=== PRIORITY RECOMMENDATIONS ===\n');
  
  const highPriority = serviceResults.filter(r => !r.hasVisualFAQs).slice(0, 10);
  if (highPriority.length > 0) {
    console.log('🔴 HIGH PRIORITY - Add FAQs to these service pages:');
    highPriority.forEach(r => console.log(`   - ${r.pageName}`));
    console.log('');
  }
  
  const mediumPriority = serviceResults.filter(r => r.hasVisualFAQs && r.visualFAQCount < 11).slice(0, 10);
  if (mediumPriority.length > 0) {
    console.log('🟡 MEDIUM PRIORITY - Expand to 11+ FAQs:');
    mediumPriority.forEach(r => console.log(`   - ${r.pageName} (currently ${r.visualFAQCount} FAQs)`));
    console.log('');
  }
  
  const schemaMismatch = serviceResults.filter(r => 
    r.hasVisualFAQs && r.hasSchemaComponent && r.visualFAQCount !== r.schemaFAQCount
  );
  if (schemaMismatch.length > 0) {
    console.log('⚠️  SCHEMA MISMATCH - Visual/Schema FAQ count mismatch:');
    schemaMismatch.forEach(r => 
      console.log(`   - ${r.pageName} (${r.visualFAQCount} visual vs ${r.schemaFAQCount} schema)`)
    );
    console.log('');
  }
  
  console.log('✨ Audit Complete!\n');
}

// Run the audit
runAudit();
