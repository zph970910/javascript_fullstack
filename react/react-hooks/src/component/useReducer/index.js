// function countReducer(state, action) {
//   switch (action) {
//     case 'add':
//       return state + 1
//     case 'sub':
//       return state - 1
//     default:
//       return state
//   }
// }

// useReducer 帮助我们整合组件中操作同一状态的各种方法
import React, { useReducer } from 'react'

function ReducerDemo () {
  const [ count, dispath ] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  },0)
  return (
    <div>
      <h2>现在的分数是{count}</h2>
      <button onClick={() => dispath('add')}>add</button>
      <button onClick={() => dispath('sub')}>cut</button>
    </div>
  )
}

export default ReducerDemo