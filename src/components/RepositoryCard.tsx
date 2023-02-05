import { ArrowSquareOut, GithubLogo } from 'phosphor-react'
import { Repository } from '../@types/app'
import { Button } from './Button'

interface RepositoryCardProps {
  data: Repository
}

export const RepositoryCard = ({ data }: RepositoryCardProps) => {
  const { name, html_url, homepage, topics } = data

  return (
    <li>
      <article
        className="flex h-full flex-col gap-4 rounded-md border-2 border-b-700
      p-4"
      >
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
        <ul className="flex flex-wrap gap-1 ">
          {topics.map((topic, index) => {
            return (
              <li key={index} className="text-sm">
                {topic}
              </li>
            )
          })}
        </ul>
      </article>
    </li>
  )
}
