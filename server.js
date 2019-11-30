const Koa = require('koa')
const axios = require('axios')

const app = new Koa()
// https://segmentfault.com/a/1190000011840010

app.use(async ctx => {

  function parsePostData () {
    return new Promise((resolve, reject) => {
      try {
        let postData = '';
        ctx.req.addListener('data', (data) => { // 有数据传入的时候
          postData += data;
        });
        ctx.req.on('end', () => {
          let parseData = parseQueryStr(postData);
          resolve(parseData);
        });
      } catch (e) {
        reject(e);
      }
    })
  }

  // 处理 string => json
  function parseQueryStr (queryStr) {
    let queryData = {};
    let queryStrList = queryStr.split('&');
    for (let [index, queryStr] of queryStrList.entries()) {
      let itemList = queryStr.split('=');
      queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
  }

  let p = ['url', 'query', 'host', 'hostname', 'method', 'path', 'header', 'ip', 'protocol', 'fresh', 'stale', 'subdomains']

  let ctxObj = p.reduce((prev, curr) => {
    prev[curr] = ctx[curr]
    return prev
  }, {})
  let postData
  if (ctx.method.toLowerCase() === 'get') {
    if (!ctxObj.query.url) {
      ctx.body = {
        message: 'url不能为空',
        status: 1001
      }
      return
    }
    ctxObj.query.url = encodeURIComponent(ctxObj.query.url)
  } else {
    postData = await parsePostData(ctx);
  }
  if (!ctxObj.path.match(/ico|png|jpg|jpeg|gif$/)) {
    await axios((ctx.method.toLowerCase() === 'get') ? ctxObj.query : postData).catch(err => {

    }).then(response => {
      console.log('======', response)
      ctx.body = response ? response.data : {}
    })
  }
})

app.listen(3001)