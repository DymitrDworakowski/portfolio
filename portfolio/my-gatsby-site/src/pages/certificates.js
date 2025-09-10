import * as React from "react"
import { graphql, Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./certificates.module.css"

// Static file path (in `static/data`) — keep human-readable path and encode at runtime
const CerPath = "/data/Dymitr Dworakowski.pdf"
const Cer = encodeURI(CerPath)

const Certificates = () => {
  const { t } = useTranslation(["certificates"])
  return (
    <Layout>
      <div className={styles.certificatesContainer}>
        <h1 className={styles.certificatesTitle}>{t("certificates:title")}</h1>
        <div className={styles.certificatesGrid}>
          {/* Primary embed: object (better fallback handling) */}
          <object
            data={Cer}
            type="application/pdf"
            width="100%"
            height="500px"
            className={styles.certificateFrame}
            aria-label={t("certificates:cer_title")}
          >
            {/* Fallback content: link to open/download if embed fails */}
            <p>
              {t("certificates:cer_fallback_text")} 
              <a href={Cer} target="_blank" rel="noopener noreferrer">{t("certificates:cer_open")}</a>
            </p>
          </object>
        </div>

        <div style={{ textAlign: "center" }}>
          <a href={Cer} target="_blank" rel="noopener noreferrer" className={styles.backLink} style={{ marginRight: 12 }}>
            {t("certificates:cer_open_new")}
          </a>
          <Link to="/" className={styles.backLink}>
            {t("certificates:cer_back")}
          </Link>
        </div>
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
