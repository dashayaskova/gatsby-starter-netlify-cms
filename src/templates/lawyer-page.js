import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const LawyerPageTemplate = ({
    title,
    body,
  }) => (
      <div>
          <div>{title}</div>
          <div>{body}</div>
      </div>
  );

  LawyerPageTemplate.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
}


const LawyerPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
        <LawyerPageTemplate
          title={frontmatter.title}
          body={frontmatter.body}
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
    }
  }
}
`
