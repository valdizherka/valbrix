import { track } from '@vercel/analytics'

// Every enquiry is one "Enquiry" event in Vercel Web Analytics, with its type
// and the page it came from. Custom events only show on the Vercel Pro plan.
// Cookieless, so no consent banner (see Datenschutz, section 6).
export function trackEnquiry(type) {
  try {
    track('Enquiry', { type, page: window.location.pathname })
  } catch {
    // Analytics must never break a form or a link.
  }
}

// Counts taps on any phone or email link, including ones added later.
export function trackContactLinks() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest?.('a[href^="tel:"], a[href^="mailto:"]')
    if (link) trackEnquiry(link.getAttribute('href').startsWith('tel:') ? 'phone' : 'email')
  })
}
