import React, { Component } from 'react'

class Archive extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render () {
    return (
      <div>我是归档页面组件</div>
    )
  }
}

export default Archive