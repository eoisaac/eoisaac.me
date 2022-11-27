import { github } from '../instances'

const GITHUB = {
  USER: 'eoisaac',
  REPOSITORY: 'eoisaac.me',
}

export const getProjects = async () => {
  const response = await github.get(`/users/${GITHUB.USER}/repos`)

  return response.data
}

export const getIssues = async () => {
  const response = await github.get(
    `/repos/${GITHUB.USER}/${GITHUB.REPOSITORY}/issues`,
  )

  return response.data
}

export const getPost = async (id: string) => {
  const response = await github.get(
    `/repos/${GITHUB.USER}/${GITHUB.REPOSITORY}/issues/${id}`,
  )

  return response.data
}
