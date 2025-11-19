#!/usr/bin/env node

/**
 * Automated Data File Syntax Fixer v3
 * 
 * Fixes structural errors in service data files:
 * - Removes duplicate closing braces/brackets in content.sections
 * - Removes nested array wrappers around list items
 * - Fixes faqs: [] to faqs: null
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'pages', 'services');

let filesFixed = 0;
let errorsFixed = 0;

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let fileErrorCount = 0;

  // Fix 1: Remove duplicate closing braces/brackets pattern
  const pattern1 = /(\])\n(\s+)(},)\n(\])\n(\s+)(},)/g;
  const fixed1 = content.replace(pattern1, (match, bracket1, spaces1, brace1, bracket2, spaces2, brace2) => {
    fileErrorCount++;
    return `${bracket1}\n${spaces2}},`;
  });
  
  if (fixed1 !== content) {
    content = fixed1;
  }

  // Fix 2: Remove nested array wrapper around list items
  // Pattern: },\n      [\n            {\n            "type": "list"
  // Should be: },\n      {\n            "type": "list"
  const pattern2 = /(},)\n(\s+)(\[)\n(\s+)({\n\s+"type":\s+"list")/g;
  const fixed2 = content.replace(pattern2, (match, comma, spaces1, bracket, spaces2, listContent) => {
    fileErrorCount++;
    return `${comma}\n${spaces1}${listContent}`;
  });

  if (fixed2 !== content) {
    content = fixed2;
  }

  // Fix 3: Remove closing bracket before list item closing brace
  // Pattern: }\n      ],\n      {  (after a list item)
  // Should be: },\n      {
  const pattern3 = /(}\n\s+)(\],)\n(\s+)({)/g;
  const fixed3 = content.replace(pattern3, (match, brace, bracket, spaces, nextBrace) => {
    fileErrorCount++;
    return `},\n${spaces}${nextBrace}`;
  });

  if (fixed3 !== content) {
    content = fixed3;
  }

  // Fix 4: Change faqs: [] to faqs: null
  const pattern4 = /(\n\s+faqs:\s+)\[\]/g;
  const fixed4 = content.replace(pattern4, (match, prefix) => {
    fileErrorCount++;
    return `${prefix}null`;
  });

  if (fixed4 !== content) {
    content = fixed4;
  }

  // Save if changes were made
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesFixed++;
    errorsFixed += fileErrorCount;
    console.log(`✓ Fixed ${fileErrorCount} error(s) in ${path.basename(filePath)}`);
    return true;
  }

  return false;
}

function main() {
  console.log('🔧 Starting automated data file syntax fixes (v3)...\n');

  // Get all .ts files in the data directory
  const files = fs.readdirSync(DATA_DIR)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts')
    .map(file => path.join(DATA_DIR, file));

  console.log(`Found ${files.length} data files to check\n`);

  // Process each file
  files.forEach(file => {
    try {
      fixFile(file);
    } catch (error) {
      console.error(`✗ Error processing ${path.basename(file)}:`, error.message);
    }
  });

  console.log(`\n✅ Complete!`);
  console.log(`   Files fixed: ${filesFixed}`);
  console.log(`   Total errors fixed: ${errorsFixed}`);

  if (filesFixed === 0) {
    console.log('\n   No syntax errors found - all files are clean!');
  }
}

main();
