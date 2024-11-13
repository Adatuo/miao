const fs = require('node:fs')
const http = require('node:http')
const path = require('node:path')
const mime = require('mime-types')

const PORT = 8082
const baseDir = path.resolve(process[2] ?? './') //直接拿绝对路径

const server = http.createServer()

server.on('request',(req,res)=>{
  const urlObj = new URL(`http://host${req.url}`)//url可以自动解析问号路径
  const targetPath = path.join(baseDir,decodeURIComponent(urlObj.pathname))
  console.log(req.metod,targetPath,baseDir);  
  
  try {
    
  } catch (e) {
    res.writeHead(404)
    res.writeHead('File Not Found')
    res.end()
  }
})

server.listen(PORT,()=>{
  console.log('server listening on port',PORT);
})