// JSON-LD for every route, written into the HTML by scripts/prerender.js.
// Plain JS on purpose: it runs in Node at build time.
import de from '../translations/de.js'
import { SITE_URL } from './meta.js'

const BUSINESS_ID = `${SITE_URL}/#business`

// Official profiles of this business. They tell AI search that
// valbrixdigital.com, the Google profile and the socials are one company.
const SAME_AS = [
  'https://maps.google.com/?cid=12527879259915254134',
  'https://www.linkedin.com/company/112278134/',
  'https://www.instagram.com/valbrix.digital/',
]

const business = {
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: 'Valbrix Digital',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-signature.png`,
  image: `${SITE_URL}/logo-signature.png`,
  description:
    'Inhabergeführte Marketingagentur und Werbeagentur aus Kaufbeuren. SEO, Google Ads, Meta Ads, Social-Media-Marketing und Websites für Unternehmen im Ostallgäu.',
  email: 'team@valbrixdigital.com',
  telephone: '+49 176 60154700',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Merowingerstraße 2',
    postalCode: '87600',
    addressLocality: 'Kaufbeuren',
    addressRegion: 'Bayern',
    addressCountry: 'DE',
  },
  founder: { '@type': 'Person', name: 'Valdi Zherka' },
  areaServed: ['Kaufbeuren', 'Neugablonz', 'Hafenberg', 'Oberbeuren', 'Ostend', 'Kempten', 'Memmingen', 'Ostallgäu'],
  knowsAbout: ['Suchmaschinenoptimierung', 'Lokale SEO', 'Google Ads', 'Meta Ads', 'Social-Media-Marketing', 'Webdesign'],
  sameAs: SAME_AS,
}

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Valbrix Digital',
  inLanguage: 'de-DE',
  publisher: { '@id': BUSINESS_ID },
}

// "[text](/path)" in translation strings becomes plain "text".
const plain = (s) => s.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')

const faqPage = (items) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: plain(item.answer) },
  })),
})

const breadcrumbs = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Start', path: '/' }, ...trail].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: SITE_URL + c.path,
  })),
})

export function schemaFor(path, meta) {
  const graph = [business, website]
  const services = de.servicePages.items
  const slug = path.startsWith('/leistungen/') ? path.slice('/leistungen/'.length) : null

  if (slug && services[slug]) {
    const item = services[slug]
    graph.push({
      '@type': 'Service',
      name: item.title,
      description: meta.description,
      url: SITE_URL + path,
      provider: { '@id': BUSINESS_ID },
      areaServed: business.areaServed,
    })
    if (item.faq) graph.push(faqPage(item.faq))
    graph.push(breadcrumbs([{ name: 'Leistungen', path: '/leistungen' }, { name: item.title, path }]))
  } else if (path === '/faq') {
    graph.push(faqPage(de.faqPage.items))
    graph.push(breadcrumbs([{ name: 'FAQ', path }]))
  } else if (path !== '/') {
    graph.push(breadcrumbs([{ name: meta.title.split(' | ')[0], path }]))
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
