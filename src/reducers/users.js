const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          ...action
        }
      ]
    default:
      return state
  }
}

export default users
