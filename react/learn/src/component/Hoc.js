import React, { Component } from 'react'

// 高阶组件--链式调用
const withName = Comp => {
  class NewComponent extends Component {
    componentDidMount() {
      console.log('do something')
    }
    render () {
      return <Comp {...this.props} name="高阶组件使用"/>
    }
  }

  return NewComponent;
}

const withLog = Comp => {
  console.log(Comp.name + '渲染了')
  return props => <Comp {...props}/>
}

// ES6 装饰器简化高阶组件的写法 必须安装"@babel/plugin-proposal-decorator"
// @withLog // withLog(Jpsite)
// @withName // withName(withLog)
// @withLog 
class Jpsite extends Component {
  render () {
    return (
      <div>
        <h2>hi,{this.props.state} - {this.props.name}</h2>
      </div>
    )
  }
}

// export default withName(withLog(App)) // 链式调用
export default Jpsite 