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
- **UNVERIFIED** — source link is dead and/or the claim cannot be confirmed
  against a current primary source; marked "unverified — pending review"
  per D-001 §6. Not silently repointed — held for Director decision.

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
| EU-02.5 | EU | AI Act overlay: high-risk AI Art 6(1), Art 15 cybersecurity (citation now "GSPR 17.2/17.4") | eur-lex 2024/1689 | 2026-08-18 | RY | OK² |
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
canonical URLs), 4 OK² (MDR §17.3→§17.4 citation corrected & re-verified:
EU-01.1/03.2/R1 under D-003, EU-02.5 under D-004), 6 link occurrences FIXED
(MDCG, spanning EU-01.2/02.6/03.1/04.4/04.5/R2), 0 FLAG. 0 unverifiable.
No clause pulled.

EUR-Lex `/eli/reg/...` URLs return `202`/interstitial to automated requests
but were browser-confirmed (page titles: "Regulation - 2017/745 … Medical
Device Regulation", "…2024/2847…", "…2024/1689…", "…2016/679 … gdpr").

---

## United Kingdom — verified 2026-08-18 · verifier RY

| Clause | Jurisdiction | Clause (summary) | Link | Verified | Verifier | Status |
|---|---|---|---|---|---|---|
| UK-01.1 | UK | UK MDR 2002 (SI 2002/618) in force; MHRA competent authority | legislation.gov.uk | 2026-08-18 | RY | OK |
| UK-01.2 | UK | "MHRA guidance on medical device cybersecurity sets premarket/lifecycle expectations" | gov.uk (404) | 2026-08-18 | RY | UNVERIFIED |
| UK-01.3 | UK | NHS software under DCB0129/DCB0160 clinical safety standards | digital.nhs.uk | 2026-08-18 | RY | OK¹ |
| UK-02.1 | UK | Secure-by-design "mirror EU GSPR 17.2/17.3"; document IT controls | gov.uk (404) | 2026-08-18 | RY | UNVERIFIED |
| UK-02.2 | UK | ISO 14971 + DCB0129 Clinical Safety Case / Hazard Log | digital.nhs.uk | 2026-08-18 | RY | OK¹ |
| UK-02.3 | UK | MHRA Software & AI as a Medical Device change programme | gov.uk | 2026-08-18 | RY | OK |
| UK-03.1 | UK | Software inventory (SBOM-equiv.) per NCSC supply-chain expectations | ncsc.gov.uk | 2026-08-18 | RY | OK |
| UK-03.2 | UK | CVD referencing ISO/IEC 29147/30111 | iso.org 29147 | 2026-08-18 | RY | OK¹ |
| UK-04.1 | UK | FSCA + Yellow Card vigilance reporting for cyber safety risks | gov.uk Yellow Card | 2026-08-18 | RY | FIXED |
| UK-04.2 | UK | DCB0160 ongoing clinical risk duties on deploying org | digital.nhs.uk | 2026-08-18 | RY | OK¹ |
| UK-R1 | UK | UK Medical Devices Regulations 2002 (SI 2002/618) | legislation.gov.uk | 2026-08-18 | RY | OK |
| UK-R2 | UK | MHRA medical device cybersecurity guidance | gov.uk (404) | 2026-08-18 | RY | UNVERIFIED |
| UK-R3 | UK | DCB0129 / DCB0160 (NHS Digital) | digital.nhs.uk | 2026-08-18 | RY | OK¹ |
| UK-R4 | UK | Software and AI as a Medical Device Programme (MHRA) | gov.uk | 2026-08-18 | RY | OK |
| UK-R5 | UK | NCSC supply chain security guidance | ncsc.gov.uk | 2026-08-18 | RY | OK |

**UK summary:** 15 items — 6 OK, 5 OK¹ (CDN-blocked canonical URLs),
1 FIXED (Yellow Card, UK-04.1), 3 UNVERIFIED (UK-01.2, UK-02.1, UK-R2 —
dead MHRA-cyber-guidance link; see Flags). 0 clauses pulled (held pending
review). UK-02.1's MDR §17.2/17.3 citation was corrected to §17.2/17.4 under
D-004 §2; it remains UNVERIFIED only for the separate dead-link issue. Live-page
"unverified" marking is pending a UI directive (see Flags).

---

## Canada — verified 2026-08-18 · verifier RY

| Clause | Jurisdiction | Clause (summary) | Link | Verified | Verifier | Status |
|---|---|---|---|---|---|---|
| CA-01.1 | CA | Medical Devices Regulations (SOR/98-282) under Food and Drugs Act | justice.gc.ca | 2026-08-18 | RY | OK |
| CA-01.2 | CA | HC Pre-market Requirements for Medical Device Cybersecurity guidance | canada.ca cyber guidance | 2026-08-18 | RY | FIXED |
| CA-02.1 | CA | Cyber risk assessment w/ ISO 14971; architecture/threat analysis in licence app | canada.ca cyber guidance | 2026-08-18 | RY | FIXED |
| CA-02.2 | CA | Cyber test summary (pen test, vuln scan) for higher-risk classes | canada.ca cyber guidance | 2026-08-18 | RY | FIXED |
| CA-02.3 | CA | SaMD/ML expectations align with HC ML-enabled guidance | canada.ca guidance index | 2026-08-18 | RY | OK |
| CA-03.1 | CA | SBOM/software inventory for third-party/OTS components | canada.ca cyber guidance | 2026-08-18 | RY | FIXED |
| CA-03.2 | CA | CVD referencing ISO/IEC 29147/30111 | iso.org 29147 | 2026-08-18 | RY | OK¹ |
| CA-04.1 | CA | Mandatory problem reporting for serious-impact cyber issues | justice.gc.ca | 2026-08-18 | RY | OK |
| CA-04.2 | CA | Ongoing postmarket vuln monitoring / notification for connected devices | canada.ca cyber guidance | 2026-08-18 | RY | FIXED |
| CA-R1 | CA | Medical Devices Regulations (SOR/98-282) | justice.gc.ca | 2026-08-18 | RY | OK |
| CA-R2 | CA | Pre-market Requirements for Medical Device Cybersecurity (HC) | canada.ca cyber guidance | 2026-08-18 | RY | FIXED |
| CA-R3 | CA | Medical device guidance document index (HC) | canada.ca | 2026-08-18 | RY | OK |

**Canada summary:** 12 items — 5 OK, 1 OK¹ (CDN-blocked canonical URL),
6 link occurrences FIXED (HC cybersecurity guidance relocated; spanning
CA-01.2/02.1/02.2/03.1/04.2/R2). 0 UNVERIFIED, 0 flagged, 0 pulled.
canada.ca blocks automated (curl) requests entirely — all canada.ca URLs
were browser-confirmed by page title.

---

## Japan — verified 2026-08-18 · verifier RY

| Clause | Jurisdiction | Clause (summary) | Link | Verified | Verifier | Status |
|---|---|---|---|---|---|---|
| JP-01.1 | JP | PMD Act; MHLW policy, PMDA review | pmda.go.jp (portal) | 2026-08-18 | RY | OK |
| JP-01.2 | JP | MHLW/PMDA cyber notifications, IMDRF-aligned | pmda.go.jp (portal) | 2026-08-18 | RY | OK |
| JP-02.1 | JP | Cyber risk assessment integrated with ISO 14971 | iso.org 14971 | 2026-08-18 | RY | OK¹ |
| JP-02.2 | JP | Reference IMDRF N60 principles for premarket controls | imdrf.org (index) | 2026-08-18 | RY | OK |
| JP-03.1 | JP | Software-component inventory per IMDRF SBOM principles | imdrf.org (index) | 2026-08-18 | RY | OK |
| JP-03.2 | JP | JPCERT/CC coordinates vuln disclosure with MHLW/PMDA | jpcert.or.jp | 2026-08-18 | RY | OK |
| JP-04.1 | JP | Cyber incident reporting under PMD Act adverse-event framework | pmda.go.jp (portal) | 2026-08-18 | RY | OK |
| JP-04.2 | JP | Postmarket vuln monitoring/patching per MHLW/PMDA notifications | pmda.go.jp (portal) | 2026-08-18 | RY | OK |
| JP-R1 | JP | PMD Act (MHLW / PMDA) | pmda.go.jp | 2026-08-18 | RY | OK |
| JP-R2 | JP | PMDA device review services | pmda.go.jp | 2026-08-18 | RY | OK |
| JP-R3 | JP | IMDRF cybersecurity principles N60 / N70 | imdrf.org (index) | 2026-08-18 | RY | OK |
| JP-R4 | JP | JPCERT/CC | jpcert.or.jp | 2026-08-18 | RY | OK |

**Japan summary:** 12 items — 11 OK, 1 OK¹ (ISO 14971, CDN-blocked canonical).
0 broken links, 0 citation errors, 0 UNVERIFIED, 0 pulled. All PMDA/JPCERT/
IMDRF URLs resolve (pmda.go.jp and jpcert.or.jp 200; imdrf.org browser-
confirmed — blocks curl). PMDA and IMDRF links are portal/index pages, which
is acceptable per D-001 §6 (Japan publishes no single stable English cyber
document). **Optional precision note (not a blocker):** the IMDRF **N60/N70**
guidance documents do have specific stable PDF URLs; JP-02.2/03.1/R3 could be
repointed from the documents index to those exact PDFs on request — flagged,
not changed unilaterally.

---

## Corrections applied (broken links, HTTP 404 → corrected)

| Where | Old URL (404) | New URL (200) | Reason |
|---|---|---|---|
| US PCCP (×3: US-02.5, US-04.4, US-R5) | fda.gov/…/predetermined-change-control-plans-machine-learning-enabled-medical-devices | fda.gov/…/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence | ML-specific PCCP page removed; superseded by the final Dec 2024 AI-enabled PCCP guidance |
| EU MDCG (×6) | health.ec.europa.eu/medical-devices-sector/guidance-mdcg-endorsed-documents-and-other-guidance_en | health.ec.europa.eu/document/download/b23b362f-8a56-434c-922a-5b3ca4d0a7a1_en | EC restructured the guidance index (404); replaced with the specific MDCG 2019-16 Rev.1 document, which is more precise per D-001 §6 |
| UK Yellow Card (UK-04.1) | gov.uk/guidance/report-a-problem-with-a-medicine-or-medical-device | gov.uk/report-problem-medicine-medical-device | gov.uk retired the old slug; current MHRA "Report a problem with a medicine or medical device" page |
| CA HC cyber guidance (×6) | canada.ca/…/guidance-documents/pre-market-requirements-medical-device-cyber-security.html | canada.ca/…/guidance-documents/cybersecurity/document.html | Same guidance document (Pre-market Requirements for Medical Device Cybersecurity), relocated by Health Canada |

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

**EU — EU-02.5 "GSPR 17.2/17.3" → "17.2/17.4": RESOLVED under D-004 §2.**
Approved and applied; status now OK².

**UK — dead MHRA cybersecurity-guidance link (UK-01.2, UK-02.1, UK-R2):
UNVERIFIED, awaiting Director decision.** The page links "MHRA guidance on
medical device cybersecurity" to
`gov.uk/government/publications/medical-devices-cyber-security`, which now
returns a genuine 404 ("Page not found - GOV.UK"). Searches indicate MHRA
has **no current standalone published medical-device cybersecurity guidance
document** at a stable gov.uk URL (a dedicated SaMD cybersecurity guidance
was still forthcoming as of 2025). Because both the link *and* the
underlying claim are affected, this is not a clean broken-link fix.

**DECISION (D-004 §1): option (c)** — mark "unverified — pending review" on
the live page; do **not** substitute a source or remove the clauses. Rationale
(Director): the underlying claim (MHRA expects secure-by-design / cyber
controls) is substantively true; citing NCSC or the SaMD-AI page would cite a
source that doesn't say what the clause claims (worse than an honest flag), and
removal would understate MHRA's posture. Revisit if MHRA publishes stable
guidance at a fixed URL. These three items remain **UNVERIFIED** in this log.

> **⚠️ FLAGGED BACK — no live-page UI exists for this status.** D-004 §1 asks
> me to confirm the page already renders "unverified — pending review" in a way
> visually distinct from a normal sourced clause (not just a tooltip). It does
> **not**: there is no clause-level "unverified" treatment in the current
> markup/CSS (the only pending styling is a *country-level* `.status-pending`
> badge, unused since all 11 are "Populated"). Per the directive I am **not**
> building new UI without a directive — the live-page marking for UK-01.2 /
> UK-02.1 / UK-R2 is therefore **not yet applied**; awaiting a UI directive.
> The dead link remains on the page until then, recorded here.

**UK — MDR §17.2/17.3 citation (UK-02.1): RESOLVED under D-004 §2.** Corrected
to "17.2/17.4"; status of the citation aspect cleared. (UK-02.1 remains
UNVERIFIED for the separate dead-link issue above.)

---

## Progress

- [x] US module — verified & logged (commit `d317df4`)
- [x] EU module — verified & logged (commit `9fbc725`); citation fix `f6e34d2`
- [x] UK module — verified & logged (3 UNVERIFIED, awaiting decision)
- [x] CA module — verified & logged (6 links fixed, 0 flagged)
- [x] JP module — verified & logged (0 issues; portal-precision note only)
- [ ] Remaining 6 jurisdictions (CN, AU, KR, SG, BR, IN)
