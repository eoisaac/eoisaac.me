import { List, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../components/Button'
import { navLinks } from '../routes/AppRoutes'

interface MenuLinkProps {
  label: string
  href: string
  onClick?: () => void
}

const MenuLink = ({ label, href, onClick }: MenuLinkProps) => {
  return (
    <li onClick={onClick}>
      <NavLink to={href} className="hover -m-1 bg-transparent p-1 font-medium">
        {label}
      </NavLink>
    </li>
  )
}

export const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    window.onscroll = () => setIsScrolling(window.pageYOffset > 0)
  }, [])

  const handleDisplayMenu = () => {
    setDisplayMenu((prevState) => !prevState)
    document.body.style.overflow = displayMenu ? 'auto' : 'hidden'
  }

  return (
    <>
      <header
        className={`fixed top-0 z-30 flex w-full items-center justify-between
        border-b ${isScrolling ? 'border-b-600' : 'border-b-transparent'}
        bg-dark firefox:bg-opacity-100 bg-opacity-30 backdrop-blur-lg
        backdrop-saturate-150 backdrop-filter `}
      >
        <nav
          className="mx-auto flex w-full max-w-2xl items-center justify-between
        p-4 xl:max-w-3xl"
        >
          <ul className="hidden items-center sm:flex sm:gap-4">
            {navLinks.map(({ label, href }) => (
              <MenuLink key={href} href={href} label={label} />
            ))}
          </ul>

          <Button
            className="sm:hidden"
            srLabel
            onClick={handleDisplayMenu}
            label={displayMenu ? 'Close menu' : 'Open menu'}
            title={displayMenu ? 'Close menu' : 'Open menu'}
            icon={displayMenu ? <X /> : <List />}
          />
        </nav>
      </header>
      <nav
        className={`bg-dark fixed right-0 z-20 flex h-full w-full transform
        flex-col justify-between p-4 pb-16 duration-500 ease-in-out sm:hidden
        ${displayMenu ? 'translate-x-0' : '-translate-x-full'}
        firefox:bg-opacity-100 bg-opacity-30 pt-14 backdrop-blur-lg
        backdrop-saturate-150 backdrop-filter`}
      >
        <ul className="flex flex-col gap-8 py-4">
          {navLinks.map(({ label, href }) => (
            <MenuLink
              key={label}
              href={href}
              label={label}
              onClick={handleDisplayMenu}
            />
          ))}
        </ul>
      </nav>
    </>
  )
}
