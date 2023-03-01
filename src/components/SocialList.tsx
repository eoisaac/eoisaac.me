import {
  GithubLogo,
  House,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from 'phosphor-react'
import { Social } from '../@types/app'

interface SocialListProps {
  column?: boolean
  socialLabel?: boolean
  displayPortfolioLink?: boolean
}

export const SocialList = ({
  column = false,
  socialLabel = false,
  displayPortfolioLink = false,
}: SocialListProps) => {
  const socialList: Social[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/eoisaac',
      icon: <GithubLogo />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eoisaac',
      icon: <LinkedinLogo />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/eoisaacc',
      icon: <InstagramLogo />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/eoisaacc',
      icon: <TwitterLogo />,
    },
  ]

  if (displayPortfolioLink) {
    socialList.unshift({
      name: 'Portfolio',
      url: 'https://eoisaac-eoisaac.vercel.app/',
      icon: <House />,
    })
  }

  return (
    <ul
      className={`${column ? 'flex-col' : 'flex-row'} flex items-center gap-3`}
    >
      {socialList.map(({ name, url, icon }) => {
        return (
          <li key={name}>
            <a
              href={url}
              className="hover flex gap-2"
              title={`My ${name}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-transparent text-2xl">{icon}</div>
              <span className={`${socialLabel ? 'not-sr-only' : 'sr-only'}`}>
                {name}
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
