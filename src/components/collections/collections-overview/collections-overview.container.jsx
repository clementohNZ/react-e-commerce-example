import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'redux'

import WithSpinner from '../../with-spinner/with-spinner.component'
import CollectionsOverview from './collections-overview.component'
import { selectCollectionFetching } from '../../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching,
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview)

export default CollectionsOverviewContainer
