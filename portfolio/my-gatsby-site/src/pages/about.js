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
      <section>
        <div className={aboutContainer}>
          <span className={sectionTitle}>My Journey</span>
          <p className={aboutText}>
            <Trans i18nKey="journey">
              Hi! I'm Dymitr Dworakowski, Junior Full-Stack Developer. I've
              always been passionate about technology and design, and I knew
              from my first projects that I wanted to create beautiful and
              functional web applications.
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
              I draw inspiration from design and user feedback. Every new
              project is a chance to learn something new and improve my skills.
            </Trans>
          </p>

          <span className={sectionTitle}>Let’s Connect!</span>
          <p className={`${aboutText} ${connectText}`}>
            <Trans i18nKey="connect">
              I am always open to new ideas and cooperation. If you have an
              interesting project or a question, I would be happy to chat!
            </Trans>
          </p>
        </div>
        <div>
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>July 2021 - Current</h3>
              <p>
                System and Network Administrator Intersport Poland, Krakow,
                Poland
              </p>
            </li>
            <li>
              Contributing to the development and maintenance of internal
              systems as a developer
            </li>
            <li>
              Maintaining and upgrading existing computer networks, including
              hardware like VPNs and routers
            </li>
            <li>
              Troubleshooting flaws in software, hardware configuration,
              communications equipment, and then fixing problems as they arise
            </li>
            <li>
              Updating and configuring virus protection software and other
              programs to keep networks secure
            </li>
            <li>Monitoring and maximizing network performance</li>
            <li>
              Installing and configuring computer systems and network equipment,
              including local area networks (LANs), wide area networks (WANs),
              and data communication systems
            </li>
            <li>
              ommunicating updates and problems to other employees, as well as
              those in management roles
            </li>
            <li>
              Preemptively determining an organization's software and hardware
              needs
            </li>
          </ul>
          <ul>
            <li>
              <h3>October 2017 - July 2021</h3>
              <p>Technical Support Engineer Ensalta, Krakow, Poland</p>
              <p></p>
            </li>
            <li>Take on initial telephone or email inquiries from clients</li>
            <li>Logging call / email activity</li>
            <li>Manage help desk software or ticket system</li>
            <li>
              Troubleshooting and managing simple software, hardware or network
              issues
            </li>
            <li>Provide help regarding the company product or services</li>
            <li>Stay up-to-date with updates, changes within the company</li>
            <li>Research questions on available resources (FAQ manual)</li>
            <li>Delegate difficult problems to the second level support.</li>
          </ul>
        </div>
        <div>
          <h2>Education</h2>
          <ul>
            <li>
              <h3>2015 - 2019</h3>
              <p>
                Bachelor's Degree in Computer Science, Software Engineering, and
                Information Technology, University of Wrocław, Poland
              </p>
            </li>
            <li>
              Coursework: Software Development, Advanced Programming, Network
              Programming, Database Management, and Object-Oriented Programming
            </li>
            <li>
              Master's Degree in Computer Science, Software Engineering, and
              Information Technology, University of Wrocław, Poland
            </li>
            <li>
              Coursework: Software Development, Advanced Programming, Network
              Programming, Database Management, and Object-Oriented Programming
            </li>
          </ul>
        </div>
        <div>
          <h2>Hobbies and interests</h2>
          <ul>
            <li>Airsoft game</li>
            <li>Computer games</li>
          </ul>
        </div>
      </section>
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
