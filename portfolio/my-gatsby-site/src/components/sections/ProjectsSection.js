import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
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
  projectDate,
} from "../../pages/projects/index.module.css"

const ProjectsSection = () => {
  const data = useStaticQuery(graphql`
    query ProjectsSectionQuery {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
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
        }
      }
    }
  `)

  const nodes = data?.allMdx?.nodes ?? []

  if (!nodes.length) {
    return <p style={{ padding: "1rem" }}>No projects found.</p>
  }

  return (
    <div className={projectsGrid}>
      {nodes.map(node => (
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
  )
}

export default ProjectsSection
