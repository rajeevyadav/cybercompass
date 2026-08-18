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
- **OK²** — a previously-flagged citation was corrected under a directive
  and re-verified.

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

## European Union — verified 2026-08-18 · verifier RY

| Clause | Jurisdiction | Clause (summary) | Link | Verified | Verifier | Status |
|---|---|---|---|---|---|---|
| EU-01.1 | EU | MDR Annex I GSPR "17.2 and 17.4" — IT security & unauthorised-access protection | eur-lex 2017/745 | 2026-08-18 | RY | OK² |
| EU-01.2 | EU | MDCG 2019-16 rev.1 — Guidance on Cybersecurity (state of the art) | ec.europa.eu MDCG | 2026-08-18 | RY | FIXED |
| EU-01.3 | EU | CRA (EU) 2024/2847 overlay; defined interface with MDR/IVDR | eur-lex 2024/2847 | 2026-08-18 | RY | OK |
| EU-02.1 | EU | Secure design/manufacture (state of the art); IT security documented | eur-lex 2017/745 | 2026-08-18 | RY | OK |
| EU-02.2 | EU | ISO 14971 must incorporate cybersecurity as a risk source | iso.org 14971 | 2026-08-18 | RY | OK¹ |
| EU-02.3 | EU | Technical docs describe minimum IT requirements | eur-lex 2017/745 (Annex II) | 2026-08-18 | RY | OK |
| EU-02.4 | EU | Auth/access control must not undermine safe use (human factors) | iso.org 62366-1 | 2026-08-18 | RY | OK |
| EU-02.5 | EU | AI Act overlay: high-risk AI Art 6(1), Art 15 cybersecurity (clause text also cites "GSPR 17.2/17.3") | eur-lex 2024/1689 | 2026-08-18 | RY | FLAG |
| EU-02.6 | EU | Class IIb/III life-sustaining: deeper NB cyber scrutiny | ec.europa.eu MDCG | 2026-08-18 | RY | FIXED |
| EU-02.7 | EU | Active implantable telemetry under GSPR 17.2 | eur-lex 2017/745 | 2026-08-18 | RY | OK |
| EU-03.1 | EU | MDCG expects software-component inventory (SBOM-equivalent) | ec.europa.eu MDCG | 2026-08-18 | RY | FIXED |
| EU-03.2 | EU | Integrity/authenticity of software & data verifiable (now §17.4) | eur-lex 2017/745 | 2026-08-18 | RY | OK² |
| EU-03.3 | EU | Vuln handling per ISO/IEC 29147/30111 | iso.org 29147 | 2026-08-18 | RY | OK¹ |
| EU-03.4 | EU | Health-data devices: cross-ref GDPR Art 32 | eur-lex 2016/679 | 2026-08-18 | RY | OK |
| EU-04.1 | EU | PMS plan must capture cybersecurity signals (Art 83–86) | eur-lex 2017/745 | 2026-08-18 | RY | OK |
| EU-04.2 | EU | Serious cyber incidents reportable under vigilance (Art 87) | eur-lex 2017/745 | 2026-08-18 | RY | OK |
| EU-04.3 | EU | FSCAs may be triggered by unmitigated critical vulns (Art 89) | eur-lex 2017/745 | 2026-08-18 | RY | OK |
| EU-04.4 | EU | NB reassessment where cyber posture materially changes | ec.europa.eu MDCG | 2026-08-18 | RY | FIXED |
| EU-04.5 | EU | Class III implantables: telemetry-specific PMS monitoring | ec.europa.eu MDCG | 2026-08-18 | RY | FIXED |
| EU-R1 | EU | Regulation (EU) 2017/745 (MDR) — "Annex I §17.2/17.4" | eur-lex | 2026-08-18 | RY | OK² |
| EU-R2 | EU | MDCG 2019-16 rev.1 — Cybersecurity guidance | ec.europa.eu | 2026-08-18 | RY | FIXED |
| EU-R3 | EU | Cyber Resilience Act (EU) 2024/2847 | eur-lex | 2026-08-18 | RY | OK |
| EU-R4 | EU | EU AI Act (EU) 2024/1689 | eur-lex | 2026-08-18 | RY | OK |
| EU-R5 | EU | GDPR (EU) 2016/679, Art 32 | eur-lex | 2026-08-18 | RY | OK |
| EU-R6 | EU | ISO 14971:2019 | iso.org | 2026-08-18 | RY | OK¹ |

**EU summary (updated D-003):** 25 items — 12 OK, 3 OK¹ (CDN-blocked
canonical URLs), 3 OK² (MDR §17.3→§17.4 citation corrected & re-verified:
EU-01.1/03.2/R1), 6 link occurrences FIXED (MDCG, spanning
EU-01.2/02.6/03.1/04.4/04.5/R2), 1 FLAG (EU-02.5 — newly found, awaiting
sign-off). 0 unverifiable. No clause pulled.

EUR-Lex `/eli/reg/...` URLs return `202`/interstitial to automated requests
but were browser-confirmed (page titles: "Regulation - 2017/745 … Medical
Device Regulation", "…2024/2847…", "…2024/1689…", "…2016/679 … gdpr").

---

## Corrections applied (broken links, HTTP 404 → corrected)

| Where | Old URL (404) | New URL (200) | Reason |
|---|---|---|---|
| US PCCP (×3: US-02.5, US-04.4, US-R5) | fda.gov/…/predetermined-change-control-plans-machine-learning-enabled-medical-devices | fda.gov/…/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence | ML-specific PCCP page removed; superseded by the final Dec 2024 AI-enabled PCCP guidance |
| EU MDCG (×6) | health.ec.europa.eu/medical-devices-sector/guidance-mdcg-endorsed-documents-and-other-guidance_en | health.ec.europa.eu/document/download/b23b362f-8a56-434c-922a-5b3ca4d0a7a1_en | EC restructured the guidance index (404); replaced with the specific MDCG 2019-16 Rev.1 document, which is more precise per D-001 §6 |

---

## Flags (substance OK, citation held for Director decision)

**US:** none.

**EU — MDR Annex I §17.3 → §17.4 (EU-01.1, EU-03.2, EU-R1): RESOLVED under
D-003.** Approved and applied; the three citations now read §17.4 (or
§17.2/§17.4). Status updated to OK². Reference mapping retained for the
record:

- §17.2 — software developed to the state of the art incl. *information
  security*, verification and validation;
- §17.3 — software for use with **mobile computing platforms** / external
  factors (*not* the IT-security clause);
- §17.4 — **minimum IT security measures, including protection against
  unauthorised access**.

**EU — NEW, awaiting Director sign-off (EU-02.5).** While applying the D-003
fix, a fourth same-issue occurrence surfaced that was **not** in the R-002
flag set: the AI-Act-overlay clause text reads "…apply in addition to
**GSPR 17.2/17.3**." By the mapping above this should be **17.2/17.4**.
Per D-003 §5 it is left unchanged and flagged rather than silently
corrected. Recommended fix (on sign-off): "17.2/17.3" → "17.2/17.4".

**Pre-flag for UK module (not yet verified).** A fifth occurrence exists in
the UK module ("mirror EU GSPR **17.2/17.3** in substance"). It will be
assessed and flagged when the UK jurisdiction is verified.

---

## Progress

- [x] US module — verified & logged (commit `d317df4`)
- [x] EU module — verified & logged
- [ ] Remaining 9 jurisdictions (UK, CA, JP, CN, AU, KR, SG, BR, IN)
