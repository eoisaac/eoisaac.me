import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from 'phosphor-react'

interface SocialMediaProps {
  name: string
  href: string
  icon: JSX.Element
}

const SocialMedia = ({ name, href, icon }: SocialMediaProps) => {
  return (
    <li>
      <a
        href={href}
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
  const socialMedias = [
    {
      name: 'GitHub',
      href: 'https://github.com/eoisaac',
      icon: <GithubLogo />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/eoisaac',
      icon: <LinkedinLogo />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/eoisaacc',
      icon: <TwitterLogo />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/eoisaacc',
      icon: <InstagramLogo />,
    },
  ]

  return (
    <ul className="flex items-center gap-3">
      {socialMedias.map(({ name, href, icon }) => {
        return <SocialMedia key={name} name={name} href={href} icon={icon} />
      })}
    </ul>
  )
}
