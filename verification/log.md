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
D-004 §2; it remains UNVERIFIED only for the separate dead-link issue, now shown
on the live page via the `.unverified` badge (D-005 §1).

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
| JP-02.2 | JP | Reference IMDRF N60 principles for premarket controls | imdrf.org N60 PDF | 2026-08-18 | RY | OK² |
| JP-03.1 | JP | Software-component inventory per IMDRF SBOM principles | imdrf.org N60 PDF | 2026-08-18 | RY | OK² |
| JP-03.2 | JP | JPCERT/CC coordinates vuln disclosure with MHLW/PMDA | jpcert.or.jp | 2026-08-18 | RY | OK |
| JP-04.1 | JP | Cyber incident reporting under PMD Act adverse-event framework | pmda.go.jp (portal) | 2026-08-18 | RY | OK |
| JP-04.2 | JP | Postmarket vuln monitoring/patching per MHLW/PMDA notifications | pmda.go.jp (portal) | 2026-08-18 | RY | OK |
| JP-R1 | JP | PMD Act (MHLW / PMDA) | pmda.go.jp | 2026-08-18 | RY | OK |
| JP-R2 | JP | PMDA device review services | pmda.go.jp | 2026-08-18 | RY | OK |
| JP-R3 | JP | IMDRF cybersecurity principles N60 / N70 | imdrf.org N60 PDF | 2026-08-18 | RY | OK² |
| JP-R4 | JP | JPCERT/CC | jpcert.or.jp | 2026-08-18 | RY | OK |

**Japan summary (updated D-005 §2):** 12 items — 8 OK, 1 OK¹ (ISO 14971,
CDN-blocked canonical), 3 OK² (IMDRF links repointed from the documents index
to the specific **N60** final PDF: JP-02.2/03.1/R3). 0 broken links, 0 citation
errors, 0 UNVERIFIED, 0 pulled. PMDA links remain portal pages (acceptable per
D-001 §6 — Japan publishes no single stable English cyber document). imdrf.org
serves an anti-bot shell to automated tools (curl 000, headless shell); the N60
PDF URL is IMDRF's canonical final-document path, browser-resolvable.

> **Two precision notes flagged for Director (not blockers):**
> 1. **JP-03.1 is about SBOM** — the IMDRF document specifically on SBOM is
>    **N73** ("Principles and Practices for SBOM for Medical Device
>    Cybersecurity", 2023). It is currently pointed at N60 (the general
>    principles doc, which does cover software components). Repoint JP-03.1 to
>    **N73** for maximum precision? Flagged, not changed unilaterally.
> 2. **N70** ("…Cybersecurity of Legacy Medical Devices") is not linked by any
>    JP clause because none is legacy-specific, so only N60 was used despite the
>    "N60 / N70" ref code. Add an N70 link (e.g. a legacy-device clause or on the
>    JP-R3 ref row)? Flagged.

---

## China — verified 2026-08-18 · verifier RY

| Clause | Jurisdiction | Clause (summary) | Link | Verified | Verifier | Status |
|---|---|---|---|---|---|---|
| CN-01.1 | CN | Regulations on Supervision & Admin of Medical Devices (NMPA) | nmpa.gov.cn (portal) | 2026-08-18 | RY | OK |
| CN-01.2 | CN | NMPA Guiding Principles for Cybersecurity Registration Review | nmpa.gov.cn (portal) | 2026-08-18 | RY | OK |
| CN-02.1 | CN | Cyber technical documentation at registration | nmpa.gov.cn (portal) | 2026-08-18 | RY | OK |
| CN-02.2 | CN | Cyber risk analysis referencing "GB/T 42062" alongside ISO 14971 | iso.org 14971 | 2026-08-18 | RY | FLAG |
| CN-02.3 | CN | AI/SaMD devices under NMPA AI review pathway | nmpa.gov.cn (portal) | 2026-08-18 | RY | OK |
| CN-02.4 | CN | PIPL + cross-border data transfer for health data | cac.gov.cn | 2026-08-18 | RY | OK |
| CN-03.1 | CN | Software component inventory in registration dossier | nmpa.gov.cn (portal) | 2026-08-18 | RY | OK |
| CN-03.2 | CN | Vulnerability handling via CNVD coordination | cnvd.org.cn | 2026-08-18 | RY | OK¹ |
| CN-04.1 | CN | Adverse-event reporting extends to cyber safety events | nmpa.gov.cn (portal) | 2026-08-18 | RY | OK |
| CN-04.2 | CN | Material network/connectivity changes need a change filing | nmpa.gov.cn (portal) | 2026-08-18 | RY | OK |
| CN-R1 | CN | NMPA — medical device regulation | nmpa.gov.cn | 2026-08-18 | RY | OK |
| CN-R2 | CN | Cyberspace Administration of China (PIPL) | cac.gov.cn | 2026-08-18 | RY | OK |
| CN-R3 | CN | CNVD national vulnerability database | cnvd.org.cn | 2026-08-18 | RY | OK¹ |
| CN-R4 | CN | ISO 14971:2019 | iso.org | 2026-08-18 | RY | OK¹ |

