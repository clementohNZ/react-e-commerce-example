import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import CollectionsOverviewContainer
  from '../../components/collections/collections-overview/collections-overview.container'
import CollectionsPageContainer from '../collection/collection.container'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props
    fetchCollectionsStart()
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionsPageContainer}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
