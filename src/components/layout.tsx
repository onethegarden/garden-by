import * as React from "react";
import styled from "styled-components";
import GlobalStyle from "../components/common/GlobalStyle";
import { Link, useStaticQuery, graphql } from "gatsby";

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
      <GlobalStyle />
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <ImageBlock>
        <Link to="/about">
          <img src="https://avatars1.githubusercontent.com/u/51187540?s=460&v=4" />
        </Link>
        <SiteTitle>
          <Link to="/">{data.site.siteMetadata.title}</Link>
          <UnderLine />
        </SiteTitle>
      </ImageBlock>
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
      {children}
    </Container>
  );
};

const Container = styled.main`
  margin: auto;
  max-width: 600px;
  font-family: sans-serif;
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

const SiteTitle = styled.h1`
  a {
    color: #7d7d7d;
    text-decoration: none;
  }
  font-size: 2.4rem;
  color: gray;
  font-weight: 700;
  margin-left: 2rem;
  padding: 0 2rem 1rem 2rem;
  transition: 0.3s;
  &:hover {
    transform: translate(0, -10px);
  }
`;

const UnderLine = styled.div`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    #ccc,
    rgba(255, 255, 255, 0)
  );
  height: 1px;
  margin: 0.4em 0;
`;

const ImageBlock = styled.div`
  margin: 5rem 0 1.2rem 0;
  display: flex;
  justify-content: left;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
`;

export default Layout;
