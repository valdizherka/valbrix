// Runs after both Vite builds. Writes one HTML file per route with the page
// already rendered, plus that route's title, description, canonical, Open
// Graph tags and JSON-LD. Crawlers that don't run JavaScript (ChatGPT,
// Perplexity, Claude) get the full text; browsers hydrate it as usual.
// Folder-style (faq/index.html) so Vercel serves /faq without cleanUrls,
// which would also redirect the Search Console verification file.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { SITE_URL, pageMeta, notFoundMeta } from '../src/seo/meta.js'
import { schemaFor } from '../src/seo/schema.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = resolve(root, 'dist')
const ssrDir = resolve(root, 'dist-ssr')

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const template = readFileSync(resolve(outDir, 'index.html'), 'utf8')

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
// Keeps "</script>" inside JSON from closing the tag.
const jsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c')

function page(url, { title, description }, { canonical, noindex, schema }) {
  let head = `<title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />`
  if (canonical) {
    head += `
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Valbrix Digital" />
    <meta property="og:locale" content="de_DE" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${SITE_URL}/logo-signature.png" />`
  }
  if (noindex) head += `\n    <meta name="robots" content="noindex" />`
  if (schema) head += `\n    <script type="application/ld+json">${jsonLd(schema)}</script>`

  return template
    .replace(/<title>[\s\S]*?<\/title>\s*<meta name="description" content="[^"]*" \/>/, head)
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`)
}

for (const [path, meta] of Object.entries(pageMeta)) {
  const file = path === '/' ? 'index.html' : `${path.slice(1)}/index.html`
  const target = resolve(outDir, file)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, page(path, meta.de, {
    canonical: SITE_URL + path,
    schema: schemaFor(path, meta.de),
  }))
}
writeFileSync(resolve(outDir, '404.html'), page('/404', notFoundMeta.de, { noindex: true }))

rmSync(ssrDir, { recursive: true, force: true })
console.log(`Prerendered ${Object.keys(pageMeta).length} routes + 404.html`)
