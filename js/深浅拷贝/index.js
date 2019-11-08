// let a = 'wn'
// let b = a
// a = '蜗牛'
// console.log(b)

// let a = {
//   name: 'wn',
//   book: {
//     title: "You Don't Konw Js",
//     price: '45'
//   }
// }
// let b = a
// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)

// let a = {'name': '蜗牛'}
// let b = {'age': 18}

// let c = Object.assign(a,b) //Object.assign()和{...a} 深浅拷贝看数据类型
// console.log(c)

// b不会因为a的改变而改变为深拷贝

// let a = [0, '1',[2, 3]]
// let b = a.slice(1)  //从第一个元素开始截取
// a[1] = '22'
// a[2][0] = 4
// console.log(b) // slice() 深浅拷贝看数据类型

let a = {
  name: 'wn',
  book: {
    title: "You Don't Konw Js",
    price: '45'
  }
}
let b = JSON.parse(JSON.stringify(a))
a.name = '蜗牛'
a.book.price = '55'
console.log(b)