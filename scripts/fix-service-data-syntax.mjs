import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const servicesDir = path.join(__dirname, '../data/pages/services');

let fixedCount = 0;
let errorCount = 0;

// Read all .ts files in the services directory
const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`Found ${files.length} service files to check...\n`);

files.forEach(file => {
  const filePath = path.join(servicesDir, file);
  const originalContent = fs.readFileSync(filePath, 'utf8');
  let content = originalContent;
  let wasFixed = false;
  
  // Pattern: Remove orphaned objects between sections closing and faqs/commonQuestions
  // This matches: ] closing bracket, }, closing content, then orphaned objects, then faqs:
  const pattern = /(\]\s*\},)\s*\/\/\s*Interactive Content[\s\S]*?(?=\s*faqs:)/;
  
  if (pattern.test(content)) {
    content = content.replace(pattern, '$1\n  ');
    wasFixed = true;
    console.log(`✅ Fixed orphaned objects in: ${file}`);
  }
  
  // Pattern 1.5: Remove duplicate closing braces
  const duplicateClosingBrace = /(\]\s*\},)\s*\},\s*(?=\s*faqs:)/g;
  if (duplicateClosingBrace.test(content)) {
    content = content.replace(duplicateClosingBrace, '$1\n  ');
    wasFixed = true;
    console.log(`✅ Fixed duplicate closing brace in: ${file}`);
  }
  
  // Pattern 2: Fix faqs: [] to faqs: null  
  if (content.includes('faqs: [],')) {
    content = content.replace(/faqs:\s*\[\],/g, 'faqs: null,');
    wasFixed = true;
    console.log(`✅ Fixed faqs: [] in: ${file}`);
  }
  
  // Write the fixed content back if changes were made
  if (wasFixed && content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
  }
});

console.log(`\n✅ Fixed ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);
