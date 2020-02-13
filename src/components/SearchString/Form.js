import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPKMN, deselectPKMN } from '../../actions/actions'
import pokedex from '../../data/pokedex-go.json'
import _ from 'lodash'

class SearchStringForm extends Component {
  constructor(props) {
    super(props)
    this.form = null

    this.setFormRef = element => {
      this.form = element
    }

    this.updateSearchString = this.updateSearchString.bind(this)
  }

  updateSearchString(event) {
    if (event.target.checked) {
      this.props.selectPKMN(event.target.value)
    } else {
      this.props.deselectPKMN(event.target.value)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.selectedPKMN.length !== this.props.selectedPKMN.length
  }

  render() {
    return (
      <form className="searchstring__form" ref={this.setFormRef}>
        {pokedex.map( (pkmn) => {
          const img = _.get(pkmn, 'img', false)
          const imgSrc = img ? img : `img/pokemon/regular/${pkmn.name.english.toLowerCase()}.png`

          return (
              <label className="searchstring__label" htmlFor={pkmn.id} key={pkmn.id}>
                <input
                  className="searchstring__input"
                  type="checkbox"
                  id={pkmn.id}
                  value={pkmn.id}
                  checked={this.props.selectedPKMN.includes(pkmn.id)}
                  onChange={ this.updateSearchString } />
                <p className="searchstring__pkmn">
                  <img src={imgSrc} alt={`${pkmn.name.english} sprite`} />
                  {pkmn.name.english}
                </p>
              </label>
          )
        })}
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectPKMN: pkmn => dispatch(selectPKMN(pkmn)),
    deselectPKMN: pkmn => dispatch(deselectPKMN(pkmn))
  }
}

const mapStateToProps = (state) => {
  return { selectedPKMN: state.selectedPKMN }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchStringForm)
