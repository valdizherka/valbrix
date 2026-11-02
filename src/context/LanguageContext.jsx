import { createContext, useContext, useEffect, useState } from 'react'
import en from '../translations/en'
import de from '../translations/de'

const translations = { en, de }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('valbrix-lang')
    return saved === 'en' ? 'en' : 'de'
  })

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
