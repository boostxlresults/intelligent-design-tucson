# Crawled But Not Indexed - Investigation Findings

## Results Summary

All 10 URLs return HTTP 200. Here's why they're not being indexed:

### NOINDEX TAG (4 URLs) - Will be fixed by removing from noindex-service-slugs.json:
1. `/services/east-tucson` - Has noindex tag (location-variant page)
2. `/services/drain-sewer-rillito` - Has noindex tag (location-variant page)
3. `/services/drain-sewer-drexel-heights` - Has noindex tag (location-variant page)
4. `/services/plumbing-saddle-brooke` - Has noindex tag (location-variant page)

### NO NOINDEX (6 URLs) - Google is choosing not to index these:
1. `/blog/hvac/air-conditioning-in-tucson-get-cooler-this-summer` - Indexable, likely thin content or quality issue
2. `/blog/hvac/why-choose-intelligent-design-team-for-your-ac-replacement-n` - Indexable, possibly truncated slug issue
3. `/services/financing` - Indexable, may be seen as low-value utility page
4. `/blog/roofing/preparing-roof-for-monsoon-season` - Indexable, likely needs content refresh
5. `/tortolita` - Indexable, standalone location page
6. `/blog/hvac/most-common-ac-repair-and-what-to-expect` - Indexable, likely needs content enhancement

## Fix Strategy:
- The 4 noindex pages will be fixed when we remove the noindex-service-slugs.json entries
- The 6 indexable-but-not-indexed pages need content quality improvements and internal linking
