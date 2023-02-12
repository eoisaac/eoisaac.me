import { devV1, devV2 } from '../instances'

const DEV = {
  USER: 'eoisaac',
}

export const getArticlesV1 = async () => {
  try {
    const response = await devV1.get('/', {
      params: {
        username: DEV.USER,
      },
    })
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const getArticlesV2 = async () => {
  try {
    const response = await devV2.get('/me/all')
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const getArticleV1 = async (articleId: string) => {
  try {
    const response = await devV1.get(`/${articleId}`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const getArticleV2 = async (articleId: string) => {
  try {
    const response = await devV2.get(`/${articleId}`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}
