import React from "react"
import useDarkMode from "use-dark-mode"
import { 
  themeButton,
  themeIcon,
  sunIcon,
  moonIcon 
} from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const storedDarkMode = localStorage.getItem('darkMode')
  const darkMode = useDarkMode(storedDarkMode === 'true' ? true : false)

  React.useEffect(() => {
    localStorage.setItem('darkMode', darkMode.value ? 'true' : 'false')
  }, [darkMode.value])

  return (
    <button 
      type="button" 
      onClick={darkMode.toggle} 
      className={themeButton}
      aria-label={darkMode.value ? "Switch to light mode" : "Switch to dark mode"}
    >
      <svg
        className={`${themeIcon} ${darkMode.value ? moonIcon : sunIcon}`}
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        {darkMode.value ? (
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </>
        )}
      </svg>
    </button>
  )
}

export default ThemeToggle