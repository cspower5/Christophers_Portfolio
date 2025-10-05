# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

Local dev
---------

Two helpful dev scripts are available:

- `npm run dev` or `npm run dev:portfolio` — serve the portfolio at root (http://localhost:5173)
- `npm run dev:btm` — serve with the `PROJECT_BASE=/btm_workout/` so the dev URL becomes http://localhost:5173/btm_workout/

Build and deploy
----------------

The GitHub Actions workflow at `.github/workflows/deploy-gh-pages.yml` builds with a production base of `/Christophers_Portfolio/` and deploys the `dist/` folder to the `gh-pages` branch. You can also build locally for that base:

```bash
BUILD_BASE=/Christophers_Portfolio/ npm run build
```

If you want to preview the production build locally:

```bash
npm run build
npm run preview
```
