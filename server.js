const Koa = require('koa')

const app = new Koa()
// https://segmentfault.com/a/1190000011840010
app.use(async ctx => {
  let p = ['url', 'query', 'host', 'hostname', 'method', 'path', 'header', 'ip', 'protocol', 'fresh', 'stale', 'subdomains']
  console.log(p.reduce((prev, curr) => {
    prev[curr] = ctx[curr]
    return prev
  }, {}))
  ctx.body = {
    greeting: 'Hello World2'
  }
})

app.listen(3001)