import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import FAQPage from './pages/FAQPage'

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="leistungen/:slug" element={<ServicePage />} />
          <Route path="faq" element={<FAQPage />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}

export default App
