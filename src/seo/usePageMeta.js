import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { SITE_URL, pageMeta, notFoundMeta } from './meta.js'

function setHeadTag(selector, create, attr, value) {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = create()
    document.head.appendChild(tag)
  }
  tag.setAttribute(attr, value)
}

// Sets title, description, canonical and robots for the route at `path`.
// Unknown paths get the not-found meta and noindex.
export default function usePageMeta(path) {
  const { lang } = useLanguage()

  useEffect(() => {
    const entry = pageMeta[path]
    const m = entry ? entry[lang] || entry.de : notFoundMeta[lang] || notFoundMeta.de

    document.title = m.title
    setHeadTag('meta[name="description"]', () => {
      const t = document.createElement('meta')
      t.setAttribute('name', 'description')
      return t
    }, 'content', m.description)

    const canonical = document.head.querySelector('link[rel="canonical"]')
    const robots = document.head.querySelector('meta[name="robots"]')
    if (entry) {
      setHeadTag('link[rel="canonical"]', () => {
        const t = document.createElement('link')
        t.setAttribute('rel', 'canonical')
        return t
      }, 'href', SITE_URL + path)
      robots?.remove()
    } else {
      canonical?.remove()
      setHeadTag('meta[name="robots"]', () => {
        const t = document.createElement('meta')
        t.setAttribute('name', 'robots')
        return t
      }, 'content', 'noindex')
    }
  }, [path, lang])
}
