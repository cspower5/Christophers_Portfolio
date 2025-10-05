import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use PROJECT_BASE environment variable when present. This lets you run
// `PROJECT_BASE=/btm_workout/ npm run dev` locally to serve under that path,
// while keeping `npm run build` using the intended GitHub Pages base.
export default defineConfig(({ command }) => {
  // PROJECT_BASE controls the dev server path when you want to serve under a
  // subpath (useful for testing other repo apps locally). BUILD_BASE controls
  // the production base used when building for GitHub Pages.
  const projectBase = process.env.PROJECT_BASE
  const buildBase = process.env.BUILD_BASE ?? '/btm_workout/'

  const base = command === 'serve' ? (projectBase ?? '/') : buildBase

  return {
    base,
    plugins: [react()],
  }
})
