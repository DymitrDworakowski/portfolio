import * as React from "react"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"
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
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <header className={siteTitle}>
        {data.site.siteMetadata.title}
        <Header />
      </header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              <Trans>Home</Trans>
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              <Trans>About</Trans>
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              <Trans>Projects</Trans>
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/certificates" className={navLinkText}>
              <Trans>Certificates</Trans>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
