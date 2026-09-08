#!/usr/bin/env node
/**
 * Guard: every phone number rendered on this site must be the ServiceTitan DNI
 * SOURCE number, (520) 333-2665.
 *
 * WHY THIS EXISTS
 * ServiceTitan DNI is a find-and-replace against one configured source number.
 * It does not swap arbitrary numbers. Any page that hardcodes a different number
 * silently loses click-level attribution: DNI loads, finds nothing to replace,
 * and every call from that page arrives with no gclid/fbclid. Google Ads then
 * reports zero conversions from a page that is actually ringing the phone.
 *
 * That is not hypothetical. /lp/ac-not-cooling shipped (520) 812-3470, took 87
 * paid clicks in a week, produced a call, and reported zero conversions.
 * /ac-tune-up-2888 and /drain-clearing-4888 had the same defect.
 *
 * So: new pages get (520) 333-2665 in the markup. DNI swaps it per session for a
 * pool number carrying the visitor's click id. If you need a campaign-specific
 * number in the markup instead, it must first be added to the DNI swap-source
 * list in ServiceTitan (tenant 227669022) — then add it to ALLOWED below.
 *
 * Run: npm run check:phones   (also runs automatically before every build)
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOTS = ["app", "components", "lib", "data"];
const EXTS = new Set([".ts", ".tsx", ".js", ".jsx"]);

/** Numbers permitted in a tel: link. Add here ONLY after the number is a
 *  confirmed DNI swap source in ServiceTitan. */
const ALLOWED = new Set([
  "5203332665",    // DNI source, bare format — what DNI actually swaps
  "+15203332665",  // E.164, used in schema.org "telephone" fields (not swapped, correct there)
]);

const TEL = /tel:(\+?\d[\d\-().\s]{6,})/g;

/** Visible display numbers. Any (520) NNN-NNNN that is not the source number.
 *  This second check exists because display strings once used a NON-BREAKING
 *  SPACE — "(520)\u00a0201-8588" — which slipped past every plain-text search and
 *  left a stale campaign number rendering next to a correctly swapped one.
 *  \s matches \u00a0, so this catches it. */
const DISPLAY = /\(520\)(?:\s|&nbsp;|&#160;)?(\d{3}-\d{4})/g;
const SOURCE_DISPLAY = "333-2665";

/** A NON-BREAKING SPACE inside a displayed phone number stops DNI dead.
 *  DNI matches the literal string "(520) 333-2665" with a normal space; given
 *  "(520)\u00a0333-2665" it finds nothing and leaves the number unswapped, so the
 *  page shows a correctly swapped number in one place and the raw company line
 *  in another. Found live on /ac-tune-up-2888. Always use a normal space. */
const NBSP_PHONE = /\(520\)(?:&nbsp;|&#160;|\u00a0)\d{3}-\d{4}/g;

/** Files allowed to mention other numbers: campaignPhones documents the
 *  ServiceTitan tracking numbers on purpose; the inventory form uses a
 *  555 placeholder in a form field. */
const EXEMPT_FILES = [
  "lib/campaignPhones.ts",
  "components/forms/HVACInventoryForm.tsx",
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next" || name.startsWith(".")) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (EXTS.has(extname(p))) out.push(p);
  }
  return out;
}

const violations = [];
for (const root of ROOTS) {
  let files = [];
  try { files = walk(root); } catch { continue; }
  for (const file of files) {
    const src = readFileSync(file, "utf8");
    const lines = src.split("\n");
    lines.forEach((line, i) => {
      // skip comment lines - they document past numbers on purpose
      const t = line.trim();
      if (t.startsWith("*") || t.startsWith("//") || t.startsWith("/*")) return;
      for (const m of line.matchAll(TEL)) {
        const digits = m[1].replace(/[^\d+]/g, "");
        if (!ALLOWED.has(digits)) {
          violations.push({ file, line: i + 1, found: digits, text: t.slice(0, 110) });
        }
      }
      for (const m of line.matchAll(NBSP_PHONE)) {
        violations.push({
          file, line: i + 1,
          found: "non-breaking space in a phone number — DNI cannot swap it",
          text: t.slice(0, 110),
        });
      }
      if (!EXEMPT_FILES.some((e) => file.replace(/\\/g, "/").endsWith(e))) {
        for (const m of line.matchAll(DISPLAY)) {
          if (m[1] !== SOURCE_DISPLAY) {
            violations.push({ file, line: i + 1, found: `(520) ${m[1]} (displayed)`, text: t.slice(0, 110) });
          }
        }
      }
    });
  }
}

if (violations.length) {
  console.error("\n❌  Phone number guard FAILED — these are not the DNI source number.\n");
  console.error("    ServiceTitan DNI can only swap (520) 333-2665. Any other number in a");
  console.error("    tel: link means calls from that page carry no click id, and Google Ads");
  console.error("    and Meta will both report zero conversions from it.\n");
  for (const v of violations) {
    console.error(`    ${v.file}:${v.line}  ->  ${v.found}`);
    console.error(`      ${v.text}`);
  }
  console.error("\n    Fix: use (520) 333-2665 / tel:5203332665.");
  console.error("    Or, if the number IS a confirmed DNI swap source in ServiceTitan,");
  console.error("    add it to ALLOWED in scripts/check-phone-numbers.mjs and say why.\n");
  process.exit(1);
}
console.log("✅  Phone guard: all tel: links use the DNI source number (520) 333-2665.");
