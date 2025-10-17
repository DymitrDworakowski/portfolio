import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "../../pages/certificates.module.css"

const CerPath = "/data/Dymitr Dworakowski.pdf"
const Cer = encodeURI(CerPath)

const CertificatesSection = () => {
  const { t } = useTranslation(["certificates"])
  return (
    <div className={styles.certificatesContainer}>
      <h1 className={styles.certificatesTitle}>{t("certificates:title")}</h1>
      <div className={styles.certificatesGrid}>
        <object
          data={Cer}
          type="application/pdf"
          width="100%"
          height="500px"
          className={styles.certificateFrame}
          aria-label={t("certificates:cer_title")}
        >
          <p>
            {t("certificates:cer_fallback_text")}{" "}
            <a href={Cer} target="_blank" rel="noopener noreferrer">
              {t("certificates:cer_open")}
            </a>
          </p>
        </object>
      </div>

      <div style={{ textAlign: "center" }}>
        <a
          href={Cer}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.backLink}
          style={{ marginRight: 12 }}
        >
          {t("certificates:cer_open_new")}
        </a>
      </div>
    </div>
  )
}

export default CertificatesSection
