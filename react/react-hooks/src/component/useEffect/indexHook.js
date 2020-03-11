// 副作用 hooks模式下（state） 发生变更提供给我们做额外操作的地方
import React, {useState, useEffect} from 'react'

function Example () {
  const [ count, setCount ] = useState(0) 

  useEffect(() => {
    console.log(`useEffect => 你点击了${count}次`)
  })
  return (
    <div>
      <p>你点了{count}次</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>
    </div>
  )
}

export default Example

// 1. React首次渲染和之后的每一次渲染都会调用useEffect
// 2. useEffect里面定义的函数是异步执行的，他不会阻碍浏览器更新视图