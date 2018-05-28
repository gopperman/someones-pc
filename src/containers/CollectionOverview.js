import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Table from '../components/Table'
import fields from '../data/collectionOverview.json'
import { getBallHeaders } from '../utils/balls.js'


const CollectionOverview = ({balls, collection}) => {

  const createHeaders = () => {
    return [
      ...fields,
      ...getBallHeaders()
    ]
  }

  console.log(createHeaders())
  return (
    <div>
      <Table headers={createHeaders()} data={collection} />
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    collection: state.collection
  }
}

export default connect(mapStateToProps)(CollectionOverview);
