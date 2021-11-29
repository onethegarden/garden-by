import React, { useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { graphql, Link } from "gatsby";
import { useCategory } from "../hooks/useCategory";
import Layout from "../components/layout";
import Img, { FluidObject } from "gatsby-image";
import queryString, { ParsedQuery } from "query-string";
import CategoryList from "../components/Main/CategoryList";
import Navigation from "../components/Main/Navigation";
import PostItem from "../components/Main/PostItem";

type IndexPageProps = {
  location: {
    search: string;
  };
  data: Data;
};

function IndexPage({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) {
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
  const [currentMenu, setCurrentMenu] = useState("post");
  const onClickToggleButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCurrentMenu(e.currentTarget.name);
  };

  return (
    <Layout pageTitle="Blog">
      <Navigation
        currentMenu={currentMenu}
        onClickToggleButton={onClickToggleButton}
      />
      {currentMenu === "category" && (
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
      )}
      {currentMenu === "post" && (
        <PostUl>
          {filteredPost.map((edge: Edge) => (
            <PostItem key={edge.node.id} post={edge.node} />
          ))}
        </PostUl>
      )}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___thumbnail___modifiedTime }
    ) {
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
  allMarkdownRemark: {
    edges: Edge[];
  };
}

export interface Edge {
  node: Node;
}
export interface Node {
  fields: {
    slug: string;
  };
  parent: {
    modifiedTime: string;
  };
  id: string;
  frontmatter: {
    title: string;
    categories: string[];
    thumbnail: {
      childImageSharp: {
        fluid: FluidObject | FluidObject[];
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

export default IndexPage;
