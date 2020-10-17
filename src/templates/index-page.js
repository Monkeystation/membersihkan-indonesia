import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import Layout from '../components/Layout'
import Video from '../components/Video'
import PreviewCompatibleFile from '../components/PreviewCompatibleFile'
import { Parallax } from 'react-parallax';

export const IndexPageTemplate = ({
  button_support,
  intro,
  problem,
  cause,
  solution,
  other,
  social
}) => {
  console.log(problem)
  const parallaxStrength = 300
  return (
    <>
      <section className="intro">
        <section className="header hero is-fullheight-with-navbar">
        <div className="hero-video">
          <video poster={PreviewCompatibleFile(intro.video_item.poster)} playsInline autoPlay muted loop>
            <source src={PreviewCompatibleFile(intro.video_item.video)} type="video/mp4" />
          </video>
        </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <Link className="button is-primary is-large is-bold" to="intro" smooth={true} offset={-64}>{intro.button}</Link>
            </div>
          </div>
        </section>
        <section className="content hero" id="intro"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <span className="caption is-size-7">{intro.video_item.caption}</span>
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-primary">{intro.heading}</h1>
            <p>{intro.text}</p>
          </div>
        </section>
      </section>

      <section className="problem">
        <Parallax bgImage={PreviewCompatibleFile(problem.image_item.image)} strength={parallaxStrength}>
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-light">{problem.heading}</h1>
          </div>
        </Parallax>
        <section className="content hero"
          style={{backgroundImage:`url(${'/img/fish.png'})`}}>
          <span className="caption is-size-7">{problem.image_item.caption}</span>
          <div className="container has-text-centered">
            <p>{problem.text}</p>
          </div>
        </section>
      </section>

      <section className="cause">
        <Parallax bgImage={PreviewCompatibleFile(cause.image_item.image)} strength={parallaxStrength}>
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-light">{cause.heading}</h1>
          </div>
        </Parallax>
        <section className="content hero"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <span className="caption is-size-7">{cause.image_item.caption}</span>
          <div className="container has-text-centered">
            <p>{cause.text}</p>
            <Video videoSrcURL={cause.video_item.video} videoTitle={cause.video_item.title} />
          </div>
        </section>
      </section>

      <section className="solution">
        <Parallax bgImage={PreviewCompatibleFile(solution.image_item.image)} strength={parallaxStrength}>
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-light">{solution.heading}</h1>
        </div>
        </Parallax>
        <section className="content hero"
          style={{backgroundImage:`url(${'/img/fish.png'})`}}>
          <span className="caption is-size-7">{solution.image_item.caption}</span>
          <div className="container">
            <h1 className="is-size-1 has-text-light">{solution.we.caption}</h1>
            <ul>
              {solution.we.items.map((item, index) => (
                <li key={`item` + index}>
                  <p>{item.item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="content hero"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <div className="container">
            <h1 className="is-size-1 has-text-primary">{solution.community.caption}</h1>
            <ul>
              {solution.community.items.map((item, index) => (
                <li key={`item` + index}>
                  <p>{item.item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="content hero"
          style={{backgroundImage:`url(${'/img/fish.png'})`}}>
          <div className="container">
            <h1 className="is-size-1 has-text-light">{solution.government.caption}</h1>
            <ul>
              {solution.government.items.map((item, index) => (
                <li key={`item` + index}>
                  <p>{item.item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>

      <section className="other">
        <Parallax bgImage={PreviewCompatibleFile(other.image_item.image)} strength={parallaxStrength}>
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-light">{other.heading}</h1>
          </div>
        </Parallax>
        <section className="content hero"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <span className="caption is-size-7">{other.image_item.caption}</span>
          <div className="container">
            <p>{other.text}</p>
            <ul>
              {other.items.map((item, index) => (
                <li key={`item` + index}>
                  <p>{item.item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>

      <section className="social">
        <Parallax bgImage={PreviewCompatibleFile(social.image_item.image)} strength={parallaxStrength}>
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-light">{social.heading}</h1>
          </div>        
        </Parallax>
        <section className="content hero"
          style={{backgroundImage:`url(${'/img/fish.png'})`}}>
          <span className="caption is-size-7">{social.image_item.caption}</span>
          <div className="container">
            <p>{social.text}</p>
          </div>
        </section>
      </section>

      <section className="juicer">
        <section className="content hero"
          style={{backgroundImage:`url(${'/img/shells.png'})`}}>
          <div className="container">
          <h1 className="title is-1 has-text-primary">#membersihkanindonesia</h1>
          <ul className="juicer-feed" data-feed-id="membersihkanindonesia" data-per="8" data-truncate="500">
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
              publicURL
            }
          }
        }
        cause {
          heading
          text
          image_item {
            caption
            image {
              publicURL
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
              publicURL
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
              publicURL
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
              publicURL
            }
          }
        }
      }
    }
  }
`
