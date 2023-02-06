import { Gear, Moon, Sun, Translate } from 'phosphor-react'
import { Button } from '../components/Button'
import { CustomLink } from '../components/CustomLink'
import { Popover } from '../components/Popover'
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
              iconLeft
              icon={isDark ? <Sun /> : <Moon />}
              onClick={toggleTheme}
            />
          </li>
          <li>
            <Button label="Toggle language" iconLeft icon={<Translate />} />
          </li>
        </ul>
      </Popover>
    </footer>
  )
}
