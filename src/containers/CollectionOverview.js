import React from 'react'
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
