import { MenuLink } from './components/MenuLink'
import { MenuContainer } from './styles'

export const Menu = () => {
  return (
    <MenuContainer>
      <ul>
        <MenuLink title="Go to Home" label="Home" link="/" />
        <MenuLink title="Go to About" label="About" link="/about" />
        <MenuLink title="Go to Projects" label="Projects" link="/projects" />
        <MenuLink title="Go to Posts" label="Posts" link="/posts" />
        <MenuLink title="Go to Contact" label="Contact" link="/contact" />
      </ul>
    </MenuContainer>
  )
}
