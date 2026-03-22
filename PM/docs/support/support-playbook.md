# DeepTank Support Playbook

- Last updated: 2026-03-01
- Owner: Engineering
- Launch window: Pending production credential handoff

## Ticket Intake Rules

- Required intake fields: App version, platform/OS, reproduction steps, screenshot/log excerpt, user impact.
- Priority model: Severity matrix below with engineer-on-call routing for Sev1/Sev2.

## Severity Matrix

| Severity | Customer impact                            | First response SLA | Escalation path                                  |
| -------- | ------------------------------------------ | ------------------ | ------------------------------------------------ |
| Sev 1    | App unusable / crash loop / data-loss risk | 15 minutes         | Engineering lead + release owner immediately     |
| Sev 2    | Core feature degraded with workaround      | 4 business hours   | Engineer on-call, escalate to lead if unresolved |
| Sev 3    | Minor issue / cosmetic / low-impact        | 1 business day     | Queue into backlog and triage in weekly review   |

## Triage Workflow

1. Confirm severity.
2. Check known issues and workarounds.
3. Route to operator or engineering owner.
4. Send approved customer message.

## Approved Response Snippets

- Acknowledgement: "Thanks for reporting this. We’ve confirmed receipt and are actively triaging the issue."
- Workaround available: "A temporary workaround is available while we prepare a permanent fix. Please follow the steps below."
- Resolved confirmation: "A fix has been released. Please update to the latest build and confirm behavior."

## Escalation Contacts

| Scenario            | Primary contact  | Backup contact   | Channel                |
| ------------------- | ---------------- | ---------------- | ---------------------- |
| Production outage   | Engineering lead | Release owner    | Incident channel       |
| Data issue          | Simulation owner | Engineering lead | Incident channel       |
| Billing/entitlement | Product owner    | PM delegate      | Support triage channel |

## Top Recurring Issues

| Issue                                   | Current workaround                          | Permanent fix owner | ETA                        |
| --------------------------------------- | ------------------------------------------- | ------------------- | -------------------------- |
| Local verify passes but release blocked | Wait for credential provisioning            | PM + Release owner  | Pending credential handoff |
| Perf budget alert on CI                 | Validate baseline and inspect build changes | Engineering         | Same day triage            |
