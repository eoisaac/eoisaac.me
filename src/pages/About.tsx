import { JobNode } from '../components/JobNode'
import { BasePage } from '../layouts/BasePage'
import { BaseSection } from '../layouts/BaseSection'

export const About = () => {
  const jobs = [{}, {}]

  return (
    <BasePage heading="About me.">
      <BaseSection heading="A little about myself" srHeading>
        <div
          className="flex flex-col items-center gap-4 sm:flex-row 
        sm:items-start"
        >
          <figure>
            <img
              src="./assets/images/me.jpg"
              alt="Isaac wearing a blue hoodie picture."
              loading="lazy"
              className="rounded-md shadow-md"
            />
            <figcaption className="ml-1 mt-1 text-sm text-b-500">
              Hi! It&apos;s me!
            </figcaption>
          </figure>
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
        <ol className="mt-1 border-l-[1px] border-b-600">
          {jobs.map((job, index) => (
            <JobNode key={index} />
          ))}
        </ol>
      </BaseSection>
    </BasePage>
  )
}
