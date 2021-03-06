import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchCats, getCatsSuccess, getCatsFail } from '../actions/cat'

const Cats = (props) => {
  useEffect(() => {
    // decide whether to fetch data or not after checking if SSR is done
    if (props.getAllCats.status !== 'SUCCESS') {
      fetchCats()
        .then((fetchedCats) => props.getCatsSuccess(fetchedCats))
        .catch((error) => props.getCatsFail(error))
    }
  }, [])

  const { getAllCats: { cats } } = props

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
      <h2>Cat List</h2>
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

const mapStateToProps = (state) => ({
  getAllCats: state.cat.getAllCats,
})

const mapDispatchToProps = (dispatch) => ({
  getCatsSuccess: (cats) => dispatch(getCatsSuccess(cats)),
  getCatsFail: (error) => dispatch(getCatsFail(error)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cats)
