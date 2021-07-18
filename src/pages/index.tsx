import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-wieght: 600px;
`;

const IndexPage: React.FC = () => (
  <main>
    <title>homepage</title>
    <Title>Home Page</Title>
    <p>Welcome to my Gatsby site!</p>
  </main>
);

export default IndexPage;