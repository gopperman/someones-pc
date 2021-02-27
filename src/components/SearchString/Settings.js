import React from 'react'
import { connect } from 'react-redux'
import Clear from './Clear.js'

const Settings = () => {
  return (
    <div>
      <nav className="menu"><a className="menu__option">Settings</a></nav>
      <div className="settings hidden">
        <div className="settings__body">
          <h2 className="settings__hed">Settings</h2>

          <section className="filter">
            <h3>> Filter</h3>
            <p>Coming soon...</p>
          </section>

          <Clear />
        </div>

        <section className="settings__close">
          <button>Close Settings</button>
        </section>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { selectedPKMN: state.selectedPKMN }
}

export default Settings
