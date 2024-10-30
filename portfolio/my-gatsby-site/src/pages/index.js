import * as React from "react"
import Layout from "../components/layout"

// import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import { custom_bg } from "./index.module.css"

const IndexPage = () => {
  const { t } = useTranslation(["home"])

  return (
    <Layout pageTitle="Home Page">
      <div className={custom_bg}>
        <h2>{t("home:title")}</h2>
        <p className="">{t("home:main")}</p>
        {/* <StaticImage
            alt="Progman"
            src="../images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"
            className="img-fluid opacity-0 border rounded"
          /> */}
          </div>
          <div>
<h3>Skills</h3>
<ul>
  <li>React</li>
  <li>Gatsby</li>
  <li>Node.js</li>
  <li>CSS</li>
  <li>HTML</li>
  <li>JavaScript</li>
  <li>Python</li>
  <li>Django</li>
  <li>Git</li>
  <li>AWS</li>
  <li>Docker</li>
  <li>Redux</li>
  <li>MongoDB</li>
  <li>Firebase</li>
  <li>Google Cloud</li>
  <li>SQL</li>
  <li>NoSQL</li>
  <li>Testing</li>
  <li>CI/CD</li>
  <li>Agile</li>
  <li>Scrum</li>
  <li>Jira</li>
  <li>Kubernetes</li>
</ul>
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
