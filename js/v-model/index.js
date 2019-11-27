const a = {
  b: 1
}

function fn() {
  console.log('a的值发啊生了改变', a.b)
}

function bindData() {
  Object.keys(a).map(key => {
    let v =a[key]

    Object.defineProperty(a, key, {
      get () { // 读取属性调用的方法
        console.log('正在读取a里面的值')
        return v
      },
      set (newVal) { // 写入属性时调用的方法
        v = newVal
        fn()
      }
    })
  }) // Object.keys(a) 返回a里面的所有key值
  
}

bindData()

console.log(a.b)
a.b = 123