7.17
高阶函数
function forEach(array,doSomething) {
  for (let i = 0; i < array.length; i++) {
    doSomething(array[i],i,array)
  }
};
forEach([1,2,3,4],function(it,idx){
  console.log(it,idx);
})

箭头函数
[1,2,3,4].forEach(it =>{
  console.log(it)
})

function add(a,b) {
  return a + b
}

function noisy(f) {
  return function (...args) {//搜集参数，都会返回数组
    console.log("call with",args);
    var val = f(...args)//返回参数，都会返回数组
    console.log("call with",args,"- got",val);3,5 ,8
    return  val;
  }
}


let noisyAdd = noisy(add)
noisyAdd(3,5)
