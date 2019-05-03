import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import cat from './cat'

const history = createHistory()
const middlewares = [routerMiddleware(history)]
const reducers = combineReducers({
  cat,
  routing: routerReducer,
})

const configureStore = (initialState = {}) =>
  createStore(reducers, initialState, applyMiddleware(...middlewares))

export default configureStore
