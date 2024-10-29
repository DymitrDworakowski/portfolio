import React from "react"
import useDarkMode from "use-dark-mode"

const ThemeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-light"
        onClick={darkMode.disable}
      >
        ☀
      </button>
      {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
      <button type="button" className="btn btn-dark" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  )
}
export default ThemeToggle
