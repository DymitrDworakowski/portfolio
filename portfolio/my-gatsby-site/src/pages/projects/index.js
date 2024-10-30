import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { image,project } from "./index.module.css"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map(node => (
        <article key={node.id} className={project}>
          <div className={image}>
          <h2 >
            <Link to={`/projects/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
              <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt={node.frontmatter.hero_image_alt} />
            </Link>
          </h2>
          </div>
          <p>Posted: {node.frontmatter.date}</p>
          <p>Role: {node.frontmatter.role}</p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
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
  }
`

export const Head = () => <Seo title="My Projects" />

export default BlogPage
