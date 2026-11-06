# Personal website — milestone plan

## Milestone 1: Minimal professional portfolio

The following are implemented and verified with a successful Astro build in GitHub Actions.

- [x] Create Astro static-site configuration
- [x] Add a minimal professional design system
- [x] Build responsive homepage and shared navigation
- [x] Add a filterable, searchable archive of all 17 public personal repositories
- [x] Create reusable project cards and 17 project detail pages
- [x] Add Research, Experience, and Résumé & Contact pages
- [x] Add accessible navigation and metadata
- [x] Configure an automatic GitHub Pages build workflow
- [x] Verify the source compiles and produces 23 static pages
- [x] Rename the repo to `normanlrasmussen.github.io`
- [x] Set Pages deployment source to GitHub Actions
- [x] Verify live Pages deployment and its successful workflow
- [x] Audit all 17 public project repository links (available)
- [x] Refresh the visual system, responsive navigation, and project cards
- [x] Add build-time validation of generated internal links
- [ ] Add current résumé PDF (`public/resume.pdf`) and link it from the résumé page
- [ ] Add preferred email and/or LinkedIn contact link
- [ ] Review mobile display and replace illustrative project graphics with real screenshots

## Milestone 2: Project presentation overhaul

Prioritize:
1. Tic-Tac-Nope: lead the README with the web experience and research contributions; add application screenshots and an accessible demo link.
2. Demand_NN: create a canonical README, baseline comparison, method summary, results chart, and reproduction instructions.
3. Shipping_OR_Optimizer: remove placeholders, verify runnable examples, and add packing and routing visualizations.
4. Traffic-Prediction-Models: audit evaluation split and target leakage; report generalization only after revalidation.
5. Quick Dice Game and Bank Analysis: document intent, setup, methods, and results.
6. Link approved research artifacts and papers as they become public.

## Editing guide

- Add/edit project entries in `src/data/projects.ts`.
- Add/edit research topics in `src/data/research.ts`.
- Edit home and other pages under `src/pages/`.
- Edit global design rules in `src/styles/global.css`.

Commands:

```bash
npm install
npm run dev
npm run build
```

Never publish proprietary employer code, client data, private research artifacts, unreleased manuscripts, or coursework answer keys without permission.
