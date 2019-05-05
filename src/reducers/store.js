import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createMemoryHistory } from 'history'
import cat from './cat'

const history = createMemoryHistory()
const middlewares = [routerMiddleware(history)]
const reducers = combineReducers({
  cat,
  routing: routerReducer,
})

const configureStore = (initialState = {}) =>
  createStore(reducers, initialState, applyMiddleware(...middlewares))

export default configureStore
