import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enUS from './locales/enUS.json'
import ptBR from './locales/ptBR.json'

export const test = i18n.use(initReactI18next).init({
  resources: {
    en: enUS,
    pt: ptBR,
  },
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
})
