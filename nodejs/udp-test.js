
//nodejs的程序不再运行于浏览器中
//·而运行于操作系统的环境中，可以调用操作系统的各项api
//·类似于各种其它语言的运行
//·可以执行类似读取文件，修改/删除文件，启动程序，连接网络，关闭电脑，在右下角创建图标

//  获取UDP模块
let dgram = require('dgram')

//创建一个udp4的socket套接字
let socket = dgram.createSocket('udp4')

//让这个socket绑定某个udp端口,范围0-65535,由于权限问题1024以上端口是可以
socket.bind(12345)



//当这个udp端口收到消息时触发事件
socket.on('message',(data,info)=>{
  //data是收到的数据
  //info是发送方的信息，如数据长度，发送方ip，发送方端口号
})

//收发数据
socket.send('hello!',12345,'127.0.0.1')
//socket.send('hello'，10010，'damiaoedu.com')

//发送广播数据包
socket.setBroadcast(true)//广播数据包
socket.send('data',11111,'255.255.255.255')//局域网中的所有设备发送广播消息
socket.send('data',11111,'192.168.1.255')//给与自己在同一个网段的所有设备发广播

//发送udp组播，可以理解为把消息发送到一个频道，只有在帧听那个频道的socket可以收到
//组播有一组特殊的保留地址：224-239.*.*.*
socket.setBroadcast(true)//广播数据包
socket.send('data',11111,'224.0.0.1')//局域网中的所有设备发送广播消息
//这种广播是会被交换机直接广播的
//接收方要加入频道：
socket.addMembership('224.0.0.1')


