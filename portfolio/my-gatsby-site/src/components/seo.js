import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const fullTitle = `${title} | ${data.site.siteMetadata.title}`

  return (
    <>
      <title>{fullTitle}</title>
      <link rel="icon" href="/favicon.svg" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      <link rel="mask-icon" href="/favicon.svg" color="rgb(250,150,0)" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="theme-color" content="rgb(250,150,0)" />
    </>
  )
}

export default Seo

// For page-level Head usage (Gatsby Head export), also expose a simple Head helper
export const Head = ({ title }) => <Seo title={title} />