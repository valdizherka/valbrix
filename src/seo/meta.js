// Title and description for every route, in both languages. Used by the pages
// at runtime (usePageMeta) and by the build to write each route's own HTML head.
// Plain JS on purpose: vite.config.js imports this file in Node.
import de from '../translations/de.js'
import en from '../translations/en.js'

export const SITE_URL = 'https://valbrixdigital.com'

const staticPages = {
  '/': {
    de: {
      title: 'BESTE Werbeagentur Kaufbeuren | Websites, lokale SEO, Google Ads & Meta Ads in Ihrer Nähe | Valbrix Digital',
      description: 'Werbeagentur in Kaufbeuren: Websites, lokale SEO, SEO, Google Ads & Meta Ads für Unternehmen im Ostallgäu. Kostenloses Strategiegespräch.',
    },
    en: {
      title: 'BESTE Werbeagentur Kaufbeuren | Websites, lokale SEO, Google Ads & Meta Ads in Ihrer Nähe | Valbrix Digital',
      description: 'Werbeagentur in Kaufbeuren: Websites, lokale SEO, SEO, Google Ads & Meta Ads für Unternehmen im Ostallgäu. Kostenloses Strategiegespräch.',
    },
  },
  '/leistungen': {
    de: {
      title: 'Werbeagentur Kaufbeuren: Leistungen im Überblick | Valbrix Digital',
      description: 'Werbeagentur in Kaufbeuren: SEO, Google Ads, Social Media & mehr im Vergleich. Finden Sie die richtige Leistung für Ihr Unternehmen im Ostallgäu.',
    },
    en: {
      title: 'Marketing Agency Kaufbeuren: Our Services | Valbrix Digital',
      description: 'Marketing agency in Kaufbeuren: SEO, Google Ads, social media and more, compared. Find the right service for your business in the Ostallgäu.',
    },
  },
  '/ratgeber': {
    de: {
      title: 'Online-Marketing Kaufbeuren: Ratgeber für lokale Unternehmen | Valbrix Digital',
      description: 'Agentur, Freelancer oder selbst machen? So finden Sie eine gute Marketing-Agentur in Kaufbeuren. Plus 5 Dinge, die Sie diese Woche selbst erledigen.',
    },
    en: {
      title: 'Online Marketing Kaufbeuren: A Guide for Local Businesses | Valbrix Digital',
      description: 'Agency, freelancer or do it yourself? How to find a good marketing agency in Kaufbeuren. Plus 5 things you can sort out yourself this week.',
    },
  },
  '/faq': {
    de: {
      title: 'FAQ Werbeagentur Kaufbeuren: Kosten, Ablauf, Garantie | Valbrix Digital',
      description: 'Was kostet es, wie lange dauert es, gibt es einen langen Vertrag? Klare Antworten der Werbeagentur Valbrix Digital aus Kaufbeuren.',
    },
    en: {
      title: 'FAQ Advertising Agency Kaufbeuren: Cost, Process, Guarantee | Valbrix Digital',
      description: 'What does it cost, how long does it take, is there a long contract? Straight answers from Valbrix Digital in Kaufbeuren.',
    },
  },
  '/marketing-agentur-kaufbeuren': {
    de: {
      title: 'Die beste Marketing-Agentur in Kaufbeuren | Valbrix Digital',
      description: 'Marketing-Agentur in Kaufbeuren: Wir bringen Ihr Unternehmen bei Google Maps nach oben. SEO, Google Ads und Social Media aus einer Hand. Kostenloses Strategiegespräch.',
    },
    en: {
      title: 'The Best Marketing Agency in Kaufbeuren | Valbrix Digital',
      description: 'Marketing agency in Kaufbeuren: we get your business to the top of Google Maps. SEO, Google Ads and social media in one place. Book a free strategy call.',
    },
  },
  '/einsatzgebiete': {
    de: {
      title: 'Werbeagentur Kaufbeuren & Ostallgäu: Einsatzgebiete im Überblick | Valbrix Digital',
      description: 'Werbeagentur mit Sitz in Kaufbeuren. Wir betreuen die ganze Stadt und das Ostallgäu, auch Kempten, Memmingen und Umgebung. Jetzt Termin vereinbaren.',
    },
    en: {
      title: 'Marketing Agency Kaufbeuren & Ostallgäu: Areas We Serve | Valbrix Digital',
      description: 'Marketing agency based in Kaufbeuren. We work with businesses across the whole city and the Ostallgäu, including Kempten, Memmingen and the surrounding area.',
    },
  },
  '/impressum': {
    de: {
      title: 'Impressum | Valbrix Digital',
      description: 'Impressum von Valbrix Digital, Valdi Zherka, Merowingerstraße 2, 87600 Kaufbeuren.',
    },
    en: {
      title: 'Legal Notice | Valbrix Digital',
      description: 'Legal notice of Valbrix Digital, Valdi Zherka, Merowingerstraße 2, 87600 Kaufbeuren, Germany.',
    },
  },
  '/datenschutz': {
    de: {
      title: 'Datenschutzerklärung | Valbrix Digital',
      description: 'Datenschutzerklärung von Valbrix Digital aus Kaufbeuren: welche Daten wir erheben, wofür und welche Rechte Sie haben.',
    },
    en: {
      title: 'Privacy Policy | Valbrix Digital',
      description: 'Privacy policy of Valbrix Digital in Kaufbeuren: what data we collect, why, and what rights you have.',
    },
  },
  '/hardest-working-seo-expert-kaufbeuren': {
    de: {
      title: 'Hardest Working SEO Expert in Kaufbeuren | Valdi Zherka',
      description: "Valdi Zherka has been called the hardest working SEO in Kaufbeuren. Here's the proof.",
    },
    en: {
      title: 'Hardest Working SEO Expert in Kaufbeuren | Valdi Zherka',
      description: "Valdi Zherka has been called the hardest working SEO in Kaufbeuren. Here's the proof.",
    },
  },
}

const servicePages = Object.fromEntries(
  Object.keys(de.servicePages.items).map((slug) => {
    const pick = (item) => ({ title: item.seoTitle || `${item.title} - Valbrix Digital`, description: item.metaDescription })
    return [`/leistungen/${slug}`, { de: pick(de.servicePages.items[slug]), en: pick(en.servicePages.items[slug]) }]
  })
)

export const notFoundMeta = {
  de: { title: 'Seite nicht gefunden | Valbrix Digital', description: 'Diese Seite gibt es nicht.' },
  en: { title: 'Page not found | Valbrix Digital', description: 'This page does not exist.' },
}

export const pageMeta = { ...staticPages, ...servicePages }
