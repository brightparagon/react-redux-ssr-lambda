const initialState = {
  getAllCats: {
    status: 'INIT',
    cats: [],
    error: '',
  },
}

export default function cat(state = initialState, action) {
  switch (action.type) {
    // Not used
    case 'GET_ALL_CATS':
      return {
        ...state,
        getAllCats: {
          ...state.getAllCats,
          status: 'WAITING',
        },
      }
    case 'GET_ALL_CATS_SUCCESS':
      return {
        ...state,
        getAllCats: {
          ...state.getAllCats,
          status: 'SUCCESS',
          cats: [...action.cats],
        },
      }
    case 'GET_ALL_CATS_FAIL':
      return {
        ...state,
        getAllCats: {
          ...state.getAllCats,
          status: 'FAIL',
          cats: [],
          error: action.error,
        },
      }

    default:
      return state
  }
}
