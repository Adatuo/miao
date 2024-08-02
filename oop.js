 
class Vector{
  constructor(x,y){
    this.x = x
    this.y = y
  }

  plus  (otherVector) {

return new Vector(this.x + otherVector.x, this.y + otherVector.y)
}

minus  (otherVector) {

return new Vector(this.x - otherVector.x, this.y - otherVector.y)
}

get length() {
  return Math.sqrt(this.x * this.x + this.y * this.y)
}

}

class Complex{
  constructor(real,imag){
    this.real = real
    this.imag = imag
  }

  plus(otherComplex){
    //返回新的Vector实例(return只能返回一个值)
    return new Complex(this.real + otherComplex.real , this.imag + otherComplex.imag)
  }

  minus (otherComplex){
    //返回新的Vector实例(return只能返回一个值)
    return new Complex(this.real - otherComplex.real , this.imag - otherComplex.imag)
  }

  multiple (otherComplex){
    //返回新的Vector实例(return只能返回一个值)
    return new Complex(
      (this.real * otherComplex.real - this.imag * otherComplex.imag)
    + (this.real * otherComplex.real + this.imag * otherComplex.imag)
    )
  }

  div (otherComplex){
    return new Complex(
      (this.real * otherComplex.real + this.imag * otherComplex.imag) / (otherComplex.real ** 2 + otherComplex.imag ** 2)
    , (this.imag * otherComplex.real - this.real * otherComplex.imag) / (otherComplex.real ** 2 + otherComplex.imag ** 2)
  )
  
  }

  toString (){
    return this.real + (this.imag > 0 ? '+' : "") + this.imag + 'i' //imag可能是0
  }
}


  
      
    
    
    class Stack{
    constructor(){
      this._value = []
    }
    push(val) {
      this._value.push(val)
    }

    pop() {
      return this._value.pop()
    }

    peek() {
      //return this._value[this._value.length - 1]
      return this._value.at(-1)
    }

    get size() {
      return this._value.length
    }
  }

 // 表示一个队列：即先进先出，后进后出
 class Queue{
  constructor(){
    this._head = null
    this._tail = null
    this._length = 0
    }
// 向队列中增加元素   
  add(val) {
      this._length++
      var node = {
        val: val,
        next: null,
      }
      if (this._head == null) {
        this._head = this._tail = node
        return this
      }
      this._tail.next = node
      this._tail = node
      return this
    }
    
// 从队头取出元素并删除队头元素
pop() {//out--- this._head(队头) ---- this._tail(队尾) ---in

this._length--

if (this._head == null) {
  return undefined
}

if (this._head == this._tail) {//只有一个节点，两个指针都一样

  var result = this._head.val

  this._head = this._tail = null
  return result
}

var result = this._head.val

this._head = this._head.next
return result
}

// 查看队头元素（没有查看队尾元素的功能）
peek() {
      return this._head.val
    }

// 以及queue.size获取队列的长度
    get size() {
      return this._length
    }
  }

// 栈
class MySet{
  constructor (initalValues = []){
    this._set = []
    //封装去重
    for (const val of initalValues) {
      this.add(val)
    }
  }

  add(value) {
      if (!this._set.includes(value)) {
        this._set.push(value)
      }
      return this
    }

    delete(value) {
      if (this._set.includes(value)) {
        return this._set.splice(this._set.indexOf(value), 1)
      }
    }    

    clear() {

    this._set = []

    return this
    }

    has(value) {
    return this._set.includes(value)
    }

    forEach(func) {
    for (var value of this._set) {
      func(value)
    }
    }

    get size() {
      return this._set.length
    }
  
}

class LinkedList{
  constructor(){
    this._head = null
  this._length = 0
  }

  at(idx) {
var p = this._head
while (idx > 0 && p) {
  p = p.next
  idx--
}
if (p) {
  return p.val
} else {
  return undefined
}
}

set(idx, val) {

var p = this._head

while (idx > 0 && p) {
  p = p.next
  idx--
}

p.val = val

this._length++
if (p) {
  return p.val = val
} else {
  undefined
}
}

append(val) {

this._length++

var node = {
  val: val,
  next: null,
}

if (this._head == null) {
  this._head = node
  return this
}

var p = this._head

while (p.next) {
  p = p.next
}
p.next = node
return this
}

pop() {

if (this._head == null) {
  return undefind
}

if (this._head.next == null) {

  var onlyValue = this._head.val

  this._head = null

  return onlyValue
}

this._length--

p = this._head
while (p.next && p.next.next) {
  p = p.next
}




var popValue = p.next.val

p.next = p.next.next


return popValue
}

prepend(val) {

this._length++

var node = {
  val: val,
  next: this._head
}

this._head = node

return this

}

shift() {

this._length--

if (this._head == null) {
  return undefind
}

var shiftValue = this._head.val

this._head = this._head.next

return shiftValue
}

toArray() {

var array = []

if (this._head == null) {
  return array
}
p = this._head

while (p.next) {
  array.push(p.val)
  p = p.next
}
return array
}

toString() {
return this.toArray().join('->')
}

get size() {
return this._length
}
}

class MyMap{
  constructor(init = []){
    this._pair = []
    for (var pair of init) {
      var key = pair[0]
      var val = pair[1]
      this.set(key,val)
    }
  }
// 设置映射中的key所对应的值为val
set(key,val) {
  //修改实例的'key',value
  for (let i = 0; i < this._pair.length; i += 2) {
    if (this._pair[i] === key) {
      this._pair[i + 1] = val
       return this
    }    
    }
   //添加'key',value
  this._pair.push(key,val)
  return this
  }

// 获取这个映射中key所对应的val
get(key) {
  for (const i of this.pair) {
    if (i === key) {
      return this._pair[indexOf(i) + 1] 
    }
  }
}
// 判断这个映射中是否存在这个key的映射
has(key) {
  return this._pair.includes(key)
    }
// 删除这个映射中key及其映射的值的这一对儿
delete(key) {
  if (!this._pair.includes(key)) {
      this._pair.splice(this._pair.indexOf(key),2)
      return true
  }
  return false
}
// 清空这个映射中所有的映射对儿
clear() {
  this._pair = []
  return this
}
// 获取这个映射中映射对儿的数量
get size() {
  return this._pair.length / 2
}
// 遍历这个映射中所有的映射对儿
forEach(iterator) {
      for (var i = 0; i < this._pair.length; i += 2) {
        iterator(this._pair[i + 1], this._pair[i])
      }
    }
}

