// let arr = [13, 1, 2, 5, 3, 8, 11]
// let sum = 18

// function findSum(arr, sum) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         console.log(i, j, arr[i], arr[j])
//       }
//     }
//   }
// }
// findSum(arr, sum)

let arr = [13, 1, 2, 5, 7, 8, 11]
let sum = 18

function findSum(arr, sum) {
  let obj = {
    // 5: 0,
    // 17: 1,
    // 16: 2,
    // 13: 3,
    // 15: 4,
    // 10: 5,
    // 7: 6
  }
  arr.forEach((v, i) => {
    if (String(v) in obj) {
      console.log('找到了'+ obj[v], i)
    }
    obj[sum - v] = i
  });
}
findSum(arr, sum)