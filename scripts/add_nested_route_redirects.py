"""
Add redirects for /services/[service]/[location] nested route URLs.
These redirect to the flat /services/{service}-{location} equivalents.
"""
import json
import os
import re

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Load service-locations manifest
with open('data/pages/service-locations/manifest.json') as f:
    svc_loc_manifest = json.load(f)

# Read existing redirects
with open('lib/redirects.ts') as f:
    content = f.read()

# Extract existing source paths
existing_sources = set(re.findall(r"'(/[^']+)':\s*'", content))
print(f"Existing redirect sources: {len(existing_sources)}")

# Build new redirects for nested route
new_entries = []
for entry in svc_loc_manifest:
    source = f"/services/{entry['service']}/{entry['location']}"
    # The flat slug destination - need to find the correct canonical slug
    flat_slug = f"{entry['service']}-{entry['location']}"
    dest = f"/services/{flat_slug}"
    
    if source not in existing_sources:
        new_entries.append((source, dest))

print(f"New nested route redirects to add: {len(new_entries)}")

if new_entries:
    # Generate TypeScript entries
    ts_entries = []
    for source, dest in sorted(new_entries):
        ts_entries.append(f"  '{source}': '{dest}',")
    
    # Insert before the closing };
    insertion_block = "\n  // ===== NESTED SERVICE/LOCATION ROUTE MIGRATION (added 2026-05-07) =====\n"
    insertion_block += "\n".join(ts_entries)
    insertion_block += "\n"
    
    insert_pos = content.rfind("};")
    new_content = content[:insert_pos] + insertion_block + content[insert_pos:]
    
    with open('lib/redirects.ts', 'w') as f:
        f.write(new_content)
    
    print(f"Successfully added {len(new_entries)} nested route redirect entries")
else:
    print("All nested route redirects already exist - no changes needed")
