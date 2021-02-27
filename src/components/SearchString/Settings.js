import React, { Component } from 'react'
import Clear from './Clear.js'

class Settings extends Component {
  constructor(props) {
    super(props)

    this.setSettingsRef = element => {
      this.settings = element
    }

    this.openSettings = this.openSettings.bind(this)
  }

  openSettings(event) {
    this.settings.classList.remove('hidden')
  }

  render() {
    return (
      <div>
        <nav className="menu">
          <a className="menu__option" onClick={this.openSettings}>Settings</a>
        </nav>
        <div className="settings hidden" ref={this.setSettingsRef}>
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
}

export default Settings
