#!/usr/bin/env python3

import os
import re

locations_dir = 'data/pages/locations'
files = [f for f in os.listdir(locations_dir) if f.endswith('.ts') and f != 'index.ts']

print(f"\n🔧 Comprehensively fixing {len(files)} location files...\n")

fixed = 0

for filename in files:
    filepath = os.path.join(locations_dir, filename)
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to fix the ending structure
    # Look for sections array closing, then fix everything until the final closing brace
    pattern = r'(\s+\}\s*\n\s+)\],?\s*\n\s*\},?\s*\n\s*\},?\s*\n\s*(//\s*FAQs?\s*.*?\n\s*faqs:\s*\[\],?\s*\n\s*//\s*NAP\s*\n\s*showOfficeInfo:\s*true\s*\n\};)'
    
    replacement = r'\1]\n  },\n  \n  \2'
    
    new_content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✅ Fixed: {filename}")
        fixed += 1
    else:
        print(f"⏭️  Skipped: {filename}")

print(f"\n{'='*60}")
print(f"✅ Fixed: {fixed} files")
