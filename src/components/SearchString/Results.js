import React from 'react'
import { connect } from 'react-redux'
import copy from 'copy-to-clipboard'

const SearchStringResults = ({ selectedPKMN }) => {
  const defaultString = "Choose a POKéMON to add it to your search string. Your string will automatically be saved between sessions."
  const searchString = selectedPKMN.length ? selectedPKMN.join() : defaultString

  const showCopyNotification = (e) => {
    const textbox = e.target

    copy(textbox.innerHTML)

    textbox.value = 'Copied to Clipboard!'
    setTimeout(() => {
      textbox.value = searchString
    }, 1200)
  }

  return (
    <div className="searchstring__container">
      <textarea
        className="searchstring__results"
        value={searchString}
        onClick={showCopyNotification}
        readOnly>
      </textarea>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { selectedPKMN: state.selectedPKMN }
}

export default connect(mapStateToProps)(SearchStringResults)
