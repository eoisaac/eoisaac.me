import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { enUS } from './translations/enUS'
import { ptBR } from './translations/ptBR'

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
