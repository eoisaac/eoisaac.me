import { List, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

export const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 640px)')
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false)

  const handleMenuVisibility = () => {
    if (!isDesktop) setMenuVisibility((prevState) => !prevState)
  }

  useEffect(() => {
    isDesktop ? setMenuVisibility(true) : setMenuVisibility(false)
  }, [isDesktop])

  const menuItemStyles = {
    item: 'block w-full sm:w-auto text-end',
    link: `block px-4 py-2 border-base-lines border-y-[1px] sm:border-x-[1px] 
    sm:border-t-0 -mb-[1px] sm:-mx-[0.5px] border-b-2 border-b-transparent
    text-text-secondary hover:text-text-primary hover:border-b-text-secondary`,
  }

  return (
    <header
      className="w-full flex items-center justify-between fixed mt-[1px] p-2
      sm:px-0 sm:py-0 border-b border-b-base-lines bg-base-background z-50"
    >
      <div
        className="w-full flex gap-4 items-center justify-between 
      sm:justify-start bg-base-background"
      >
        <h2 className="font-mono text-text-secondary text-base sm:pl-2 md:pr-32">
          isaac_santiago
        </h2>

        <nav className="w-full flex justify-end sm:justify-start gap-1">
          <ul
            className={`w-full flex flex-col sm:flex-row absolute 
            sm:relative inset-x-0 p-1 sm:p-0 bg-base-background  
            transition-all ${menuVisibility ? 'top-full' : '-top-[500px]'}
            `}
          >
            <li className={menuItemStyles.item}>
              <NavLink to="/" className={menuItemStyles.link}>
                _home
              </NavLink>
            </li>
            <li className={menuItemStyles.item}>
              <NavLink to="/about" className={menuItemStyles.link}>
                _about-me
              </NavLink>
            </li>
            <li className={menuItemStyles.item}>
              <NavLink to="/projects" className={menuItemStyles.link}>
                _my-projects
              </NavLink>
            </li>
            <li className={menuItemStyles.item}>
              <NavLink to="/posts" className={menuItemStyles.link}>
                _posts
              </NavLink>
            </li>
            <li className={`${menuItemStyles.item} ml-auto`}>
              <NavLink to="/contact" className={menuItemStyles.link}>
                _contact-me
              </NavLink>
            </li>
          </ul>

          <button
            className="relative sm:hidden z-40 text-text-secondary text-2xl bg-base-background"
            onClick={handleMenuVisibility}
          >
            {menuVisibility ? <X /> : <List />}
          </button>
          <button
            className="relative p-2 mr-[1px] text-text-secondary text-2xl 
          bg-base-background hover:text-text-primary"
          >
            {menuVisibility ? <X /> : <List />}
          </button>
        </nav>
      </div>
    </header>
  )
}
