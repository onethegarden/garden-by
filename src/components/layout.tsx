import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { string } from 'yargs'

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

type LayoutType = {
    pageTitle: string;
    children: any;
}
const Layout = ({ pageTitle, children }: LayoutType) => {
    return (
        <Container>
            <Heading>{pageTitle}</Heading>
            <nav>
                <NavLinks>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </NavLinks>
            </nav>
            <h1>{pageTitle}</h1>
            {children}
        </Container>
    )
}
export default Layout