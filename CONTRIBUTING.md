# Contributing to CyberCompass

This repository is currently a **single-committer project** maintained by
Rajeev Yadav (rajeevyadav@gmail.com). Full contribution guidelines will be
added later. For now this file records only the standing guardrail
decisions that a contributor (or a future auditor of this repo) needs to
know about.

## Open guardrail decisions

These two items are deliberate, temporary deferrals — not permanent policy.
They are linked: revisiting one is the natural trigger to revisit the other.

### 1. Signed commits — deferred

Commit signing is **not required at this time**. This is a temporary
measure while the maintainer's commit-signing setup is blocked by unrelated
security configuration, not a decision that signing is unnecessary.

- **Revisit when:** the maintainer's signing setup is unblocked.
- **Tracking:** carried as an open item in every progress (R-NNN) report
  until resolved.

### 2. Mandatory pull-request flow — off for now

"Require a pull request before merging" on `main` is **disabled**. Because
this is a single-committer repository, a mandatory PR flow adds process
friction without a real safety benefit at this stage.

Force-push protection and branch-deletion protection on `main` **are**
enabled.

- **Revisit when:** either signed commits become active (see item 1) **or**
  a second committer is ever added — whichever happens first.
- **Tracking:** linked to the signed-commits deferral above; the two are
  reviewed together, not as separate untracked decisions.
