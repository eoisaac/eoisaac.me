import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { Repository } from '../@types/app'
import { CustomLink } from '../components/CustomLink'
import { Loading } from '../components/Loading'
import { RepositoryCard } from '../components/RepositoryCard'
import { BasePage } from '../layouts/BasePage'
import { BaseSection } from '../layouts/BaseSection'
import { getRepositories } from '../services/axios/requests/githubAPI'

export const Projects = () => {
  const { t } = useTranslation()

  const { data: repositories, isFetching } = useQuery<Repository[]>(
    'REPOSITORIES',
    getRepositories,
  )

  return (
    <BasePage heading="My projects">
      <BaseSection heading="A little about myself" srHeading>
        <div>
          <p>
            {t('p1_projects', {
              reposAmount: repositories?.length,
            })}
          </p>
          <p>
            {t('p2_projects')}
            <CustomLink
              href="https://github.com/eoisaac?tab=repositories"
              type="external"
              label="GitHub"
            />
            .
          </p>
        </div>

        {isFetching || !repositories ? (
          <Loading />
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {repositories.map((repo) => {
              return <RepositoryCard key={repo.id} data={repo} />
            })}
          </ul>
        )}
      </BaseSection>
    </BasePage>
  )
}
