import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  projectsGrid,
  projectCard,
  projectImageContainer,
  projectImage,
  projectContent,
  projectTitle,
  projectMeta,
  projectRole,
  projectDate
} from "./index.module.css"

const ProjectPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Projects" />
      <div className={projectsGrid}>
        {data.allMdx.nodes.map((node) => (
          <Link
            className={projectCard}
            to={`/projects/${node.frontmatter.slug}`}
            key={node.id}
            aria-label={`View ${node.frontmatter.title} project`}
          >
            <div className={projectImageContainer}>
              <GatsbyImage
                className={projectImage}
                image={getImage(node.frontmatter.hero_image)}
                alt={node.frontmatter.hero_image_alt}
                loading="lazy"
              />
            </div>
            <div className={projectContent}>
              <h2 className={projectTitle}>{node.frontmatter.title}</h2>
              <div className={projectMeta}>
                <p className={projectRole}>{node.frontmatter.role}</p>
                <p className={projectDate}>{node.frontmatter.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM YYYY")
          title
          slug
          role
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(
                width: 600
                aspectRatio: 1.77
                transformOptions: { cropFocus: ATTENTION }
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        id
      }
    }
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

export default ProjectPage