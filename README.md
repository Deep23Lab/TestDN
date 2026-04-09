# TestDN

A dark-to-light storytelling page built with Next.js, Tailwind CSS, and Framer Motion.

## Live Demo
This app is deployed to GitHub Pages from the `main` branch using GitHub Actions.

## Available Scripts

- `npm install` - install dependencies
- `npm run dev` - run the development server
- `npm run build` - build the Next.js app
- `npm run export` - export the site to static HTML in the `out` folder
- `npm run start` - run the production server after `npm run build`

## GitHub Pages Deployment
The repo uses a GitHub Actions workflow in `.github/workflows/gh-pages.yml`.

1. Push code to the `main` branch.
2. The workflow builds and exports the static site.
3. The `gh-pages` branch is published automatically.

## Notes
- `next.config.mjs` sets `basePath` for GitHub Pages deployment automatically.
- The page uses `output: 'export'` so it can be hosted as a static site.

## Local preview

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to preview the page locally.
