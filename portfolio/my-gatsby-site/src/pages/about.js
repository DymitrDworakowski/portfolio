import * as React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import {
  aboutContainer,
  sectionTitle,
  aboutText,
  connectText,
} from "./about.module.css"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className={aboutContainer}>
        <span className={sectionTitle}>My Journey</span>
        <p className={aboutText}>
          <Trans i18nKey="journey">
            Hi! I'm Dymitr Dworakowski, Junior Full-Stack Developer. I've always
            been passionate about technology and design, and I knew from my
            first projects that I wanted to create beautiful and functional web
            applications.
          </Trans>
        </p>
        <span className={sectionTitle}>What I Focus On</span>
        <p className={aboutText}>
          <Trans i18nKey="focus">
            I like to work on projects that combine a user-friendly interface
            and powerful functionality. I believe that good design is not only
            about aesthetics, but also about ease of use.
          </Trans>
        </p>
        <span className={sectionTitle}>Skills & Tools</span>
        <p className={aboutText}>
          <Trans i18nKey="tools">
            I use HTML5, CSS3, JavaScript and React to create efficient and
            modern interfaces. I also work with Node.js and MongoDB, which
            allows me to work on the full application stack.
          </Trans>
        </p>

        <span className={sectionTitle}>What Inspires Me</span>
        <p className={aboutText}>
          <Trans i18nKey="inspires">
            I draw inspiration from design and user feedback. Every new project
            is a chance to learn something new and improve my skills.
          </Trans>
        </p>

        <span className={sectionTitle}>Let’s Connect!</span>
        <p className={`${aboutText} ${connectText}`}>
          <Trans i18nKey="connect"></Trans>I am always open to new ideas and
          cooperation. If you have an interesting project or a question, I would
          be happy to chat!
        </p>
      </div>
      <div>
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>July 2021 - Current</h3>
            <p>
              System and Network Administrator Intersport Poland, Krakow, Poland
            </p>
          </li>
          <li>
            <h3>October 2017 - July 2021</h3>
            <p>Technical Support Engineer Ensalta, Krakow, Poland</p>
            <p></p>
          </li>
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

export const Head = () => <Seo title="About Me" />

export default AboutPage
