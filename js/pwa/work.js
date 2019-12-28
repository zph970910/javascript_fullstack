let sum = 0
for (i = 0; i < 10000000; i++) {
  sum += i
}
this.postMessage(sum) // 把结果传递出去
this.onmessage = function () {}