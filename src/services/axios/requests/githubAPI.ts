import { github } from '../instances'

const GITHUB = {
  USER: 'eoisaac',
}

export const getUserProfile = async () => {
  try {
    const response = await github.get(`/users/${GITHUB.USER}`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const getRepositories = async () => {
  try {
    const response = await github.get(`/users/${GITHUB.USER}/repos`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}
