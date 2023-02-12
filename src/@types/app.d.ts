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

export interface User {
  name: string
  username: string
  twitter_username: string
  github_username: string
  user_id: number
  website_url: string
  profile_image: string
  profile_image_90: string
}

export interface FlareTag {
  name: string
  bg_color_hex: string
  text_color_hex: string
}

export interface Article {
  type_of: string
  id: number
  title: string
  description: string
  readable_publish_date: string
  slug: string
  path: string
  url: string
  comments_count: number
  public_reactions_count: number
  collection_id?: null
  published_timestamp: string
  positive_reactions_count: number
  cover_image?: string | null
  social_image: string
  canonical_url: string
  created_at: string
  edited_at?: string | null
  crossposted_at?: null
  published_at: string
  last_comment_at: string
  reading_time_minutes: number
  tag_list?: string[] | null
  tags: string
  user: User
  flare_tag?: FlareTag | null
}
