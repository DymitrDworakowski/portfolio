import React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"

const LanguageSwitcher = () => {
  const { languages, changeLanguage } = useI18next()

  return (
    <div>
      {languages.map(lng => (
        <button
          className="btn btn-lighter"
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
