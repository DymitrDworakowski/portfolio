import React, { useEffect } from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import { switcherContainer, languageSelect } from "./languageSwitcher.module.css"

const LanguageSwitcher = () => {
  const { languages, changeLanguage, language } = useI18next()

  return (
    <div className={switcherContainer}>
      <select
        className={languageSelect}
        value={language} // Відображає поточну мову
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {languages.map((lng) => (
          <option key={lng} value={lng}>
            {lng.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher
