import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
const BlogPage = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>
            <Link to={`/projects/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
              <StaticImage
            alt="Progman"
            src={node.frontmatter.hero_image}
            className=""
          /> 
            </Link>
          </h2>
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
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Projects" />

export default BlogPage
