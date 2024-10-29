// src/components/Layout.js
import React from "react"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./languageSwitcher"
import Footer from "./footer"
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <Trans>My Portfolio</Trans> {/* Назва вашого сайту */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <Trans>Home</Trans>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <Trans>About</Trans>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  <Trans>Projects</Trans>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/certificates" className="nav-link">
                  <Trans>Certificates</Trans>
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      <main className="container my-4">
        <h1 className="display-4">{pageTitle}</h1>
        {children}
      </main>

      <footer className="bg-light text-center py-4">
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
