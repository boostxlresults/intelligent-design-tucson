#!/usr/bin/env python3
"""
Script to update SEO metadata for roofing service pages.
Applies the exact pattern from ResidentialRoofRepair.tsx to remaining pages.
"""

import re

# Page configurations
PAGES = [
    {
        'file': 'client/src/pages/CommercialRoofReplacement.tsx',
        'schema_component': 'CommercialRoofReplacementSchema',
        'hero_var': 'roofReplacementHero',
        'page_title': 'Commercial Roof Replacement Tucson AZ | Complete Business Roof Replacement',
        'description': 'Complete commercial roof replacement in Tucson. TPO, EPDM, modified bitumen systems. Minimal downtime, project management, warranties. Call (520) 333-2665 for free assessment.',
        'url': 'commercial-roof-replacement-tucson',
        'og_image_alt': 'Commercial roof replacement project in progress in Tucson',
    },
    {
        'file': 'client/src/pages/CommercialRoofCoating.tsx',
        'schema_component': 'CommercialRoofCoatingSchema',
        'hero_var': 'roofCoatingHero',
        'page_title': 'Commercial Roof Coating Tucson AZ | Cool Roof Coatings & Energy Savings',
        'description': 'Commercial roof coating in Tucson. Cool roof technology, extend roof life 10-20 years, reduce energy costs. TPO, EPDM, metal coatings. Call (520) 333-2665 for free assessment.',
        'url': 'commercial-roof-coating-tucson',
        'og_image_alt': 'Commercial roof coating application on building in Tucson',
    },
    {
        'file': 'client/src/pages/CommercialRoofInspection.tsx',
        'schema_component': 'CommercialRoofInspectionSchema',
        'hero_var': 'roofInspectionHero',
        'page_title': 'Commercial Roof Inspection Tucson AZ | Professional Roof Assessment',
        'description': 'Professional commercial roof inspection in Tucson. Preventative maintenance, detailed reports, moisture surveys, property management services. Call (520) 333-2665 to schedule inspection.',
        'url': 'commercial-roof-inspection-tucson',
        'og_image_alt': 'Professional inspector examining commercial roof in Tucson',
    },
    {
        'file': 'client/src/pages/FlatRoofs.tsx',
        'schema_component': 'FlatRoofsSchema',
        'hero_var': 'flatRoofHero',
        'page_title': 'Flat Roof Repair & Installation Tucson AZ | TPO, EPDM, Modified Bitumen',
        'description': 'Expert flat roof systems in Tucson. TPO, EPDM, modified bitumen installation & repair for commercial and residential. Superior drainage solutions. 45+ years experience. Call (520) 333-2665.',
        'url': 'flat-roof-repair-tucson',
        'og_image_alt': 'Modern flat roof system installed on commercial building in Tucson',
    },
    {
        'file': 'client/src/pages/ShingleRoofs.tsx',
        'schema_component': 'ShingleRoofsSchema',
        'hero_var': 'shingleRoofHero',
        'page_title': 'Shingle Roof Installation & Repair Tucson AZ | Asphalt Roofing Experts',
        'description': 'Expert shingle roofing in Tucson. Installation, repair, replacement. Premium asphalt shingles, energy-efficient options, warranties. 45+ years experience. Call (520) 333-2665 for free estimate.',
        'url': 'shingle-roofs-tucson',
        'og_image_alt': 'Quality asphalt shingle roof installation on Tucson home',
    },
    {
        'file': 'client/src/pages/TileRoofs.tsx',
        'schema_component': 'TileRoofsSchema',
        'hero_var': 'tileRoofHero',
        'page_title': 'Tile Roofing Tucson AZ | Clay & Concrete Tile Roof Installation & Repair',
        'description': 'Expert tile roofing in Tucson. Clay and concrete tile installation, repair, replacement. Desert-proven durability, energy efficiency. 45+ years experience. Call (520) 333-2665 for consultation.',
        'url': 'tile-roofing-tucson',
        'og_image_alt': 'Beautiful clay tile roof on Tucson home with desert landscape',
    },
    {
        'file': 'client/src/pages/PitchedRoofs.tsx',
        'schema_component': 'PitchedRoofsSchema',
        'hero_var': 'pitchedRoofHero',
        'page_title': 'Pitched Roof Installation & Repair Tucson AZ | Sloped Roofing Systems',
        'description': 'Expert pitched roof systems in Tucson. Installation, repair for sloped roofs. Tile, shingle, metal options. Superior drainage, ventilation. 45+ years experience. Call (520) 333-2665 for estimate.',
        'url': 'pitched-roofs-tucson',
        'og_image_alt': 'Well-constructed pitched roof on residential home in Tucson',
    },
    {
        'file': 'client/src/pages/MetalRoofs.tsx',
        'schema_component': 'MetalRoofsSchema',
        'hero_var': 'metalRoofHero',
        'page_title': 'Metal Roofing Tucson AZ | Steel & Aluminum Roof Installation & Repair',
        'description': 'Expert metal roofing in Tucson. Steel, aluminum installation & repair. Energy-efficient, durable, long-lasting. Commercial & residential. 45+ years experience. Call (520) 333-2665 for quote.',
        'url': 'metal-roofing-tucson',
        'og_image_alt': 'Modern metal roofing system installed on building in Tucson',
    },
]


