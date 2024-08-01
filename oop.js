

  //接口
  function plus(x,y) {
    return x + y
  }
  //接口
  function minus(x,y) {
    return x - y
  }
  //接口
    function length(x,y) {
    return Math.sqrt(x ** 2 - y ** 2)
  }
  //接口实例,构造函数
  function Vector(x,y) {
    this.x = x
    this.y = y
  }
  
  Vector.prototype.plus = function(otherVector){//prototype是全局,Vector参数会被覆盖
    //返回新的Vector实例(return只能返回一个值)
    return new Vector(this.x + otherVector.x, this.y + otherVector.y)
  }

  Vector.prototype.minus = function(otherVector){
    //返回新的Vector实例(return只能返回一个值)
    return new Vector(this.x - otherVector.x , this.y - otherVector.y)
  }

  Vector.prototype.length = function(){
    //这里要返回数值
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }


  var v1 = new Vector(4,5);
  var v2 = new Vector(3,-4);
  //Vector.prototype.plus要先添加不然plus就没有被添加
  /*
  1. **`Vector` 构造函数**：
   ```javascript
   function Vector(x, y) {
     this.x = x;
     this.y = y;
   }
   ```
   这个构造函数用来创建一个新的 `Vector` 对象，并将 `x` 和 `y` 的值赋予该对象。
   使用 `new Vector(x, y)` 时，会调用这个构造函数，并返回一个包含属性 `x` 和 `y` 的新对象。

2. **`Vector.prototype.plus` 方法**：
   ```javascript
   Vector.prototype.plus = function(Vector) {
     return new Vector(this.x + Vector.x, this.y + Vector.y);
   }
   ```
   - `this.x` 和 `this.y`：在 `plus` 方法中，`this` 引用的是调用 `plus` 方法的 `Vector` 实例。因此，`this.x` 和 `this.y` 分别是该实例的 `x` 和 `y` 属性。
   - `Vector.x` 和 `Vector.y`：这里的 `Vector` 是 `plus` 方法的参数，它是另一个 `Vector` 对象。`Vector.x` 和 `Vector.y` 分别是传入的 `Vector` 对象的 `x` 和 `y` 属性。

3. **调用 `plus` 方法**：
   ```javascript
   var v1 = new Vector(4, 5);
   var v2 = new Vector(3, -4);
   var v3 = v1.plus(v2);
   ```
   - `new Vector(4, 5)` 创建一个新的 `Vector` 对象 `v1`，其 `x` 和 `y` 属性分别为 `4` 和 `5`。
   - `new Vector(3, -4)` 创建另一个 `Vector` 对象 `v2`，其 `x` 和 `y` 属性分别为 `3` 和 `-4`。
   - `v1.plus(v2)` 调用 `v1` 实例的 `plus` 方法，并将 `v2` 作为参数传递给该方法。在 `plus` 方法内部，`this` 引用 `v1`，`Vector` 引用 `v2`。返回的新 `Vector` 对象的 `x` 和 `y` 属性分别是 `v1` 和 `v2` 的 `x` 和 `y` 属性的和，即 `7` 和 `1`。

总结：
- **`new Vector(x, y)`** 创建一个新的 `Vector` 对象，其 `x` 和 `y` 属性分别由参数 `x` 和 `y` 初始化。
- **`this.x` 和 `this.y`** 在 `plus` 方法中引用调用该方法的 `Vector` 实例的属性。
- **`Vector.x` 和 `Vector.y`** 在 `plus` 方法中引用作为参数传递的另一个 `Vector` 对象的属性。
  */
  var v3 = v1.plus(v2) 
  /*
  otherVector.x = 3 ,otherVector.y = -4
  //Vector.prototype.plus下new调用的this
    this.x = 4 , this.y = 5
  */
  
  var v4 = v2.minus(v1)
  var l = v4.length()


  console.log(v3)
  console.log(v4)
  console.log(l)

  //复数接口实例
  function Complex(real,imag) {
    this.real = real
    this.imag = imag
  }

  //复数乘法接口
  function multiple(x,y) {
    return x * y
  }  

  //复数乘法接口
  function div(x,y) {
    return x / y
  }  

  Complex.prototype.plus = function(otherComplex){
    //返回新的Vector实例(return只能返回一个值)
    return new Complex(this.real + otherComplex.real , this.imag + otherComplex.imag)
  }

  Complex.prototype.minus = function(otherComplex){
    //返回新的Vector实例(return只能返回一个值)
    return new Complex(this.real - otherComplex.real , this.imag - otherComplex.imag)
  }

  Complex.prototype.multiple = function(otherComplex){
    //返回新的Vector实例(return只能返回一个值)
    return new Complex(
      (this.real * otherComplex.real - this.imag * otherComplex.imag)
    + (this.real * otherComplex.real + this.imag * otherComplex.imag)
    )
  }

  Complex.prototype.div = function(otherComplex){
    return new Complex(
      (this.real * otherComplex.real + this.imag * otherComplex.imag) / (otherComplex.real ** 2 + otherComplex.imag ** 2)
    , (this.imag * otherComplex.real - this.real * otherComplex.imag) / (otherComplex.real ** 2 + otherComplex.imag ** 2)
  )
  
  }

  Complex.prototype.toString = function(){
    return this.real + (this.imag > 0 ? '+' : "") + this.imag + 'i' //imag可能是0
  }
