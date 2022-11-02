import { ProjectCard } from '../components/ProjectCard'

export const Projects = () => {
  const projects = [
    {
      id: 1234,
      name: 'Project_A',
      html_url: 'html_url',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et aut odit dolore, quisquam nemo sequi, obcaecati consectetur minus',
      homepage: 'https://eoisaac.github.io',
      stargazers_count: 4,
      forks_count: 5,
      language: 'JavaScript',

      topics: [
        'reactjs',
        'styled-components',
        'typescript',
        'vitejs',
        'featured',
      ],
    },
    {
      id: 4567,
      name: 'Project_B',
      html_url: 'html_url',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et aut odit dolore, quisquam nemo sequi, obcaecati consectetur minus',
      homepage: 'https://github-blog-eoisaac.vercel.app',
      stargazers_count: 4,
      forks_count: 5,
      language: 'typescript',

      topics: ['tagA', 'tagB'],
    },
    {
      id: 890789,
      name: 'Project_C',
      html_url: 'html_url',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et aut odit dolore, quisquam nemo sequi, obcaecati consectetur minus',
      homepage: 'https://my-finance-omega.vercel.app',
      stargazers_count: 4,
      forks_count: 5,
      language: 'java',

      topics: ['tagA', 'tagB', 'featured'],
    },
  ]

  return (
    <main className="container-screen section">
      <h1 className="title">My Projects</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
        quidem ratione repudiandae ab, placeat tenetur harum reiciendis?
        Corporis, magni odio at exercitationem rem dolore! Nesciunt a impedit
        dolor qui vero!
      </p>

      <section className="section">
        <h2 className="subtitle">Featured Projects</h2>

        <ul
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      gap-4"
        >
          {projects.map((project) => {
            const isFeatured = project.topics.includes('featured')
            return (
              isFeatured && <ProjectCard key={project.id} project={project} />
            )
          })}
        </ul>
      </section>

      <section className="section">
        <h2 className="subtitle">All Projects</h2>

        <ul
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      gap-4"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </section>
    </main>
  )
}
