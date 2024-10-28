import * as React from 'react'
import Layout from '../components/layout';
import Seo from '../components/seo'
import { graphql } from "gatsby"
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
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
export const Head = () => <Seo title="About Me" />

export default AboutPage