//===========================================================
//表示一个单向链表???
function LinkedList() {
  /*
  function LinkedList(head) { this._head = null; } 只初始化 _head 属性为 null。
  这并不等同于 {_head: null, next: null}，因为 LinkedList 对象只有 _head 属性，而没有 next 属性。
  */
 //头节点是null
  this._head = null 
  //记录长度
  this._length = 0
}

LinkedList.prototype =  {
// 返回链表第idx个结点的值
at: function(idx){
  //辅助节点
  var p = this._head
 while (idx > 0 && p) { //p,表示链表还有next
  p = p.next
  idx--
 }
 if (p) {//p,表示链表还有next
  return p.val
 }else{
  return undefined
 } 
},
// 设置链表第idx项的值为val
set : function(idx,val) {
    //辅助节点
    var p = this._head
    //找到idex
  while (idx > 0 && p) {
    p = p.next
    idx--
  }
  //val
  p.val = val
 //计算长度
 this._length++
  if (p) {
  return p.val = val
 }else{
  undefined
 } 
},
// 在链表末尾新增一个结点，值为val
append : function(val) {
    //计算长度
    this._length++ 
  //既然是增加节点,那就要拿到node
  var node = {
    val:val,
    next:null,
  }
  //如果头节点是空
  if (this._head == null) {
    this._head = node
    return this //返回整个新建实例的链表
  }
  //辅助节点
  var p = this._head
  //遍历到末尾(有可能太大)
  while (p.next) {
    p = p.next
  }
  p.next = node
  return this
},
// 返回链表末尾结点的值，并删除末尾结点
pop : function() {
  //为空节点
  if (this._head == null) {
    return undefind
  }
  //只有一个节点(那么下一个节点是空)
  if (this._head.next == null) {
    //存储删除的节点值
    var onlyValue = this._head.val
    //删除节点
    this._head = null
    //返回存储删除的节点值
    return onlyValue
  }
   //计算长度
 this._length--
  //辅助节点
  p = this._head
  while (p.next && p.next.next) {//同时不next空
    p = p.next
  }
  // while (p.next.next) {//只要删除的那个节点不为空就行
  //   p = p.next
  // }
  //存储删除的节点值
  var popValue = p.next.val
  //删除节点
  p.next = p.next.next
  // p.next = null //会删除后面的所有节点
  //返回删除的节点值
  return popValue
},
// 在链表头部新增一个结点，值为val
prepend : function(val) {
   //计算长度
 this._length++
  //新建node
  var node = {
    val:val, //这里val:val要同样,不然在at调用的时候会出问题
    next:this._head
  }
  //更新头节点
  this._head = node
  //返回整个实例
  return this
  /*这样写没有更新链表的 _head 属性，所以链表的头节点实际上并没有改变。
  返回的是新节点，而不是整个链表对象，可能会导致链表结构不一致
  prepend : function(val) {
  //新建node
  var node = {
    head:val,
    next:null
  }
  //
  node.next = this._head
  return node
}*/
},
// 返回链表第一个结点的值，并删除这一个结点
shift : function() {
  /*这种方式能行但是不推荐用
    //新建node
    var node = {
    head:this._head.next.val,
    next:this._head.next
  }
    //更新头节点
    this._head = node
    return this._head.val*/

  //推荐的方式
   //计算长度
 this._length--
    //空节点
    if (this._head == null) {
      return undefind
    }
    //存储返回的节点值
    var shiftValue = this._head.val
    //删除,next指向下一个,值会自动被垃圾回收
    this._head = this._head.next

    return shiftValue
  },
  //val转为数组
  toArray() {
    //先要有个数组
    var array = []
    //空节点
    if (this._head == null) {
      return array
    }
    p = this._head
    //把val加入数组
    while (p.next) {
      array.push(p.val)
      p = p.next
    }
    return array
},
//用字符串表示链表
  toString() {
    return this.toArray().join('->')
},
  get size() {
    return this._length
}
}

  // 表示一个栈：即后进先出，先进后出
  function Stack() {
    this._LIFO = []
}