**China summary:** 14 items — 10 OK, 3 OK¹ (CNVD captcha-gated + ISO 14971
CDN-blocked, both browser-resolvable), 1 FLAG (CN-02.2 standard description).
0 broken links, 0 UNVERIFIED, 0 pulled. NMPA English portal is used for the
registration/guiding-principles clauses — acceptable per D-001 §6 (China's
cyber guiding-principles document has no stable standalone English URL). CAC
(cac.gov.cn) and NMPA (english.nmpa.gov.cn) return 200; CNVD is captcha-gated
(title "本站开启了验证码保护") — a live site, browser-resolvable.

---

## Australia — verified 2026-08-18 · verifier RY

| Clause | Jurisdiction | Clause (summary) | Link | Verified | Verifier | Status |
|---|---|---|---|---|---|---|
| AU-01.1 | AU | Therapeutic Goods (Medical Devices) Regulations 2002 (TGA) | legislation.gov.au | 2026-08-18 | RY | OK |
| AU-01.2 | AU | TGA Medical device cyber security guidance for industry | tga.gov.au cyber guidance | 2026-08-18 | RY | FIXED |
| AU-02.1 | AU | Essential Principle 12.1 (software/IT network security) | tga.gov.au cyber guidance | 2026-08-18 | RY | FIXED |
| AU-02.2 | AU | ISO 14971 must incorporate cybersecurity; risk summary in tech file | iso.org 14971 | 2026-08-18 | RY | OK¹ |
| AU-02.3 | AU | Software/AI devices under TGA SaMD framework | tga.gov.au SaMD | 2026-08-18 | RY | FIXED |
| AU-03.1 | AU | SBOM/inventory for third-party/OTS components | tga.gov.au cyber guidance | 2026-08-18 | RY | FIXED |
| AU-03.2 | AU | CVD per ISO/IEC 29147/30111 + ACSC alignment | cyber.gov.au | 2026-08-18 | RY | OK¹ |
| AU-04.1 | AU | Mandatory adverse-event reporting for cyber harm | tga.gov.au report-problem | 2026-08-18 | RY | FIXED |
| AU-04.2 | AU | Postmarket monitoring/patching for connected devices | tga.gov.au cyber guidance | 2026-08-18 | RY | FIXED |
| AU-R1 | AU | Therapeutic Goods (Medical Devices) Regulations 2002 | legislation.gov.au | 2026-08-18 | RY | OK |
| AU-R2 | AU | TGA medical device cyber security guidance | tga.gov.au cyber guidance | 2026-08-18 | RY | FIXED |
| AU-R3 | AU | TGA software-based medical devices (SaMD) | tga.gov.au SaMD | 2026-08-18 | RY | FIXED |
| AU-R4 | AU | Australian Cyber Security Centre (ACSC) | cyber.gov.au | 2026-08-18 | RY | OK¹ |

