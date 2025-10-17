// src/components/navbar.js
import React, { useState, useEffect, useRef } from "react"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { House, UserRound, FolderDot, GraduationCap, Link as LinkIcon } from "lucide-react"
import { useLocation } from "@reach/router"
// import ThemeToggle from "./ThemeToggle"
import LanguageSwitcher from "./languageSwitcher.js"
import * as styles from "./navbar.module.css"

const NAV_SECTIONS = ["#hero", "#about", "#projects", "#certificates", "#contacts"]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState("")
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const location = useLocation()

  // Закриваємо меню при кліку поза ним або Esc
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    const handleEscapeKey = event => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscapeKey)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [])

  // Блокуємо скрол при відкритому мобільному меню
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  // Ініціалізація активного пункту на основі location.hash / pathname (перший рендер)
  useEffect(() => {
    // якщо є hash - використовуємо його
    if (location && location.hash) {
      setActiveHash(location.hash)
    } else {
      // на головній сторінці можем поставити #hero
      if (location && (location.pathname === "/" || location.pathname === "")) {
        setActiveHash("#hero")
      } else {
        setActiveHash("") // або інша логіка для інших сторінок
      }
    }
  }, [location])

  // Scroll-spy: слідкуємо за секціями і оновлюємо activeHash під час скролу
  useEffect(() => {
    // працюємо лише в браузері
    if (typeof window === "undefined") return

    const sections = NAV_SECTIONS.map(h => {
      const id = h.replace("#", "")
      return document.getElementById(id)
    }).filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      entries => {
        // вибираємо entry з найбільшим intersectionRatio > 0
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveHash(`#${visible.target.id}`)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0.25, 0.5, 0.75], // налаштуй за бажанням
      }
    )

    sections.forEach(s => observer.observe(s))

    return () => observer.disconnect()
  }, [])

  const linkClass = hash =>
    `${styles.navItem} ${activeHash === hash ? styles.active : ""}`

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbarWrapper}>
        <h1 className={styles.logo}>
          <Link
            to="/"
            onClick={() => {
              setIsMenuOpen(false)
              setActiveHash("#hero")
            }}
          >
            <Trans>My Portfolio</Trans>
          </Link>
        </h1>

        {/** overlay for mobile menu */}
        <div
          className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ""}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden={!isMenuOpen}
        />

        <div
          className={`${styles.navItems} ${isMenuOpen ? styles.mobileMenu : ""}`}
          ref={menuRef}
          aria-hidden={!isMenuOpen}
        >
          <Link
            className={linkClass("#hero")}
            to="/#hero"
            onClick={() => {
              setIsMenuOpen(false)
              setActiveHash("#hero")
            }}
          >
            <Trans>
              {" "}
              <House /> Home
            </Trans>
          </Link>

          <Link
            className={linkClass("#about")}
            to="/#about"
            onClick={() => {
              setIsMenuOpen(false)
              setActiveHash("#about")
            }}
          >
            <Trans>
              {" "}
              <UserRound /> About Me
            </Trans>
          </Link>

          <Link
            className={linkClass("#projects")}
            to="/#projects"
            onClick={() => {
              setIsMenuOpen(false)
              setActiveHash("#projects")
            }}
          >
            <Trans>
              {" "}
              <FolderDot /> Projects
            </Trans>
          </Link>

          <Link
            className={linkClass("#certificates")}
            to="/#certificates"
            onClick={() => {
              setIsMenuOpen(false)
              setActiveHash("#certificates")
            }}
          >
            <Trans>
              {" "}
              <GraduationCap /> Education
            </Trans>
          </Link>
          <Link
            className={linkClass("#contact")}
            to="/#contact"
            onClick={() => {
              setIsMenuOpen(false)
              setActiveHash("#contact")
            }}
          >
            <Trans>
              {" "}
              <LinkIcon /> Links
            </Trans>
          </Link>
        </div>

        <div className={styles.controlsWrapper}>
          <LanguageSwitcher />
          {/* <ThemeToggle /> */}
        </div>

        <button
          ref={buttonRef}
          className={styles.hamburgerButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`${styles.lines} ${isMenuOpen ? styles.firstLine : ""}`}
          />
          <span
            className={`${styles.lines} ${isMenuOpen ? styles.secondLine : ""}`}
          />
          <span
            className={`${styles.lines} ${isMenuOpen ? styles.thirdLine : ""}`}
          />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
