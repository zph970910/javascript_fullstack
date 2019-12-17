// const data = {} 
// const element = document.getElementById('myDiv')

// data[element] = 'wnwwn'
// data['[object HTMLDivElement]']

const m = new Map()
const o = {p: 'hello world'}

m.set(o, 'content') // .set() 是map的一个方法，用来设置或修改实例当中的值

m.has(o)
m.delete(o)
// console.log(m.has(o))


const items = [
  ['name', '蜗牛'],
  ['sex', 'boy']
]
const map = new Map()

items.forEach(([key, value]) => map.set(key, value))
// console.log(map)
// items = { 
//   'name': '蜗牛', 
//   'sex': 'boy' 
// }

// console.log(items.get('name'))

// 实际上不仅仅是数组，任何具有迭代器的接口，
// 只要每一个成员都是双元素数组的数据结构，都可以作为map的参数
// 所以Set Map都可以用来生成新的Map

const set = new Set([
  ['foo', 1],
  ['bar', 2]
])

const m1 = new Map(set)
m1.get('foo')
console.log(m1.get('foo'))

const m2 = new Map([['baa', 3]])
console.log(m2)
const m3 = new Map(m2)
console.log(m3.get('baa'))

const k1 = ['a']
const k2 = ['a']

map.set(k1, 111).set(k2, 222)
console.log(map)  //{ [ 'a' ] => 111, [ 'a' ] => 222 }
// 相同的值在不同对象的引用，Map结构中视为两个键

let map1 = new Map()
map1.set(-0, 123)
console.log(map1.get(+0))