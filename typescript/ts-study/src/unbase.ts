let notSure: any = 4
notSure = 'wn'

// let value: any
// value = true
// value = 1
// value = 'hello'
// value = Symbol('ytpe')
// value = {}
// value = []
// // -----------------------
// value.foo.bar
// value()
// new value()
// value[0][1]

let val: unknown
val = true
val = 1
val = 'hello'
val = Symbol('ytpe')
val = {}
val = []
// -----------------------
// val.foo.bar
// val()
// new val()
// val[0][1]

// never 类型是任何类型的子类型，也可以赋值给任何类型
// 然而没有类型是never的子类型或赋值给never类型
function error(message:string): never {
  throw new Error(message)
}
const empty: never[] = []
// empty.push(1)

// Array
const list: number[] = [1, 2, 3, 4]
const list2: Array<number> = [1, 2, 3, 4] // 泛型
// const list3: Array<string | number> {

// }

// Tuple 元组
let x: [string, number, boolean]
x= ['hello', 10, false]
// interface Tuple extands Array<string | number> {
//   0: string,
//   1: number,
//   length: 2
// }

// object
enum Direction {
  center = 1
}
let value: object

value = Direction
value = [1]
value = [1, 'hello']
value = {}
