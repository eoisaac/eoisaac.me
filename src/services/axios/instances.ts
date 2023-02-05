import axios from 'axios'

export const github = axios.create({
  baseURL: 'https://api.github.com',
})

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN

export const telegram = axios.create({
  baseURL: `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`,
})
