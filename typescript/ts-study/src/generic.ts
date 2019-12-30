// 泛型
// const arr: Array<number | string> = [1, 2, 3, '4']
// let x1: [number, string]
// x1 = [1, 'w']
// 声明泛型变量<T> 它用于捕获开发者传入的参数类型，我们就可以使用<T>做参数类型和返回值的类型
// function returnItem<T>(para: T):T {
//   return para
// }

function swap<T, U>(tuple:[T, U]) {
  return [tuple[0],tuple[1]]
}
swap([7, 'seven'])

function getArrayLength<T>(arg:Array<T>) {
  console.log(arg.length)
  return arg
}

// 泛型接口
interface ReturnItem<T> {
  (para: T): T
}
const returnItem: ReturnItem<number> = para => para

// 泛型类
// class Stack<T> {
//   private arr: T[] = []

//   public push(item: T) {
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }
// const app = new Stack()
// app.push('123')


// 泛型约束
type Params = number | string
class Stack<T  extends Params> {
  private arr: T[] = []

  public push(item: T) {
    this.arr.push(item)
  }

  public pop() {
    this.arr.pop()
  }
}
const stack1 = new Stack<string>()
const stack2 = new Stack<number>()
// const stack3 = new Stack<boolean>()


// 泛型约束与索引类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U) { // obj = {}
  return obj[key]
}
const a1 = {
  name: 'wn',
  id: 1
}
getValue(a1, 'id')


// 使用多重类型进行约束
interface FirstInterface {
  doSomething(): number
}
interface SecondInterface {
  doSomethingElse(): string
}

interface childInterface extends FirstInterface, SecondInterface{

}

// class Demo<T extends childInterface> {
//   private genericProperty: T

//   useT () {
//     this.genericProperty.doSomething()
//     this.genericProperty.doSomethingElse()
//   }
// }


// 泛型与new

// {new(): T} 泛型可被构造
function factory<T>(type: {new(): T}): T {
  return new type()
}