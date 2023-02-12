import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { ArticleProps } from '../@types/app'
import { Loading } from '../components/Loading'
import { BasePage } from '../layouts/BasePage'
import { getArticleV1 } from '../services/axios/requests/devAPI'

export const Article = () => {
  const { id, title } = useParams()

  const getArticleData = () => {
    return getArticleV1(id!)
  }

  const {
    data: article,
    isFetching,
    isError,
  } = useQuery<ArticleProps>('ARTICLES', getArticleData)
  const hasArticles = !isFetching && !isError && article

  hasArticles && console.log(article.body_html)

  return (
    <BasePage heading={title}>
      {!hasArticles ? (
        <Loading />
      ) : (
        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: article.body_html,
          }}
        />
      )}
    </BasePage>
  )
}
