import React from 'react'
import ReactDOM from 'react-dom'

import '../node_modules/antd/dist/antd.css'

import AppStore from './models/AppStore'
import App from './App.js'

const store = AppStore.create({})

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
)
