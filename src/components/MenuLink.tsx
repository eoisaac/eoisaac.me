import { NavLink } from 'react-router-dom'

interface MenuLinkProps {
  label: string
  href: string
  onClick?: () => void
}

export const MenuLink = ({ label, href, onClick }: MenuLinkProps) => {
  return (
    <li onClick={onClick}>
      <NavLink
        to={href}
        className="-m-1 rounded-md p-1 font-medium transition-all duration-500
        ease-in-out hover:text-b-300"
      >
        {label}
      </NavLink>
    </li>
  )
}
