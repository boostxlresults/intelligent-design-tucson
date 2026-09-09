# idesignac.com — conventions

## 1. Phone numbers: ALWAYS (520) 333-2665

**Every page renders `(520) 333-2665` / `tel:5203332665`. No exceptions without a ServiceTitan change first.**

This is the ServiceTitan **DNI source number** — the one number DNI is configured
to find and replace. DNI is a find-and-replace; it does not swap arbitrary
numbers. A page that hardcodes any other number loses click-level attribution
entirely: DNI loads, finds nothing to replace, and every call from that page
arrives with no `gclid`/`fbclid`. Google Ads and Meta both then report zero
conversions from a page that is really ringing the phone.

This has bitten us three times:
- `/lp/ac-not-cooling` shipped (520) 812-3470 → 87 paid clicks in a week, a real
  call, **zero** conversions reported in Google Ads.
- `/ac-tune-up-2888` shipped (520) 201-8588 → same defect.
- `/drain-clearing-4888` shipped (520) 348-6684 → same defect.

Rules:
- New page, any type, paid or organic: `(520) 333-2665`, `tel:5203332665`.
- Use the **bare** format in `href` (`tel:5203332665`). DNI does not match
  `tel:+1...`. The `+1` E.164 form is correct **only** inside schema.org
  `"telephone"` fields, which are not swapped.
- Never render a campaign tracking number unless it has first been added to the
  DNI swap-source list in ServiceTitan (tenant 227669022). If it has, add it to
  `ALLOWED` in `scripts/check-phone-numbers.mjs` with a note explaining why.
- `lib/campaignPhones.ts` is the single source: import `DNI_SOURCE_PHONE`.
- **Never use `&nbsp;` (or a literal non-breaking space) inside a phone number.**
  DNI matches the literal string `(520) 333-2665` with a normal space. Given
  `(520)&nbsp;333-2665` it finds nothing, so the number never swaps and the page
  ends up showing a swapped number in one place and the raw company line in
  another. This shipped live on `/ac-tune-up-2888` and is easy to miss, because
  a non-breaking space also defeats ordinary find-and-replace.

Enforced by `scripts/check-phone-numbers.mjs`, which runs on `prebuild`. A
violation fails the build, which is intentional — a failed build does not
promote, so production stays safe while the number gets fixed.

`components/integrations/DNIInjector.tsx` must load on **every** page. It once
had a path exclusion that silently disabled DNI across all of `/lp/*`. Do not
reintroduce one. The per-page `strategy` switch in that file is about how *early*
the script loads, not *whether* it loads.

## 2. Review ratings: one source of truth

Every `aggregateRating` imports from `data/reviews.ts`. Do not hardcode
`ratingValue`/`reviewCount` anywhere else — six divergent values once shipped
simultaneously and two contradicted each other inside the homepage's own HTML.
Composite is 4.96 / 23,417, weighted and documented in that file.

## 3. Service pages are manifest-driven

To add `/services/<slug>`: create `data/pages/services/<name>.ts`, export it from
`data/pages/services/index.ts`, and add the slug to
`data/pages/services/manifest.json`. Sitemap, schema and static params follow
automatically. Give every page **unique** FAQs — they generate FAQPage schema and
duplicates across pages are a real risk.

Nav lives in a local `const` inside `components/layout/Header.tsx`, not the
(unused) export in `lib/navigation.ts`.

## 4. H1s

Keyword first, then the visitor's pain, then a same-day promise. Target ≤70
characters:

> AC Repair in Tucson - System Down? Cool Again Today.

**Use a plain hyphen, not an em dash.** All 89 H1s were once shipped with `—`
between the clauses; across a whole site that punctuation reads as machine-
written, and it was not what the source copy used. Same applies to new marketing
copy. Existing body prose already uses em dashes in places and is being left as
it is; the point is not to add more.

Do not lead with the company name; nobody searches for it. Titles are separate
and already keyword-first with a single brand suffix, so do not add a second.
