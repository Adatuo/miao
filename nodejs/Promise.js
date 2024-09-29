
function _all(promises) {
  return new Promise((resolve, reject) => {
    let result = []
    let len = promises.length //promises长度
    let count = 0 //记录promises里resolve的数量
    if (promises.length == 0) {
      resolve(result)
    }else{//for也可以写在外面 
      for (let i = 0; i < promises.length; i++) {
        let promise = promises[i]//有可能是不是promise,要给它包一层Promise.resolve
        Promise.resolve(promise).then(val => {//Promise包一层
          result[i] = val //这里不能是result.push[],因为是异步不知道哪一个promise先完成,但是又要知道promise是第几个就用for
          count++ 
          if (count == len) {
            //new Promise的回调函数用来控制成功状态
            resolve(result)//这里的不是Promise.resolve()方法,而是new Promise的回调函数(可以在任意位置被调用)用来控制成功状态
          }
        },reason => {//promise失败,那么失败就是它的原因,然后返回reject
            //new Promise的回调函数用来控制失败状态
            reject(reason)//resolve,reject特性是new Promise的内部方法只能调用一次,完成后直接确定"状态并返回外部"
        })
      }
    }
  })
}

//静态函数
Promise.resolve = function resolve(val) {//Promise.resolve(Promise.reject('2'))可以这样写
  return new Promise((resolve) => {
    resolve(val) 
  })
}

/*
//resolve,reject特性是new Promise的内部方法只能调用一次,完成后直接确定"状态并返回外部"
*/
function _race(promises) {//不用关心[],会是pending状态
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      Promise.resolve(promise).then(resolve, reject)
    }
  })
}

function _withResolvers() {
  let resolve,reject
  //new Promise((resolve, reject) => {})
  //避免覆盖状态修改名字 (re, rj) => {}回调函数会立即调用,resolve, reject
  //resolve, reject只是函数作为参数传递,以便在回调函数的任何时刻使用
  let promise = new Promise((re, rj) => {//不是promise
    resolve = re
    reject = rj
  })
  return{
    promise,
    resolve,
    reject
  }
}

function _allSettled(promises) {//不需要结构reject,因为只是记载所有promise完成
  /*解构赋值
  let obj = withResolvers();
  let promise = obj.promise;
  let resolve = obj.resolve;
  let reject = obj.reject;*/
  let {promise,resolve} = Promise.withResolvers()//withResolvers返回的是Object //let {promise是全局的
  let result = []//总要有个数组放东西
  let len = promises.length
  let count = 0 //记录是否promises执行完成

  if (len == 0) {
    resolve(result)
  }else{
    for (let i = 0; i < len; i++) {
      let promise = promises[i]//这里是局部的 let
      Promise.resolve(promise).then(vaule => {
        result[i] = {
          status:'fulfilled',
          vaule //相当于vaule:vaule
        }
        count++
        if (count == len) {
          resolve(result)//返回所有fulfilled
        }
      },reason => {
        result[i] = {
          status:'rejected',
          reason //相当于reason:reason
        }
        count++
        if (count == len) {
          resolve(result)//返回所有rejected
        }
      })
    }
  }
  return promise //所有的 resolve(result) 都是调用 let { promise, resolve } = Promise.withResolvers(); 中提取的 resolve 方法。
}

function _any(promises) {//一个成功就立即返回,错误的全部完成后返回
  return new Promise((resolve, reject) => {
    let errors = []//存储错误的
    let len = promises.length
    let count = 0
    if (len == 0) {
      reject(new AggregateError(errors))//空就直接返回
    }else{
      for (let i = 0; i < len; i++) {
      let promise = promises[i]//取出每一个promise
      Promise.resolve(promise).then(value => {
        resolve(value)//成功立即返回
      },reason => {
        errors[i] = reason //失败就存进去
        count++ //计算是否到最后一个
        if (count == len) {
          // reject(reason)
          reject(new AggregateError(errors))//需要抛出 AgggregateError错误
        }
      })
    }
  }
  })
}

Promise.try = function(f) {
  return new Promise((resolve, reject) => {
    try {
      let result = f()
      resolve(result)
    } catch (e) {
      reject(e)
    }
  })
}

//finally测试
function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
Promise.resolve(2).then(()=> 3).finally(()=>{
  return delay(3000)
  }).then((v)=>
  console.log(v)
  )

Promise.prototype.catch = function(f) {
  return this.then(null,f)
}  
/*
promise.finally(f) :
promise无论成功与失败f都会执行
finally只接一个参数
f不接参数
finally返回一个新的promise2
如果f返回promise3，则promise2会等待promise，
但不会取它的结果，而是取promise的结果
即一个promise的结果会穿透它的finally调用到
finally返回的promise对象上
*/
Promise.prototype.finally = function(f) {//f不接参数
  //finally都是会返回一个new Promise
  //无论成功与失败f都会执行
  return this.then((value)=>{//finally只接一个参数  value是this的
    return Promise.resolve(f()).then(()=>value)//穿透
  },
  (reason)=>{//finally只接一个参数
    return Promise.resolve(f()).then(()=>{throw reason})//穿透抛错 reason是this的
  })
}
