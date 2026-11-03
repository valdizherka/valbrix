import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { SITE_URL, pageMeta, notFoundMeta } from './src/seo/meta.js'

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function withHead(template, { title, description }, { canonical, noindex }) {
  let extra = ''
  if (canonical) extra += `\n    <link rel="canonical" href="${canonical}" />`
  if (noindex) extra += `\n    <meta name="robots" content="noindex" />`
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${escapeHtml(description)}" />${extra}`
    )
}

// Writes one HTML file per route with that route's own German title,
// description and canonical, so Google gets the right head before any
// JavaScript runs. Vercel serves them via cleanUrls; anything else gets 404.html.
function routeHeads() {
  let outDir
  return {
    name: 'route-heads',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const template = readFileSync(resolve(outDir, 'index.html'), 'utf8')
      for (const [path, meta] of Object.entries(pageMeta)) {
        const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`
        const target = resolve(outDir, file)
        mkdirSync(dirname(target), { recursive: true })
        writeFileSync(target, withHead(template, meta.de, { canonical: SITE_URL + (path === '/' ? '/' : path) }))
      }
      writeFileSync(resolve(outDir, '404.html'), withHead(template, notFoundMeta.de, { noindex: true }))
    },
  }
}

export default defineConfig({
  plugins: [react(), routeHeads()],
})
