import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Cats from './Cats'
import NotFound from './NotFound'

const App = (props) => (
  <div className="App">
    This is App component!
    <br />
    <br />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cats" exact component={Cats} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
