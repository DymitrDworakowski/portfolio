import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { Trans } from "gatsby-plugin-react-i18next"

const Project = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <PostDate>Posted: {data.mdx.frontmatter.date}</PostDate>
      <HeroImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <MDXProvider components={{ Trans }}>
        <Content>{children}</Content>
      </MDXProvider>
    </Layout>
  )
}

export const query = graphql`
  query ProjectAndLocales($id: String, $language: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
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

// Styled components
const PostDate = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
`

const HeroImage = styled(GatsbyImage)`
  border-radius: 8px;
  margin-bottom: 2rem;
  width: 50%;
`

const Content = styled.div`
  font-size: 1.6rem;
  line-height: 1.8;
  color: #333;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />
export default Project
