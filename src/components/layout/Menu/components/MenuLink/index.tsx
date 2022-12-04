import { NavLink } from 'react-router-dom'

interface MenuLinkProps {
  title: string
  label: string
  link: string
}

export const MenuLink = ({ link, title, label }: MenuLinkProps) => {
  return (
    <li>
      <NavLink
        to={link}
        title={title}
        className="relative -m-1 flex justify-center whitespace-nowrap
      rounded-lg p-1 text-sm uppercase after:absolute
      after:top-[90%] after:block after:h-[1px] after:w-[20px] after:bg-b-100
      after:opacity-0 after:content-[''] hover:bg-b-100/10 hover:text-b-100"
      >
        <span>{label}</span>
      </NavLink>
    </li>
  )
}
