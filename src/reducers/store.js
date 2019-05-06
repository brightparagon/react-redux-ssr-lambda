import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createMemoryHistory, createBrowserHistory } from 'history'
import cat from './cat'

const isServer = !(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
)

const history = isServer
  ? createMemoryHistory()
  : createBrowserHistory()
const middlewares = [routerMiddleware(history)]
const reducers = combineReducers({
  cat,
  routing: routerReducer,
})

const configureStore = (initialState = {}) =>
  createStore(reducers, initialState, applyMiddleware(...middlewares))

export default configureStore
