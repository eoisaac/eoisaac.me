import { useTranslation } from 'react-i18next'
import { CustomLink } from '../components/CustomLink'
import { JobNode } from '../components/JobNode'
import { SocialList } from '../components/SocialList'
import { jobs } from '../data/jobs'
import { BasePage } from '../layouts/BasePage'
import { BaseSection } from '../layouts/BaseSection'

export const About = () => {
  const { t } = useTranslation()

  const myAge = new Date().getFullYear() - 2001

  return (
    <BasePage heading={t('about_heading')!}>
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
                className="rounded-md shadow-md grayscale transition-all
                duration-200 hover:grayscale-0"
              />
              <figcaption className="sr-only">Isaac Santiago.</figcaption>
            </figure>
            <SocialList />
          </div>
          <div className="flex flex-col gap-2">
            <p>
              {t('p1_about', {
                myAge,
              })}
            </p>
            <p>{t('p2_about')}</p>
            <p>
              Por acaso, procurando lives na Twitch, encontrei o
              <CustomLink
                label="canal do Marco Bruno"
                href="https://www.twitch.tv/marcobrunodev"
              />
              e comecei a segui-lo. Ele estava desenvolvendo uma plataforma de
              cursos, a FiredLabs, que possui um curso básico sobre HTML e CSS,
              no qual o projeto era desenvolver um site portfólio. Após terminar
              esse curso, comecei a me interessar mais por desenvolver sites, e,
              desde então, venho estudando JavaScript, HTML e CSS, e, tenho como
              objetivo aprender React e Node futuramente.
            </p>
          </div>
        </div>
      </BaseSection>
      <BaseSection heading={t('where_ive_worked')!}>
        <ol className="ml-4 flex list-disc flex-col gap-4">
          {jobs.map((job) => {
            return <JobNode key={`${job.role}-${job.company.name}`} job={job} />
          })}
        </ol>
      </BaseSection>
    </BasePage>
  )
}
