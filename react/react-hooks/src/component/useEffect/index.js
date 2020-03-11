// 副作用 hooks模式下（state） 发生变更提供给我们做额外操作的地方
import React, { Component } from 'react';

export default class Example extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    // this.addCount = this.addCount.bind(this)
  }

  componentDidMount () {
    console.log(`componentDidMount => 你点击了${this.state.count}次`)
  }

  componentWillUpdate () {
    console.log(`componentWillUpdate => 你点击了${this.state.count}次`)
  }


  componentDidUpdate () {
    console.log(`componentDidUpdate => 你点击了${this.state.count}次`)
  }

  addCount () {
    this.setState ({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <p>你点了{this.state.count}次</p>
        <button onClick={this.addCount.bind(this)}>click me</button>
      </div>
    );
  }
}
