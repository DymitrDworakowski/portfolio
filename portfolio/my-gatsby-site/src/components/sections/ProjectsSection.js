import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
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
  projectsTitle,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  }

  return (
    <div>
      <h2 className={projectsTitle}>Projects</h2>
      <motion.ul
        className={projectsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {nodes.map(node => (
          <motion.li key={node.id} variants={itemVariants}>
            <Link
              className={projectCard}
              to={`/projects/${node.frontmatter.slug}`}
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
                <h3 className={projectTitle}>{node.frontmatter.title}</h3>
                <div className={projectMeta}>
                  <p className={projectRole}>{node.frontmatter.role}</p>
                  <p className={projectDate}>{node.frontmatter.date}</p>
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default ProjectsSection
