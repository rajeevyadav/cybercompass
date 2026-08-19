# CyberCompass

**Medtech Cybersecurity Requirements Navigator — 11 jurisdictions**

[![Latest release](https://img.shields.io/github/v/release/rajeevyadav/cybercompass?label=version&color=2ea44f&cacheSeconds=300)](https://github.com/rajeevyadav/cybercompass/releases/latest)
[![Download for Windows](https://img.shields.io/badge/Download-Windows%20installer-0078d6?logo=windows)](https://github.com/rajeevyadav/cybercompass/releases/latest/download/CyberCompass-Setup.exe)
[![Open the app](https://img.shields.io/badge/Open-web%20%2F%20mobile%20app-8250df)](https://rajeevyadav.github.io/cybercompass/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

_Last updated: **2026-08-18** · Next regulatory review: **2026-11-18** (see [NEXT_REVIEW.md](NEXT_REVIEW.md))_

🌐 **Use it now in your browser: https://rajeevyadav.github.io/cybercompass/**

CyberCompass is a free, offline, source-linked reference that maps medical-device
cybersecurity obligations across the 11 jurisdictions with the deepest medtech regulatory
footprint. It runs entirely in your browser, works offline once loaded, and transmits
nothing — every clause links directly to its primary official source. Deterministic and
fully auditable: **no AI in the content**.

## Features

- **11 jurisdictions, one taxonomy** — every jurisdiction is broken down the same four
  ways: legal basis · premarket requirements · SBOM / vulnerability handling · postmarket
  obligations.
- **Device-profile filter** — dims the clauses that don't apply to your device (risk class,
  connectivity, SaMD/AI, PHI/PII, life-sustaining, implantable).
- **Primary-source links** — every clause links straight to the statute, regulation, or
  guidance it rests on.
- **Runs anywhere** — light/dark, installable PWA, works fully offline.

## Coverage

**11 jurisdictions:** United States · European Union · United Kingdom · Canada · Japan ·
China · Australia · South Korea · Singapore · Brazil · India.

Content is paraphrased for navigation and may contain errors or omissions. It is a
decision-support reference — not regulatory or legal advice — and does not create or
demonstrate compliance. Always verify against the linked primary source before relying on
any clause for a submission.

## How to use

1. Open the app (browser, installed PWA, or the Windows desktop build).
2. Set your device profile — risk class, connectivity, SaMD/AI, PHI/PII, life-sustaining,
   implantable — to dim the clauses that don't apply.
3. Browse a jurisdiction across the four categories; click any clause to reach its primary
   source.

## Run & build

A static single-page app (no build step for the web version) with an optional
[Electron](https://www.electronjs.org/) desktop wrapper that loads the same `index.html`
(assembled into `www/` by `scripts/make-www.js` — no forked copy of the content).

```bash
# run the web app locally (a service worker needs http, not file://)
npx serve .            # or:  python3 -m http.server

# run the desktop app
npm install
npm start

# build the desktop installers
npm run dist:win       # Windows (NSIS installer + portable)
npm run dist:mac       # macOS (.dmg)
npm run dist:linux     # Linux (.AppImage)
```

The Windows installer is currently **unsigned** — on the SmartScreen prompt choose
**"More info → Run anyway"**, and confirm the download came from
`github.com/rajeevyadav/cybercompass`.

## No AI inside

The shipped page and its build tooling contain **no AI or machine-learning code** —
every result is produced by fixed, human-written rules you can read in this repository's
source. The app runs entirely on your device, works offline, and transmits nothing. CI
guardrails fail the build if an AI-provider reference, an ML dependency, or an AI/bot
commit-authorship trailer is ever introduced.

## Verification

Every citation and link is checked against its primary official source; the audit trail
lives in [`verification/log.md`](verification/log.md). Sources move over time, so a lighter
review runs quarterly — see [`NEXT_REVIEW.md`](NEXT_REVIEW.md) (next due **2026-11-18**,
synchronised across the family). No silent edits — every change is reviewed and logged.

## Disclaimer

Decision-support and educational only — provided "as is", without warranty of any kind.
CyberCompass does not constitute regulatory or legal advice, does not create compliance,
and does not replace agency, Notified Body, or counsel review. Always verify against the
linked primary source before relying on any clause for a submission.

## Family

Part of the same family — same guardrails, same offline-first, no-black-box-AI philosophy:
[RegCompass](https://rajeevyadav.github.io/regcompass/) ·
[eIFUCompass](https://rajeevyadav.github.io/eifucompass/) ·
[ClinicalCompass](https://rajeevyadav.github.io/clinicalcompass/).

## License

MIT — see [`LICENSE`](LICENSE).

Maintainer: **Rajeev Yadav** · rajeevyadav@gmail.com
