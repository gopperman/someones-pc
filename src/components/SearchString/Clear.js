import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearPKMN } from '../../actions/actions'

class Clear extends Component {
  constructor(props) {
    super(props)

    this.setWarningRef = element => {
      this.warning = element
    }

    this.clearButtonClick = this.clearButtonClick.bind(this)
  }

  clearButtonClick(event) {
    const el = event.target

    this.props.clearPKMN()

    el.classList.add('hidden')
    this.warning.classList.add('clear__warning--success')
    this.warning.innerHTML = "Cleared!"
    setTimeout(() => {
      el.classList.remove('hidden')
      this.warning.classList.remove('clear__warning--success')
      this.warning.innerHTML = "Careful! This can't be undone"
    }, 2500)
  }

  render() {
    return (
      <section className="clear">
        <h3>> Clear Selected PKMN</h3>
        <p className="clear__warning" ref={this.setWarningRef}>
          Careful! This can't be undone.
        </p>
        <button className="clear__button" onClick={this.clearButtonClick}>
          Clear
        </button>
      </section>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearPKMN: () => dispatch(clearPKMN())
  }
}

const mapStateToProps = (state) => {
  return { selectedPKMN: state.selectedPKMN }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clear)
