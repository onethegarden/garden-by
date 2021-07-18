import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const DetailPage = () => {
  return (
    <Layout pageTitle="Blog detail">
      <p>detail page</p>
    </Layout>
  )
}

export default DetailPage