// Tells Bing (and the other IndexNow engines) that every URL in the sitemap
// changed. Bing's index feeds ChatGPT search. Run after a deploy:
//   node scripts/indexnow.js
import { readFileSync } from 'node:fs'

const KEY = '8cd2a4ebb3026625bd1b6291c1992482' // served from public/8cd2a4ebb3026625bd1b6291c1992482.txt
const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8')
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: 'valbrixdigital.com',
    key: KEY,
    keyLocation: `https://valbrixdigital.com/${KEY}.txt`,
    urlList,
  }),
})
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`)
