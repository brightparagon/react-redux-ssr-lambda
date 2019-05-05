import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from './reducers/store'
import App from './components/App'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
delete window.__PRELOADED_STATE__

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
