import { useTranslation } from 'react-i18next'
import { Job } from '../@types/app'
import { CustomLink } from '../components/CustomLink'
import { JobNode } from '../components/JobNode'
import { SocialList } from '../components/SocialList'
import { BasePage } from '../layouts/BasePage'
import { BaseSection } from '../layouts/BaseSection'

export const About = () => {
  const { t } = useTranslation()

  const myAge = new Date().getFullYear() - 2001
  const technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'Typescript',
    'React',
    'Styled Components',
    'Tailwindcss',
  ]
  const jobs: Job[] = [
    {
      role: 'Frontend Intern',
      company: {
        name: 'Zumpy',
        place: 'Belo Horizonte, MG',
        url: 'https://www.zumpy.com.br/',
      },
      start: 'June 2022',
      end: 'Present',
    },
  ]

  return (
    <BasePage heading={t('about_heading')!}>
      <BaseSection heading="A little about myself" srHeading>
        <div
          className="flex flex-col items-center gap-4 sm:flex-row
        sm:items-start"
        >
          <div className="animate-lSlideR">
            <figure className="relative mb-4">
              <img
                src="./assets/images/me.jpg"
                alt="Isaac wearing a blue hoodie picture."
                loading="lazy"
                className="h-fit max-w-[16rem] rounded-md object-cover shadow-md
                grayscale-[80%] transition-all duration-200 hover:grayscale-0"
              />
              <figcaption className="sr-only">Isaac Santiago.</figcaption>
            </figure>
            <SocialList />
          </div>
          <div className="flex animate-rSlideL flex-col gap-2">
            <p>
              {t('p1_about', {
                myAge,
              })}
            </p>
            <p>{t('p2_about')}</p>
            <p>
              <span>{t('p3_A_about')}</span>
              <CustomLink
                label="Marco Bruno"
                href="https://www.twitch.tv/marcobrunodev"
              />
              <span>{t('p3_B_about')}</span>
            </p>
          </div>
        </div>
      </BaseSection>
      <BaseSection heading={t('technologies')!}>
        <p className="animate-bSlideT">{t('p1_technologies')}</p>
        <ul className="ml-4 grid animate-bSlideT sm:grid-cols-2">
          {technologies.map((tech) => {
            return (
              <li key={tech} className="text-b-300">
                {tech}
              </li>
            )
          })}
        </ul>
      </BaseSection>
      <BaseSection heading={t('where_ive_worked')!}>
        <ol className="ml-4 flex animate-bSlideT list-disc flex-col gap-4">
          {jobs.map((job) => {
            return <JobNode key={`${job.role}-${job.company.name}`} job={job} />
          })}
        </ol>
      </BaseSection>
    </BasePage>
  )
}
