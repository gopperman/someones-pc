import React, { Component } from 'react'
import CollectionOverview from './containers/CollectionOverview'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <CollectionOverview />
      </div>
    );
  }
}

export default App;
