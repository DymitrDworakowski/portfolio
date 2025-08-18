import { useLocalStorage } from 'usehooks-ts'

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>(
    'theme',
    'light' // default theme
  )

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}