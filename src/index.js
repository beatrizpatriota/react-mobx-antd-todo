import React from 'react'
import ReactDOM from 'react-dom'
import { onSnapshot } from 'mobx-state-tree'

import '../node_modules/antd/dist/antd.css'

import AppStore from './models/AppStore.js'
import App from './App.js'

const hasMemory = localStorage.getItem('Todos')
const initialStore = hasMemory ? JSON.parse(hasMemory) : {}
const store = AppStore.create(initialStore)
onSnapshot(store, snapshot => {
  localStorage.setItem('Todos', JSON.stringify(snapshot))
})

if (window) window.appStore = store

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
