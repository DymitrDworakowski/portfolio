import * as React from "react"
import { Phone, Mail, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import DecryptedText from "../components/DecryptedText"
import Seo from "../components/seo"
import AboutSection from "../components/sections/AboutSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import CertificatesSection from "../components/sections/CertificatesSection"
import ContactSection from "../components/sections/ContactSection"

import {
  container,
  hero,
  heroContent,
  heroTitle,
  heroSubtitle,
  heroTitle_container,
  cv,
  cvButton,
  cvInfo,
  cvInfoText,
  cvInfoDivider,
  contactItems,
  contactItem,
} from "./index.module.css"

const IndexPage = () => {
  const { t } = useTranslation(["home"])

  return (
    <Layout pageTitle={t("home:pageTitle")}>
      <div className={container}>
        {/* CV bar */}
        <div className={cv}>
          <div className={cvInfo}>
            <span className={cvInfoDivider}></span>
            <p className={cvInfoText}>Open to work</p>
          </div>
          <a
            href="/data/Dymitr_Dworakowski_CV.pdf"
            download="Dymitr_Dworakowski_CV.pdf"
            className={cvButton}
          >
            Download CV
          </a>
        </div>

        {/* HERO */}
        <section id="hero" className={hero}>
          <motion.div
            className={heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className={heroSubtitle}>{t("home:hero.subtitle")}</h2>
            <h1 className={heroTitle}>
              <div className={heroTitle_container}>
                <DecryptedText
                  text={t("home:hero.title")}
                  animateOn="view"
                  revealDirection="center"
                />
                <DecryptedText
                  text={t("home:hero.title_2")}
                  animateOn="view"
                  revealDirection="center"
                />
              </div>
            </h1>

            <div className={contactItems}>
              <p className={contactItem}>
                <Phone style={{ color: "rgb(250,150,0)" }} /> +48 577 177 636
              </p>
              <p className={contactItem}>
                <Mail style={{ color: "rgb(250,150,0)" }} /> dymitr.dworakowski@gmail.com
              </p>
              <a className={contactItem} href="https://github.com/DymitrDworakowski">
                <Github style={{ color: "rgb(250,150,0)" }} />  GitHub
              </a>
              <a className={contactItem} href="https://www.linkedin.com/in/dymitr-dworakowski/" >
                <Linkedin style={{ color: "rgb(250,150,0)" }} />  LinkedIn
              </a>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <AboutSection />
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectsSection />
        </motion.section>

        {/* CERTIFICATES */}
        <motion.section
          id="certificates"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <CertificatesSection />
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ContactSection />
        </motion.section>
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
  <Seo title={pageContext?.language === "en" ? "Home" : "Strona główna"} />
)

export default IndexPage
