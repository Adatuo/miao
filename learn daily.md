# learn daily for JS

2024-7-3

函数运行的逻辑

知道了公式的求根

数组

条件里无穷大，infinity

以及，23点散步回来后似乎只能干最熟悉的事情

2024-7-5
副作用函数
纯函数，传入相同的参数总是返回相同的值
最好给函数起一个清晰的名字，后面可以重复利用

2024-7-8
2 in [1,1,1]  true 数组判断下标
21:26? 都是指向同一个元素，无论通过哪一个指向修改值，数组都会变
21:54? 修改元素实际上就是在修改指向，之前那个指向在不在没有意义
typeof null 返回object



2024-7-10
对象是值的聚名集合
2024.7.9  对象的属性 

1 in [1] false
---
push

//排序  mergeSortedArray
  nums1.sort(
    function(a,b){
      return a - b
      }
    )
//删除0,从前面删除会改变顺序，从后面开始删除  mergeSortedArray
  for (let p = nums1.length - 1; p >= 0 ; p--) {
    if (nums1[p] == 0) {
      nums1.splice(p,1)
 
    }
  }    

  2024-7-12
  NaN == NaN fals
  21:07 21:12 21:53
  包装对象：一个真实的对象包装了一个原始类型
  原生对象/原始对象：直接书写的对象：“abc”

    2024-7-13

//手搓concat,链接两组数，返回数组
  function concat(){
  //返回的新数组
  var result = []
  //arguments,不知道输入多少个就用这个
    for (let i = 0; i < arguments.length; i++) {
      //获得函数里面的每一个值
      var arg = arguments[i];
      //如果是数组那就遍历数字然后相加
      if (Array.array(arg)) {
        for (let j = 0; j < arg.length; j++) {
          result.push(arg[p])  
        }
      }else{
        result.push(arg)
      }
    }
    return result
}

//类数组对象 array-like object
obj = {
  length: 3,
  0: 2342,
  1: "oiwefj",
  2: false,
}


//深对比isEqual(具体内容和结构以及地址)，浅对比a===b（存储地址）

//
function foo(a, b, ...args /* 剩余参数, rest parameter, 它只能出现一个,只能出现在最后 */){
  console.log(arguments)
  console.log(a, b, args)  
}

foo(1,2,3,4,5,6,7) 返回数字和类数组对象
      1 2 [
          3,
          4,
          5,
          6,
          7
      ]

//数组排序
数组每个位置有大小，内存只要知道下标每个位置读取的时间是一样的

21：22，数组空间排序原理，内存就是这样工作的
连续空间存储。不够产生一个新空间，然后把数据拿过来。
a[23123123] = 1 不会建立这么大的空间会变为对象

//算法复杂度:
算法复杂度是分析一个算法/一段程序运行所需的时间和空间(内存)的

//时间复杂度
如何衡量程序运行的时间?
将程序运行时扫执行的所有操作的时间加起来，就是程序的总时间
实际是计算机在执行不同的原子操作的时候（如赋值、加法、乘法等）时，时间是不一样的，但是每种原子操作月-所以只要是固定时间的原子操作，我们不去纠结具体是多少时间，都统一算做一个时间单位。
但是字符串的拼接算作一个
所以
var a =· 1    1
var b =·2·*3·+a*·a -·5    5
"fowiejfowiejf”+"oifiejfoiwejf"   1

一个算法所花时间除了程序本身，往往还取决于程序的输入。所以程序的时间复杂度往往是与输入有关的

21：53 时间复杂度的计算

有函数调用时，要看函数内部是怎么写的，包括系统自带函数

如果一个程序的运算时间最终计算出为100*n*n + 5*n + 1050 =O(*n)
如果存在一个常数c以及一个ne，让c*T(n)在n0之后始终大于F(n)则可以说·F(n) =O(T(n))


粗略估算忽略无关紧要的常数，在函数图形上，O(斜线)一定会在（公式）曲线上面


//空间复杂度
空间复杂度是程序在运算过程中占用空间最多的时刻(最多同时占用的空间总数)(空间与时间不一样，时间一定是累计的，但空闻用过还可以清空后重复使用·)即程序能够挪腾得开的情况下所需要的最小空间。

空间是不累计的，用过，清除再使用是不重复计算的。每个变量占用一个空间单位
数组占用的空间单位数量为数组的长度对象占用的空间是对象中属性的个教
