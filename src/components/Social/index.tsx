import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo
} from 'phosphor-react'
import { SocialContainer } from './styles'

export const Social = () => {
  return (
    <SocialContainer>
      <li>
        <a href="https://github.com/eoisaac" target="_blank" rel="noreferrer">
          <GithubLogo />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/eoisaac"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/eoisaacc" target="_blank" rel="noreferrer">
          <TwitterLogo />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/eoisaacc"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramLogo />
        </a>
      </li>
    </SocialContainer>
  )
}
