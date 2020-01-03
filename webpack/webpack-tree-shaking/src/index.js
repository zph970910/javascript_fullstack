import {add, reduce} from './math.js'
// reduce 有必要存在最终dist文件里面吗
// import { includes } from 'lodash'
// babel-plugin-import element-ui
// 把上面的这种语法 转化为 下面这种
import includes from 'lodash/includes'
console.log(add(1, 2))
console.log(reduce(3, 2))
console.log(includes([1, 2], 1))