import * as React from "react"
import Layout from "../components/layout"

// import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import { custom_bg,main_div, main, skills, skill, item,skill_item } from "./index.module.css"

const IndexPage = () => {
  const { t } = useTranslation(["home"])

  return (
    <Layout pageTitle="Home Page">
      <div className={custom_bg}>
        <div className={main_div}>
        <h2>{t("home:title")}</h2>
        <p className={main}>{t("home:main")}</p>
        {/* <StaticImage
            alt="Progman"
            src="../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"
            className="img-fluid opacity-0 border rounded"
          /> */}
          </div>
      </div>
      <div className={skills}>
        <div className={skill_item}>
          <h3>Hard Skills</h3>
          <ul className={skill}>
            <li className={item}>React</li>
            <li className={item}>Gatsby</li>
            <li className={item}>Node.js</li>
            <li className={item}>CSS</li>
            <li className={item}>HTML</li>
            <li className={item}>JavaScript</li>
            <li className={item}>Python</li>
            <li className={item}>Django</li>
            <li className={item}>Git</li>
            <li className={item}>AWS</li>
            <li className={item}>Docker</li>
            <li className={item}>Redux</li>
            <li className={item}>MongoDB</li>
            <li className={item}>Firebase</li>
            <li className={item}>Google Cloud</li>
            <li className={item}>SQL</li>
            <li className={item}>NoSQL</li>
            <li className={item}>Testing</li>
            <li className={item}>CI/CD</li>
            <li className={item}>Agile</li>
            <li className={item}>Scrum</li>
            <li className={item}>Jira</li>
            <li className={item}>Kubernetes</li>
          </ul>
        </div>
        <div className={skill_item}>
        <h3>Soft Skills</h3>
        <ul className={skill}>
          <li className={item}>Attentive</li>
          <li className={item}>Coordination</li>
          <li className={item}>Cooperative</li>
          <li className={item}>Critical thinking</li>
        </ul>
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
export const Head = () => <Seo title="Home Page" />

export default IndexPage
