import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Article = styled.article`
  a {
    color: black;
    text-decoration: none;
  }
`;

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="Blog">
      <ul>
        {data.allMarkdownRemark.edges.map((edge: any) => {
          return (
            <Article key={edge.node.fields.slug}>
              <Link to={edge.node.fields.slug}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>Posted: {edge.node.frontmatter.date}</p>
              </Link>
            </Article>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
        }
      }
    }
  }
`;
// query {
//   allMarkdownRemark {
//     edges {
//       node {
//         fields {
//           slug
//         }
//       }
//     }
//   }
// }
export default BlogPage;
