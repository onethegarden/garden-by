import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { graphql } from "gatsby";
import "@deckdeckgo/highlight-code";
import { defineCustomElements as deckDeckGoElement } from "@deckdeckgo/highlight-code/dist/loader";

deckDeckGoElement();

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
        <MarkdownBlock
          dangerouslySetInnerHTML={{ __html: html }}
        ></MarkdownBlock>
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

const MarkdownBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 80px 0;
  word-break: break-all;
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  p {
    padding: 3px 0;
  }

  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 80px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 4px solid #7b7b7b;
    font-weight: 800;
  }

  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  a {
    color: #4263eb;
    text-decoration: underline;
  }

  pre[class*="language-"] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }
  img {
    width: 100%;
  }
  code[class*="language-"],
  pre[class*="language-"] {
    tab-size: 2;
  }
`;

export default PostTemplate;
