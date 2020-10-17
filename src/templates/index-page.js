import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  button_support,
  intro,
  problem,
  cause,
  solution,
  other,
  social
}) => (
  <div>
    <section className="hero is-fullheight">
    <div className="hero-video">
        <video poster={intro.video_item.image} playsInline="" autoPlay="" muted="" loop="">
            <source src={intro.video_item.video} type="video/mp4" />
        </video>
    </div>
      <div className="hero-body">
        <div className="container is-centered">
          <button className="button">{intro.button}</button>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  button_support: PropTypes.string,
  intro: PropTypes.object,
  problem: PropTypes.object,
  cause: PropTypes.object,
  solution: PropTypes.object,
  other: PropTypes.object,
  social: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        button_support={frontmatter.button_support}
        intro={frontmatter.intro}
        problem={frontmatter.problem}
        cause={frontmatter.cause}
        solution={frontmatter.solution}
        other={frontmatter.other}
        social={frontmatter.social}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        button_support
        intro {
          heading
          text
          button
          video_item {
            video {
              publicURL
            }
            poster {
              publicURL
            }
            caption
          }
        }
        problem {
          heading
          text
          image_item {
            caption
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        cause {
          heading
          text
          image_item {
            caption
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          video_item {
            video {
              publicURL
            }
            caption
          }
        }
        solution {
          heading
          image_item {
            caption
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          we {
            caption
            text
            items {
              item
            }
          }
          community {
            caption
            text
            items {
              item
            }
          }
          government {
            caption
            text
            items {
              item
            }
          }
        }
        other {
          heading
          text
          image_item {
            caption
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          items {
            item
          }
        }
        social {
          heading
          text
          image_item {
            caption
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
