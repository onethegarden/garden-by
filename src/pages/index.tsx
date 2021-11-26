import React, { useMemo } from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { useCategory } from "../hooks/useCategory";
import Layout from "../components/layout";
import Img, { FluidObject } from "gatsby-image";
import queryString, { ParsedQuery } from "query-string";
import CategoryList from "../components/Main/CategoryList";

interface IndexPageProps {
  location: {
    search: string;
  };
  data: Data;
}

const IndexPage = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== "string" || !parsed.category
      ? "All"
      : parsed.category;
  const categoryList = useMemo(() => useCategory(edges), []);
  const filteredPost = edges.filter(
    ({
      node: {
        frontmatter: { categories },
      },
    }: {
      node: { frontmatter: { categories: string[] } };
    }) =>
      selectedCategory !== "All" ? categories.includes(selectedCategory) : true
  );

  return (
    <Layout pageTitle="Blog">
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostUl>
        {filteredPost.map((edge: Edge) => {
          const { slug } = edge.node.fields;
          const { title } = edge.node.frontmatter;
          const { modifiedTime: date } = edge.node.parent;
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
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-template-columns: repeat(1, 1fr);
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

export default IndexPage;
