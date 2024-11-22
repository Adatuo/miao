const { log } = require('node:console')
const {Readable,Writable} = require('node:stream')
const fs = require('node:fs')

function creatNaturalNumberStream(stop = 100) {//创建一个可读流
  let rs = new Readable({
    highWaterMark:32,//设置缓冲区高水位 字节
    read(size){//调用将每次读取 可以直接设置每次读多少个
      console.log('reading data...');
      setTimeout(()=>{
        if (i == stop) {
        this.push(null)//push null表示这个流结束
      }else{
        this.push(String(i++))//push会将数据放到缓冲区 push 方法期望接受的是字符串、Buffer、TypedArray 或 DataView。不能直接i++
      }
      },500)
    }
  }) 
  return rs
}

function creatFileWritableStream(filename) {//同步写入
  let fd = fs.openSync(filename,'w')//'a'可添加提示
  let position = 0 //从哪个(号)位置开始写入
  return new Writable({
    write(chunk,encoding,callback){//调用callback说明chunk被处理完成
      fs.write(fd,chunk,0,chunk.byteLength,position,()=>{ //fs.write(fd, buffer, offset[, length[, position]], callback)
        position += chunk.byteLength //每次写入就移动写入位置
        callback()
      })     
    },
    destroy(err,cb){
      fs.closeSync()//关闭流
      cb()
    }
  })
}

let ws = creatFileWritableStream('./bbb.txt')

ws.write('tsetwrite')
ws.end()

// let rs = creatNaturalNumberStream()

// rs.read()
// rs.on('data',(data)=>{
//   console.log(data.toString()); 
// })

