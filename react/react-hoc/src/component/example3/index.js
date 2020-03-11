import React, { Component } from 'react';
import User from './User'
import HOC from './OperateRefsHoc'

const EnhanceUser = HOC(User)

class OperateRefs extends Component {
  render() {
    return <EnhanceUser name="小明" age={12}></EnhanceUser>
  }
}

export default OperateRefs
