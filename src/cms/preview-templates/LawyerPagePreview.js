import React from 'react'
import PropTypes from 'prop-types'
import { LawyerPageTemplate } from '../../templates/lawyer-page'

const LawyerPagePreview = ({ entry }) => {

  const entryNetworks = entry.getIn(['data', 'networks']);
  const networks = entryNetworks ? entryNetworks.toJS() : [];

  const entryMainPageCards = entry.getIn(['data', 'mainPageCards']);
  const mainPageCards = entryMainPageCards ? entryMainPageCards.toJS() : [];
  
  const entryTopics = entry.getIn(['data', 'topics']);
  const topics = entryTopics ? entryTopics.toJS() : [];

  const entryExperienceCards = entry.getIn(['data', 'experienceCards']);
  const experienceCards = entryExperienceCards ? entryExperienceCards.toJS() : [];
  
  const entryNews = entry.getIn(['data', 'news']);
  const news = entryNews ? entryNews.toJS() : [];

  const entryPublications = entry.getIn(['data', 'publications']);
  const publications = entryPublications ? entryPublications.toJS() : [];

  const entryPeople = entry.getIn(['data', 'people']);
  const people = entryPeople ? entryPeople.toJS() : [];

  return (
    <LawyerPageTemplate
      title={entry.getIn(['data', 'title'])}
      networks={networks}
      backgroundImage={entry.getIn(['data', 'backgroundImage'])}
      mainPageCards={mainPageCards}
      topics={topics}
      experienceCards={experienceCards}
      news={news}
      publications={publications}
      people={people}
    />
  )
}

LawyerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default LawyerPagePreview
