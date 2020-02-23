import React from 'react'
import CollectionOverview from './containers/CollectionOverview'
import SearchStringBuilder from './containers/SearchStringBuilder'
import './App.css'
import {
          BrowserRouter as Router,
          Route,
          Switch
        } from 'react-router-dom';

const App = () =>
  <Router>
    <div>
        <Switch>
          <Route path='/' component={ SearchStringBuilder } />
          <Route path='/collection' component={ CollectionOverview } />
          <Route path='/collection/ball/:ball' component={ CollectionOverview } />
          <Route path='/collection/pkmn/:pokemon' component={ CollectionOverview } />
        </Switch>
    </div>
  </Router>
;

export default App;
