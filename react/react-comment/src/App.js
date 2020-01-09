import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentInput from './CommentInput'

class App extends React.Component {
  // 静态属性
  state = {
    commentList: [
      // {username, comment}
    ]
  }
  onPublish = (username, comment) => {
    console.log(username, comment)
    // this.state.commentList = [{"username": username, "comment": comment}, ...this.state.commentList]
    // console.log(this.state.commentList)
    let c = { username, comment }
    // 不可变数据
    // let obj = {}; let obj1 = obj; obj1.name = 'li'
    // let obj1 = Object.assign({}, obj)
    let list = this.state.commentList.slice(0)
    list.push(c)
    this.setState({
      commentList: list
    })
    console.log()
  }
  handleDel = (e) => {
    const i = parseInt(e.target.dataset.i)
    // this.state.commentList.splice(i, 1)
    const list = this.state.commentList.slice(0)
    list.splice(i, 1)
    this.setState({
      commentList: list
    })
  }
  render() {
    return (
      <>
      <CommentInput onPublish={this.onPublish} />
      {/* <commentList /> 响应式编程 */}
      { this.state.commentList.length }
      { this.state.commentList && this.state.commentList.map(
        (c, i) => {
          return (
            <li key={i}>
              {c.username} : {c.comment}
              <button data-i={i} onClick={this.handleDel}>删除</button>
            </li>
          )
        }
      ) }
      </>
    )
  }
}

export default App;
