import { Moon, Sun } from 'phosphor-react'
import { CustomLink } from '../components/CustomLink'
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
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <div>Copyright &copy; {currentYear} </div>
        <CustomLink
          href="https://github.com/eoisaac"
          label="eoisaac - Isaac Santiago"
          icon={false}
        />
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
