import { Repository } from '../@types/app'

interface RepositoryCardProps {
  data: Repository
}

export const RepositoryCard = ({ data }: RepositoryCardProps) => {
  const {
    id,
    name,
    html_url,
    description,
    homepage,
    stargazers_count,
    language,
    forks_count,
    topics,
    forks,
  } = data

  return <li>{name.replace(/_/g, ' ')}</li>
}
