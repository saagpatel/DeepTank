# DeepTank Onboarding Guide

- Last updated: 2026-03-01
- Owner: Engineering
- Audience role: Engineers and technical operators

## Day 1 Setup

- Accounts and access: GitHub repo access and local development machine with Node + Rust toolchains.
- Local environment: `npm run bootstrap`
- First successful run: `npm run verify` and `npm run tauri -- dev`

## First Week Outcomes

| Outcome                   | Owner/support buddy | Complete by |
| ------------------------- | ------------------- | ----------- |
| Understand product goals  | Engineering lead    | Day 2       |
| Run core workflow locally | Buddy engineer      | Day 2       |
| Ship first low-risk task  | Buddy engineer      | Day 5       |

## Must-Read Context

- Product status: `PM/docs/status/product-status.md`
- Runbook: `PM/docs/runbooks/operator-runbook.md`
- Release notes: `PM/docs/releases/release-notes.md`
- Support playbook: `PM/docs/support/support-playbook.md`

## Common Pitfalls

| Pitfall                                      | How to avoid it                                                   |
| -------------------------------------------- | ----------------------------------------------------------------- |
| Running commands with mixed package managers | Use npm scripts only (`npm run ...`)                              |
| Assuming local perf compare is authoritative | Treat enforced CI perf workflow as the regression source of truth |
| Skipping verify before PR                    | Run `npm run verify` before every merge request                   |

## Escalation And Help

- Team contact: Engineering lead and release owner
- Response expectation: Same business day for build/release blockers
