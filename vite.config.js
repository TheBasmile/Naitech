import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a relative base ('./') so the build works when deployed
// to a GitHub Pages project subpath (https://username.github.io/repo-name/)
// without needing to hardcode the repository name.
// Combined with HashRouter (see src/main.jsx), this avoids 404s on
// direct/deep links and page refreshes on GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react()],
})
