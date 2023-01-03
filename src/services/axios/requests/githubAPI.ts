import { github } from '../instances'

const GITHUB = {
  USER: 'eoisaac',
}

export const getUserProfile = async () => {
  const response = await github.get(`/users/${GITHUB.USER}/`)

  return response.data
}

export const getRepositories = async () => {
  const response = await github.get(`/users/${GITHUB.USER}/repos/`)

  return response.data
}
