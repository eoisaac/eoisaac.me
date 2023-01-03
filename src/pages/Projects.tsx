import { useQuery } from 'react-query'
import { Repository } from '../@types/app'
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos non
          perspiciatis est earum corrupti deleniti, rerum culpa consequatur,
          dolor eaque nam quod voluptatibus odio accusamus sequi sint laudantium
          necessitatibus repudiandae?
        </p>

        {isFetching || !repositories ? (
          <Loading />
        ) : (
          repositories.map((repo) => {
            return <RepositoryCard key={repo.id} data={repo} />
          })
        )}
      </BaseSection>
    </BasePage>
  )
}
