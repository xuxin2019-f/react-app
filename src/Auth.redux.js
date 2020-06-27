export const Auth = (state = { isAuth: false, user: 'xx' }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuth: true }
    case 'LOGOUT':
      return { ...state, isAuth: false }
    default:
      return state
  }
}

// action creator
export const login = () => ({ type: 'LOGIN' })
export const logout = () => ({ type: 'LOGOUT' })
