import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCats } from '../actions/cat'

const Cats = (props) => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      props.getCats(data)
    }

    // 여기서 이미 SSR이 돼있는지 체크 후 fetch를 할지 결정
    fetchData()
  }, [])

  useEffect(() => {
    if (props.getAllCats.status === 'SUCCESS') {
      setCats(props.getAllCats.cats)
    }
  })

  return (
    <div>
      This is a list of cats!
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
      <br />
      <br />
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            {cat.id}: {cat.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  getAllCats: state.cat.getAllCats,
})

const mapDispatchToProps = (dispatch) => ({
  getCats: (cats) => dispatch(getCats(cats)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cats)
