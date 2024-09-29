9-19
21:52 get异步下载器 成功|失败 封装
21:55 new promise(f) 如何表现异步操作
22:02 比较好的方式,用回调表达成功或者失败 也可以把失败放在前面,保障处理错误
22:04 resolve  他们都是回调函数
22:19 promise的then()
22:21 事件发生之后绑定函数是不会触发的,只能与事件同时发生
22:26 p2的结果由f1或f2的返回值确定

9-20
20:16 如果f1或f2运行时抛错了，则p2就失败，原因为抛出的错误
20:21 如果f1或者f2返回了正常的值（number，array，string，对象），则p2成功
20:22 promise如果失败，并且没有一个处理失败函数，则
它的报错会出现在控制台
20:31 如果f1或f2返回了一个promise对象，p2最终会取这个promise的状态为自己的状态
20:40 getJSON get(url)也包了一个promise
21:05 获取多个json
21:10 catch 相当于只传递第二个参数 p.then(null,f2) p.catch(f2)
21:20 异步递归
21:21 为什么需要这样设计catch
21:28 then()是按照顺序调用的但是它里面的函数可能会等待很久才调用
21:58 promiseA 的各项标准和具体需求
22:05 调用栈只有平台代码
22:14 promise2 == promise1 这是有可能的 promise2 == promise1.then(什么都不传的时候)
22:16 promise resolution procedure  
22:21 ResolvePromise的实现  instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
22:26 属性也是有可能抛错的get set
22:28 为什么要使用call来指定this  防呆

9-22
20:09 串行获取章节的伪代码
20:13 p.then().then().then().then() 
  与是不一样的
      p.then()
      p.then()
      p.then()
      p.then()
20:19 串行获取章节的伪代码for of 但是要用let
20:20 行获取章节的伪代码reduce 写法 还是看不太懂
20:27 并行promise.all
20:32 请求较小的文件的时候串行/并行哪一个更快,在意的不是带宽而是延迟.
20:37 虽然服务器上确实有可能,因为同时处理多个请求变慢(不过也就几毫秒而已,网络中是很慢的),但是与客户端无关(面试)
20:53 并行请求串行展示写法
20:53 forof,reduce写法
21:05 并行请求串行展示原始写法理论解析
21:14 We have a problem with promises
21:16 1最好在外面.then 而不是在里面
21:20 2 promise是在reslove之后才完成的
21:23 3 cath忘记
21:28 consle.log 现在不需要关心this了
21：29  deffered暂时不管
21:29  5 使用副作用
21:32 就希望1s后失败，不能直接用setTimeout要包在new Promise里面
21:47 一般会封装在一个函数里面（1s后失败）
21：49 reslove reject
21:53 then(reslove).catch(reject) 与 then(reslove，reject)不一样
21:57 promise创建完成里面的异步操作就会开始，但是串行是一个完成后才运行下一个
21：58  promise工厂
22：03  需要两个promise结果 放在外面或者在里面.then
22:07 pizzle
9-23
20:58 promise.finally(f)是不一样的,无promise无论成功与失败f都会执行
f不接参数finally返回一个新的promise2
如果f返回promise3，则promise2会等待promise,
但不会取它的结果,而是取promise结果.即一个promise的结果会穿透它的finally调用到finally返回的promise对象上
21:13 Promise.prototype.finally手搓
21:18 polyfill  shim
