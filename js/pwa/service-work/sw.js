console.log('begin')
const CACHE_NAME = 'PWA-1.0'
// service worker
const cacheList = [ // 缓存
  './QQ图片20191228105558.png',
  './bundle.js'
]
// cacheStorage, 
this.addEventListener('install',(event) => {
  // install => activate(激活) 
  // 等着一个 Promise resolve 才回去到下一个阶段
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(cacheList)
    })
  )
})
// 监听请求
this.addEventListener('fetch', (event) => {
  event.respondWith(
    // 如果缓存里有
    caches.match(event.request)
    .then(resp => {
      if (resp) {
        console.log(event.request.url, '有缓存')
        return resp
      }
      else {
        console.log(event.request.url, '没缓存')
        return fetch(event.request)
        .then(res => {
          // service-worker 拿到请求的结果
          // 在添加到缓存里面
          return caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, res)
            return res
          })
        })
      }
    })
  )
})