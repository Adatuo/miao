this 的几种情况
object.getPrototypeof({})对象原型取出
数据方法封装到一块

new声明

_proto_ 与 prototype的不同
对象再。对象。新增对象
---
# js中对象的两种用法：
映射,做为映射时,对象的属性数量往往会发生变化
对象可以用来表示各种复杂的事物:复杂的事物有多种属性,用对象的多个属性来表示(此时属性的数量一般不发生变化)

为什么要叫对象?
实际上原词叫object，翻译为对象
到底什么是对象呢？object的意思更通俗的说叫“东西”
所以面向对象编程可以说成面向东西编程
因为任何一个东西（从信息层面看）都是由若干属性就可以描述清楚的
做为对比，在面向对象编程出现之前
一个变量只能指向一个“原子的”值，即不可拆分，如数值，字符串，布尔
但是一个“东西”，不管是现实事物，还是思维事物（如数学概念等）
都是由多个部分组成的
即想要描述这个东西，就需要多个“原子的”值一起才能描述出来
所以面向对象其实就是把某一个物事对应到编程中的一个单一值，即由一个对象来表示
所以数组的出现是远早于对象的
后来大家才慢慢发现了数组跟对象，对象跟映射之间的相似性
才有语言（尤其是js）把对象跟映射统一到一个语言概念里。
在很多语言里，对象是对象，映射是映射，对象是不能修改属性数量的，映射是可以的
所以面向对象就是用编程语言里的一值（变量）表示一个复杂的事物，与这个事物有关的一切都在这个对象里面存储
  与这些数据有关的操作（函数，即方法）也被一并放进了这个对象


三种Interface：
GUI  Graphics User Interface 
CLI  Command Line Interface
API  Application Programming Interface 









var obj = {
  x: 2,
  foo: function () {
    this.x++    
  }
}

var obj2 = {
  x: 8,
  foo: obj.foo //this是位于obj2里面的
}

obj.foo() // 当一个函数被当成一个对象的方法调用时，它里面的this就指向这个对象(obj)
obj2.foo() // 这次调用foo里面的this为obj2，上面一行为obj里的this

f()   //   当一个函数被当成函数调用时，即没有从一个对象的属性上讲出来调用，而是直接使用变量调用，它里面的this是全局作用域对象（window，globalThis，全局变量都是它的属性）

js是对象/函数之间没有隶属关系，只有指向关系
如果两个对象的属性都指向同一个函数，此时函数与两个对象的关系是对等的

也就是说，this是函数内部的一个隐含参数/特殊变量，它的值取决于函数的**调用方式**，而不是调用位置，源代码的书写位置或传参数方式
this只能是对象，如果传入一个原始值，将会被包装为一个对象传进去（Object(value)）

this不能被赋值，但this.xxx可以

a=[1,2,3,4,5,6,7,8]//数组也有映射，下标对数字
a.slice2 = function(start, end) {
    var result = [];
    for (var i = start; i < end; i++) {
        result.push(this[i]); //this调用其所在的对象。this[i]调用的是a数组
    }
    return result;
};

Math.max.apply(null,   [1,2,3,3,4,5])   7-27-20：27
这一行代码中，apply的第一个参数就是设置max函数里面的this指向
而这行函数也是在调用max对象的apply方法：所以apply方法里面的this指向max函数
而apply的第一个参数（null）将会成为max函数里面的this


调用一个函数在英文中有很多种说法：run,call,apply,invoke,execute



// 目前this的三种情况
f()  // window
obj.f() // obj
obj.f.call/apply(xxx) // xxx




=======================================================



原型与原型链：


“原型”与“原型属性”不一样
“原型”才是所有对象都有的、用来做为属性fallback的，可以通过__proto__属性或通过Object.getPrototypeOf(obj)来读到
“原型属性”是一个名为prototype的属性，正常来说只有函数有，且只有构造函数的原型属性我们会关心，因为它会做为该构造函数构造出来的实现的“原型”，它一开始为一个仅包含一个名为constructor属性的对象，且该对象又以Object.prototype为“原型”
我们当然可以给任何对象增加一个名为prototype的属性，但一般不会这么做来恶心自己和其它人。
（曾经还有个库叫Prototype.js，把事情弄的更乱）

构造函数的__proto__属性是构造函数自己的“原型”
构造函数的“原型属性”即其prototype属性，是它构造出来的实例的“原型”
构造函数的prototype属性不是构造函数自己的“原型”
但有一个例外：
Function.__proto__       === Function.prototype
因为Function是函数，那么它当然也Function.prototype为“原型”，因为所有的函数都宋。


多态
不同的对象一个功能
Object.prototype.tostring.call(Symbol())
'[object Symbol]'