Stack.prototype =  {
  // 向栈中增加元素
  push(val) {
    this._LIFO.push(val)
  },
  // 从栈中取出元素并删除栈顶元素  
  pop() {
    this._LIFO.pop()
  },
  // 查看但不删除栈顶元素
  peek() {
    //push(pop())没必要
    return this._LIFO[this._LIFO.length - 1]
}
}
Object.defineProperty(Stack.prototype,'size',{
  get() {
    return this._LIFO.length
  }
})

  // 表示一个队列：即先进先出，后进后出
  function Queue() {//out--- this._head(队头) ---- this._tail(队尾) ---in
  //先指定两个指针一个指向头,一个指向尾
    this._head = null
    this._tail = null
    this._length = 0
}
// 向队列中增加元素
Queue.prototype = {//out--- this._head(队头) ---- this._tail(队尾) ---in
  in (val) {
    //计算长度
    this._length++
    //null节点
    if (this._head == null) {
      this._head = this._tail = null
      //返回整个链表
      return this 
    }
    //既然要添加元素那就要加个node
    var node = {
      val:val,
      next:null,
    }
    this._tail.next = node
    //更新head节点
    this._tail = node
  },
  // 从队头取出元素并删除队头元素
  prototy() {//out--- this._head(队头) ---- this._tail(队尾) ---in
    //计算长度
    this._length--   
    //null
    if (this._head == null) {
      return undefined
    }
    //只有一个节点
    if (this._head.next == null) {
      //存储
      var prototyVal01 = this._head.val
      //删除
      this._head = this._tail = null
      return prototyVal01
    }
    //存储删除元素的val
    var prototyVal02 = this._head.val
    //后面挪一个(相当于删除)
    this._head = this._head.next
    return prototyVal
},
// 查看队头元素（没有查看队尾元素的功能）
peek() {//out--- this._head(队头) ---- this._tail(队尾) ---in
  return this._head.val
}
}
// 以及queue.size获取队列的长度
Object.defineProperty(Queue.prototype,'size',{
  get() {
    return this._length
  }
})

