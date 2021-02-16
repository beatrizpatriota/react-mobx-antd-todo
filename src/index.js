import React from 'react'
import ReactDOM from 'react-dom'

import '../node_modules/antd/dist/antd.css'

import AppStore from './models/AppStore.js'
import App from './App.js'

const store = AppStore.create()
if (window) window.appStore = store

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
