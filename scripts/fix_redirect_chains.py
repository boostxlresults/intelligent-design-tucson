#!/usr/bin/env python3
"""
Fix redirect chains in lib/redirects.ts
Updates first-hop redirects to point directly to the final destination,
eliminating unnecessary intermediate hops.
"""
import re
import csv

# Read the 404 report
urls_404 = []
with open('/home/ubuntu/upload/404reportidesignac.csv', 'r') as f:
    reader = csv.reader(f)
    next(reader)
    for row in reader:
        if row:
            url = row[0].strip()
            path = url.replace('https://www.idesignac.com', '')
            if path.endswith('/') and path != '/':
                path = path[:-1]
            urls_404.append(path)

# Read existing redirects
with open('lib/redirects.ts', 'r') as f:
    content = f.read()

existing_redirects = {}
for match in re.finditer(r"'([^']+)':\s*'([^']+)'", content):
    existing_redirects[match.group(1)] = match.group(2)

# Find the final destination for each chain
def resolve_chain(path, redirects, max_depth=5):
    visited = set()
    current = path
    for _ in range(max_depth):
        if current in visited:
            break
        visited.add(current)
        dest = redirects.get(current)
        if dest is None:
            return current
        current = dest
    return current

# Generate fixes for chains
fixes = {}
for path in urls_404:
    dest1 = existing_redirects.get(path)
    if dest1:
        final = resolve_chain(path, existing_redirects)
        if final != dest1 and final != path:
            fixes[path] = (dest1, final)

# Apply fixes to the file content
modified_content = content
for src, (old_dest, new_dest) in fixes.items():
    # Escape special regex chars in the source path
    escaped_src = re.escape(src)
    escaped_old = re.escape(old_dest)
    # Replace the redirect destination
    pattern = f"'{src}': '{old_dest}'"
    replacement = f"'{src}': '{new_dest}'"
    if pattern in modified_content:
        modified_content = modified_content.replace(pattern, replacement, 1)
        print(f"  Fixed: '{src}': '{old_dest}' -> '{new_dest}'")
    else:
        print(f"  WARN: Could not find pattern for '{src}'")

# Also handle the /blog/drain-cleaning-solutions-that-actually-work and /blog/permit-to-install-a-new-water-heater chains
additional_blog_fixes = {
    '/blog/permit-to-install-a-new-water-heater': '/blog/water-heater/permit-to-install-a-new-water-heater',
    '/blog/drain-cleaning-solutions-that-actually-work': '/blog/drain-sewer/drain-cleaning-solutions-that-actually-work',
}

for src, new_dest in additional_blog_fixes.items():
    old_dest = existing_redirects.get(src)
    if old_dest and old_dest != new_dest:
        pattern = f"'{src}': '{old_dest}'"
        replacement = f"'{src}': '{new_dest}'"
        if pattern in modified_content:
            modified_content = modified_content.replace(pattern, replacement, 1)
            print(f"  Fixed: '{src}': '{old_dest}' -> '{new_dest}'")

# Write the modified content
with open('lib/redirects.ts', 'w') as f:
    f.write(modified_content)

print(f"\nTotal fixes applied: {len(fixes) + len(additional_blog_fixes)}")
print("Done!")
