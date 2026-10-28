import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import CTASection from '../components/CTASection'
import Contact from '../components/Contact'

// Captured from index.html before any other page overwrites them, so the
// homepage restores its own title/description after in-app navigation.
const HOME_TITLE = document.title
const HOME_DESCRIPTION = document.querySelector('meta[name="description"]')?.getAttribute('content')

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    document.title = HOME_TITLE
    if (HOME_DESCRIPTION) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', HOME_DESCRIPTION)
    }
  }, [])

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
      }
    }
  }, [location])

  return (
    <>
      <Hero />
      <ProblemSection />
      <CTASection />
      <Contact />
    </>
  )
}
