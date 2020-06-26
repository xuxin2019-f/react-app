import React from 'react'
import { List } from 'antd-mobile'

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
      </div>
    )
  }
}

export default App
