import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
      This is Home!
      <br />
      <br />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
