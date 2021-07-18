import * as React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Container = styled.main`
    margin: auto;
    max-width: 500px;
    font-family: sans-serif;
`
const Heading = styled.title`
    color: rebeccapurple;
`;

const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;
    li{
        padding-right: 2rem;
    }
    a{

        color: black;
    }
`;
const SiteTitle = styled.p`
    font-size: 3rem;
    color: gray;
    font-weight: 700;
  
`;

type LayoutType = {
    pageTitle: string;
    children: any;
}
const Layout = ({ pageTitle, children }: LayoutType) => {

    const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
    return (
        <Container>
            <Heading>{pageTitle}</Heading>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
            <nav>
                <NavLinks>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </NavLinks>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </Container>
    )
}
export default Layout