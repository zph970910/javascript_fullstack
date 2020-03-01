// PureComponent 组件，其实就是定制后的 shouldComponentUpdate
import React, { Component, PureComponent } from 'react'

//shouldComponentUpdate 的加强版
export default class PureComponentTest extends PureComponent {
  constructor (props) {
    super (props)

    this.state = {
      comments: [
        {body: 'react is very good', author: 'facebook'},
        {body: 'vue is very good', author: 'youyuxi'}
      ]
    }
    
    setTimeout(() => {
      this.setState({
        comments: [
          {body: 'vue is very good', author: 'youyuxi'}
          
        ]
      })
    },2000)
  }
  // shouldComponentUpdate (nextProp) {
  //   console.log(nextProp)
  //   if ( nextProp.data.body === this.props.data.body && this.props.data.author) {
  //     console.log(false)
  //     return false
  //   }
  //   console.log(true)
  //   return true
  // }
  render () {
    console.log('render')
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} data={c} />
        ))}
      </div>
    )
  }
}

// 展示组件
class Comment extends PureComponent {
  constructor (props) {
    super (props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <p>{this.props.data.body}</p>
        <p>--{this.props.data.author}</p>
      </div>
    )
  }
}