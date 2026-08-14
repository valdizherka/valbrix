import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import Services from '../components/Services'
import Results from '../components/Results'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import CTASection from '../components/CTASection'
import Contact from '../components/Contact'

export default function HomePage() {
  const location = useLocation()

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
      <Services />
      <Results />
      <CaseStudies />
      <Testimonials />
      <About />
      <CTASection />
      <Contact />
    </>
  )
}
