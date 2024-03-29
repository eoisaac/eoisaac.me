import { telegram } from '../instances'

const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

export const getUpdate = async () => {
  const response = await telegram.get('/getUpdates')
  return response.data
}

export const sendMessage = async (message: string) => {
  try {
    const { data } = await telegram.get(`/sendMessage`, {
      params: {
        chat_id: TELEGRAM_CHAT_ID,
        parse_mode: 'Markdown',
        text: message,
      },
    })

    return data.ok
  } catch (e) {
    console.log(e)
  }
}
