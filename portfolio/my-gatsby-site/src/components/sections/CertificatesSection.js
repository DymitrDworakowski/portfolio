import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "../../pages/certificates.module.css"

const CerPath = "/data/Dymitr Dworakowski.pdf"
const Cer = encodeURI(CerPath)

const CertificatesSection = () => {
  const { t } = useTranslation(["certificates"])
  return (
    <div className={styles.educationContainer}>
      <section className={styles.projectSection}>
        <div>
        <h2 className={styles.educationTitle}>
          {/* <GraduationCap
            size={20}
            style={{ verticalAlign: "middle", marginRight: 6 }}
          /> */}
          {t("about:sections.education.title")}
        </h2>
        <div className={styles.educationItem}>
          <h3>{t("about:education.university.name")}</h3>
          <p className={styles.educationMeta}>
            {t("about:education.university.duration")} |{" "}
            {t("about:education.university.degree")}
          </p>
          <p>{t("about:education.university.specialization")}</p>
          <p>{t("about:education.university.coursework")}</p>
        </div>
        </div>
      </section>
      {/* <section className={styles.projectSection}>
        <h2>
           <Heart
            size={20}
            style={{ verticalAlign: "middle", marginRight: 6 }}
          /> 
          {t("about:sections.hobbies.title")}
        </h2>
        <ul className={styles.hobbiesList}>
          {[1, 2, 3].map(item => (
            <li key={item}>{t(`about:hobbies.${item}`)}</li>
          ))}
        </ul>
      </section> */}

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
    </div>
  )
}

export default CertificatesSection
