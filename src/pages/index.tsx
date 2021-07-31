import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img, { FluidObject, GatsbyImageProps } from "gatsby-image";

const IndexPage = (result: Result) => {
  const { edges } = result.data.allMarkdownRemark;
  return (
    <Layout pageTitle="Blog">
      <nav>
        <NavLinks>
          <li>
            <Link to="/">Javascript</Link>
          </li>
          <li>
            <Link to="/">React</Link>
          </li>
          <li>
            <Link to="/">Oracle</Link>
          </li>
          <li>
            <Link to="/">Git</Link>
          </li>
        </NavLinks>
      </nav>
      <PostUl>
        {edges.map((edge: Edge) => {
          const { slug } = edge.node.fields;
          const { title } = edge.node.frontmatter;
          const { modifiedTime: date } = edge.node.parent;
          console.log("tests");
          return (
            <Article key={slug}>
              <Link to={slug}>
                {edge.node.frontmatter.thumbnail?.childImageSharp && (
                  <Img
                    fluid={
                      edge.node.frontmatter.thumbnail.childImageSharp.fluid
                    }
                    alt="Post Item Image"
                  />
                )}

                <h2>{title}</h2>

                <p>last updated: {date ? date : "-"}</p>
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
    allMarkdownRemark(sort: { fields: frontmatter___date }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            categories
            thumbnail {
              childImageSharp {
                fluid(
                  maxWidth: 768
                  maxHeight: 200
                  fit: INSIDE
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          parent {
            ... on File {
              modifiedTime(formatString: "MMMM D, YYYY")
            }
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
  node: {
    fields: {
      slug: string;
    };
    parent: {
      modifiedTime: string;
    };
    id: string;
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
      thumbnail: {
        childImageSharp: {
          fluid: FluidObject | FluidObject[];
        };
      };
    };
  };
}

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
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.4s;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  padding: 0.8rem 1rem;
  li {
    margin-right: 1rem;
    border-radius: 0.3rem;
    padding: 0.2rem 1rem;
    background-color: aliceblue;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    &:hover {
      background-color: #e2f1fd;
      transition-duration: 0.5s;
    }
    a {
      color: #696969;
      text-decoration: none;
    }
  }
`;

export default IndexPage;
