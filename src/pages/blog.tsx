import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Article = styled.article`
 a{
   color:black;text-decoration: none; 
 }
`;

const BlogPage = ({ data }: any) => {
  return (
    <Layout pageTitle="Blog">
      <ul>
        {
          data.allMdx.nodes.map((node: any) => (
            <Article key={node.id}>
              <Link to="/detail">
                <h2>{node.frontmatter.title}</h2>
                <p>Posted: {node.frontmatter.date}</p>
              </Link>
            </Article>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
    }
  }
}
`
export default BlogPage