import React, { Component } from 'react';

// 高阶组件
function HOC(WrappedComponent) {
  return class extends Component {
    constructor (props) {
      super(props)
      this.state = {
        name: ''
      }
    }

    onChange = (e) => {
      // this.setState 在这里！！！ 是异步的
      this.setState({
        name: e.target.value
      })
      console.log(this.state.name)
    }
    render () {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onChange
        }
      }
      return <WrappedComponent {...newProps}/>
    }
  }
}

// 使用
// @HOC
// HOC(Example)
class Example extends Component {
  render () {
    return (
      <input {...this.props.name}/>
    )
  }
}

// const Example = HOC(Example)

export default Example