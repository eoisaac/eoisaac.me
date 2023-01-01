import { useEffect, useState } from 'react'

type Themes = 'light' | 'dark'

interface UseThemeProps {
  theme: Themes
  isDark: boolean
  toggleTheme: () => void
}

const getTheme = () => {
  const storedTheme = localStorage.getItem('theme') as Themes
  const preferredIsDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches

  if (storedTheme) return storedTheme
  if (preferredIsDark) return 'dark'

  return 'light'
}

export const useTheme = (): UseThemeProps => {
  const [theme, setTheme] = useState(getTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    const isDark = theme === 'dark'

    isDark ? root.classList.add('dark') : root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return {
    theme,
    isDark,
    toggleTheme,
  }
}
