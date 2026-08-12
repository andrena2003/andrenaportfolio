# Andrena Yacoub — Portfolio

Personal portfolio site for Andrena Yacoub, showcasing marketing strategy, UI/UX design, and content work. Built with React, React Router, and Vite, and deployed at [andrenayacoub.vercel.app](https://andrenayacoub.vercel.app).

## Structure

- `src/Pages` — route-level pages (Home, About, Work, Project detail, Contact, 404)
- `src/components` — shared layout and page-meta (SEO/OG tag) components
- `src/data.jsx` — all project and site content in one place
- `src/assets` — images (WebP), optimized for fast loading
- `public` — static files served as-is (favicon, resume PDF, social share images)
- `scripts/generate-social-pages.mjs` — post-build step that generates per-route static HTML with correct social meta tags

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint       # run ESLint
```
