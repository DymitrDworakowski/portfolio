// src/components/Layout.js
import React from "react"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./LanguageSwitcher"
import Footer from "./Footer"
import {
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="container">
      <header className="row">
        <div className="column">
          <h1 className={siteTitle}>
            <Trans>My Portfolio</Trans>
          </h1>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
        <nav className="column-2">
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                <Trans>Home</Trans>
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                <Trans>About</Trans>
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/projects" className={navLinkText}>
                <Trans>Projects</Trans>
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/certificates" className={navLinkText}>
                <Trans>Certificates</Trans>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="column">
        <div className="row">
          {children}
        </div>
      </main>

      <footer className="row">
        <div className="column">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default Layout
