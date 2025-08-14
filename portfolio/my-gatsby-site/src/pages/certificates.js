import * as React from "react"
import { graphql, Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./certificates.module.css" // Імпорт CSS модуля

const Certificates = () => {
  const { t } = useTranslation(["certificates"])
  return (
    <Layout>
      <div className={styles.certificatesContainer}>
        <h1 className={styles.certificatesTitle}>{t("certificates:title")}</h1>
        <div className={styles.certificatesGrid}>
          <iframe
            src="/certificates/Dymitr Dworakowski.pdf"
            title={t("certificates:cer_title")}
            width="100%"
            height="500px"
            className={styles.certificateFrame}
          ></iframe>
        </div>

        <Link to="/" className={styles.backLink}>
          {t("certificates:cer_back")}
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