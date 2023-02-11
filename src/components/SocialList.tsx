import {
  GithubLogo,
  House,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from 'phosphor-react'
import { Social } from '../@types/app'

interface SocialMediaProps {
  name: string
  url: string
  icon: JSX.Element
}

const SocialMedia = ({ name, url, icon }: SocialMediaProps) => {
  return (
    <li>
      <a
        href={url}
        className="hover block"
        title={`My ${name}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className="bg-transparent text-2xl">{icon}</div>
        <span className="sr-only">{`My ${name}`}</span>
      </a>
    </li>
  )
}

export const SocialList = () => {
  const socialList: Social[] = [
    {
      name: 'Portfolio',
      url: 'https://eoisaac-eoisaac.vercel.app/',
      icon: <House />,
    },
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
      name: 'Twitter',
      url: 'https://twitter.com/eoisaacc',
      icon: <TwitterLogo />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/eoisaacc',
      icon: <InstagramLogo />,
    },
  ]

  return (
    <ul className="flex items-center gap-3">
      {socialList.map(({ name, url, icon }) => {
        return (
          name !== 'Portfolio' && (
            <SocialMedia key={name} name={name} url={url} icon={icon} />
          )
        )
      })}
    </ul>
  )
}
