import * as React from "react"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "./seo"
import ThemeToggle from "./ThemeToggle"
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
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    <div className={container}>
      <header className={siteTitle}>
        <ThemeToggle />
        <Seo />
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
            <Link to="/projects" className={navLinkText}>
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
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
export default Layout
