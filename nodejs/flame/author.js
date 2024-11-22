const http = require("http")
const port = 8046

const server = http.createServer()

server.on('request',(req,res)=>{
  if (req.url == '/author') {
    var accept = req.headers['accept']//拿到请求头里面的accept可以处理的类型
    if (accept == 'text/plain') {//纯文本数据格式
      res.writeHead(200,{'content-type':'text/plain; charset=UTF-8'})//告知响应体的对应格式 
      res.end('reback a plain')//返回一个文本字符串
    }else if (accept == 'text/html') {
      res.writeHead(200,{'content-type':'text/html; charset=UTF-8'})
      //返回一个html
      res.end(`
        <h1>This is a HTML</h1>
        `)
    }else if(accept == 'application/json'){//json
      res.writeHead(200,{'content-type':'application/json; charset=UTF-8'})
      res.end(JSON.stringify({
        name:"json",
        book:'whats json'
      }))
    }else{
      res.end('unkown requst typ')
    }      
  }
})

server.listen(port, () => {
  console.log('server listening on port', port)
})

