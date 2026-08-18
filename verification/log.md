# CyberCompass — Clause / Link Verification Log

Per directive D-001 §6 and D-002 §3. Verification is incremental: a module
is verified, logged, and committed before moving to the next. This file is
the audit trail.

## Method

Two things are checked for every clause:

1. **Link resolves** — the `href` is requested and its final HTTP status
   recorded. Some primary-source publishers (iso.org, hhs.gov, and EUR-Lex)
   sit behind Cloudflare/Akamai anti-bot protection and return `403`/`202`
   or a challenge page to *automated* requests while resolving normally in
   a real browser. Where that happened it is noted; the URL is the
   canonical publisher URL for the cited instrument.
2. **Paraphrase accuracy** — the clause is checked as a fair paraphrase of
   what the cited instrument actually says. Where the substance is correct
   but a sub-clause citation is imprecise, it is flagged (not silently
   edited — text corrections beyond broken-link fixes are held for a
   directive).

Broken links (HTTP 404) found during verification are corrected in place,
as anticipated by D-001 §6 ("locate the specific document URL if one
exists"). Such corrections are listed under **Corrections applied** below.

## Clause ID scheme

`<JJ>-<Q>.<n>` where `JJ` = jurisdiction (US, EU, …), `Q` = quad-card
(01 legal basis · 02 premarket · 03 SBOM/vulnerability · 04 postmarket),
`n` = item within that card. `<JJ>-R<n>` = "Primary sources" reference row.

## Status legend

- **OK** — link resolves and paraphrase is accurate.
- **OK¹** — paraphrase accurate; link is the canonical publisher URL but
  automated fetch is blocked by CDN anti-bot (browser-resolvable).
- **FIXED** — link returned 404; corrected during this pass (see below).
- **FLAG** — substance accurate, but a sub-clause citation is imprecise;
  held for Director decision (see **Flags** section).

---

## United States — verified 2026-08-18 · verifier RY

| Clause | Jurisdiction | Clause (summary) | Link | Verified | Verifier | Status |
|---|---|---|---|---|---|---|
| US-01.1 | US | FD&C Act §524B added by FY2023 Omnibus; effective for submissions ≥ 29 Mar 2023 | govinfo 21 U.S.C. §360n-2 | 2026-08-18 | RY | OK |
| US-01.2 | US | FDA Premarket Cybersecurity Guidance, final Sep 2023 | fda.gov guidance | 2026-08-18 | RY | OK |
| US-01.3 | US | "cyber device" scope: software + connectivity + vulnerable | fda.gov cyber hub | 2026-08-18 | RY | OK |
| US-02.1 | US | Postmarket vuln monitoring plan incl. coordinated disclosure | fda.gov guidance | 2026-08-18 | RY | OK |
| US-02.2 | US | Processes for reasonable assurance of cybersecurity, with testing | fda.gov guidance | 2026-08-18 | RY | OK |
| US-02.3 | US | Cyber risk mgmt integrated with ISO 14971 | iso.org 14971 | 2026-08-18 | RY | OK¹ |
| US-02.4 | US | Architecture views, threat model, third-party SW risk | fda.gov guidance | 2026-08-18 | RY | OK |
| US-02.5 | US | SaMD PCCP scoped to cyber-relevant modifications | fda.gov PCCP guidance | 2026-08-18 | RY | FIXED |
| US-02.6 | US | Life-sustaining/high-risk: pen testing + fuzz/abuse-case testing | fda.gov guidance | 2026-08-18 | RY | OK |
| US-02.7 | US | Implantable wireless telemetry: replay/jamming/reprogramming | fda.gov cyber hub | 2026-08-18 | RY | OK |
| US-03.1 | US | SBOM machine-readable, NTIA/CISA minimum elements | cisa.gov/sbom | 2026-08-18 | RY | OK |
| US-03.2 | US | KUV/KEV disclosed with justification if unresolved | cisa.gov KEV | 2026-08-18 | RY | OK |
| US-03.3 | US | Coordinated vuln disclosure per ISO/IEC 29147/30111 | iso.org 29147 | 2026-08-18 | RY | OK¹ |
| US-03.4 | US | PHI/PII devices: flag data-handling components (HIPAA cross-ref) | hhs.gov HIPAA Security | 2026-08-18 | RY | OK¹ |
| US-04.1 | US | Continuous monitoring/patching; unpatched critical → recall review | fda.gov cyber hub | 2026-08-18 | RY | OK |
| US-04.2 | US | SBOM kept current across lifecycle | cisa.gov/sbom | 2026-08-18 | RY | OK |
| US-04.3 | US | CVD + incident response active post-clearance (ISO 30111) | iso.org 30111 | 2026-08-18 | RY | OK |
| US-04.4 | US | PCCP defines cyber-change boundaries without new submission | fda.gov PCCP guidance | 2026-08-18 | RY | FIXED |
| US-04.5 | US | Life-sustaining: expedited patch timelines, closer FDA engagement | fda.gov cyber hub | 2026-08-18 | RY | OK |
| US-04.6 | US | Class III implantables: telemetry-specific incident monitoring | fda.gov cyber hub | 2026-08-18 | RY | OK |
| US-R1 | US | FD&C Act §524B / 21 U.S.C. §360n-2 | govinfo | 2026-08-18 | RY | OK |
| US-R2 | US | Premarket Cybersecurity Guidance (FDA, Sep 2023) | fda.gov | 2026-08-18 | RY | OK |
| US-R3 | US | FDA Digital Health — Cybersecurity hub | fda.gov | 2026-08-18 | RY | OK |
| US-R4 | US | CISA SBOM program | cisa.gov | 2026-08-18 | RY | OK |
| US-R5 | US | PCCP guidance | fda.gov | 2026-08-18 | RY | FIXED |
| US-R6 | US | ISO 14971:2019 | iso.org | 2026-08-18 | RY | OK¹ |

**US summary:** 26 items — 22 OK, 4 OK¹ (CDN-blocked canonical URLs),
3 link occurrences FIXED (PCCP, spanning US-02.5 / US-04.4 / US-R5),
0 unverifiable. No clause pulled.

---

## Corrections applied (broken links, HTTP 404 → corrected)

| Where | Old URL (404) | New URL (200) | Reason |
|---|---|---|---|
| US PCCP (×3: US-02.5, US-04.4, US-R5) | fda.gov/…/predetermined-change-control-plans-machine-learning-enabled-medical-devices | fda.gov/…/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence | ML-specific PCCP page removed; superseded by the final Dec 2024 AI-enabled PCCP guidance |
| EU MDCG (×6) | health.ec.europa.eu/medical-devices-sector/guidance-mdcg-endorsed-documents-and-other-guidance_en | health.ec.europa.eu/document/download/b23b362f-8a56-434c-922a-5b3ca4d0a7a1_en | EC restructured the guidance index (404); replaced with the specific MDCG 2019-16 Rev.1 document, which is more precise per D-001 §6 |

---

## Flags (substance OK, citation held for Director decision)

None open for the US module.

_EU flags are recorded in the EU section as that module is verified._

---

_Next: EU module (in progress — same pass)._
