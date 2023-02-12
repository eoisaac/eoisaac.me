import { dev } from '../instances'

export const getArticlesV1 = async () => {
  try {
    const response = await dev.get('/', {
      params: {
        username: 'eoisaac',
      },
    })
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const getArticlesV2 = async () => {
  try {
    const response = await dev.get('/me/all')
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const getArticle = async (articleId: string) => {
  try {
    const response = await dev.get(`/${articleId}`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}
