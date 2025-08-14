import React from "react"
import { 
  footer,
  footerContent,
  footerInfo,
  socialLinks,
  socialLink,
  socialIcon,
  copyright,
  emailLink
} from "./footer.module.css"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={footer}>
      <div className={footerContent}>
        <div className={footerInfo}>
          <p>© {currentYear} Dymitr Dworakowski</p>
          <p>Junior Full-Stack Developer</p>
        </div>

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
      </div>
      
      <div className={copyright}>
        <p>Designed & Built by Dymitr Dworakowski</p>
      </div>
    </footer>
  )
}

export default Footer