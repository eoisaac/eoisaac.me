import { useQuery } from 'react-query'
import { Repository } from '../@types/app'
import { CustomLink } from '../components/CustomLink'
import { Loading } from '../components/Loading'
import { RepositoryCard } from '../components/RepositoryCard'
import { BasePage } from '../layouts/BasePage'
import { BaseSection } from '../layouts/BaseSection'
import { getRepositories } from '../services/axios/requests/githubAPI'

export const Projects = () => {
  const { data: repositories, isFetching } = useQuery<Repository[]>(
    'REPOSITORIES',
    getRepositories,
  )

  return (
    <BasePage heading="My projects">
      <BaseSection heading="A little about myself" srHeading>
        <p>
          Here you can find my {repositories?.length} different websites, apps,
          and libraries that I built. If you prefer, you can access my
          <CustomLink
            label="GitHub repositories"
            href="https://github.com/eoisaac?tab=repositories"
          />
          .
        </p>

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
