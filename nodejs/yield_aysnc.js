//async,await语法(与co功能一样(2017)),异步函数await关键字
//foo().then(val=>{console.log(val)},reason=>{console.log(reason)})
async function bar() {//async function都会返回promise,虽然很简洁但是不写promise的话就写不出setTimeout
  return 2
}
let x = async x => {} //可以用箭头,但是一般不这样(不好看)
async function foo() {//生成器函数+promise
  let a = 1
  
  console.log(a);
  
  let b = await getValue(5,2000)

  console.log(b);

  let c = await bar()//Promise.reject(5)//getValue(5,2000)
  console.log(c); 

  return getValue(8,1000)  
}
/*异步生成器函数
  异步生成器函数的next总是返回promise,返回的promise将会resolve出{value,done}这样的对象
  因为异步生成器并不一定能立刻运行到下一跳yield语句
  因为可能在遇到下一条yield语句之前遇到await语句,那么就必须等待这个await恢复
  forawait语句可以用遍历/迭代异步生成器生成的值,这个语句自然也会运行与异步生成器函数一样久的时间
  同时它只能出现在async函数里
  不能使用迭代器[...baz()],但是可以使用for await (const element of asyncGenderatorFunction()) {}来迭代异步生成器
*/

async function * baz() {
  await delay(1000)//由浏览器控制时间
  yield 2//自己next()控制
  await delay(1000)
  yield 3
  await delay(1000)
  yield 4
  await delay(1000)//true前等待
  return 5
}
gen = baz()//需要放在全局不然就无法存储next的状态
async function zzz() {
  for await (let x of baz()) {//不会迭代return 5
    console.log(x);
  }
}


function get(url) {
  return new Promise(resolve => {
    let xhr = XMLHttpRequest
    xhr.open('get',url)
    xhr.onload = () => {
      resolve(xhr.responseText)
    }
    xhr.send()
  }, reject)
}

function delay(timeout) {
  return new Promise(resolve => {//应该是只有resolve才对
    // setTimeout(() => { //回调函数
    //   resolve()
    // }, timeout);
    setTimeout(resolve,timeout)
  })
}

function getValue(value,timeout) {
  return new Promise(resolve => {//resolve是一个占位符名字可以随意替换
    setTimeout(()=>{
      resolve(value)
    },timeout)
  })
}

function * foo() {//生成器函数+promise
  let a = 5
  console.log(a);
  
  let b = yield getValue(6,2000)

  console.log(b);
  
  // try {
  //   let c = yield Promise.reject(7)
  //   console.log(c);    
  // } catch (e) {
  //    console.error(e);//打印错误
  // }
  
  let c = yield Promise.reject(7)
  console.log(c); 

  let d = yield getValue(8,1000)

  console.log(d);

  return yield getValue(9,1000)  
}

//协程coroutine完整版本,两个co一起使用会按照各自的时间同时运行,有一种蒙太奇的感觉
function co(generatorFunction) {//无val版本,成功和失败,try
  return new Promise((resolve, reject) => {
    let generator = generatorFunction()
    let generated = generator.next() //需要全局声明,声明在try里边就变成局部了
    try {//generator.next()如果直接throw错误是从next里面跑出来的   
      generated 
      step()
    } catch (error) {
      reject(error)
    }
    
    function step() {//写在里面,也只需要写在里面方便调用
      if (generated.done === false) {//yield没有结束
        Promise.resolve(generated.value).then(val => {//连续的then调用  不是Promise转换成Promise
          try {//generator.next(val)也是有可能抛错的
            generated = generator.next(val)//传递val
            step()//最后一次return会返回value:undefined done:true 这样的话还是会报错
          } catch (error) {
            reject(error)
          }
        },reason => {
          try {
            generated = generator.throw(reason)//抛出错误
            step()//然后继续后面的yield 
          } catch (error) {
            reject(error)
          }
        })  
      }else{
        resolve(generated.value)
      } 
    }
  })
}

//版本3
function run(generatorFunction) {//无val版本,成功和失败
  return new Promise((resolve, reject) => {
    let generator = generatorFunction()
    
    let generated = generator.next()//第一次next,不需要传递val

    step()
    
    function step() {//写在里面,也只需要写在里面方便调用
      if (generated.done === false) {//yield没有结束
        Promise.resolve(generated.value).then(val => {//连续的then调用  不是Promise转换成Promise
          generated = generator.next(val)//传递val
          step()//最后一次return会返回value:undefined done:true 这样的话还是会报错
        },reason => {
          generated = generator.throw(reason)//抛出错误
          step()//然后继续后面的yield
        })  
      }else{
        resolve(generated.value)
      } 
    }
  })
}

//版本2
function * foo() {//生成器函数+promise
  let a = 5
  console.log(a);
  
  let b = yield getValue(6,2000)

  console.log(b);
  
  let c = yield getValue(7,1000)

  console.log(c);

  let d = yield getValue(8,1000)

  console.log(d);

  return yield getValue(9,1000)  
}

function run(generatorFunction) {//有val版本,只考虑成功
  return new Promise((resolve, reject) => {//最后应该返回promise并resolve
    let generator = generatorFunction()
    let generated //不用generator.next(val),step()会执行

    step()//没有传递val会返回undefined,但是第一次next过后就会传递值

    function step(val) {//写在里面,也只需要写在里面方便调用
      generated = generator.next(val)
      if (generated.done == false) {//yield没有结束
        Promise.resolve(generated.value).then(val => {//连续的then调用  不是Promise转换成Promise
          step(val)//最后一次return会返回value:undefined done:true 这样的话还是会报错
        })  
      }else{//true yield结束
        resolve(generated.value)
      } 
    }
  })
}
function run(generatorFunction) {//无val版本,只考虑成功
  return new Promise((resolve, reject) => {
    let generator = generatorFunction()
    let generated = generator.next()//第一次next,不需要传递val

    step()
    
    function step() {//写在里面,也只需要写在里面方便调用
      if (generated.done === false) {//yield没有结束
        Promise.resolve(generated.value).then(val => {//连续的then调用  不是Promise转换成Promise
          generated = generator.next(val)//传递val
          step()//最后一次return会返回value:undefined done:true 这样的话还是会报错
        })  
      }else{
        resolve(generated.value)
      } 
    }
  })
}

//原始版本
function * foo() {//生成器函数+promise
  let a = 1
  console.log(a);
  
  let b = yield getValue(5,2000)

  console.log(b);
  
  let c = yield getValue(7,3000)

  console.log(c);

  return c + 5  
}
gen = foo()//需要放在全局不然就无法存储next的状态
gened = gen.next()//只是将gen.next()的返回值/状态报错给genned,并没有推进
gened.value.then(val => {
  genned = gen.next(val)//推进,必须有genned来接住promise
})
//可以运行现在的foo,只有两个then是因为第一次会直接传递
function run(generatorFunction) {//传入回调函数
  let generator = generatorFunction()
  let generated = generator.next()
  generated.value.then(val => {
    generated = generator.next(val)//推进
      generated.value.then(val => {
        generated = generator.next(val)//推进
      })
  })
}

/**生成器函数function * foo()
 * yield会暂停函数的执行,并返回一个值,同时等待next()继续执行
 * 左边执行,右边有yield暂停
 */
function * foo() {//生成器函数
  let a = 1
  console.log(a);
  
  let b = yield a * 2

  console.log(b);
  
  let c = yield b * 3

  console.log(c);

  return c + 5
  
}
gen = foo()
gen.return(value)//直接done true 并close 返回一个值
gen.throw(new Error("Error"))//直接抛出错误(yield右边) 并close 