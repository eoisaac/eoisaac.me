import axios from 'axios'

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const VITE_DEV_API_KEY = import.meta.env.VITE_DEV_API_KEY

export const github = axios.create({
  baseURL: 'https://api.github.com',
})

export const telegram = axios.create({
  baseURL: `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`,
})

export const devV1 = axios.create({
  baseURL: `https://dev.to/api/articles`,
})

export const devV2 = axios.create({
  baseURL: `https://dev.to/api/articles`,
  headers: {
    accept: 'application/vnd.forem.api-v1+json',
    'api-key': VITE_DEV_API_KEY,
  },
})
