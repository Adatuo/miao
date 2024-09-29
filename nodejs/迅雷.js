function xunlei(method,url,headers,body = '') {
  let xhr = new XMLHttpRequest()
  xhr.open(method,url,false)//false同步
  for (const header in headers) {//添加请求头
    let headerVlue = headers[header]
    xhr.setRequestHeader(heade,headerVlue)//一般只是首字母大写
  }
  xhr.send(body)//发送请求体
  return xhr.responseText//返回响应体  
}

function 异步xunlei(method,url,body = '',callback) {
  let xhr = new XMLHttpRequest()
  xhr.open(method,url)
  xhr.onload=()=>{//请求完之后
    callback(xhr.responseText)//传递一个回调函数来处理 xhr.responseXML
  }
  xhr.send(body)
  // xhr.onload=function(){//请求完之后
  //   callback(xhr.responseText)//传递一个回调函数来处理 xhr.responseXML
  // }
  // xhr.addEventListener('load', () => {
  //   callback(xhr.responseText)
  // })
}

//书上的测试
function xunleiTest() {
  let xhr = new XMLHttpRequest()
  xhr.open("GET","eloquentjavascript.net/author",true)
  xhr.setRequestHeader("Accept","text/plain")
  xhr.send()
  xhr.onload=()=>{//请求完之后
    xhr.responseText
  }
}