import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { CounterReducer } from './store.js'
import { Auth } from './Auth.redux.js'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(
  combineReducers({ counter: CounterReducer, auth: Auth }),
  applyMiddleware(thunk)
)

// function render() {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App store={store} add={add} minus={minus} asyncadd={asyncadd} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   )
// }

// render()
// store.subscribe(render)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
