import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type Languages = 'enUS' | 'ptBR'

interface UseLanguageProps {
  language: Languages
  isEnglish: boolean
  toggleLanguage: () => void
}

const getLanguage = () => {
  const storedLanguage = localStorage.getItem('language') as Languages
  const browserLanguage = window.navigator.language.replace('-', '')
  const preferredIsPortuguese = browserLanguage === 'ptBR'

  if (storedLanguage) return storedLanguage
  return preferredIsPortuguese ? 'ptBR' : 'enUS'
}

export const useLanguage = (): UseLanguageProps => {
  const [language, setLanguage] = useState(getLanguage)

  const isEnglish = language === 'enUS'

  const {
    i18n: { changeLanguage },
  } = useTranslation()

  useEffect(() => {
    changeLanguage(language)
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prevTheme) => (prevTheme === 'enUS' ? 'ptBR' : 'enUS'))
  }

  return {
    language,
    isEnglish,
    toggleLanguage,
  }
}
