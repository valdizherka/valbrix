import { createContext, useContext, useEffect, useState } from 'react'
import en from '../translations/en'
import de from '../translations/de'

const translations = { en, de }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  // Starts in German to match the prerendered HTML, then switches to a saved
  // English choice after hydration.
  const [lang, setLang] = useState('de')

  useEffect(() => {
    if (localStorage.getItem('valbrix-lang') === 'en') setLang('en')
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const switchLanguage = (newLang) => {
    setLang(newLang)
    localStorage.setItem('valbrix-lang', newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
