import React, { useState } from 'react';
// useState 就是一个hook

function Example () {
  const [ count, setCount ] = useState(0)
  // let _useState = useState(0)
  // let count = _useState[0]
  // let setCount = _useState[1]
  // setCount == this.setState({count: 'number'})
  return (
    <div>
      <p>你点了{count}次</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>
    </div>
  )
}
let showSex = true
function Example2 () {
  // const [ count, name, setCount, setName ] = useState(0)
  const [age, setAge ] = useState(18)
  if (showSex) {
    const [sex, setSex] = useState('男')
    showSex = false
  }
  const [work, setWork] = useState('前端工程师')

  // react 是如何保证useState找到自己对应的state
  // react 是根据useState出现的顺序来确定的
  // react Hooks 不能出现在条件判断语句中，因为他必须有完全一样的渲染顺序

  return (
    <div>
      <p onClick={() => {setAge(age + 1)}}>蜗牛,今年{age}岁</p>
      <p>性别: {sex}</p>
      <p>工作: {work}</p>
    </div>
  )
}

export default Example
// hooks 本质上就是一类特殊的函数 目的就是让你不再写class， 让function一统江湖