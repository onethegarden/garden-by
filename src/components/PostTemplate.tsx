import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const PostTemplate: React.FC = React.memo(
  ({
    data: {
      allMarkdownRemark: { edges },
    },
  }: any) => {
    const {
      node: { html, frontmatter },
    } = edges[0];
    return (
      <Layout pageTitle="post">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Layout>
    );
  }
);

PostTemplate.displayName = "PostTemplate";

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD.")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default PostTemplate;
