//打包 webpack

let fileCache=
{
  "a.js":"//abc 在网络中,串行还是很慢\r\n//fxy\r\nlet b = require('b.js')\r\nlet f = require('f.js')\r\n\r\nconsole.log('a');\r\n",
  "b.js":"let c = require('c.js')",
  "f.js":"let x = require('x.js')\r\nlet y = require('y.js')",
  "c.js":"module.exports = 'CCCC'",
  "x.js":"module.exports = 'x'",
  "y.js":"module.exports = 'y'"
}//比起加载多个小文件,直接加载一个大文件速度一定是更快的 xhr.responseText返回的是文本字符串



  //模块名到模块对象的映射
  let moduleCache = Object.create(null)

  function require(filename) {//如果filename不存在就无法做到同步,所以要用use()
    if (filename in moduleCache) {
      return moduleCache[filename].exports
    }
    let code = fileCache[filename]
    let modFunc = new Function('exports,module',code)
    let module = {
      id:filename,
      exports:{}
    }
    modFunc(module.exports,module)
    moduleCache[filename] = module
    return module.exports
  }
  require('a.js')
