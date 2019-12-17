// // const ws = new WeakSet()
// // ws.add({a:1})


// const a = [[1, 2], [3, 4]]
// const ws = new WeakSet(a)

// console.log(ws)

// // weakset 可以接受一个数组或者类数组作为参数，该数组的所有成员，都会自动成为wakset实例对象的成员

// const b = [5, 6]
// const wn = new WeakSet(b)
// console.log(wn)

// // 但是，传进来的数组的成员只能是对象



const ws = new WeakSet()
const obj = {}
const foo = {}

// ws.add(window)
ws.add(obj)
ws.has(obj)
ws.delete(obj)
ws.add(foo)

// console.log(ws.has(obj))
// console.log(ws.size)

// ws.forEach(item => {
//   // console.log(item)
// });

// WeakSet没有size属性，所以他也不能被遍历

const foos = new WeakSet()
// foos对实例的引用，不会被记入到内存回收机制中，所以删除实例的时候不用考虑foos，也不会出现内存泄漏
class Foo {
  constructor() {
    foos.add(this)
  }

  method () {
    if (!foos.has(this)) {
      throw new TypeError('error')
    }
  }
}
let faa = new Foo()
// 保证Foo的实例只能在Foo的实例上调用
faa.method()