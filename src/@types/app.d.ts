export interface Company {
  name: string
  place: string
  link?: string
}

export interface Job {
  role: string
  company: Company
  start: string
  end: string
}

export interface Repository {
  id: number
  name: string
  html_url: string
  description: string
  homepage?: string
  stargazers_count: number
  language: string
  forks_count: number
  topics: string[]
  forks: number
}
