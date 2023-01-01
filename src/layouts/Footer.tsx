import { Moon, Sun } from 'phosphor-react'
import { Toggle } from '../components/Toggle'
import { useTheme } from '../hooks/useTheme'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const { isDark, toggleTheme } = useTheme()

  return (
    <footer
      className="mx-auto flex w-full max-w-2xl items-center justify-between
    p-4 xl:max-w-3xl"
    >
      <div className="flex flex-wrap items-center gap-1 text-sm">
        <div>Copyright &copy; {currentYear} </div>
        <a
          href="https://github.com/eoisaac"
          target="_blank"
          rel="noreferrer"
          className="text-b-100 hover:text-b-50"
        >
          eoisaac - Isaac Santiago
        </a>
      </div>
      <Toggle
        label="Toggle theme"
        srLabel
        bodyIcon={isDark ? <Sun /> : <Moon />}
        onChange={toggleTheme}
      />
    </footer>
  )
}
