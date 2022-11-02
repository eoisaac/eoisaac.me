import { useKBar } from 'kbar'
import { Command } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const { query } = useKBar()

  const menuItemStyles = {
    link: `block px-4 py-2 border-b-2 border-b-transparent text-text-secondary 
    hover:text-text-primary/[0.8] hover:border-b-accent-orange/[0.7] 
    whitespace-nowrap`,
  }

  return (
    <header
      className="w-full flex items-center justify-between fixed px-3 py-1 sm:pb-0
     border-b border-b-base-lines shadow-md z-50 bg-base-background"
    >
      <div
        className="w-full flex items-center justify-between md:justify-start 
      bg-base-background"
      >
        <nav className="w-full flex items-center justify-between gap-1">
          <button>
            <NavLink
              to="/home"
              className="block p-2 text-text-secondary ml-[1px] rounded-md
              bg-base-background hover:text-text-primary hover:bg-shape-secondary/[0.8]"
            >
              <span className="block text-2xl leading-none font-mono font-bold">
                iS
              </span>
              <span className="sr-only">Isaac Santiago</span>
            </NavLink>
          </button>

          <ul
            className="flex items-center justify-center absolute p-[1px] pb-0 
            sm:relative top-full inset-x-0 overflow-auto bg-base-background 
            transition-all border-b-[1px] border-base-lines sm:border-0"
          >
            <li>
              <NavLink to="/about" className={menuItemStyles.link}>
                About me
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={menuItemStyles.link}>
                My projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/posts" className={menuItemStyles.link}>
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={menuItemStyles.link}>
                Contact me
              </NavLink>
            </li>
          </ul>

          <button
            className="p-2 text-text-secondary text-2xl mr-[1px] rounded-md
          bg-base-background hover:text-text-primary hover:bg-shape-secondary/[0.8]"
            onClick={query.toggle}
          >
            <Command />
          </button>
        </nav>
      </div>
    </header>
  )
}
