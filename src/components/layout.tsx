import * as React from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";

const Container = styled.main`
  margin: auto;
  max-width: 600px;
  font-family: sans-serif;
`;
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  li {
    padding-right: 2rem;
  }
  a {
    color: black;
  }
`;
const SiteTitle = styled.p`
  a {
    color: #d50000;
    text-decoration: none;
  }
  font-size: 2.4rem;
  color: gray;
  font-weight: 700;
  margin-left: 2rem;
`;

const ImageBlock = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  h1 {
    margin-left: 50px;
  }
`;

type LayoutType = {
  pageTitle: string;
  children: any;
};

const Layout = ({ pageTitle, children }: LayoutType) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Container>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <ImageBlock>
        <img src="https://avatars1.githubusercontent.com/u/51187540?s=460&v=4" />
        <SiteTitle>
          <Link to="/about">{data.site.siteMetadata.title}</Link>
        </SiteTitle>
      </ImageBlock>
      <nav>
        <NavLinks>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </NavLinks>
      </nav>
      {children}
    </Container>
  );
};
export default Layout;
