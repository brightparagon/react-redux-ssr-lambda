import fetch from 'isomorphic-fetch'

export const fetchCats = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export const getCatsSuccess = (cats) => ({
  type: 'GET_ALL_CATS_SUCCESS',
  cats,
})

export const getCatsFail = (error) => ({
  type: 'GET_ALL_CATS_FAIL',
  error,
})
