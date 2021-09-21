import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const Article = styled.article`
  a {
    color: black;
    text-decoration: none;
  }
`;

export interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: [
        node: {
          fields: {
            slug: string;
          };
          frontmatter: {
            date: string;
            title: string;
            categories: string[];
          };
        }
      ];
    };
  };
}

const BlogPage = (result: BlogProps) => {
  const { edges } = result.data.allMarkdownRemark;
  return (
    <Layout pageTitle="Blog">
      <ul>
        {edges.map((edge: any) => {
          const { slug } = edge.node.fields;
          const { title, date } = edge.node.frontmatter;
          return (
            <Article key={slug}>
              <Link to={slug}>
                <h2>{title}</h2>
                <p>Posted: {date}</p>
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
            categories
          }
        }
      }
    }
  }
`;

export default BlogPage;
