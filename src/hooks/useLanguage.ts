import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type Languages = 'enUS' | 'ptBR'

interface UseLanguageProps {
  language: Languages
  toggleLanguage: () => void
}

const getLanguage = () => {
  const storedLanguage = localStorage.getItem('language') as Languages
  const browserLanguage = window.navigator.language.replace('-', '')
  const preferredIsEnglish = browserLanguage === 'enUS'

  if (storedLanguage) return storedLanguage
  return preferredIsEnglish ? 'enUS' : 'ptBR'
}

export const useLanguage = (): UseLanguageProps => {
  const [language, setLanguage] = useState(getLanguage)

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
    toggleLanguage,
  }
}
