# CyberCompass

**Medtech Cybersecurity Requirements Navigator** — a free, offline,
source-linked reference mapping medical-device cybersecurity obligations across
the 11 jurisdictions with the deepest medtech regulatory footprint.

🌐 **Use it now: https://rajeevyadav.github.io/cybercompass/**

It runs entirely in your browser, works offline once loaded, and transmits
nothing. Every clause links directly to its primary official source.

---

## What CyberCompass is — and isn't

CyberCompass is a **decision-support reference**. It helps you navigate and
compare cybersecurity requirements and find the primary source fast.

It is **not**:

- regulatory or legal advice;
- a way to *create* or *demonstrate* compliance;
- a replacement for review by a regulatory agency, Notified Body, or legal
  counsel.

Content is paraphrased for navigation and may contain errors or omissions.
**Always verify against the linked primary source** before relying on any
clause for a submission. Provided "as is", without warranty of any kind.

## No AI inside

The shipped page and its build tooling contain **no AI, machine-learning, or
third-party assistant code**. Every clause is fixed, human-written, and fully
auditable in this repository's source. There are no telemetry or external API
calls at runtime — the page makes zero network requests of its own; the only
outbound links are the ones you click to reach a primary source.

## Coverage

**11 jurisdictions:** United States · European Union · United Kingdom · Canada ·
Japan · China · Australia · South Korea · Singapore · Brazil · India.

**4-category taxonomy** — every jurisdiction is broken down the same way:

1. **Legal basis** — the statute/regulation and its cybersecurity hook.
2. **Premarket requirements** — what must be documented/demonstrated before market.
3. **SBOM / vulnerability handling** — software inventory and coordinated disclosure.
4. **Postmarket obligations** — monitoring, patching, and incident reporting.

A **device-profile filter** dims clauses that don't apply to your device
(risk class, connectivity, SaMD/AI, PHI/PII, life-sustaining, implantable).

## How to use it — every platform

- **Any browser** (phone, tablet, desktop, any OS): open
  https://rajeevyadav.github.io/cybercompass/
- **Install as an app (PWA):** in desktop Chrome/Edge use the install icon in
  the address bar; on iOS/Android use **Share → Add to Home Screen**. Once
  installed it works fully offline.
- **Windows desktop app:** download **CyberCompass-Setup.exe** (or the portable
  build) from the [latest release](https://github.com/rajeevyadav/cybercompass/releases/latest).
  The installer is currently **unsigned** — on the Windows SmartScreen prompt
  choose **"More info → Run anyway"**, and verify the download came from
  `github.com/rajeevyadav/cybercompass`.
  - _macOS and Linux builds are configured but not yet published — this README
    will list them once they are real._

## Verification

Every clause and link is verified against its primary source. The full
clause-by-clause audit trail lives in
[`/verification/log.md`](verification/log.md) (jurisdiction · clause ID · link ·
verified date · verifier · status).

Sources move over time, so a **lighter review runs quarterly** — see
[`NEXT_REVIEW.md`](NEXT_REVIEW.md) (next due **2026-11-18**). Any change is
directive-gated; there are no silent edits.

## Building the desktop app yourself

```bash
npm install
npm run dist:win     # Windows (NSIS installer + portable)
npm run dist:mac     # macOS (.dmg)
npm run dist:linux   # Linux (.AppImage)
```

The desktop app is a thin [Electron](https://www.electronjs.org/) wrapper that
loads the **same** `index.html` served on the web (assembled into `www/` by
`scripts/make-www.js`) — there is no forked copy of the content.

## License & contact

Maintainer: **Rajeev Yadav** · rajeevyadav@gmail.com

License: **MIT** — see [`LICENSE`](LICENSE).

## Contributing

This is currently a single-committer repository. See
[`CONTRIBUTING.md`](CONTRIBUTING.md) for the standing guardrail notes.
