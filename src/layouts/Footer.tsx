import { Gear, Moon, Sun, Translate } from 'phosphor-react'
import { Button } from '../components/Button'
import { CustomLink } from '../components/CustomLink'
import { Popover } from '../components/Popover'
import { useLanguage } from '../hooks/useLanguage'
import { useTheme } from '../hooks/useTheme'

export const Footer = () => {
  const { toggleLanguage } = useLanguage()
  const { isDark, toggleTheme } = useTheme()

  const currentYear = new Date().getFullYear()

  const handleToggleLanguage = () => {
    toggleLanguage()
  }

  return (
    <footer
      className="mx-auto flex w-full max-w-2xl items-center justify-between
    p-4 xl:max-w-3xl"
    >
      <div className="flex flex-wrap items-center gap-1 text-sm">
        <div>Copyright &copy; {currentYear} </div>
        <CustomLink
          href="https://github.com/eoisaac"
          label="eoisaac - Isaac Santiago"
          icon={false}
        />
      </div>
      <Popover label="Settings" icon={<Gear />}>
        <ul className="-mb-1 flex flex-col gap-2">
          <li>
            <Button
              label="Toggle theme"
              icon={isDark ? <Sun /> : <Moon />}
              iconLeft
              onClick={toggleTheme}
            />
          </li>
          <li>
            <Button
              label="Toggle language"
              icon={<Translate />}
              iconLeft
              onClick={handleToggleLanguage}
            />
          </li>
        </ul>
      </Popover>
    </footer>
  )
}
