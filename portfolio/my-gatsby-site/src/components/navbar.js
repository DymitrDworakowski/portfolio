import React, { useState, useEffect, useRef } from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
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
} from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {  // Видалено зайву закриваючу дужку тут
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className={navbar}>
      <nav className={navbarWrapper}>
        <h1 className={logo}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <Trans>My Portfolio</Trans>
          </Link>
        </h1>

        <div className={`${navItems} ${isMenuOpen ? mobileMenu : ''}`} ref={menuRef}>
          <Link className={navItem} to="/" onClick={() => setIsMenuOpen(false)}>
            <Trans>Home</Trans>
          </Link>
          <Link className={navItem} to="/about" onClick={() => setIsMenuOpen(false)}>
            <Trans>About Me</Trans>
          </Link>
          <Link className={navItem} to="/projects" onClick={() => setIsMenuOpen(false)}>
            <Trans>Projects</Trans>
          </Link>
          <Link className={navItem} to="/certificates" onClick={() => setIsMenuOpen(false)}>
            <Trans>Certificates</Trans>
          </Link>
        </div>

        <div className={controlsWrapper}>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <button 
          ref={buttonRef}
          className={hamburgerButton} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className={`${lines} ${isMenuOpen ? 'first-line' : ''}`} />
          <span className={`${lines} ${isMenuOpen ? 'second-line' : ''}`} />
          <span className={`${lines} ${isMenuOpen ? 'third-line' : ''}`} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;