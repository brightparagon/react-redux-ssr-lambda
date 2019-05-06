import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = (props) => {
  return (
    <div>
      <h1>Sorry, can’t find that.</h1>
      <br />
      <Link to="/">Want to go home?</Link>
    </div>
  )
}

export default NotFound
