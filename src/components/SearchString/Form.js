import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPKMN, deselectPKMN } from '../../actions/actions';
import pokedex from '../../data/pokedex.json'

class SearchStringForm extends Component {
  constructor(props) {
    super(props)
    this.form = null

    this.state = {
      selectedPKMN: this.props.selectedPKMN
    }

    this.setFormRef = element => {
      this.form = element
    }

    this.updateSearchString = this.updateSearchString.bind(this)
    console.log(this.props)
  }

  updateSearchString(event) {
    if (event.target.checked) {
      console.log('add')
      this.props.selectPKMN(event.target.value)
    } else {
      console.log('remove')
      this.props.deselectPKMN(event.target.value)
    }
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
                  checked={this.state.selectedPKMN.includes(pkmn.id)}
                  onChange={ this.updateSearchString } />
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
