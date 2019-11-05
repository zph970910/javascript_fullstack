## 渲染
```js
document.body.style.backgroundColor = 'red';
setTimeout(() => {
 document.body.style.backgroundColor = 'blue';
}, 0);
```
先看到 red
再看到 blue
说明：在setTimeout 之前会发生一次 样式计算 浏览器并渲染它