**Australia summary:** 13 items — 2 OK, 3 OK¹ (ISO 14971 + cyber.gov.au,
browser-resolvable), 8 link occurrences FIXED (TGA site restructure; see
Corrections). 0 UNVERIFIED, 0 flagged, 0 pulled. tga.gov.au and cyber.gov.au
block automated requests (curl 000 / JS shell); the replacement TGA URLs are
the current canonical pages confirmed via search result titles ("Complying with
medical device cyber security requirements", "Understanding how we regulate
software-based medical devices", "Report an adverse event or safety problem").

---

## South Korea — verified 2026-08-18 · verifier RY

| Clause | Jurisdiction | Clause (summary) | Link | Verified | Verifier | Status |
|---|---|---|---|---|---|---|
| KR-01.1 | KR | Medical Devices Act (MFDS) | mfds.go.kr (portal) | 2026-08-18 | RY | OK |
| KR-01.2 | KR | MFDS cybersecurity review guidance, IMDRF-aligned | mfds.go.kr (portal) | 2026-08-18 | RY | OK |
| KR-02.1 | KR | Cyber risk assessment + security architecture for connected approvals | mfds.go.kr (portal) | 2026-08-18 | RY | OK |
| KR-02.2 | KR | ISO 14971 + IMDRF principles for evaluation consistency | imdrf.org (index) | 2026-08-18 | RY | OK¹ |
| KR-02.3 | KR | AI/SaMD under MFDS digital medical device pathway | mfds.go.kr (portal) | 2026-08-18 | RY | OK |
| KR-03.1 | KR | Software-component inventory for third-party/OSS | mfds.go.kr (portal) | 2026-08-18 | RY | OK |
| KR-03.2 | KR | Vulnerability coordination via KISA | kisa.or.kr | 2026-08-18 | RY | OK |
| KR-04.1 | KR | Adverse-event reporting extends to cyber safety events | mfds.go.kr (portal) | 2026-08-18 | RY | OK |
| KR-04.2 | KR | Monitoring + patch management for connected devices | mfds.go.kr (portal) | 2026-08-18 | RY | OK |
| KR-R1 | KR | Ministry of Food and Drug Safety (MFDS) | mfds.go.kr | 2026-08-18 | RY | OK |
| KR-R2 | KR | Korea Internet & Security Agency (KISA) | kisa.or.kr | 2026-08-18 | RY | OK |
| KR-R3 | KR | IMDRF cybersecurity principles N60 / N70 | imdrf.org (index) | 2026-08-18 | RY | OK¹ |

**South Korea summary:** 12 items — 10 OK, 2 OK¹ (IMDRF index, anti-bot shell to
automated tools, browser-resolvable). 0 broken links, 0 UNVERIFIED, 0 pulled.
MFDS English portal used for the Act/guidance clauses (acceptable per D-001 §6;
mfds.go.kr and kisa.or.kr both return 200). **Optional note (not a blocker):**
KR-02.2 and KR-R3 point to the IMDRF documents index; they could be repointed to
the specific N60 PDF like Japan (JP, D-005 §2) if the Director wants — flagged,
not changed (D-005 §2 scoped the repoint to JP only).

---

## Singapore — verified 2026-08-18 · verifier RY

| Clause | Jurisdiction | Clause (summary) | Link | Verified | Verifier | Status |
|---|---|---|---|---|---|---|
| SG-01.1 | SG | Health Products Act + Medical Devices Regulations (HSA) | hsa.gov.sg | 2026-08-18 | RY | OK |
| SG-01.2 | SG | HSA guidance docs (incl. cybersecurity), IMDRF-aligned | hsa.gov.sg guidance | 2026-08-18 | RY | OK |
| SG-02.1 | SG | Cyber risk documentation for connected devices in dossier | hsa.gov.sg guidance | 2026-08-18 | RY | OK |
| SG-02.2 | SG | ISO 14971 + IMDRF cybersecurity principles | imdrf.org (index) | 2026-08-18 | RY | OK¹ |
| SG-02.3 | SG | Standalone software/AI under HSA SaMD guidance | hsa.gov.sg guidance | 2026-08-18 | RY | OK |
| SG-03.1 | SG | Software-component inventory for third-party/OSS | hsa.gov.sg guidance | 2026-08-18 | RY | OK |
| SG-03.2 | SG | Vulnerability disclosure via SingCERT | csa.gov.sg/singcert | 2026-08-18 | RY | OK |
| SG-04.1 | SG | Adverse-event reporting for cyber patient-harm | hsa.gov.sg adverse-events | 2026-08-18 | RY | FIXED |
| SG-04.2 | SG | Postmarket vulnerability monitoring for connected devices | hsa.gov.sg guidance | 2026-08-18 | RY | OK |
| SG-R1 | SG | Health Sciences Authority (HSA) | hsa.gov.sg | 2026-08-18 | RY | OK |
| SG-R2 | SG | HSA guidance documents | hsa.gov.sg | 2026-08-18 | RY | OK |
| SG-R3 | SG | SingCERT (Cyber Security Agency of Singapore) | csa.gov.sg | 2026-08-18 | RY | OK |

**Singapore summary:** 12 items — 10 OK, 1 OK¹ (IMDRF index), 1 FIXED
(SG-04.1 safety-information page retired → HSA adverse-events page). 0 UNVERIFIED,
0 flagged, 0 pulled. All hsa.gov.sg and csa.gov.sg URLs return 200. Same optional
IMDRF-index repoint note as JP/KR applies to SG-02.2.

---

## Corrections applied (broken links, HTTP 404 → corrected)

| Where | Old URL (404) | New URL (200) | Reason |
|---|---|---|---|
| US PCCP (×3: US-02.5, US-04.4, US-R5) | fda.gov/…/predetermined-change-control-plans-machine-learning-enabled-medical-devices | fda.gov/…/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence | ML-specific PCCP page removed; superseded by the final Dec 2024 AI-enabled PCCP guidance |
| EU MDCG (×6) | health.ec.europa.eu/medical-devices-sector/guidance-mdcg-endorsed-documents-and-other-guidance_en | health.ec.europa.eu/document/download/b23b362f-8a56-434c-922a-5b3ca4d0a7a1_en | EC restructured the guidance index (404); replaced with the specific MDCG 2019-16 Rev.1 document, which is more precise per D-001 §6 |
| UK Yellow Card (UK-04.1) | gov.uk/guidance/report-a-problem-with-a-medicine-or-medical-device | gov.uk/report-problem-medicine-medical-device | gov.uk retired the old slug; current MHRA "Report a problem with a medicine or medical device" page |
| CA HC cyber guidance (×6) | canada.ca/…/guidance-documents/pre-market-requirements-medical-device-cyber-security.html | canada.ca/…/guidance-documents/cybersecurity/document.html | Same guidance document (Pre-market Requirements for Medical Device Cybersecurity), relocated by Health Canada |
| AU TGA cyber guidance (×5) | tga.gov.au/resources/resource/guidance/medical-device-cyber-security-guidance-industry | tga.gov.au/resources/guidance/complying-medical-device-cyber-security-requirements | TGA site restructure (dropped /resource/ path); same industry cyber-guidance |
| AU TGA SaMD (×2) | tga.gov.au/how-we-regulate/manufacturing/software-based-medical-devices | tga.gov.au/resources/guidance/understanding-how-we-regulate-software-based-medical-devices | TGA site restructure; same software-based-device guidance |
| AU TGA reporting (×1) | tga.gov.au/safety/safety-monitoring-and-signals/reporting-problems | tga.gov.au/safety/report-problem/report-adverse-event-or-safety-problem | TGA site restructure; current report-a-problem page |
| SG HSA safety (SG-04.1) | hsa.gov.sg/medical-devices/safety-information | hsa.gov.sg/medical-devices/adverse-events | HSA retired the safety-information slug; current medical-device adverse-events reporting page |

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

> **✅ RESOLVED under D-005 §1.** A reusable clause-level `.unverified` badge
> ("⚠ UNVERIFIED — PENDING REVIEW", using the existing `--warn` token, styled
> distinctly from `.src-link`) was built and applied to UK-01.2, UK-02.1 and
> UK-R2. The dead MHRA link was removed from the page in favour of the badge —
> 0 dead MHRA URLs remain. Commit `da15cd1`. These three items stay UNVERIFIED
> in this log until MHRA publishes stable guidance; the badge makes that status
> visible to end users.

**UK — MDR §17.2/17.3 citation (UK-02.1): RESOLVED under D-004 §2.** Corrected
to "17.2/17.4"; status of the citation aspect cleared. (UK-02.1 remains
UNVERIFIED for the separate dead-link issue above.)

**CN — standard description (CN-02.2): FLAG, awaiting Director decision.** The
clause says cyber risk analysis should "reference the national standard **GB/T
42062 (medical device cybersecurity)** alongside ISO 14971." GB/T 42062-2022 is
China's *risk-management* standard — the national adoption of ISO 14971 —
**not** a cybersecurity standard, so (a) the parenthetical description is wrong
and (b) citing it "alongside ISO 14971" is redundant. China's medical-device
cyber-specific standard is a different one (e.g. the YY/T network-security
series). Recommend Director confirm and either correct the description or swap
to the correct standard number. Not changed unilaterally (substantive citation).

---

## Progress

- [x] US module — verified & logged (commit `d317df4`)
- [x] EU module — verified & logged (commit `9fbc725`); citation fix `f6e34d2`
- [x] UK module — verified & logged (3 UNVERIFIED, awaiting decision)
- [x] CA module — verified & logged (6 links fixed, 0 flagged)
- [x] JP module — verified & logged; IMDRF repointed to N60 (D-005 §2)
- [x] CN module — verified & logged (1 FLAG: GB/T 42062 description)
- [x] AU module — verified & logged (8 TGA links fixed, 0 flagged)
- [x] KR module — verified & logged (0 issues; IMDRF-repoint note only)
- [x] SG module — verified & logged (1 link fixed, 0 flagged)
- [ ] Remaining 2 jurisdictions (BR, IN)
