import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Article = styled.article`
  a {
    color: black;
    text-decoration: none;
  }
`;

const IndexPage = (result: Result) => {
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
          }
        }
      }
    }
  }
`;
export interface Result {
  data: Data;
}
export interface Data {
  allMarkdownRemark: AllMarkdownRemark;
}

export interface AllMarkdownRemark {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  fields: Fields;
  frontmatter: Frontmatter;
}

export interface Fields {
  slug: string;
}

export interface Frontmatter {
  date: string;
  title: string;
}
export default IndexPage;
