# Norman Rasmussen — Portfolio

Personal portfolio for software engineering, applied mathematics, optimization, machine learning, and research.

## Development

This site is built with [Astro](https://astro.build/), designed as a fast static portfolio, and deployed to GitHub Pages.

```bash
npm install
npm run dev
npm run build
```

Open http://localhost:4321 to preview locally.

## Editing the site

- `src/data/projects.ts` contains all project entries, featured projects, links, summaries, and case-study details.
- `src/pages/` contains the site pages.
- `src/layouts/BaseLayout.astro` contains navigation, page metadata, and footer.
- `src/styles/global.css` contains the minimal professional design system.
- `public/` contains public assets.

## Setup before publishing

1. Rename this repository to **normanlrasmussen.github.io** (remove the trailing hyphen).
2. Go to **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Check the `Deploy portfolio to GitHub Pages` workflow on the Actions tab.
4. When a résumé PDF is available, add it as `public/resume.pdf` and update the résumé page.
5. Add a preferred contact email or LinkedIn URL when ready. The initial site links only to verified public resources.

## Content and privacy

Only publicly accessible personal repositories are linked. Professional experience is described at a high level; no private employer files, client data, private research repositories, or unpublished research artifacts are published.

## License

Site content and design are not licensed for reuse by default. Linked project repositories have their own licenses where provided.
