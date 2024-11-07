import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { image, project, project_item } from "./index.module.css"

const ProjectPage = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map(node => (
        <Link
          className={project}
          to={`/projects/${node.frontmatter.slug}`}
          key={node.id}
        >
          <article className={project_item}>
            <div className={image}>
              <GatsbyImage
                image={getImage(node.frontmatter.hero_image)}
                alt={node.frontmatter.hero_image_alt}
              />
            </div>
            <h2>{node.frontmatter.title}</h2>
            {/* <p>Posted: {node.frontmatter.date}</p> */}
            <p>Role: {node.frontmatter.role}</p>
          </article>
        </Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          role
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
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

export const Head = () => <Seo title="My Projects" />

export default ProjectPage