/*非链表写法
  // 表示一个集合（集合中元素没有序，但不能重复）
  // 构造函数可选的可以传入集合中的初始值，但会被去重后存放
  function Collection(initalValues = []) {//initalValues都可以用最好不要用
    this.initalValues = initalValues//
  }
  // 向集合中添加元素
  Collection.prototype.add = function(item) {
    if (this.initalValues.indexOf(item) === -1) {//indexOf() 方法返回数组中第一次出现给定元素的下标，如果不存在则返回 -1
       return new Collection(this.initalValues.push(item))
    }else{
      return new Collection(this.initalValues)
    }
  }
  // 从集合中删除item元素
  Collection.prototype.delete = function(item) {
   
    if (this.initalValues.indexOf(item) === -1) {
       return new Collection(this.initalValues)
    }else{
      return new Collection(this.initalValues.
      splice(this.initalValues.indexOf(item),1))
    }
  }
  // 获取集合中的元素用 c.size，它是一个getter
  Object.defineProperty(Collection.prototype,'size',{//如果是Collection的话就被添加到构造函数里面去了
    get() {
      return this.initalValues.length
    }
  })
  
  // 清空集合中的所有元素
  Collection.prototype.clear = function() {
    return this.initalValues.length = 0
  }
  
  // 判断集合中是否存在某元素
  Collection.prototype.has = function(item) {
    if (this.initalValues.indexOf(item) === -1) {
       return false
    }else{
      return true
    }
  }
  // 遍历集合中的元素（顺序无所谓）
  Collection.prototype.forEach = function(func) {
    for (const i of this.initalValues) {
      func(i)
    }
  }
*/
  // 用链表表示一个集合（集合中元素没有序，但不能重复）
  // 构造函数可选的可以传入集合中的初始值，但会被去重后存放 
  function MySet(initalValues = []) {//传入参数的类型为数组
    this._set = []  
    //检测新建的实例有没有重复值
    for (const val of initalValues) {
      //this._set.add(val),this._set是没有add方法的
      this.add(val)//构造函数中this是新的实例对象
    } 
  }
  // 向集合中添加元素
  MySet.prototype = {//constract 
    add(item) {
  /*  indexOf版本
    if (this._set.indexOf(item) === -1) {
      return this._set.push(item)
    }
    //如果没有重复的就返回整个表
    return this*/
  //includes() 方法用来判断一个数组是否包含一个指定的值，如果包含则返回 true，否则返回 false
  if (!this._set.includes(value)) {//不存在返回false,! 变 true
    this._set.push(value)
  }
    return this
  },
    // 从集合中删除item元素
  delete(value) {//[]
    if (this._set.includes(value)) {
    return this._set.splice(this._set.indexOf(item),1)
  }   
  //不存在应该会自动undefind
  },
    // 清空集合中的所有元素
  clear() {
    //this._set.length = 0
    this._set = []
    //返回的应该是MySet的this这个实列
    return this
  },
    // 判断集合中是否存在某元素
  has(item) {
    return this._set.includes(item)
  },
  // 遍历集合中的元素（顺序无所谓）
  forEach(func) {//里的func相当于回调函数
    for (var value of this._set) {//取出实例[]中的值
      func(value)
    }
  }
}
  // 获取集合中的元素用 c.size，它是一个getter
  Object.defineProperty(MySet.prototype,'size',{//如果是Collection的话就被添加到构造函数里面去了
    get() {
      return this._set.length
    }
  })
  

    // 表示一个映射
  // 这个映射中，可以把任何值映射到任何值，映射的key不限于字符串
  function Map() {
  
}
Map.prototype = {
// 设置映射中的key所对应的值为val
set: function(key, val) {
  
},
// 获取这个映射中key所对应的val
get: function(key) {},
// 判断这个映射中是否存在这个key的映射
has: function(key) {},
// 删除这个映射中key及其映射的值的这一对儿
delete: function(key) {},
// 清空这个映射中所有的映射对儿
clear: function() {},
// 获取这个映射中映射对儿的数量
get size() {},
// 遍历这个映射中所有的映射对儿
forEach(iterator) {},
}



