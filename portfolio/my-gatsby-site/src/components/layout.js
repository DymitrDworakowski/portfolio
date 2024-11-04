// src/components/Layout.js
import React from "react"
import Navbar from "./Navbar"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./LanguageSwitcher"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <ThemeToggle />
      <LanguageSwitcher />

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
