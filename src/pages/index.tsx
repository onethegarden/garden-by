import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const PostUl = styled.ul`
  margin-top: 3rem;
  padding-left: 0;
`;

const Article = styled.article`
  h2 {
    margin: 0;
  }
  a {
    color: black;
    text-decoration: none;
  }
  border-radius: 1rem;
  margin: 1rem;
  padding: 2rem 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
`;

const IndexPage = (result: Result) => {
  const { edges } = result.data.allMarkdownRemark;
  return (
    <Layout pageTitle="Blog">
      <PostUl>
        {edges.map((edge: any) => {
          const { slug } = edge.node.fields;
          const { title, date } = edge.node.frontmatter;
          return (
            <Article key={slug}>
              <Link to={slug}>
                <h2>{title}</h2>
                <p>last updated: {date}</p>
              </Link>
            </Article>
          );
        })}
      </PostUl>
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
