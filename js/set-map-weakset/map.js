// const data = {} 
// const element = document.getElementById('myDiv')

// data[element] = 'wnwwn'
// data['[object HTMLDivElement]']

// const m = new Map()
// const o = {p: 'hello world'}

// m.set(o, 'content') // .set() 是map的一个方法，用来设置或修改实例当中的值

// m.has(o)
// m.delete(o)
// console.log(m.has(o))


// const items = [
//   ['name', '蜗牛'],
//   ['sex', 'boy']
// ]
// const map = new Map()

// items.forEach(([key, value]) => map.set(key, value))
// console.log(map)
// items = { 
//   'name': '蜗牛', 
//   'sex': 'boy' 
// }

// console.log(items.get('name'))

// 实际上不仅仅是数组，任何具有Iterator(迭代器)的接口，
// 只要每一个成员都是双元素数组的数据结构，都可以作为map的参数
// 所以Set Map都可以用来生成新的Map

// const set = new Set([
//   ['foo', 1],
//   ['bar', 2]
// ])

// const m1 = new Map(set)
// m1.get('foo')
// console.log(m1.get('foo'))

// const m2 = new Map([['baa', 3]])
// console.log(m2)
// const m3 = new Map(m2)
// console.log(m3.get('baa'))

// const k1 = ['a']
// const k2 = ['a']

// map.set(k1, 111).set(k2, 222)
// console.log(map)  //{ [ 'a' ] => 111, [ 'a' ] => 222 }
// 相同的值在不同对象的引用，Map结构中视为两个键

// let map1 = new Map()
// map1.set(-0, 123)
// console.log(map1.get(+0))


// 实例属性和操作方法

// const map = new Map()
// // map.set('foo', true)
// // map.set('bar', false)

// map.set('abc', 123).set(123, 'abc').set(undefined, NaN)

// console.log(map.get(123))
// console.log(map.has(123))
// map.delete(123)
// map.clear()
// console.log(map)
// map.size

// 遍历
// Map数据结构的遍历顺序一定会按照数据本身
// const map = new Map([
//   ['foo', 'no'],
//   ['bar', 'yes']
// ])
// // for of 只能遍历具有迭代器的对象
// for(let key of map.keys()) {
//   console.log(key)
// }
// for(let value of map.values()){
//   console.log(value)
// }
// for(let item of map.entries()){
//   console.log(item)
//   console.log(item[0])
// }
// for(let [key, value] of map){
//   console.log(key, value)
// }
// Map 转化为数组结构
// const map = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three']
// ])
// [...map.keys()]
// [...map.values()]
// [...map.entries()]
// [...map]

// map.forEach((value, key, map) => {
//   console.log(key + ':' + value, map)
// })

// Array.from(map).map((key, value) => {
//   console.log(`${key}:${value}`)
// })
// console.log(map)


// 转换

// Map => 对象
// function setMapToObj(strMap) {
//   let obj = Object.create(null)
//   for (let [k, v] of strMap) {
//     obj[k] = v
//   }
//   return obj
// }
// const myMap = new Map()
// myMap.set('yes', true).set('no', false)

// console.log(myMap)
// console.log(setMapToObj(myMap))

// 对象转Map
let obj = {
  'yes': true,
  'no': false
}
function setObjToMap(obj) {
  let strMap = new Map()
  // for (let item in obj) {
  //   strMap.set(item, obj[item])
  // }
  for (let item of Object.keys(obj)) {
    strMap.set(item, obj[item])
  }
  return strMap
}
console.log(setObjToMap(obj))