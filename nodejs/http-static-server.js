const fs = require('node:fs')
const fsp = fs.promises
const http = require('node:http')
const path = require('node:path')
const mime = require('mime-types')

const PORT = 8081
const baseDir = path.resolve(process.argv[2] ?? './') //如果没有传递目标目录,那么查询文件夹是根目录(.js文件所在的根目录) resolve评出完整路径

const server = http.createServer()

server.on('request',(req,res)=>{ 
  let urlObj = new URL(`http://host${req.url}`)//这样会自动解析问号 ,http://host是随便写的这里只是为了获取相对路径
  let targetPath = path.join(baseDir , decodeURIComponent(urlObj.pathname))//目标地址+请求的资源的相对路径 .pathname可以减少一个斜杠 decodeURIComponent转译中文字符,但是由于浏览器解码方式不同(可能是GB2312)显示也就不同
  console.log(req.method,baseDir,decodeURIComponent(req.url),targetPath);//打印出请求和客户端请求的url

  //暂时都用同步的
  try {
    let stat = fs.statSync(targetPath)//文件状态 
    if (stat.isFile()) {//如果是文件
      let data = fs.readFileSync(targetPath)
      res.writeHead(200,{
        'content-type':mime.contentType(targetPath)//用mime-types包解析文件名,同时会返回charset=utf-8 解决乱码问题
      })
      res.write(data)//将所有文件内容列出来
      res.end()
    }else if (stat.isDirectory()) {//如果是文件夹
      if (!urlObj.pathname.endsWith('/')) {//如果urlObj.pathname不以'/'结尾
        res.writeHead(302,{
          location:urlObj.pathname +'/'+ urlObj.search //就给把地址和'?'后面的拼出来
        })
        res.end()
        return //结束当前的请求处理，并返回控制权到 Node.js 的事件循环，等待下一个请求的到来。客户端会根据服务器发送的 302 重定向响应，自动发起对新 URL 的请求。
      }

      const indexPath = path.join(targetPath,'index.html')//检查是不是index.html文件
      try{
        const stat = fs.statSync(indexPath)
        if (stat.isFile()) {//如果是indexPath返回内容
          const content = fs.readFileSync(indexPath)
          //res.write(content) res.end()
          res.end(content)
        }else{
          throw new Error('index.html is not a file')
        }
      }catch(e){//不存在indexPath
        //列出文件夹内容页面
        //一次性拿到名字和属性
        let entries = fs.readdirSync(targetPath,{withFileTypes:true})//名字相当于相对路径 返回的是文件和文件夹名的字符串数组     
        //let stats = names.map(it => fs.statSync(path.join(targetPath, it)))//全部拼出来以获取每一个的路径  fs.statSync(targetPath + it)这样写就是会报错
        
        entries.forEach(entry=>{
          let stat = fs.statSync(path.join(targetPath,entry.name))
          if (stat.isFile()) {
            entry.size = stat.size
          }
        })

        let page = `
        <table>
          <h1>Index of ${urlObj.pathname}</h1> 
          ${
            urlObj.pathname == '/' //不是根目录就不要../ 除根目录以外，每个目录都要显示一个回到上级目录的链接
            ? ''
            : `<tr><td></td><td><a href='../'>../</a></td></tr>`
          }
          ${
            entries.map((entry) => {//dirent能直接判断类型 h1小细节urlObj.pathname直接拿到名字          
              //let sep = entry.isDirectory() ? '/':'' 
              let sep = entry.isFile() ? '' : '/' //由于pnpm软硬链接的问题可能会不显示 '/'
              return `<tr><td>${entry.isFile() ? entry.size : ''}</td><td><a href="${entry.name}${sep}">${entry.name}${sep}</a></td></tr>`
            }).join("")//map返回的数组字符串是带有逗号的
          }
          </table> 
          <p>
            <address>Node.js v20.13.1/ http-server server running @ 127.0.0.1:${/*address斜体*/PORT}</address>        
          </p>
         
        `
        res.writeHead(200,{
          'content-type':'text/html; charset=utf8'
        })
        res.write(page)//写入界面
        res.end()
      }
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