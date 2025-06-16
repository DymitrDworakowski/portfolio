import React, { useState, useEffect, useRef } from "react"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./LanguageSwitcher"
import { 
  navbar,
  navbarWrapper,
  logo,
  navItems,
  navItem,
  hamburgerButton,
  lines,
  mobileMenu,
  controlsWrapper
} from "./navbar.module.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className={navbar}>
      <nav className={navbarWrapper}>
        <h1 className={logo}>
          <Link to="/">
            <Trans>My Portfolio</Trans>
          </Link>
        </h1>

        <div className={controlsWrapper}>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <button 
          className={hamburgerButton} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={lines} />
        </button>

        <div 
          ref={menuRef} 
          className={`${navItems} ${isMenuOpen ? mobileMenu : ''}`}
        >
          <Link className={navItem} to="/">
            <Trans>Home</Trans>
          </Link>
          <Link className={navItem} to="/about">
            <Trans>About Me</Trans>
          </Link>
          <Link className={navItem} to="/projects">
            <Trans>Projects</Trans>
          </Link>
          <Link className={navItem} to="/certificates">
            <Trans>Certificates</Trans>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar