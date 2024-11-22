const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// 记录每个请求的日志
app.use((req, res, next) => {//use更多的是定义中间件
  console.log(`Request URL: ${req.url}`);
  next(); // 继续处理请求
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/no', (req, res) => {
  res.send('No!')
})

//static,简易直接用path拼出绝对路径
app.use('/public',express.static(path.join(__dirname, 'public')))//即使设置地址也有可能访问不到所以配置静态路由 路径问题:以[/public]开头访问路径也会访问静态文件
//get /foo?a=1&b=2 不用这样写
app.get('/foo',(req,res)=>{
  /*?查询会自动*/ //req.query ===> {a:1,b:2}
  res.writeHead(200,{
    'content-type':'text/html'//头不存在的话似乎会直接下载
  })
  res.end(`
    <h1>hello</h1>
    <script src="css.js"></script>
    `)
})

//router
app.get('/router', (req, res, next) => {
  console.log('routerTest1');//会出现在服务器的控制台
  next(); // 传递控制权到下一个回调
}, (req, res) => {
  res.send('routerTest2');
});
//多个中间件还可以这样写
var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}
var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}
var cb2 = function (req, res) {
  res.send('Hello from C!')
}
app.get('/router/cb', [cb0, cb1, cb2])

//多个中间件与独立函数组合
var cd0 = function (req, res, next) {
  console.log('CD0')
  next()
}
var cd1 = function (req, res, next) {
  console.log('CD1')
  next()
}
app.get('/router/cd', [cd0, cd1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})

  //正则表达式路由
  app.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e')
  })
  //路由参数router params
  app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)//返回的是json
  })

app.get('/bar', (req, res) => {
  res.json({
    a:1,b:2
  })
})

  //app.route() 创建可链式路由处理程序
  app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})