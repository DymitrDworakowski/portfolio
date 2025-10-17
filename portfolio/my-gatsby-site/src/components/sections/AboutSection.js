import React from "react"
import ReactLogo from "../../assets/icons/React-icon.svg"
import GatsbyLogo from "../../assets/icons/gatsby.svg"
import NodeLogo from "../../assets/icons/nodejs.svg"
import CSSLogo from "../../assets/icons/css.svg"
import HTMLLogo from "../../assets/icons/html.svg"
import JavaScriptLogo from "../../assets/icons/javascript.svg"
import PythonLogo from "../../assets/icons/python.svg"
import DjangoLogo from "../../assets/icons/django.svg"
import AWSLogo from "../../assets/icons/aws.svg"
import DockerLogo from "../../assets/icons/docker.svg"

import { useTranslation } from "gatsby-plugin-react-i18next"
import { motion } from "framer-motion"
import {
  User,
  Target,
  Star,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
} from "lucide-react"

import {
  projectContainer,
  projectTitle,
  projectSection,
  aboutP,
  experienceItem,
  experienceMeta,
  experienceList,
  educationItem,
  educationMeta,
  hobbiesList,
  techSkills,
  projectSkills,
  aboutLine,
  skillItem,
  skillLogo,
  skillName,
  projectItems,
} from "./about.module.css"

const logoStyle = {
  width: 70,
  height: 70,
  verticalAlign: "middle",
}

const hardSkills = [
  {
    name: "React",
    level: 45,
    logo: <img src={ReactLogo} alt="React" style={logoStyle} />,
  },
  {
    name: "Gatsby",
    level: 35,
    logo: <img src={GatsbyLogo} alt="Gatsby" style={logoStyle} />,
  },
  {
    name: "Node.js",
    level: 40,
    logo: <img src={NodeLogo} alt="Node.js" style={logoStyle} />,
  },
  {
    name: "CSS",
    level: 67,
    logo: <img src={CSSLogo} alt="CSS3" style={logoStyle} />,
  },
  {
    name: "HTML",
    level: 90,
    logo: <img src={HTMLLogo} alt="HTML5" style={logoStyle} />,
  },
  {
    name: "JavaScript",
    level: 50,
    logo: <img src={JavaScriptLogo} alt="JavaScript" style={logoStyle} />,
  },
  {
    name: "Python",
    level: 20,
    logo: <img src={PythonLogo} alt="Python" style={logoStyle} />,
  },
  {
    name: "Django",
    level: 10,
    logo: <img src={DjangoLogo} alt="Django" style={logoStyle} />,
  },
  {
    name: "AWS",
    level: 10,
    logo: <img src={AWSLogo} alt="AWS" style={logoStyle} />,
  },
  {
    name: "Docker",
    level: 40,
    logo: <img src={DockerLogo} alt="Docker" style={logoStyle} />,
  },
]

//  const softSkills = [
//     t("home:skills.thinking"),
//     t("home:skills.communication"),
//     t("home:skills.teamwork"),
//     t("home:skills.timeManagement"),
//   ]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // odstęp między elementami
      delayChildren: 0.2, // małe opóźnienie na start
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const AboutSection = () => {
  const { t } = useTranslation(["about"])

  return (
    <div className={projectContainer}>
      <span className={aboutLine}></span>
      <h1 className={projectTitle}>{t("about:pageTitle")}</h1>
      <section className={projectSection}>
        <h3>
          <User size={20} style={{ verticalAlign: "middle", marginRight: 6 }} />
          {t("about:sections.journey.title")}
        </h3>
        <p className={aboutP}>{t("about:sections.journey.content")}</p>
      </section>
      <section className={projectSection}>
        <h3>
          <Target
            size={20}
            style={{ verticalAlign: "middle", marginRight: 6 }}
          />
          {t("about:sections.focus.title")}
        </h3>
        <p className={aboutP}>{t("about:sections.focus.content")}</p>
      </section>
      <section className={projectSection}>
        <h3>
          <Users
            size={20}
            style={{ verticalAlign: "middle", marginRight: 6 }}
          />
          {t("about:sections.inspiration.title")}
        </h3>
        <p className={aboutP}>{t("about:sections.inspiration.content")}</p>
      </section>

      {/* Skills Section */}

      <section className={projectSkills}>
        <h3>
          <Star size={20} style={{ verticalAlign: "middle", marginRight: 6 }} />
          {t("about:sections.skills.title")}
        </h3>
        <p className={aboutP}>{t("about:sections.skills.content")}</p>
        <div className={techSkills}>
          {" "}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={projectItems}
          >
            {hardSkills.map(skill => (
              <motion.li key={skill.name} variants={itemVariants} className={skillItem}>
                <p className={skillLogo}>
                  {skill.logo} 
                </p>
                <span className={skillName}>{skill.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
      {/* <section className={projectSection}>
        <h3>
          <Briefcase
            size={20}
            style={{ verticalAlign: "middle", marginRight: 6 }}
          />
          {t("about:sections.connect.title")}
        </h3>
        <p className={experienceMeta}>{t("about:sections.connect.content")}</p>
      </section> */}
      <section className={projectSection}>
        <h3>
          <Briefcase
            size={20}
            style={{ verticalAlign: "middle", marginRight: 6 }}
          />
          {t("about:sections.experience.title")}
        </h3>

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
        <h2>
          <GraduationCap
            size={20}
            style={{ verticalAlign: "middle", marginRight: 6 }}
          />
          {t("about:sections.education.title")}
        </h2>
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
        <h2>
          <Heart
            size={20}
            style={{ verticalAlign: "middle", marginRight: 6 }}
          />
          {t("about:sections.hobbies.title")}
        </h2>
        <ul className={hobbiesList}>
          {[1, 2, 3].map(item => (
            <li key={item}>{t(`about:hobbies.${item}`)}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default AboutSection
