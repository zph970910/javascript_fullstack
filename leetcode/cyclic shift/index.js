// var arr = [-1, -100, 3, 99], k = 2
// function RShift(list, k) {
//   const copy = [...list]
//   const n = list.length
//   if (k % n === 0) return
//   for (let i = 0; i < n; i ++) {
//     list[i] = copy[(k + i) % n]
//   }
//   return list
// }
// console.log(RShift(arr, k))

// var arr = [-1, -100, 3, 99], k = 2
// function RShift(list, k) {
//   const n = list.length
//   if (k % n === 0) return list
//   let cnt = Math.abs(k > 0 ? k % n : n + (k % n))
//   let t = null
//   while (cnt--) {
//     t = list[n - 1]
//     // 右移一位
//     for (let i = n - 1; i > 0; i --) {
//       list[i] = list[i - 1]
//     }
//     list[0] = t
//   }
//   return list
// }
// console.log(RShift(arr, k))



// 三次翻转
// [0, n-k-1]
// [n-k, n-1]
// [0, n-1]

function reverse(list, start, end){
  let t = null;
  while (start < end) {
    t = list[start]
    list[start] = list[end]
    list[end] = t
    start++
    end--
  }
}

function RShift(list, k) {
  const n = list.length
  if (k % n === 0) return list
  reverse(list, 0, n-k-1)
  reverse(list, n-k, n-1)
  reverse(list, 0, n-1)
  return list
}
var arr = [-1, -100, 3, 99], k = 2
console.log(RShift(arr, k))