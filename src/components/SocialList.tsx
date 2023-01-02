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
        className="p-2"
        title={`My ${name}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className="hover -m-1 bg-transparent p-1 text-2xl text-b-400">
          {icon}
        </div>
        <span className="sr-only">{`My ${name}`}</span>
      </a>
    </li>
  )
}

export const SocialList = () => {
  const socialMedias = [
    { name: 'GitHub', href: '', icon: <GithubLogo /> },
    { name: 'LinkedIn', href: '', icon: <LinkedinLogo /> },
    { name: 'Twitter', href: '', icon: <TwitterLogo /> },
    { name: 'Instagram', href: '', icon: <InstagramLogo /> },
  ]

  return (
    <ul className="flex gap-3">
      {socialMedias.map(({ name, href, icon }) => {
        return <SocialMedia key={name} name={name} href={href} icon={icon} />
      })}
    </ul>
  )
}
