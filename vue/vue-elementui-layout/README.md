## babel
js的语法编译器
class 关键词 -> babel -> es5 的代码
里面有丰富的插件机制
vue 提供了 transform-vue-jsx 负责将 template 编译为 js

```js
<el-row>
  <el-col>12</el-col>
</el-row>

h("el-row", [h("el-col", ["12"])]);
```

```js
<template>
<!-- <section></section> -->
  <div class="my-el-row">
    <slot name="a"></slot>
    <slot name="b"></slot>
  </div>
  <!-- h('div') -->
</template>
```