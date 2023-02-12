import { MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { Article } from '../@types/app'
import { InputField } from '../components/InputField'
import { Loading } from '../components/Loading'
import { BasePage } from '../layouts/BasePage'
import { getArticlesV2 } from '../services/axios/requests/devAPI'

export const Articles = () => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<string>('')

  const {
    data: articles,
    isFetching,
    isError,
  } = useQuery<Article[]>('ARTICLES', getArticlesV2)
  const hasArticles = !isFetching && !isError && articles

  const filteredArticles = hasArticles
    ? articles.filter(
        (article) =>
          article.title.toLowerCase().includes(filter) ||
          article.tags.includes(filter),
      )
    : []
  const hasFilteredArticles = filteredArticles.length !== 0

  hasArticles && console.log(articles)

  const handleFilterSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value.toLowerCase())
  }

  return (
    <BasePage heading="All posts">
      <div>
        <form>
          <InputField
            label={t('articles_search_input')}
            icon={<MagnifyingGlass />}
            onChange={handleFilterSearch}
          />
        </form>
      </div>

      {!hasArticles ? (
        <Loading />
      ) : (
        <ol
          // className="grid gap-4 sm:grid-cols-2"
          className="flex flex-col gap-4"
        >
          {hasFilteredArticles
            ? filteredArticles.map((article) => {
                return <li key={article.id}>{article.title}</li>
              })
            : articles.map((article) => {
                return <li key={article.id}>{article.title}</li>
              })}
        </ol>
      )}
    </BasePage>
  )
}
