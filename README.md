# Norman Rasmussen — Portfolio

Personal portfolio for software engineering, applied mathematics, optimization, machine learning, and research.

## Development

This site is built with [Astro](https://astro.build/), designed as a fast static portfolio, and deployed to GitHub Pages.

```bash
npm install
npm run dev
npm run build
npm run check:links
```

Open http://localhost:4321 to preview locally.

## Editing the site

- `src/data/projects.ts` contains all project entries, featured projects, links, summaries, and case-study details.
- `src/pages/` contains the site pages.
- `src/layouts/BaseLayout.astro` contains navigation, page metadata, and footer.
- `src/styles/global.css` contains the minimal professional design system.
- `public/` contains public assets.

## Deployment and quality checks

The repository is configured for **GitHub Actions** deployment. Every push to `main` runs an Astro production build, validates its generated internal links, and publishes the `dist/` directory to GitHub Pages.

- Live site: https://normanlrasmussen.github.io/
- CI: `.github/workflows/deploy.yml`
- Internal-link audit: `scripts/check-site.mjs` (run after `npm run build`)

## Remaining content to add

1. Add a current résumé PDF as `public/resume.pdf` and link it from the résumé page.
2. Add a preferred contact email or LinkedIn URL when ready.
3. Replace illustrative project graphics with reviewed screenshots when available.

## Content and privacy

Only publicly accessible personal repositories are linked. Professional experience is described at a high level; no private employer files, client data, private research repositories, or unpublished research artifacts are published.

## License

Site content and design are not licensed for reuse by default. Linked project repositories have their own licenses where provided.
