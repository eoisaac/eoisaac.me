export interface Company {
  name: string
  place: string
  url?: string
}

export interface Job {
  role: string
  company: Company
  start: string
  end: string
}

export interface Social {
  name: string
  icon: JSX.Element
  url: string
}

export interface Repository {
  id: number
  name: string
  html_url: string
  description: string
  homepage: string
  stargazers_count: number
  language: string
  forks_count: number
  topics: string[]
  forks: number
}
