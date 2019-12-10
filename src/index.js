import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import './index.css'
//import { selectPKMN } from './actions/actions'

const ui =
  <Provider store={store}>
    <App />
  </Provider>


ReactDOM.render(ui, document.getElementById('root'))
