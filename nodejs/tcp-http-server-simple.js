
//请求测试,$ nc eloquentjavascript.net 80
// GET /17_http.html HTTP/1.1
// Host: eloquentjavascript.net



//tcp模块，不过名字叫net
//avcion.ico获取的是图标
let net = require('net')
//创建tcp服务器对象
let server = net.createServer()
let port = 8005
server.listen(port,() =>{ 
  console.log('listening on the' , port , "......")
})

//消息存储,每条留言就是一个对象,只要不关闭就会存在
let messages = []

//nodejs
server.on('connection',(conn) =>{
  //当在连接上收到数据时触发
  conn.on('data',data => {
    let request = data.toString()
    let [header,body] = request.split("\r\n\r\n")//双回车拆分请求头和体
    let [firstLine,...headers] = header.split('\r\n')//拆分请求行(第一行)和其它头部
    let [method,path] = firstLine.split(' ')//拆分请求行中的请求方法和路径,这里没有添加协议版本
   
    console.log(path)
    //console.log("请求体"+body);//name=asd&message=yes%3F POST有请求体GET没有

    if (method == "POST" && path == "/example/message.html") {//post也必须在相同网址
      let message = parseQueryString(body)
      messages.push(message)//添加进数组
      // return 不能,结束了就无法发送消息
    }
    
    if (path == "/example/message.html") {//绝对路径与相对路径
      //响应
          conn.write('HTTP/1.1 200 OK\r\n')//响应头
          conn.write('Content-Type: text/html\r\n')//响应消息头
          conn.write('\r\n')//分割
          conn.write(`
            <form method="POST" action ="">
            <p> Name:<input type="text"name="name"></p>
            <p> Message:<br><textarea name="message"></textarea></p>
            <p><button type="submit">Send </button></p>
            </form>
          `)//响应体 action =""不填写就是指向当前页面地址 example/message.html 相对路径 example/example/message.html

    for (let msg of messages) {
      conn.write(`
        <fieldset>
        <legend>${msg.name}</legend>
        ${msg.message}
        </fieldset>
        `)
    } 
    }else{
      conn.write('HTTP/1.1 404 Not Found\r\n')
      conn.write('Content-Type: text/html\r\n')
      conn.write('\r\n')
      conn.write(`404 not found `)
    }
 

    conn.end()
  })            
})

//进 name=asd&message=yes%3F&a=1&a=2
//出  {name:'asd',message:'yes!',a:['1','2']}
function parseQueryString(qs) {
  return qs.split('&').reduce((obj,pair) => { //['name=asd','message=yes3F','a=1','a=2']
    let [key,val] = pair.split('=')  //s6赋值特性
    obj[key] = decodeURIComponent(val) //yes3F解码
    return obj
  },{})
}