// src/components/Layout.js
import React from "react"
import Navbar from "./Navbar"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./LanguageSwitcher"
import Footer from "./Footer"
import{buttons} from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <div className={buttons}>
      <ThemeToggle />
      <LanguageSwitcher />
      </div>
      <main className="column">
        <div className="row">{children}</div>
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
