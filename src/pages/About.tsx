import { JobNode } from '../components/JobNode'
import { SocialList } from '../components/SocialList'
import { jobs } from '../data/jobs'
import { BasePage } from '../layouts/BasePage'
import { BaseSection } from '../layouts/BaseSection'

export const About = () => {
  return (
    <BasePage heading="About me">
      <BaseSection heading="A little about myself" srHeading>
        <div
          className="flex flex-col items-center gap-4 sm:flex-row 
        sm:items-start"
        >
          <div>
            <figure className="mb-4">
              <img
                src="./assets/images/me.jpg"
                alt="Isaac wearing a blue hoodie picture."
                loading="lazy"
                className="rounded-md shadow-md"
              />
              <figcaption className="sr-only">Isaac Santiago.</figcaption>
            </figure>
            <SocialList />
          </div>
          <div className="flex flex-col gap-2">
            <p>
              Meu nome é Isaac Santiago Gomes Pereira, tenho 21 anos e nasciem
              Ouro Branco, MG. Atualmente estou estudando sobre desenvolvimento
              Front-End e cursando Sistemas de Informação.
            </p>
            <p>
              Ao concluir ensino médio, entrei na faculdade de Engenharia de
              Bioprocessos na UFSJ, onde tive meu primeiro contato com
              programação durante a matéria de Algoritmos e Estrutura de Dados,
              na qual aprendi o básico da linguagem C. A partir dai, decidi que
              queria seguir na carreira de programação.
            </p>
            <p>
              Por acaso, procurando lives na Twitch, encontrei o canal doMarco
              Brunoe comecei a segui-lo. Ele estava desenvolvendo uma plataforma
              de cursos, a FiredLabs, que possui um curso básico sobre HTML e
              CSS, no qual o projeto era desenvolver um site portfólio. Após
              terminar esse curso, comecei a me interessar mais por desenvolver
              sites, e, desde então, venho estudando JavaScript, HTML e CSS, e,
              tenho como objetivo aprender React e Node futuramente.
            </p>
          </div>
        </div>
      </BaseSection>
      <BaseSection heading="Technologies">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ea
          repellat accusantium praesentium beatae provident minima perferendis,
          recusandae repudiandae laudantium earum maxime commodi nostrum
          architecto eaque repellendus quidem voluptatibus harum.
        </p>
      </BaseSection>
      <BaseSection heading="Where I've Worked">
        <ol className="ml-4 flex list-disc flex-col gap-4">
          {jobs.map((job) => {
            return <JobNode key={`${job.role}-${job.company.name}`} job={job} />
          })}
        </ol>
      </BaseSection>
    </BasePage>
  )
}
