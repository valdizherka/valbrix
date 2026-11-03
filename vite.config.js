import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Per-route HTML (head, schema and prerendered body) is written after the
// build by scripts/prerender.js.
export default defineConfig({
  plugins: [react()],
})
