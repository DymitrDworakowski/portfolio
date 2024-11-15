// src/components/Layout.js
import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { buttons } from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <div className={buttons}></div>
      <main className="column">
        <div className="row">{children}</div>
      </main>

      <footer className="column">
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default Layout
