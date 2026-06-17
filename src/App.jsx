import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Results from './components/Results'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#04060f] overflow-x-hidden">
        <div className="noise-overlay" />
        <Navbar />
        <main>
          <Hero />
          <ProblemSection />
          <WhyChooseUs />
          <Services />
          <Results />
          <Process />
          <CaseStudies />
          <Testimonials />
<CTASection />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
