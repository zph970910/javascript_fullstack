## localStorage
永久性

## sessionStorage
当前这次回话

## cookie
domain: cookie 生效的域
.baidu.com
map.baidu.com

path: 路径
/
/mobile

domain + path : 构成 cookie 生效的范围

expires/max-age: 生效的时间

httpOnly:
cookie: 1.服务端 2.js
如果为true，cookie 不可被 js 操作的

secure:
只在 https 环境下 传输 cookie