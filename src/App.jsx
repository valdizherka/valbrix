import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesOverviewPage from './pages/ServicesOverviewPage'
import ServicePage from './pages/ServicePage'
import RatgeberPage from './pages/RatgeberPage'
import FAQPage from './pages/FAQPage'
import KaufbeurenPage from './pages/KaufbeurenPage'
import EinsatzgebietePage from './pages/EinsatzgebietePage'
import ImpressumPage from './pages/ImpressumPage'
import DatenschutzPage from './pages/DatenschutzPage'
import HardestWorkingSeoPage from './pages/HardestWorkingSeoPage'
import AreaPage from './pages/AreaPage'
import GoogleAiRankingPage from './pages/GoogleAiRankingPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="leistungen" element={<ServicesOverviewPage />} />
          <Route path="leistungen/:slug" element={<ServicePage />} />
          <Route path="ratgeber" element={<RatgeberPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="marketing-agentur-kaufbeuren" element={<KaufbeurenPage />} />
          <Route path="einsatzgebiete" element={<EinsatzgebietePage />} />
          <Route path="werbeagentur-kempten" element={<AreaPage slug="kempten" />} />
          <Route path="werbeagentur-memmingen" element={<AreaPage slug="memmingen" />} />
          <Route path="impressum" element={<ImpressumPage />} />
          <Route path="datenschutz" element={<DatenschutzPage />} />
          <Route path="hardest-working-seo-expert-kaufbeuren" element={<HardestWorkingSeoPage />} />
          <Route path="seo-agentur-kaufbeuren-google-ki" element={<GoogleAiRankingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}

export default App
