import React, { Component } from 'react'

class Child extends Component {
  render () {
    return (
      <div>
        <p>父组件传递的name: {this.props.name}</p>
      </div>
    )
  }
}

class Parent extends Component {
  constructor (props) {
    super (props) 
    this.state = {
      name: "蜗牛"
    }
  }

  render () {
    return (
      <div>
        <p>父组件的name: {this.state.name}</p>
        <Child name="猛哥" />
      </div>
    )
  }
}

export default Parent