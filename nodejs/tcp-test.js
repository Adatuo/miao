//tcp模块，不过名字叫net
let net = require('net')

//创建tcp服务器对象
let server = net.createServer()

//让服务器对象在某端口侦听
server.listen(989,() =>{ console.log('listening...')})

//每当服务器接收到一个连接时触发事件
server.on('connection',(conn =>{
  console.log(conn.remoteAddress,conn.remotePort);
  //向连接的对方发送数据
  conn.write('hi')
  //当在连接上收到数据时触发
  conn.on('data',data => {
    console.log(conn.remoteAddress,'says',data.toString());//data的类型类似于uint8Array，不是字符串，但可以toString直接转成字符串
    conn.write(data.toString().toUpperCase())
  })
  //连接断开时触发，连接断开就像电话挂断，之后就不能再收发消息了
  conn.on('end',()=>{})
}))