# CyberCompass — Regulatory Review Schedule

CyberCompass cites primary regulatory sources across 11 jurisdictions. Those
sources move, get superseded, and change over time. To keep the page trustworthy
between full re-verifications, a **lighter quarterly review** runs on a fixed
cadence.

## Next review

| Field | Value |
|---|---|
| **Next review due** | **2026-11-18** |
| Cadence | Every 3 months |
| Last full verification | 2026-08-18 (all 11 jurisdictions — see `/verification/log.md`) |
| Tracking | GitHub issue (labelled `review`) for the due date |

## What a quarterly review covers

A quarterly review is a **link-check + awareness-check**, not a full re-read of
every source (do that only if something looks off). For each of the 11
jurisdictions, re-check the cited sources for:

1. **Dead or moved links** — every `href` still resolves (browser-confirm the
   ones behind anti-bot CDNs: ISO, IMDRF, gov.br, TGA, NMPA, etc.).
2. **Superseded guidance** — has a cited guidance document been replaced by a
   newer version or withdrawn?
3. **Regulatory change in progress** — known developments that could affect
   clause accuracy, e.g.:
   - EU **Cyber Resilience Act** (2024/2847) phased application dates
   - FDA premarket/PCCP cybersecurity guidance revisions
   - UK **MHRA** dedicated cybersecurity guidance (still outstanding — see the
     UNVERIFIED UK-01.2/02.1/R2 items)
   - National standard updates (e.g. the outstanding Chinese cyber-specific
     standard noted for CN-02.2)

## Process — directive-gated, always

**Every** finding goes through the normal `D-NNN` directive process before any
content change lands — including "obviously correct" link updates. No silent
patches, ever. A review produces an `R-NNN`-style findings report; the Director
issues a directive; the implementor applies and logs it.

## After each review

- Update the **Next review due** date above (+3 months).
- Record the review outcome in `/verification/log.md`.
- Open the next tracking issue.

---

_This cadence is maintained independently for CyberCompass. A parallel rule
exists for RegCompass under its own directive sequence._
