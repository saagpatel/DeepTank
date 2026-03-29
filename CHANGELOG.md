# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-03-22

### Added
- Initial DeepTank living aquarium simulation
- 15 features across 5 phases: interaction, ecosystem, visualization, polish, and advanced systems
- CI/CD, release automation, and documentation
- DeepTank verification workflows
- 107 tests (80 Rust + 27 Vitest)

### Fixed
- Install Linux build dependencies in CI
- Export DeepTank audio helper
- Install gitleaks via gh release and run secret scan as action
- Install gitleaks in verify workflow and sync verification assets
- Harden audio volume handling
- Comprehensive codebase audit: fix 40+ bugs, add error handling, remove dead code

### Changed
- Sync linted project files
- Aggressively prune non-runtime bloat
- Add implementation completion summary
- Add codex runbook artifacts
- Rewrite README with test coverage details and badge
