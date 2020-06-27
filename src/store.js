// action creator
export const add = () => ({ type: 'add' })
export const minus = () => ({ type: 'minus' })
export const asyncadd = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: 'add' })
  }, 2000)
}

export const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return 10
  }
}
