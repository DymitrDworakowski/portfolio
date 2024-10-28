import * as React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import section from "./index.module.css"

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <section className={section}>
      <Layout pageTitle="Home Page">
        <h1>{t("greeting")}</h1>
        <p>{t("description")}</p>
        <p>
          Hi! my name is Dymitr Dworakowski. I'm Junior Full-Stack Developer
        </p>
        <StaticImage alt="Progman" src="../images/ImgHomePage.png" />
      </Layout>
      <Footer />
    </section>
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
export const Head = () => <Seo title="Home Page" />

export default IndexPage
