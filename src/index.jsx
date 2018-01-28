import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import storeCreator from './store'
import { addError, login, logout } from './store/actions'

import App from './components/containers/App'

import './styles/main.css'

const store = storeCreator()

if (process.env.NODE_ENV === 'development') {
  window.store = store
  window.login = login
  window.logout = logout
}

window.addEventListener('error', message => store.dispatch(addError(message)))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
