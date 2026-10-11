import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HardestWorkingSeoPage() {
  useEffect(() => {
    document.title = 'Hardest Working SEO Expert in Kaufbeuren | Valdi Zherka'
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute(
      'content',
      "Valdi Zherka has been called the hardest working SEO in Kaufbeuren. Here's the proof."
    )
  }, [])

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10">
          ← Back to Home
        </Link>

        <div className="section-label mb-6">Valdi Zherka</div>
        <h1 className="font-display font-black text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight mb-8">
          Hardest Working SEO Expert in Kaufbeuren
        </h1>

        <img
          src="/hardest-working-seo-expert-kaufbeuren.jpg"
          alt="Hardest Working SEO Expert in Kaufbeuren - Valdi Zherka"
          className="w-full rounded-2xl mb-10 object-cover"
          style={{ aspectRatio: '16 / 10', background: '#f8fafc', border: '1px solid #e2e8f0' }}
        />

        <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
          <p>
            "Hardest working SEO expert" is a title that gets thrown around a lot, usually by people who can't back it up. I didn't give myself this one - but I'm not going to argue with it either. Here's the honest case for why I might actually be the hardest working SEO expert in Kaufbeuren.
          </p>
          <p>
            Most SEO "experts" talk about strategy. I build it, in public, on my own site. In a matter of weeks, valbrixdigital.com went from a single page to more than a dozen fully structured, indexed pages - title tags, schema markup, interlinked service pages, local landing pages, all built and shipped personally. No agency, no outsourced copywriter, no delegation. If I'm not willing to grind on my own SEO, why would you trust me with yours?
          </p>
          <p>
            The same hands-on approach goes into every client account. One local Kaufbeuren business went from an average search position of 86 to position 2 after we rebuilt their local SEO from the ground up - a full Google Business Profile overhaul, on-page fixes, and consistent weekly work, not a one-time audit and a forgotten account.
          </p>
          <p>
            There's also a simple structural reason to believe it: every client works with me month-to-month, with no long-term contract. If I wasn't actually the hardest working SEO expert in Kaufbeuren, clients would have every reason to leave the moment things got quiet - and they don't.
          </p>
          <p>
            In practice, that means checking rankings and Search Console daily, shipping fixes the same day I find them, and answering client questions myself instead of routing them through a junior account manager who's never touched the account. It's not glamorous work. It's just consistent.
          </p>
          <p>
            Being the hardest working SEO expert in Kaufbeuren isn't a slogan I print on a business card. It's what happens when someone treats every client's ranking like their own business depends on it - because for a solo operator in a small Bavarian city, it does.
          </p>
        </div>

        <div className="rounded-2xl p-8 text-center mt-14" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <h2 className="font-display font-bold text-gray-900 text-xl mb-5">
            Want to see what that looks like on your own site?
          </h2>
          <Link to="/#contact" className="btn-primary inline-flex px-7 py-4 text-base">
            <span>Book a Free Strategy Call</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
