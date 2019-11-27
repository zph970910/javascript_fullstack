const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaStatic = require('koa-static');
const KoaCors = require('koa-cors');
const KoaBody = require('koa-body')
const app = new Koa();
const router = new KoaRouter();
// 单个路由的中间件
// formidable
const path = require('path')
router.post('/upload', KoaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '/static/'),
    keepExtensions: true,
    hash: true // hash 字符串 MD5 sha256
  }
}), async (ctx) => {
  /**
   * ctx = {
   * request
   * response
   * }
   * .files koabody 加上去的
   */
  const diskPath = ctx.request.files.avatar.path;
  // c:js/a.jpg
  let fileName = path.basename(diskPath);
  ctx.body = {
    code: 200,
    url: `http://localhost:3000/${fileName}`
  }
})
// 全局的
// 顺序
app.use(KoaCors())
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server is running')
})