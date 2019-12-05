import React, { Component } from 'react'
import {PropTypes} from 'prop-types'
import _ from 'lodash'
import pokedex from '../../data/pokedex.json'

class SearchStringForm extends Component {
  constructor(props) {
    super(props)
    this.form = null

    this.setFormRef = element => {
      this.form = element
    }
  }

  updateSearchString() {
  }

  render() {
    return (
      <form className="searchstring__form" ref={this.setFormRef}>
        {pokedex.map( (pkmn) => {
          return (
              <label className="searchstring__label" htmlFor={pkmn.id} key={pkmn.id}>
                <input
                  className="searchstring__input"
                  type="checkbox"
                  id={pkmn.id}
                  value={pkmn.id}
                  onChange={ e => this.updateSearchString() } />
                <p className="searchstring__pkmn">
                  <img src={`img/pokemon/regular/${pkmn.name.english.toLowerCase()}.png`} alt={`${pkmn.name.english} sprite`} />
                  {pkmn.name.english}
                </p>
              </label>
          )
        })}
      </form>
    )
  }
}

export default SearchStringForm