def update_page(config):
    """Update a single page with complete SEO metadata."""
    with open(config['file'], 'r') as f:
        content = f.read()
    
    # 1. Add schema component import
    import_section = re.search(r'(import DNIInjector from.*?;\n)', content)
    if import_section and config['schema_component'] not in content:
        new_import = f"import {config['schema_component']} from '@/components/{config['schema_component']}';\n"
        content = content.replace(
            import_section.group(1),
            import_section.group(1) + new_import
        )
    
    # 2. Replace useEffect content with complete SEO implementation
    use_effect_pattern = r'useEffect\(\(\) => \{.*?^  \}, \[\]\);'
    
    new_use_effect = f'''useEffect(() => {{
    document.title = "{config['page_title']}";
    
    const description = '{config['description']}';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {{
      metaDescription.setAttribute('content', description);
    }} else {{
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }}

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {{
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }}
    canonical.href = 'https://www.idesignac.com/{config['url']}';

    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robots) {{
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }}
    robots.content = 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large';

    const imageUrl = new URL({config['hero_var']}, window.location.origin).href;
    
    const ogTags = [
      {{ property: 'og:locale', content: 'en_US' }},
      {{ property: 'og:type', content: 'website' }},
      {{ property: 'og:title', content: '{config['page_title']}' }},
      {{ property: 'og:description', content: description }},
      {{ property: 'og:url', content: 'https://www.idesignac.com/{config['url']}' }},
      {{ property: 'og:site_name', content: 'Intelligent Design' }},
      {{ property: 'og:image', content: imageUrl }},
      {{ property: 'og:image:width', content: '1920' }},
      {{ property: 'og:image:height', content: '1080' }},
      {{ property: 'og:image:alt', content: '{config['og_image_alt']}' }}
    ];

    ogTags.forEach(({{ property, content }}) => {{
      let tag = document.querySelector(`meta[property="${{property}}"]`) as HTMLMetaElement;
      if (!tag) {{
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('data-page-meta', '');
        document.head.appendChild(tag);
      }}
      tag.content = content;
      tag.setAttribute('data-page-meta', '');
    }});

    const twitterTags = [
      {{ name: 'twitter:card', content: 'summary_large_image' }},
      {{ name: 'twitter:title', content: '{config['page_title']}' }},
      {{ name: 'twitter:description', content: description }},
      {{ name: 'twitter:image', content: imageUrl }},
      {{ name: 'twitter:image:alt', content: '{config['og_image_alt']}' }}
    ];

    twitterTags.forEach(({{ name, content }}) => {{
      let tag = document.querySelector(`meta[name="${{name}}"]`) as HTMLMetaElement;
      if (!tag) {{
        tag = document.createElement('meta');
        tag.name = name;
        tag.setAttribute('data-page-meta', '');
        document.head.appendChild(tag);
      }}
      tag.content = content;
      tag.setAttribute('data-page-meta', '');
    }});

    return () => {{
      document.querySelectorAll('[data-page-meta]').forEach(el => el.remove());
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
    }};
  }}, []);'''
    
    content = re.sub(use_effect_pattern, new_use_effect, content, flags=re.DOTALL | re.MULTILINE)
    
    # 3. Update return statement to include schema component
    return_pattern = r'(<GTM />\n\s+<DNIInjector />)\n\s+<Header />'
    return_replacement = f'\\1\\n      <{config["schema_component"]} />\\n      <Header />'
    content = re.sub(return_pattern, return_replacement, content)
    
    # 4. Remove embedded schema code if it exists outside component function
    # Find the end of the component function
    component_end_pattern = r'}\nexport default'
    match = re.search(component_end_pattern, content)
    if match:
        # Everything after the first closing brace of component but before export should be removed
        # Actually, let's just find where the function closes and trim there
        pass
    
    # Find and remove any schemas array and forEach that's still in the file
    content = re.sub(r'const schemas = \[.*?\];.*?schemas\.forEach.*?\}\);', '', content, flags=re.DOTALL)
    
    with open(config['file'], 'w') as f:
        f.write(content)
    
    print(f"✓ Updated {config['file']}")


def main():
    """Update all pages."""
    print("Updating SEO metadata for all roofing pages...\n")
    for config in PAGES:
        try:
            update_page(config)
        except Exception as e:
            print(f"✗ Error updating {config['file']}: {e}")
    print("\n✓ All pages updated successfully!")


if __name__ == '__main__':
    main()
