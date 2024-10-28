// src/components/Footer.js
import React from "react"
import {
  footerContainer,
  footerContent,
  socialLinks,
  socialLinkItem,
  copyright,
} from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={footerContainer}>
      <div className={footerContent}>
        <p>
          © {new Date().getFullYear()} Dymitr Dworakowski | Junior Full-Stack
          Developer
        </p>
        <ul className={socialLinks}>
          <li className={socialLinkItem}>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className={socialLinkItem}>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className={socialLinkItem}>
            <a href="mailto:your-email@example.com">Email</a>
          </li>
        </ul>
      </div>
      <div className={copyright}>
        <p>Designed & Built by Dymitr Dworakowski</p>
      </div>
    </footer>
  )
}

export default Footer
