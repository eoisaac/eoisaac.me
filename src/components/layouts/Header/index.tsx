import { List, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

export const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false)

  const handleMenuVisibility = () => {
    if (!isDesktop) setMenuVisibility((prevState) => !prevState)
  }

  useEffect(() => {
    isDesktop ? setMenuVisibility(true) : setMenuVisibility(false)
  }, [isDesktop])

  const menuItemStyles = {
    item: 'block w-full md:w-auto text-end',
    link: `block px-4 py-2 border-base-lines border-y-[1px] md:border-x-[1px] 
    md:border-t-0 -mb-[1px] md:-mx-[0.5px] border-b-2 border-b-transparent
    text-text-secondary hover:text-text-primary hover:border-b-auxiliary-blue`,
  }

  return (
    <header
      className="w-full flex items-center justify-between fixed p-3 
      md:px-0 md:py-0 md:pr-[1px] border-b border-b-base-lines shadow-md z-50
      bg-base-background"
    >
      <div
        className="w-full flex items-center justify-between md:justify-start 
      bg-base-background"
      >
        <h2
          className="min-w-fit font-mono text-text-secondary text-base md:pl-4 
          pr-4 md:pr-20 lg:pr-32 overflow-hidden"
        >
          isaac-santiago
        </h2>

        <nav className="w-full flex justify-end md:justify-start gap-1">
          <ul
            className={`w-full flex flex-col md:flex-row absolute md:relative 
            inset-x-0 px-1 md:p-0 bg-base-background  
            transition-all ${menuVisibility ? 'top-full' : '-top-[500px]'}
            border-b-[1px] border-base-lines sm:border-0
            `}
          >
            <li className={menuItemStyles.item}>
              <NavLink to="/home" className={menuItemStyles.link}>
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

          {/* <button
            className="relative p-2 mr-[1px] text-text-secondary text-2xl 
          bg-base-background hover:text-text-primary"
          >
            <Command /> <Compass />
          </button> */}
          <button
            className="relative md:hidden z-40 text-text-secondary text-2xl bg-base-background"
            onClick={handleMenuVisibility}
          >
            {menuVisibility ? <X /> : <List />}
          </button>
        </nav>
      </div>
    </header>
  )
}
