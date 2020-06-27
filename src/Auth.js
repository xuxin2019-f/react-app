import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux.js'
import { Redirect } from 'react-router-dom'

@connect((state) => ({ isAuth: state.auth.isAuth }), { login })
class Auth extends React.Component {
  render() {
    const noright = (
      <div>
        <h2>你没登录，没权限看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
    return this.props.isAuth ? <Redirect to="/more" /> : noright
  }
}
export default Auth
