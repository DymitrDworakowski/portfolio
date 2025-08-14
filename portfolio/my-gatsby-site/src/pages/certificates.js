import * as React from "react"
import { graphql, Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Certificates = () => {
  const { t } = useTranslation(["certificates"])
  return(
  <Layout>
    <div>
      <h1>{t("certificates:title")}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "20px",
        }}
      >
        <iframe
          src="/certificates/Dymitr Dworakowski.pdf"
          title="Сертифікат 1"
          width="100%"
          height="500px"
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        ></iframe>
      </div>

      <Link to="/" style={{ marginTop: "20px", display: "inline-block" }}>
      {t("certificates:back")}
      </Link>
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
export const Head = () => <Seo title="Certificates" />

export default Certificates
