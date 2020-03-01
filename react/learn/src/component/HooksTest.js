// Hook（钩子函数） 它可以在不编写class的情况下使用state内部的状态和React

// 使用state Hook
import React, { useState, useEffect } from 'react'

export default function HooksTest () {
  // useState(initialState), 接收初始状态，返回一个状态变量和它的更新函数,属性名可以自定义
  // 声明一个新的数组叫做"count"的state变量
  const [count, setCount] = useState(0)

  // 数据获取，设置订阅，以及手动更改React组件中的DOM -- 副作用
  useEffect(() => {
    document.title = `您点击了${count}次`
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      {/* 调用setCount，修改状态count */}
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}