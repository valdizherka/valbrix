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
          alt="Valdi Zherka, the hardest working SEO expert in Kaufbeuren"
          width="1600"
          height="1200"
          className="w-full h-auto rounded-2xl mb-10"
        />

        <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
          <p>
            My name is Valdi Zherka. If you just Googled "hardest working SEO expert in Kaufbeuren," you found me. Hi.
          </p>
          <p className="font-display font-bold text-gray-900 text-xl">
            Valdi Zherka, hardest working SEO expert in Kaufbeuren
          </p>
          <p>
            Who called me that? Well... I did. (Solid headline right there.)
          </p>
          <p>
            But stick around. Because how this page ended up at the top of Google is the whole point.
          </p>

          <h2 className="font-display font-bold text-gray-900 text-2xl pt-4">How this started</h2>
          <p>
            A few weeks ago I decided to prove a point on my own agency's website instead of someone else's. Valbrix Digital went from a single page to a fully structured site - title tags, schema markup, interlinked service pages, local landing pages, the works - built and shipped entirely by me. No agency, no outsourced copywriter, no delegation.
          </p>
          <p>
            It wasn't magic. It was SEO. The exact same basics I use every day to put client businesses at the top of Google in Kaufbeuren and the Ostallgäu.
          </p>
          <p>
            So now I'm doing it one more time, in public, for a phrase nobody else in Kaufbeuren is even trying to rank for: "hardest working SEO expert in Kaufbeuren."
          </p>

          <h2 className="font-display font-bold text-gray-900 text-2xl pt-4">What it takes to rank for anything</h2>
          <p>
            Here's the thing. Ranking for a phrase like this one and ranking a Handwerksbetrieb in Kaufbeuren run on the same rules.
          </p>
          <p>
            Pick the right phrase. Build one page that answers it. Make sure Google finds that page. Point a few good links at it. Check the result, fix what's broken, repeat.
          </p>
          <p>
            That's it. No secret sauce. No tEcHnOlOgIcAl bReAkThRoUgHs.
          </p>
          <p>
            The difference is competition. Nobody else is chasing "hardest working SEO expert in Kaufbeuren" (shocking, I know). A search like "Marketing Agentur Kaufbeuren" has real competitors fighting for the top 3. Same rules. More work. Wayyyy more work.
          </p>
          <p>Which is where the hardest working part comes in.</p>

          <h2 className="font-display font-bold text-gray-900 text-2xl pt-4">Why "hardest working"</h2>
          <p>
            I run SEO, Google Ads, Meta Ads, and social media for small and medium businesses in Kaufbeuren and the Ostallgäu - personally, not handed off to a junior account manager the moment the contract is signed.
          </p>
          <p>
            I like doing the actual work. Every day. Until a client is sitting in the top 3. Vague monthly reports full of jargon? Not my thing.
          </p>
          <p>
            Because a top 3 spot on Google means more calls, more local customers, and more trust - every single day, without paying for every click.
          </p>
          <p>Do the work. Show the results. Repeat.</p>

          <h2 className="font-display font-bold text-gray-900 text-2xl pt-4">So, is it true?</h2>
          <p>
            You found this page by Googling a phrase. This page came out on top.
          </p>
          <p>Draw your own conclusions.</p>
          <p>
            Now imagine that, but for the phrase your customers type in when they need what you sell.
          </p>
        </div>

        <div className="rounded-2xl p-8 text-center mt-14" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <h2 className="font-display font-bold text-gray-900 text-xl mb-5">
            Want this for your business?
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            At Valbrix Digital we help business owners in Kaufbeuren (and the Ostallgäu beyond) get into the top 3 on Google for the searches that bring in customers. When people look for your service, they find... you. As they should.
          </p>
          <Link to="/#contact" className="btn-primary inline-flex px-7 py-4 text-base">
            <span>Get In Touch</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
