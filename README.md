# DeepTank

[![Rust](https://img.shields.io/badge/Rust-dea584?style=flat-square&logo=rust)](#) [![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript)](#) [![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](#)

> Breed, evolve, and observe digital fish — a desktop aquarium where genetics are real and every species has a history.

DeepTank is a desktop simulation app built with Tauri + React + Rust. Fish in the tank have genomes that govern speed, size, aggression, boldness, schooling affinity, and metabolism. You can breed pairs together, preview trait inheritance ranges before committing, and watch a phylogenetic tree grow as new generations emerge. An optional local AI layer (Ollama) narrates events in the tank as they happen.

## Features

- **Genetic simulation** — each fish carries inheritable traits; breeding previews trait ranges before you commit
- **Phylogenetic tree** — live family tree that updates as the population evolves
- **Species gallery** — catalog of all species with trait distributions and lineage info
- **Tank management** — multiple tanks, decorations, and environmental controls
- **AI narration** — optional Ollama integration narrates tank events in real time
- **Replay controls** — step through simulation history and rewind events
- **Scenarios** — predefined starting conditions for experiments
- **Achievements** — milestones for breeding rare trait combinations

## Quick Start

### Prerequisites

- Node.js 18+
- Rust stable toolchain (`rustup`)
- Tauri system dependencies: [tauri.app/start/prerequisites](https://tauri.app/start/prerequisites/)
- Ollama (optional, for AI narration)

### Installation

```bash
git clone https://github.com/saagpatel/DeepTank
cd DeepTank
npm run bootstrap
```

### Usage

```bash
# Start in development mode
npm run tauri -- dev

# Run quality gate
npm run verify

# Lean dev mode (lower disk usage)
npm run dev:lean
```

## Tech Stack

| Layer         | Technology                              |
| ------------- | --------------------------------------- |
| Desktop shell | Tauri 2                                 |
| Frontend      | React 19, TypeScript, Vite              |
| Simulation    | Rust — physics, genetics, species logic |
| Visualization | React canvas rendering                  |
| Local AI      | Ollama (optional narration)             |
| Storage       | SQLite                                  |
| Testing       | Vitest                                  |

## Architecture

The simulation engine runs entirely in Rust, handling fish physics, genetic inheritance calculations, and species state. The React frontend subscribes to simulation events and renders the tank, tree, and gallery views. The Ollama narration layer listens to the same event stream and generates flavor text without blocking the simulation.

## License

MIT
