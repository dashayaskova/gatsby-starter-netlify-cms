import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import './lawyer-page.css';
import MainPageFragment from '../components/lawyer/MainPageFragment'
import TopicsFragment from '../components/lawyer/TopicsFragment'
import Header from '../components/lawyer/Header'
import ExperienceFragment from '../components/lawyer/ExperienceFragment'
import NewsFragment from '../components/lawyer/NewsFragment';
import LocationFragment from '../components/lawyer/LocationFragment';
import FormFragment from '../components/lawyer/FormFragment';
import Footer from '../components/lawyer/Footer';

export const LawyerPageTemplate = ({
  title,
  networks,
  backgroundImage,
  mainPageCards,
  topics,
  experienceCards,
  news,
  publications,
  people
}) => (
  <>
    <Header title={title} networks={networks} />
    <MainPageFragment backgroundImage={backgroundImage} cards={mainPageCards} />
    <TopicsFragment topics={topics} />
    <ExperienceFragment experienceCards={experienceCards} />
    <NewsFragment news={news} publications={publications} />
    <LocationFragment />
    <FormFragment people={people} />
    <Footer title={title} recentPosts={news} networks={networks} />
  </>
);

LawyerPageTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  networks: PropTypes.object,
  backgroundImage: PropTypes.object,
  mainPageCards: PropTypes.object,
  topics: PropTypes.object,
  experienceCards: PropTypes.object,
  news: PropTypes.object,
  publications: PropTypes.object,
  people: PropTypes.object
}

const LawyerPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <LawyerPageTemplate
      title={frontmatter.title}
      body={frontmatter.body}
      networks={frontmatter.networks}
      backgroundImage={frontmatter.backgroundImage}
      mainPageCards={frontmatter.mainPageCards}
      topics={frontmatter.topics}
      experienceCards={frontmatter.experienceCards}
      news={frontmatter.news}
      publications={frontmatter.publications}
      people={frontmatter.people}
    />
  )
}

LawyerPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default LawyerPage

export const pageQuery = graphql`
query LawyerPageTemplate {
  markdownRemark(frontmatter: { templateKey: { eq: "lawyer-page" } }) {
    frontmatter {
      title
      body
      news {
        title
        date
      }
      publications {
        title
        date
      }
      topics {
        title
        description
        image {
          childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
      people {
        name
        vacancy
        avatar {
          childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
      mainPageCards {
          title
          description
          image {
            childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
          }
      }
      experienceCards {
        title
        description
        icon {
          childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
      backgroundImage {
        childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
      }
      networks {
          name
          link
          image {
            childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
          }
      }
    }
  }
}
`
