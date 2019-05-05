import serverless from 'serverless-http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import fs from 'fs'

import App from './src/components/App'
import { fetchCats } from './src/actions/cat'
import configureStore from './src/reducers/store'

const app = express()
const markup = fs.readFileSync('./build/index.html', 'utf8')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/static', express.static('./build'))

app.get('/', (req, res) => {
  const store = configureStore()
  const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c')
  const renderedReactHtml = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>,
  )
  const completedMarkup = markup
    .replace('<!-- MESSAGE -->', '<!-- SERVER SIDE RENDERED: INDEX -->')
    .replace('<!-- REACT_APP -->', renderedReactHtml)
    .replace(
      '<!-- REDUX_STATE -->',
      `<script>window.__PRELOADED_STATE__ = ${preloadedState}</script>`,
    )

  res
    .status(200)
    .send(completedMarkup)
})

app.get('/cats', async (req, res) => {
  const cats = await fetchCats()
  const initialCatReducer = {
    cat: {
      getAllCats: {
        status: 'SUCCESS',
        cats,
        error: '',
      },
    },
  }
  const store = configureStore(initialCatReducer)
  const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c')
  const renderedReactHtml = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>,
  )
  const completedMarkup = markup
    .replace('<!-- MESSAGE -->', `<!-- SERVER SIDE RENDERED: ${req.url} -->`)
    .replace('<!-- REACT_APP -->', renderedReactHtml)
    .replace(
      '<!-- REDUX_STATE -->',
      `<script>window.__PRELOADED_STATE__ = ${preloadedState}</script>`,
    )

  res
    .status(200)
    .send(completedMarkup)
})

export const ssr = serverless(app)
