import * as React from "react"
import Layout from "../components/layout"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import { 
  container,
  hero,
  heroContent,
  heroTitle,
  heroSubtitle,
  heroText,
  sections,
  section,
  sectionTitle,
  skillsGrid,
  skillCard,
  skillCategory,
  skillList,
  skillItem,
  about,
  aboutText
} from "./index.module.css"

const IndexPage = () => {
  const { t } = useTranslation(["home"])

  const hardSkills = [
    { name: "React", level: 90 },
    { name: "Gatsby", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS", level: 95 },
    { name: "HTML", level: 98 },
    { name: "JavaScript", level: 92 },
    { name: "Python", level: 75 },
    { name: "Django", level: 70 },
    { name: "AWS", level: 65 },
    { name: "Docker", level: 60 }
  ]

  const softSkills = [
    t("home:skills.thinking"),
    t("home:skills.communication"),
    t("home:skills.teamwork"),
    t("home:skills.timeManagement")
  ]

  return (
    <Layout pageTitle={t("home:pageTitle")}>
      <div className={container}>
        {/* Hero Section */}
        <section className={hero}>
          <div className={heroContent}>
            <h1 className={heroTitle}>{t("home:hero.title")}</h1>
            <h2 className={heroSubtitle}>{t("home:hero.subtitle")}</h2>
            <p className={heroText}>
              {t("home:hero.description")}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className={sections}>
          <div className={section}>
            <h2 className={sectionTitle}>{t("home:skills.technical")}</h2>
            <div className={skillsGrid}>
              {hardSkills.map((skill) => (
                <div key={skill.name} className={skillCard}>
                  <div className={skillCategory}>
                    <h3>{skill.name}</h3>
                    <div className={skillList}>
                      <div 
                        className={skillItem} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span>{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={section}>
            <h2 className={sectionTitle}>{t("home:skills.soft")}</h2>
            <div className={skillsGrid}>
              {softSkills.map((skill) => (
                <div key={skill} className={skillCard}>
                  <div className={skillCategory}>
                    <h3>{skill}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={about}>
          <h2 className={sectionTitle}>{t("home:about.title")}</h2>
          <p className={aboutText}>
            {t("home:about.description")}
          </p>
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

// Fixed Head component - either use static title or pass pageContext
export const Head = ({ pageContext }) => (
  <Seo title={pageContext?.language === 'en' ? "Home" : "Головна"} />
)

export default IndexPage