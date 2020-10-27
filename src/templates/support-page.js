import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const SupportPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section mt-5">
      <div className="container">
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

SupportPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SupportPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SupportPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

SupportPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SupportPage

export const supportPageQuery = graphql`
  query SupportPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
