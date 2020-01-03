// a = (3, 2) 
// b = (4, 3) 
// c = (5, 4)
// function fn (type, capacity) {
//   return a || b || c || a + b
// }

var values = [3, 4, 5, 7, 20]
var weight = [2, 3, 4, 1, 5]
var capacity = 5
var n = values.length
function pack(w, v, capacity, n) {
  let T = []
  for (let i = 0; i < n; i++) {
    T[i] = [] // [ [], [], [] ]
    for (let j = 0; j <= capacity; j++) {
      if (j === 0) { // 容量为0
        T[i][j] = 0
        continue
      }

      if (j < w[i]) { // 容量小于商品重量，此处hold不住
        if (i === 0) {
          T[i][j] = 0
        } else {
          T[i][j] = T[i - 1][j]
        }
        continue
      }

      if (i === 0) {
        T[i][j] = v[i]
      } else {
        T[i][j] = Math.max(v[i] + T[i - 1][j - w[i]], T[i - 1][j])
      }
    }
  }
  console.log('1111', T)
  findValue(w, v, capacity, n, T)
  return T
}

function findValue(w, v, capacity, n, T) { // 找需要的物品
  var i = n - 1, j = capacity
  while (i > 0 && j > 0) {
    if (T[i][j] !== T[i - 1][j]) {
      console.log(`选择物品${i}, 重量:${w[i]}, 价值:${values[i]}`)
      j = j - w[i]
      i--
    } else {
      i--
    }
  }
  if (i === 0) {
    if (T[i][j] !== 0) {
      console.log(`选择物品${i}, 重量:${w[i]}, 价值:${values[i]}`)
    }
  }
}

pack(weight, values, capacity, n)

