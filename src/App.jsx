import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesOverviewPage from './pages/ServicesOverviewPage'
import ServicePage from './pages/ServicePage'
import FAQPage from './pages/FAQPage'
import KaufbeurenPage from './pages/KaufbeurenPage'
import EinsatzgebietePage from './pages/EinsatzgebietePage'

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="leistungen" element={<ServicesOverviewPage />} />
          <Route path="leistungen/:slug" element={<ServicePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="marketing-agentur-kaufbeuren" element={<KaufbeurenPage />} />
          <Route path="einsatzgebiete" element={<EinsatzgebietePage />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}

export default App
