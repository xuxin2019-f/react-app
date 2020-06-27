import React from 'react'
import { List } from 'antd-mobile'
import { connect } from 'react-redux'
import { add, minus, asyncadd } from './store.js'
import { logout } from './Auth.redux.js'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Auth from './Auth.js'

@connect(
  (state) => ({
    isAuth: state.auth.isAuth,
  }),
  {
    logout,
  }
)
class More extends React.Component {
  render() {
    const index = (
      <div>
        <h2>详情页</h2>
        <button onClick={this.props.logout}>注销</button>
      </div>
    )
    return this.props.isAuth ? index : <Redirect to="/login" />
  }
}

export default connect(
  (state) => ({
    num: state.counter,
    isAuth: state.auth.isAuth,
  }),
  { add, minus, asyncadd, logout }
)(
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        list: ['xx', 'wy', 'xlf'],
      }
    }
    render() {
      return (
        <div>
          <List renderHeader={() => 'Basic Style'}>
            {this.state.list.map((v) => {
              return <List.Item key={v}>{v}</List.Item>
            })}
          </List>
          <h2>{`num个数${this.props.num}`}</h2>
          <button onClick={this.props.add}>增加</button>
          <button onClick={this.props.minus}>减少</button>
          <button onClick={this.props.asyncadd}>异步增加</button>
          <BrowserRouter>
            <Route path="/login" component={Auth} />
            <Route path="/more" component={More} />
          </BrowserRouter>
        </div>
      )
    }
  }
)
