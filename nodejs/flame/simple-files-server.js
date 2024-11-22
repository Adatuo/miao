var http = require("http"), fs = require("fs")
var urlMod = require("url")
var mime = require('mime-types')
var path = require('node:path')
var port = 8001
var methods = Object.create(null)//会创建如下对象

methods.GET = function (targetPath, respond) {//访问首页也属于get请求

  fs.stat(targetPath, function (error, stats) {
    if (error && error.code == "ENOENT")
      respond(404, "File not found")
    else if (error)
      respond(500, error.toString())
    else if (stats.isDirectory())
      fs.readdir(targetPath, function (error, files) {
        if (error)
          respond(500, error.toString())
        
        else
          respond(200, files.join("\n"))//文件目录
        
      })

    else
      respond(200, fs.createReadStream(targetPath),mime.contentType(path.resolve(targetPath)))//因为mime无法识别反斜杠所以用path自动解析一遍
  })
}

methods.DELETE = function (path, respond) {
  fs.stat(path, function (error, stats) {
    if (error && error.code == "ENOENT")
      respond(204)
    else if (error)
      respond(500, error.toString())
    else if (stats.isDirectory())//删除文件夹
      fs.rmdir(path, respondErrorOrNothing(respond))
    /**直接这样写也行
     fs.rmdir(path,err => {
      if (err) {
        respond(500,error.toString())
      }else{
        respond(204)
      }
    })
     */
    else
      fs.unlink(path, respondErrorOrNothing(respond))//删除文件
  });
};

methods.PUT = function (path, respond, request) {
  var outStream = fs.createWriteStream(path)
  outStream.on("error", function (error) {
    respond(500, error.toString())
  })
  outStream.on("finish", function () {
    respond(204)
  })
  request.pipe(outStream)//从请求移到文件
}


function respondErrorOrNothing(respond) {
  return function (error) {
    if (error)
      respond(500, error.toString());
    else
      respond(204);//为什么删除多次也要返回? 幂等请求 第一次请求应该与第二次一样
  };
}

let server = http.createServer()
server.on('request', (request, response) => {//客户端的请求和服务器的响应,这两个参数是在每次接收到请求时自动传递给回调函数的
  //respond放在里面的话可以直接读到response变量而且可以方便的传递请求,method也能读到respond
  function respond(code, body, type) {//(响应状态码,响应体,响应类型)
    if (!type) {
      type = "text/plain; charset=utf-8"//没有传响应类型的话 
      response.writeHead(code, {"Content-Type": type})
    }
    if (body && body.pipe) {//如果响应体存在(有些头是可以没有响应体的) 或者是个可读流
      body.pipe(response)//串到可写流response请求上
    }else {
      //如果都不是,可能是一个字符串或者buffer     
      response.end(body)//直接写到响应上去
    }
  }
  if (request.method in methods) {
    methods[request.method](urlToPath(request.url), respond, request)//(路径,响应,请求对象)
  }
  else {
    respond(405, " Method " + request.method + " not allowed .")
  }
})

server.listen(port, () => {
  console.log('server listening on port', port)
})


function urlToPath(url) {
  var pathname = urlMod.parse(url).pathname//
  return "." + decodeURIComponent(pathname)//解码 返回相对路径
}
