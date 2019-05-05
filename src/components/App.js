import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Cats from './Cats'

class App extends React.Component {
  state = {}

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        This is App component!
        <br />
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cats" exact component={Cats} />
        </Switch>
      </div>
    )
  }
}

export default App
