import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js controls how the app runs and builds.
// - plugins: extend Vite (React, PWA, SVG, etc.)
// - server: dev server settings (port, proxy, HTTPS)
// - build: production output (bundling, chunks, sourcemaps)
// - resolve: path aliases for cleaner imports
// - css / define / base: styling, globals, deploy path

// WHAT IS Module Resolution?
// Module resolution = how Vite finds files when you use `import`.
// - Relative imports: ./ and ../ paths from current file
// - Node modules: packages from node_modules (e.g. 'react')
// - Aliases: custom path shortcuts (e.g. '@' → '/src')
// Vite controls these rules via the `resolve` option.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
