import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { MDXProvider } from "@mdx-js/react";
import { Trans } from "gatsby-plugin-react-i18next";

const Project = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  const frontmatter = data.mdx.frontmatter;

  return (
    <Layout pageTitle={frontmatter.title}>
      <ProjectWrapper>
        <ProjectHeader>
          <PostDate>
            <Trans>Posted</Trans>: {frontmatter.date}
          </PostDate>
          {image && (
            <HeroImage
              image={image}
              alt={frontmatter.hero_image_alt}
              loading="eager"
            />
          )}
         
        </ProjectHeader>

        <MDXProvider components={{ Trans }}>
          <Content>{children}</Content>
        </MDXProvider>
      </ProjectWrapper>
    </Layout>
  );
};

export const query = graphql`
  query ProjectAndLocales($id: String, $language: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
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
`;

// Styled components
const ProjectWrapper = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ProjectHeader = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

const PostDate = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
`;

const HeroImage = styled(GatsbyImage)`
  border-radius: 12px;
  margin: 0 auto 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 80%;
  }
`;

const ImageCredit = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  margin-top: 0.5rem;

  a {
    color: #3b82f6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Content = styled.article`
  line-height: 1.7;
  color: #374151;
  padding: 2rem 0;
  font-size: 1.1rem;

  h2 {
    color: #1f2937;
    margin: 2.5rem 0 1.5rem;
    font-size: 1.8rem;
  }

  h3 {
    color: #1f2937;
    margin: 2rem 0 1rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: #3b82f6;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Head = ({ data }) => (
  <Seo 
    title={data.mdx.frontmatter.title}
    description={`Project details: ${data.mdx.frontmatter.title}`}
  />
);

export default Project;