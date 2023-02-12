import autoAnimate from '@formkit/auto-animate'
import { MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { Article } from '../@types/app'
import { ArticleCard } from '../components/ArticleCard'
import { InputField } from '../components/InputField'
import { Loading } from '../components/Loading'
import { BasePage } from '../layouts/BasePage'
import { getArticlesV1 } from '../services/axios/requests/devAPI'

export const Articles = () => {
  const { t } = useTranslation()
  const articlesRef = useRef(null)

  const [filter, setFilter] = useState<string>('')

  const {
    data: articles,
    isFetching,
    isError,
  } = useQuery<Article[]>('ARTICLES', getArticlesV1)
  const hasArticles = !isFetching && !isError && articles

  const filteredArticles = hasArticles
    ? articles.filter(
        (article) =>
          article.title.toLowerCase().includes(filter) ||
          article.tags.includes(filter),
      )
    : []
  const hasFilteredArticles = filteredArticles.length !== 0

  const handleFilterSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value.toLowerCase())
  }

  useEffect(() => {
    articlesRef.current && autoAnimate(articlesRef.current)
  }, [articlesRef])

  return (
    <BasePage heading={t('articles_heading')!}>
      <div>
        <form>
          <InputField
            label={t('articles_filter_input')}
            icon={<MagnifyingGlass />}
            onChange={handleFilterSearch}
          />
        </form>
      </div>

      {!hasArticles ? (
        <Loading />
      ) : (
        <ol ref={articlesRef} className="grid gap-4 sm:grid-cols-2">
          {hasFilteredArticles
            ? filteredArticles.map((article) => {
                return <ArticleCard key={article.id} data={article} />
              })
            : articles.map((article) => {
                return <ArticleCard key={article.id} data={article} />
              })}
        </ol>
      )}
    </BasePage>
  )
}
