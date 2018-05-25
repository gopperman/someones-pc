import React, { Component } from 'react'
import _ from 'lodash'
import Table from '../components/Table'
import collection from '../data/collectionOverview.json'

class CollectionOverview extends Component {

  render() {
    const headers = _.get(collection, 'headers', []),
      data = _.get(collection, 'data', [])

    return (
      <div>
        <Table headers={headers} data={data} />
      </div>
    )
  }
}

export default CollectionOverview
