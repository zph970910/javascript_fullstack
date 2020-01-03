let arr = [1, 2, 3, 5, 7, 10, 11, 13, 15, 18, 20, 23]

// arr.forEach((val, index) => {
//   if (val === 20) {
//     console.log(index)
//   }
// })

function search(arr, item) { // 0(logn)
  let low = 0
  let heigh = arr.length - 1
  let mid
  let element
  while (low <= heigh) {
    mid = Math.floor((low + heigh) / 2)
    element = arr[mid]
    if (element < item) {
      low = mid + 1
    } else if(element > item) {
      heigh = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
console.log(search(arr, 18))
