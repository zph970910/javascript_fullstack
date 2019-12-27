// 抽象类

// abstract class Animal {
//   abstract makeSound(): void
//   move(): void {
//     console.log('roaming this each')
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log('miao miao')
//   }
// }

// const cat = new Cat()
// cat.makeSound()

// 访问限定符

class Cat {
  public run() {
    console.log('跑起来。。。')
  }
  private eat() {
    console.log('吃起来。。。')
  }
  protected sleep() {
    console.log('睡觉吧。。。')
  }
}

class GRT extends Cat {
  init() {
    this.run()
    this.sleep()
  }
}
// const cat = new Cat()
// cat.run()
// cat.eat()
// cat.sleep()

// const car = new Cat()
// car.run()
const car = new GRT()
car.init()

// class 可以作为接口
// export default class Props {
//   public children: Array<React.ReactElement<any>>
// }