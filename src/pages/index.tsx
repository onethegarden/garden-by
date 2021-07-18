import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const Title = styled.h1`
  font-wieght: 600px;
`;

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>It's Home page</p>
    </Layout>
    )
}

export default IndexPage;