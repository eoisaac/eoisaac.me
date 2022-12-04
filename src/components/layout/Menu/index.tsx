import { MenuLink } from './components/MenuLink'

interface MenuProps {
  isVisible: boolean
}

export const Menu = ({ isVisible }: MenuProps) => {
  return (
    <nav
      className={`absolute inset-x-0 top-full mx-auto overflow-x-auto
      bg-b-900 py-2 px-4 transition-all duration-500 sm:static sm:p-2
      ${isVisible ? 'top-0' : '-top-[400%]'}`}
    >
      <ul
        className="flex flex-col items-center justify-center gap-4 sm:flex-row
      sm:p-0"
      >
        <MenuLink title="Go to Home" label="Home" link="/" />
        <MenuLink title="Go to About" label="About" link="/about" />
        <MenuLink title="Go to Projects" label="Projects" link="/projects" />
        <MenuLink title="Go to Posts" label="Posts" link="/posts" />
        <MenuLink title="Go to Contact" label="Contact" link="/contact" />
      </ul>
    </nav>
  )
}
