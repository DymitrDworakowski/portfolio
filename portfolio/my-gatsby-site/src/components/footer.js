import React from "react"
import { Phone, Mail, Github, Linkedin } from "lucide-react"
import {
  footer,
  footerContent,
  footerInfo,
  socialLinks,
  socialLink,
  socialIcon,
  copyright,
  emailLink,
} from "./footer.module.css"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={footer}>
      <div className={footerContent}>
        <div className={socialLinks}>
          <a
            href="https://www.linkedin.com/in/dymitr-dworakowski/"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin className={socialIcon} />
          </a>

          <a
            href="https://github.com/DymitrDworakowski"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLink}
            aria-label="GitHub"
          >
            <FaGithub className={socialIcon} />
          </a>

          <a
            href="mailto:dymitr.dworakowski@gmail.com"
            className={`${socialLink} ${emailLink}`}
            aria-label="Email"
          >
            <FaEnvelope className={socialIcon} />
          </a>
        </div>
        <div className={footerInfo}>
          {/* <p>Junior Full-Stack Developer</p> */}
          <p> <Mail style={{ color: "gold" }} /> dymitr.dworakowski@gmail.com</p>
          <p> <Phone style={{ color: "gold" }} /> +48 577 177 636</p>
        </div>
      </div>

      <div className={copyright}>
        <p> © {currentYear} Designed & Built by Dymitr Dworakowski</p>
      </div>
    </footer>
  )
}

export default Footer
