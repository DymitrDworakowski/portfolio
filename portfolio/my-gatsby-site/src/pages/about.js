import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import {
  projectContainer,
  projectTitle,
  projectSection,
  experienceItem,
  experienceMeta,
  experienceList,
  educationItem,
  educationMeta,
  hobbiesList,
} from "./about.module.css"

const AboutPage = () => {
  const { t } = useTranslation(["about"])

  return (
    <Layout pageTitle={t("about:pageTitle")}>
      <div className={projectContainer}>
        <h1 className={projectTitle}>{t("about:pageTitle")}</h1>

        <section className={projectSection}>
          <h2>{t("about:sections.journey.title")}</h2>
          <p>{t("about:sections.journey.content")}</p>
        </section>

        <section className={projectSection}>
          <h2>{t("about:sections.focus.title")}</h2>
          <p>{t("about:sections.focus.content")}</p>
        </section>

        <section className={projectSection}>
          <h2>{t("about:sections.skills.title")}</h2>
          <p>{t("about:sections.skills.content")}</p>
        </section>

        <section className={projectSection}>
          <h2>{t("about:sections.inspiration.title")}</h2>
          <p>{t("about:sections.inspiration.content")}</p>
        </section>

        <section className={projectSection}>
          <h2>{t("about:sections.connect.title")}</h2>
          <p>{t("about:sections.connect.content")}</p>
        </section>

        <section className={projectSection}>
          <h2>{t("about:sections.experience.title")}</h2>

          <div className={experienceItem}>
            <h3>{t("about:experience.intersport.position")}</h3>
            <p className={experienceMeta}>
              {t("about:experience.intersport.company")} |{" "}
              {t("about:experience.intersport.duration")}
            </p>
            <ul className={experienceList}>
              {[1, 2, 3, 4, 5].map(item => (
                <li key={item}>
                  {t(`about:experience.intersport.responsibilities.${item}`)}
                </li>
              ))}
            </ul>
          </div>

          <div className={experienceItem}>
            <h3>{t("about:experience.ensalta.position")}</h3>
            <p className={experienceMeta}>
              {t("about:experience.ensalta.company")} |{" "}
              {t("about:experience.ensalta.duration")}
            </p>
            <ul className={experienceList}>
              {[1, 2, 3, 4].map(item => (
                <li key={item}>
                  {t(`about:experience.ensalta.responsibilities.${item}`)}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={projectSection}>
          <h2>{t("about:sections.education.title")}</h2>
          <div className={educationItem}>
            <h3>{t("about:education.university.name")}</h3>
            <p className={educationMeta}>
              {t("about:education.university.duration")} |{" "}
              {t("about:education.university.degree")}
            </p>
            <p>{t("about:education.university.specialization")}</p>
            <p>{t("about:education.university.coursework")}</p>
          </div>
        </section>

        <section className={projectSection}>
          <h2>{t("about:sections.hobbies.title")}</h2>
          <ul className={hobbiesList}>
            {[1, 2, 3].map(item => (
              <li key={item}>{t(`about:hobbies.${item}`)}</li>
            ))}
          </ul>
        </section>
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

export const Head = ({ pageContext }) => (
  <Seo
    title={
      pageContext.language === "en"
        ? "About Me"
        : pageContext.language === "pl"
        ? "O Mnie"
        : "Про мене"
    }
  />
)

export default AboutPage
