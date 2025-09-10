import * as React from "react"
import { Rocket, User, Code, Award } from "lucide-react"
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
    { name: "React", level: 45 },
    { name: "Gatsby", level: 35 },
    { name: "Node.js", level: 40 },
    { name: "CSS", level: 67 },
    { name: "HTML", level: 90 },
    { name: "JavaScript", level: 50 },
    { name: "Python", level: 20 },
    { name: "Django", level: 10 },
    { name: "AWS", level: 10 },
    { name: "Docker", level: 40 }
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
              <h1 className={heroTitle}>
                <Rocket size={32} style={{verticalAlign: 'middle', marginRight: 8}} />
                {t("home:hero.title")}
              </h1>
              <h2 className={heroSubtitle}>
                <User size={24} style={{verticalAlign: 'middle', marginRight: 6}} />
                {t("home:hero.subtitle")}
              </h2>
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
                      <h3>
                        <Code size={18} style={{verticalAlign: 'middle', marginRight: 4}} />
                        {skill.name}
                      </h3>
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
                      <h3>
                        <Award size={18} style={{verticalAlign: 'middle', marginRight: 4}} />
                        {skill}
                      </h3>
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
  <Seo title={pageContext?.language === 'en' ? "Home" : "Strona główna"} />
)

export default IndexPage