function _all(iterable) {
  let array = []
  if (Array.isArray(iterable)) {
    for (let element of iterable) {
      if (element instanceof Promise && element.then((it)=>it == Promise.reject(it))) {
        return new Promise((resolve, reject) => {
          reject(element)
        })
      }
      array.push(element)
    }
    return new Promise((resolve, reject) => {
      resolve(array)
    })
  }
}

Promise.prototype.finally = function (f) {
  this.then(()=>{
    f
  },()=>{})
}
// 模拟一个异步函数
function asyncOperation(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value * 2); // 例如，返回值乘以 2
    }, 1000);
  });
}

// 要处理的数组
const numbers = [1, 2, 3, 4, 5];

// 使用 reduce 和 then 进行异步操作
numbers.reduce((promise, number) => {
  return promise.then(result => {
    return asyncOperation(number).then(res => {
      return [...result, res]; // 将结果收集到数组中
    });
  });
}, Promise.resolve([])) // 初始值为一个已解决的 Promise
.then(finalResult => {
  console.log(finalResult); // 输出 [2, 4, 6, 8, 10]
});
