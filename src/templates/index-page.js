import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

import Layout from '../components/Layout'
import Video from '../components/Video'
import PreviewCompatibleFile from '../components/PreviewCompatibleFile'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Parallax } from 'react-parallax'
var md = require('markdown-it')()

export const IndexPageTemplate = ({
  button_support,
  intro,
  problem,
  cause,
  solution,
  other,
  social
}) => {
  const parallaxStrength = (window.innerWidth > 768) ? 300 : 100
  console.log(problem.image_item.image.childImageSharp.fluid)
  return (
    <>
      <section className="intro">
        <section className="header hero is-fullheight-with-navbar">
        <div className="hero-video">
        <PreviewCompatibleImage imageInfo={{
          image: intro.image_item.image,
          style: {height: '100%'}
        }} />
        </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <Link className="button is-primary is-large is-bold" to="intro" smooth={true} offset={-64}>{intro.button}</Link>
            </div>
          </div>
        </section>
        <section className="content hero section" id="intro"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(intro.image_item.caption)}}></span>
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-primary">{intro.heading}</h1>
            <div dangerouslySetInnerHTML={{__html: md.render(intro.text)}}></div>
          </div>
        </section>
      </section>

      <section className="problem">
        <Parallax 
          bgImage={PreviewCompatibleFile(problem.image_item.image.childImageSharp.fluid.src)} 
          bgImageSizes={problem.image_item.image.childImageSharp.fluid.sizes}
          bgImageSrcSet={problem.image_item.image.childImageSharp.fluid.srcSet}
          strength={parallaxStrength}>
          <section className="container has-text-centered section">
            <h1 className="title is-1 has-text-light">{problem.heading}</h1>
          </section>
        </Parallax>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/fish.png'})`}}>
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(problem.image_item.caption)}}></span>
          <div className="container has-text-centered">
            <div dangerouslySetInnerHTML={{__html: md.render(problem.text)}}></div>
          </div>
        </section>
      </section>

      <section className="cause">
        <Parallax 
          bgImage={PreviewCompatibleFile(cause.image_item.image.childImageSharp.fluid.src)} 
          bgImageSizes={cause.image_item.image.childImageSharp.fluid.sizes}
          bgImageSrcSet={cause.image_item.image.childImageSharp.fluid.srcSet}
          strength={parallaxStrength}>
          <div className="container has-text-centered section">
            <h1 className="title is-1 has-text-light">{cause.heading}</h1>
          </div>
        </Parallax>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(cause.image_item.caption)}}></span>
          <div className="container has-text-centered">
            <div className="pb-5" dangerouslySetInnerHTML={{__html: md.render(cause.text)}}></div>
            <Video videoSrcURL={cause.video_item.video} videoTitle={cause.video_item.title} />
          </div>
        </section>
      </section>

      <section className="solution">
        <Parallax 
          bgImage={PreviewCompatibleFile(solution.image_item.image.childImageSharp.fluid.src)} 
          bgImageSizes={solution.image_item.image.childImageSharp.fluid.sizes}
          bgImageSrcSet={solution.image_item.image.childImageSharp.fluid.srcSet}
          strength={parallaxStrength}>
        <div className="container has-text-centered section">
          <h1 className="title is-1 has-text-light">{solution.heading}</h1>
        </div>
        </Parallax>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/fish.png'})`}}>
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(solution.image_item.caption)}}></span>
          <div className="container">
            <h1 className="is-size-1 has-text-light">{solution.we.caption}</h1>
            <ul>
              {solution.we.items.map((item, index) => (
                <li key={`item` + index}>
                  <div dangerouslySetInnerHTML={{__html: md.render(item.item)}}></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <div className="container">
            <h1 className="is-size-1 has-text-primary">{solution.community.caption}</h1>
            <ul>
              {solution.community.items.map((item, index) => (
                <li key={`item` + index}>
                  <div dangerouslySetInnerHTML={{__html: md.render(item.item)}}></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/fish.png'})`}}>
          <div className="container">
            <h1 className="is-size-1 has-text-light">{solution.government.caption}</h1>
            <ul>
              {solution.government.items.map((item, index) => (
                <li key={`item` + index}>
                  <div dangerouslySetInnerHTML={{__html: md.render(item.item)}}></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>

      <section className="other">
        <Parallax 
          bgImage={PreviewCompatibleFile(other.image_item.image.childImageSharp.fluid.src)} 
          bgImageSizes={other.image_item.image.childImageSharp.fluid.sizes}
          bgImageSrcSet={other.image_item.image.childImageSharp.fluid.srcSet}
          strength={parallaxStrength}>
          <div className="container has-text-centered section">
            <h1 className="title is-1 has-text-light">{other.heading}</h1>
          </div>
        </Parallax>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(other.image_item.caption)}}></span>
          <div className="container">
            <p>{other.text}</p>
            <ul>
              {other.items.map((item, index) => (
                <li key={`item` + index}>
                  <div dangerouslySetInnerHTML={{__html: md.render(item.item)}}></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>

      <section className="social">
        <Parallax 
          bgImage={PreviewCompatibleFile(social.image_item.image.childImageSharp.fluid.src)} 
          bgImageSizes={social.image_item.image.childImageSharp.fluid.sizes}
          bgImageSrcSet={social.image_item.image.childImageSharp.fluid.srcSet}
          strength={parallaxStrength}>
          <div className="container has-text-centered section">
            <h1 className="title is-1 has-text-light">{social.heading}</h1>
          </div>        
        </Parallax>
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/fish.png'})`}}>
          <span className="caption is-size-7" dangerouslySetInnerHTML={{__html: md.render(social.image_item.caption)}}></span>
          <div className="container has-text-centered">
            <div dangerouslySetInnerHTML={{__html: md.render(social.text)}}></div>
            <div className="social-share pt-5">
              <a href="https://www.facebook.com/sharer?u=https://membersihkanindonesia.org" target="_blank">
                <FaFacebookF size={60} style={{backgroundColor:'#3b5998', color:'white', padding:'10px'}} />
              </a>
              <a href="http://twitter.com/intent/tweet?text=Membersihkan%20Indonesia!&hashtags=membersihkanindonesia,cleanupindonesia&url=https://membersihkanindonesia.org" target="_blank">
                <FaTwitter size={60} style={{backgroundColor:'#1da1f2', color:'white', padding:'10px'}} />
              </a>
            </div>
          </div>
        </section>
      </section>

      <section className="juicer">
        <section className="content hero section"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <div className="tijger">
          <h1 className="title is-2 has-text-primary has-text-centered">#membersihkanindonesia</h1>
          <ul className="juicer-feed" data-feed-id="membersihkanindonesia" data-per="12">
            <h1 className="referral"><a href="https://www.juicer.io">Powered by Juicer</a></h1>
          </ul>
          </div>
        </section>
      </section>
    </>
  )
}

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
          image_item {
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
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
            video 
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
