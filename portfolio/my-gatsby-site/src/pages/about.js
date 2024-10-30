import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import {
  aboutContainer,
  sectionTitle,
  aboutText,
  connectText
} from "./about.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className={aboutContainer}>
        <span className={sectionTitle}>My Journey</span>
        <p className={aboutText}>
          Hi! I'm Dymitr Dworakowski, Junior Full-Stack Developer. I've always
          been passionate about technology and design, and I knew from my first
          projects that I wanted to create beautiful and functional web
          applications.
        </p>

        <span className={sectionTitle}>What I Focus On</span>
        <p className={aboutText}>
          I like to work on projects that combine a user-friendly interface and
          powerful functionality. I believe that good design is not only about
          aesthetics, but also about ease of use.
        </p>

        <span className={sectionTitle}>Skills & Tools</span>
        <p className={aboutText}>
          I use HTML5, CSS3, JavaScript and React to create efficient and modern
          interfaces. I also work with Node.js and MongoDB, which allows me to
          work on the full application stack.
        </p>

        <span className={sectionTitle}>What Inspires Me</span>
        <p className={aboutText}>
          I draw inspiration from design and user feedback. Every new project is
          a chance to learn something new and improve my skills.
        </p>

        <span className={sectionTitle}>Let’s Connect!</span>
        <p className={`${aboutText} ${connectText}`}>
          I am always open to new ideas and cooperation. If you have an
          interesting project or a question, I would be happy to chat!
        </p>
      </div>
    </Layout>
  );
};

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
`;

export const Head = () => <Seo title="About Me" />;

export default AboutPage;