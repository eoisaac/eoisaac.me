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
