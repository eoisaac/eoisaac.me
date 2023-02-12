import { Link } from 'react-router-dom'
import { Article } from '../@types/app'

interface ArticleCardProps {
  data: Article
}

export const ArticleCard = ({ data }: ArticleCardProps) => {
  const { id, title } = data

  return (
    <li>
      <Link
        to={`/articles/${id}/${title}`}
        className="self-start focus:shadow-none"
      >
        <article
          className="flex h-full flex-col gap-4 rounded-md border-2 border-b-700
      p-4"
        >
          <header className="flex items-center justify-between">
            <strong className="text-b-300">{title}</strong>
            <div className="flex gap-2"></div>
          </header>
        </article>
      </Link>
    </li>
  )
}
