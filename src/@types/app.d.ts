export interface Project {
  id: number
  name: string
  html_url: string
  description: string
  homepage: string
  stargazers_count: number
  forks_count: number
  language: string

  topics: string[]
}
