import React from 'react'
import { connect } from 'react-redux'

const SearchStringResults = ({ selectedPKMN }) => {
  const defaultString = "Choose a POKéMON to add it to your search string."
  const searchString = selectedPKMN.length ? selectedPKMN.join() : defaultString
  return (
    <div className="searchstring__container">
      <textarea
        className="searchstring__results"
        value={searchString}
        readOnly>
      </textarea>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { selectedPKMN: state.selectedPKMN }
}

export default connect(mapStateToProps)(SearchStringResults)
