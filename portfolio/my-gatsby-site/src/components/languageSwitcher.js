import React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import { 
  switcherContainer,
  languageSelect,
  selectWrapper,
  selectArrow
} from "./languageSwitcher.module.css"

const LanguageSwitcher = () => {
  const { languages, changeLanguage, language } = useI18next()

  return (
    <div className={switcherContainer}>
      <div className={selectWrapper}>
        <select
          className={languageSelect}
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          aria-label="Language selector"
        >
          {languages.map((lng) => (
            <option key={lng} value={lng}>
              {lng.toUpperCase()}
            </option>
          ))}
        </select>
        <span className={selectArrow} aria-hidden="true">▼</span>
      </div>
    </div>
  )
}

export default LanguageSwitcher