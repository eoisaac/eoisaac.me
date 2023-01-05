import { ArrowSquareOut, GithubLogo } from 'phosphor-react'
import { Repository } from '../@types/app'
import { Button } from './Button'

interface RepositoryCardProps {
  data: Repository
}

export const RepositoryCard = ({ data }: RepositoryCardProps) => {
  const {
    // id,
    name,
    html_url,
    // description,
    homepage,
    // stargazers_count,
    // language,
    // forks_count,
    // topics,
    // forks,
  } = data

  return (
    <li>
      <article className="rounded-md border-2 border-b-700 p-4">
        <header className="flex items-center justify-between">
          <strong className="text-b-300">{name.replace(/_/g, ' ')}</strong>
          <div className="flex gap-2">
            <a
              href={html_url}
              className="focus:shadow-none"
              target="_blank"
              rel="noreferrer"
            >
              <Button label="" icon={<GithubLogo />} srLabel />
            </a>
            {homepage && (
              <a
                href={homepage}
                className="focus:shadow-none"
                target="_blank"
                rel="noreferrer"
              >
                <Button label="" icon={<ArrowSquareOut />} srLabel />
              </a>
            )}
          </div>
        </header>
      </article>
    </li>
  )
}
