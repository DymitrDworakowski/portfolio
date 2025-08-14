import * as React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import {projectContainer,projectTitle,projectSection,experienceItem,experienceMeta,experienceList} from "./about.module.css"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className={projectContainer}>
        <h1 className={projectTitle}>About Me</h1>

        <section className={projectSection}>
          <h2>My Journey</h2>
          <p>
            <Trans i18nKey="journey">
              Hi! I'm Dymitr Dworakowski, Junior Full-Stack Developer. I've
              always been passionate about technology and design, and I knew
              from my first projects that I wanted to create beautiful and
              functional web applications.
            </Trans>
          </p>
        </section>

        <section className={projectSection}>
          <h2>What I Focus On</h2>
          <p>
            <Trans i18nKey="focus">
              I like to work on projects that combine a user-friendly interface
              and powerful functionality. I believe that good design is not only
              about aesthetics, but also about ease of use.
            </Trans>
          </p>
        </section>

        <section className={projectSection}>
          <h2>Skills & Tools</h2>
          <p>
            <Trans i18nKey="tools">
              I use HTML5, CSS3, JavaScript and React to create efficient and
              modern interfaces. I also work with Node.js and MongoDB, which
              allows me to work on the full application stack.
            </Trans>
          </p>
        </section>

        <section className={projectSection}>
          <h2>What Inspires Me</h2>
          <p>
            <Trans i18nKey="inspires">
              I draw inspiration from design and user feedback. Every new
              project is a chance to learn something new and improve my skills.
            </Trans>
          </p>
        </section>

        <section className={projectSection}>
          <h2>Let's Connect!</h2>
          <p>
            <Trans i18nKey="connect">
              I am always open to new ideas and cooperation. If you have an
              interesting project or a question, I would be happy to chat!
            </Trans>
          </p>
        </section>

        <section className={projectSection}>
          <h2>Professional Experience</h2>
          
          <div className={experienceItem}>
            <h3>System and Network Administrator</h3>
            <p className={experienceMeta}>Intersport Poland, Krakow | July 2021 - Current</p>
            <ul className={experienceList}>
              <li>Contributing to the development and maintenance of internal systems</li>
              <li>Maintaining and upgrading computer networks and hardware</li>
              <li>Troubleshooting software and hardware issues</li>
              <li>Network security management and performance optimization</li>
              <li>System installation and configuration</li>
            </ul>
          </div>

          <div className={experienceItem}>
            <h3>Technical Support Engineer</h3>
            <p className={experienceMeta}>Ensalta, Krakow | October 2017 - July 2021</p>
            <ul className={experienceList}>
              <li>Handled initial client inquiries and support tickets</li>
              <li>Troubleshot software, hardware and network issues</li>
              <li>Managed help desk systems and documentation</li>
              <li>Provided product support and training</li>
            </ul>
          </div>
        </section>

        <section className="project-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>University of Wrocław, Poland</h3>
            <p className="education-meta">2015 - 2019 | Bachelor's & Master's in Computer Science</p>
            <p>Specialization: Software Engineering and Information Technology</p>
            <p>Coursework: Software Development, Advanced Programming, Network Programming, Database Management</p>
          </div>
        </section>

        <section className="project-section">
          <h2>Hobbies & Interests</h2>
          <ul className="hobbies-list">
            <li>Airsoft</li>
            <li>Computer Gaming</li>
            <li>Web Development</li>
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

export const Head = () => <Seo title="About Me" />

export default AboutPage