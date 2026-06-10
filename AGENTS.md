

<!-- comm-contract:start -->

## Communication Contract

- Inherit global Codex communication and reporting rules from `/Users/d/.codex/AGENTS.override.md` and `/Users/d/.codex/policies/communication/BigPictureReportingV1.md`.
- Repo-specific instructions below add project constraints only; do not restate global voice or status-reporting rules here.
<!-- comm-contract:end -->

<!-- portfolio-context:start -->
# Portfolio Context

## What This Project Is

DeepTank is a desktop digital-aquarium simulation where fish carry inheritable genomes, breed across generations, and build a visible phylogenetic history. The Tauri/React shell presents tank management, species gallery, lineage tree, replay/scenario tools, and optional local Ollama narration over a Rust simulation engine.

## Current State

The README defines the product surface, quick-start commands, and architecture. The recovered context anchors future work around simulation correctness, lineage visualization, and local-first desktop behavior.

## Stack

| Layer | Technology |
|-------|------------|
| Desktop shell | Tauri 2 |
| Frontend | React 19, TypeScript, Vite |
| Simulation | Rust — physics, genetics, species logic |
| Visualization | React canvas rendering |
| Local AI | Ollama (optional narration) |
| Storage | SQLite |
| Testing | Vitest |

## How To Run

```bash
# Start in development mode
npm run tauri -- dev

# Run quality gate
npm run verify

# Lean dev mode (lower disk usage)
npm run dev:lean
```

## Known Risks

- Keep simulation logic in Rust and UI/rendering concerns in React.
- Ollama narration is optional and must not block the simulation loop.
- Genetic inheritance, replay, and lineage history are core product promises; changes should preserve deterministic or inspectable simulation state.

## Next Recommended Move

Use this context plus the README and supporting docs to resume the next active task, then promote the repo beyond minimum-viable by capturing a dedicated handoff, roadmap, or discovery artifact.

<!-- portfolio-context:end -->
