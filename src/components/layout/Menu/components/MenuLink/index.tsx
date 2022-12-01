import { NavLink } from 'react-router-dom'
import { NavigationItem } from './styles'

interface MenuLinkProps {
  title: string
  label: string
  link: string
}

export const MenuLink = ({ link, title, label }: MenuLinkProps) => {
  return (
    <NavigationItem>
      <NavLink to={link} title={title}>
        <span>{label}</span>
      </NavLink>
    </NavigationItem>
  )
}
