import { Gear, Moon, Sun, Translate } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../components/Button'
import { CustomLink } from '../components/CustomLink'
import { Popover } from '../components/Popover'
import { useLanguage } from '../hooks/useLanguage'
import { useTheme } from '../hooks/useTheme'

export const Footer = () => {
  const { isEnglish, toggleLanguage } = useLanguage()
  const { isDark, toggleTheme } = useTheme()

  const { t } = useTranslation()

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
              label={isDark ? t('light_theme') : t('dark_theme')}
              icon={isDark ? <Sun /> : <Moon />}
              iconLeft
              onClick={toggleTheme}
            />
          </li>
          <li>
            <Button
              label={isEnglish ? t('ptBR') : t('enUS')}
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
