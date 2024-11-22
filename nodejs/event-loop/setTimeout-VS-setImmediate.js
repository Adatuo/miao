
/**setTimeout,setImmediate都有可能先执行  
  setTimeout(() => {
  console.log(1); 
});//没有写时间的话传说是1ms
setImmediate(()=>{
  console.log(2);
})*/


/**一定是immediate先timeout后
const fs = require('node:fs');
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  });
  setImmediate(() => {
    console.log('immediate');
  });
});
 */

/**process.nextTick是调用栈清空后执行
  setTimeout(() => {
  console.log(1);
  process.nextTick(()=>{
    console.log('tick1');
  })
  process.nextTick(()=>{
    console.log('tick2');
    process.nextTick(()=>{
      console.log('tick2.1');
    })
  })
  process.nextTick(()=>{
    console.log('tick3');
  })
})
setTimeout(() => {
  console.log(2);
});
 */

/** 永远不会执行setImmediate,process.nextTick会一直有
setImmediate(()=>{
  console.log(1);
})
process.nextTick(function f(){
  process.nextTick(f)
})*/

/**[process.nextTick]在几秒中能运行几次
let count = 0
let start = Date.now()
process.nextTick(function f(){
  count++
  if (Date.now()-start <10000) {
    process.nextTick(f)
  }else{
    console.log(count);    
  } 
})
 */
/**process.nextTick与Promise.resolve()都有回调队列,process先Promise后 
Promise.resolve().then(()=>{
  console.log(1); 
})
process.nextTick(()=>{
  console.log(2);
})*/

/**时间循环,队列面试
 * 
 */
console.log(6)          //(6 4 5 2 3 7) 7是在2完成后才加入队列的,3的加入要早于7

new Promise(resolve => {
  console.log(4)
  new Promise(resolve => {
    resolve()//这是内层resolve的
  }).then(()=>console.log(2)).then(()=>console.log(7))
  resolve()//这是外层resolve的
}).then(()=>console.log(3))

console.log(5)

  async function foo() {
    console.log(4);
    await baz();
    console.log(6);
  }
  async function baz() {
    console.log(1);
  }
  async function bar() {
    console.log(2);
    await Promise.resolve(5);
    console.log(3);
  }
foo()
bar()


