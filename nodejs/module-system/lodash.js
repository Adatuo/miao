/*//如果直接在控制台运行下面代码会报错 Illegal return statement
function chunk() {}
function compact() {}
//以对象形式返回函数
return {
  chunk,compact
}*/

// function f(exports) { 不用声明exports,因为在require里的作用域new function已创建参数,然后会传递变量进去
  let pi = require('pi.js')//引用另一个模块

  let a = 1
  function chunk() {
    //console.log(pi.pi);//导出  
    console.log(pi)//exports.default
  }
  exports.chunk = chunk //既然要传递一个对象回去,那就直接声明一个exports对象
  function compact() {}
  exports.compact = compact
// }


