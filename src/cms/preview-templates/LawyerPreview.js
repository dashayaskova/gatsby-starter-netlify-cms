import React from 'react'
import PropTypes from 'prop-types'
import { LawyerTemplate } from '../../templates/lawyer-page'

const LawyerPreview = ({ entry }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <LawyerTemplate
      title={entry.getIn(['data', 'title'])}
      networks={entry.getIn(['data', 'networks'])}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default LawyerPreview
