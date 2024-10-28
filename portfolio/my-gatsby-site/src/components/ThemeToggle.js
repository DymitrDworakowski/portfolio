import React from "react"
import useDarkMode from "gatsby-plugin-use-dark-mode"

const ThemeToggle = () => {
  const { toggleDarkMode, darkMode } = useDarkMode()

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  )
}

export default ThemeToggle
