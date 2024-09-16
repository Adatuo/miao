// tcp模块，不过名字叫net
var net = require('net')

var server = net.createServer()
const port = 8005

server.listen(port,() => {
  console.log('listening on port', port)
})


var messages = []

// TODO: 把所有的请求都限制特定的路径

server.on('connection', (conn) => {

  conn.on('data', data => {
    var request = data.toString()
    var [header, body] = request.split('\r\n\r\n')
    var [firstLine, ...headers] = header.split('\r\n')
    var [method, path] = firstLine.split(' ')

    console.log(method, path)
    console.log('请求体：', body)

    if (method == 'POST') {
      var message = parseQueryString(body)
      messages.push(message)
    }

    conn.write('HTTP/1.1 200 OK\r\n')
    conn.write('Content-Type: text/html\r\n')
    conn.write('\r\n')
    conn.write(`
      <form method="POST" action ="example/message.html">
        <p> Name: <input type="text" name="name"></p>
        <p> Message:<br><textarea name="message"></textarea></p>
        <p><button type="submit">Send </button></p>
      </form>
    `)
    for (var msg of messages) {
      conn.write(`
        <fieldset>
          <legend>${msg.name}</legend>
          ${msg.message}
        </fieldset>
      `)
    }
    conn.end()
  })

})


// 进： name=maio&message=yes%3F&a=1&a=2
// 出： {name: 'miao', message: 'yes?', a: ['1','2']}
function parseQueryString(qs) {
  return qs.split('&').reduce((obj,pair) => {
    var [name, val] = pair.split('=')
    obj[name] = decodeURIComponent(val)
    return obj
  }, {})
}