import React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import { button_50 } from "./languageSwitcher.module.css"
const LanguageSwitcher = () => {
  const { languages, changeLanguage } = useI18next()

  return (
    <div>
      {languages.map(lng => (
        <button
          className={button_50}
          key={lng}
          onClick={() => changeLanguage(lng)}
        >
          {lng}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
