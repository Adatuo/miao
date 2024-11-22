/**一些待添加的功能
 * 
 * 文件夹路径末尾没有斜杠，需要跳转到带斜杠的地址
 * url中带有querystring，qs是不能作为文件名的，需要去掉
 * 如果url对应文件夹，这应该列出文件夹内容
 *   列出内容时文件夹在前，文件在后
 * 列出内容时，应该区分文件与文件夹，最好能显示文件大小
 * 除根目录以外，每个目录都要显示一个回到上级目录的链接
 * 文件夹中如果有index.html文件，则返回这个文件，而不是列出文件夹内容
 *   但如果index.html不是文件而是文件夹或其它奇怪的文件，则照常显示文件夹的内容
 * 文件名中有中文时要正确处理
 * 为每个文件的响应给出合适的content-type响应头以表示文件的媒体类型
 * 确保只向客户端返回baseDir文件夹内的内容，而不存在返回系统中其它文件的可能性
 *   （这是一个重要的安全问题，如果处理不好，有可能泄露系统中的重要文件）
 */
const fs = require('node:fs')
const http = require('node:http')
const path = require('node:path')
const mime = require('mime-types')

const PORT = 8083
const baseDir = path.resolve(process[2] ?? './') //直接拿绝对路径

const server = http.createServer()
//打开文件,文件夹夹显示,后面加上斜杠
server.on('request',(req,res)=>{
  const urlObj = new URL(`http://host${req.url}`)//url可以自动解析问号路径
  const targetPath = path.join(baseDir,decodeURIComponent(urlObj.pathname))//文件路径
  console.log(req.method,targetPath,baseDir);  
  
  try {
    const stat = fs.statSync(targetPath)
    if (stat.isFile()) {//如果是文件就列出文件内容
      const data = fs.readFileSync(targetPath)
      res.writeHead(200)
      res.write(data)
      res.end()
    }else if (stat.isDirectory()) {//如果是文件夹就展示
      if (!urlObj.pathname.endsWith('/')) {
        res.writeHead(302,{
          location: path.join(urlObj.pathname,'/')//似乎因为使用了new URL导致没有做问号的解析也可以运行
        })
        res.end()
        return //结束当前的请求处理,必须
      }
      const entries = fs.readdirSync(targetPath,{withFileTypes: true})//查看文件夹及其路径 返回的是文件和文件夹名的字符串数组
      entries.forEach(entry => {
        let stat = fs.statSync(path.join(targetPath,entry.name))//检测文件夹下路径的状态
        if (stat.isFile()) {
          entry.size=stat.size
        }
      });
      //在页面中展示
      const page = `
        <h1>Index of ${urlObj.pathname/*readdirSync true 没有直接拿到路径的方法*/}</h1>
        ${
          entries.map((entry,idx)=>{
            const sep = entry.isFile() ? '':'/'
            return `<div><span>${entry.isFile() ? entry.size : ''}</span><a href='${entry.name}${sep}'>${entry.name}${sep}</a></div>`
          }).join("")
        }
      `
      res.writeHead(200,{//解决乱码
        'content-type':'text/html;charset=utf-8'
      })
      res.write(page)
      res.end()
    }
  } catch (e) {
    res.writeHead(404)
    res.write('File Not Found')
    res.end()
  }
})

server.listen(PORT,()=>{
  console.log('server listening on port',PORT);
})