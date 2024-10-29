import * as React from "react"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import { custom_bg } from "./index.module.css"

const IndexPage = () => {
  const { t } = useTranslation(["home"])

  return (
    <Layout pageTitle="Home Page">
      <div className={custom_bg}>
        <p className="">{t("home:main")}</p>
        {/* <StaticImage
            alt="Progman"
            src="../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"
            className="img-fluid opacity-0 border rounded"
          /> */}
      </div>
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
export const Head = () => <Seo title="Home Page" />

export default IndexPage
