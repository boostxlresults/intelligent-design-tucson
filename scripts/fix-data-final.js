#!/usr/bin/env node

/**
 * Final Comprehensive Data File Syntax Fixer
 * Handles ALL remaining syntax error patterns
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'pages', 'services');
let filesFixed = 0;
let totalErrors = 0;

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  let errors = 0;

  // Fix 1: Unescaped apostrophes in tagline/strings
  // Pattern: Tucson's -> Tucson\'s
  content = content.replace(/(tagline:\s*')([^']*?)('s)([^']*?')/g, (match, prefix, before, apos, after) => {
    errors++;
    return `${prefix}${before}\\'s${after}`;
  });

  // Fix 2: Missing comma after list item closing brace
  // Pattern: }\n      ],\n      { -> },\n      {
  content = content.replace(/(}\n\s+)(\],\n\s+)({)/g, (match, brace, bracket, next) => {
    errors++;
    return `},\n      ${next}`;
  });

  // Fix 3: Remove nested array wrapper around list items
  // Pattern: },\n      [\n            { -> },\n      {
  content = content.replace(/(},\n)(\s+)(\[\n\s+)({\n\s+"type":\s+"list")/g, (match, comma, spaces, bracket, list) => {
    errors++;
    return `${comma}${spaces}${list}`;
  });

  // Fix 4: Extra closing brackets in sections
  // Pattern: ]\n      }\n]\n  }, -> ]\n  },
  content = content.replace(/(\])\n(\s+)(}\n)(\])\n(\s+)(},)/g, (match, b1, s1, brace, b2, s2, close) => {
    errors++;
    return `${b1}\n${s2}},`;
  });

  // Fix 5: Missing comma before closing sections bracket
  // Pattern: ]\n      }\n] -> ],\n      }\n
  content = content.replace(/(\])\n(\s+)(})\n(\])\n(\s+)(},\n\s+\/\/ Interactive)/g, (match, b1, s1, brace, b2, s2, comment) => {
    errors++;
    return `],\n${s1}}\n${s2}${comment}`;
  });

  // Fix 6: Change faqs: [] to faqs: null
  content = content.replace(/(\n\s+faqs:\s+)\[\]/g, (match, prefix) => {
    errors++;
    return `${prefix}null`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesFixed++;
    totalErrors += errors;
    console.log(`✓ Fixed ${errors} error(s) in ${path.basename(filePath)}`);
    return true;
  }
  return false;
}

console.log('🔧 Final comprehensive data file syntax fixes...\n');

const files = fs.readdirSync(DATA_DIR)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .map(f => path.join(DATA_DIR, f));

console.log(`Checking ${files.length} files...\n`);

files.forEach(file => {
  try { fixFile(file); }
  catch (e) { console.error(`✗ Error in ${path.basename(file)}:`, e.message); }
});

console.log(`\n✅ Complete! Files: ${filesFixed}, Errors: ${totalErrors}`);
