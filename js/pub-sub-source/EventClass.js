let listener = [
  () => {console.log(1)},
  () => {console.log(2)},
];
const subPub = {
  'price': [],
  'paraer': []
}
// price 对应的方法执行一遍

// for (let a of subPub.price){
//   console.log('---',subPub.price[a])
//   a();
// }
// for (let i=0; i<subPub[price].length; i++) {
//   console.log('---',subPub[price][i]);
//   subPub[price][i]();
// }
// foo: [foo]
// 在 subPub上面添加一个 value 为数组的 key （foo）
// 把 foo 放到数组去
function foo() {
  console.log('foo');
}
subPub.foo = [foo];
console.log(subPub);

class Events {
  constructor() {
    this.listener = {};
  }
  on(key,fn) {
    if(!this.listener[key]) {
      this.listener[key] = []
    }
    this.listener[key].push(fn);
    console.log(this.listener)
    
    // this.listener.push(fn);
  }
  emit(key) {
    for (let i=0; i<this.listener[key].length; i++) {
      console.log('---',this.listener[key][i]);
      this.listener[key][i]();
    }
  }
}
const ev = new Events();
ev.on('abc',() => { console.log(1) })
ev.on('abc',() => { console.log(2) })
ev.emit('abc'); //执行的