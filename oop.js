 
class Vector{
  constructor(){
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
    constructor(v){
      return new Complex(this.real + v.real, this.imag + v.imag)
    }
    plus (v) {

return new Complex(this.real + v.real, this.imag + v.imag)
}

minus (v) {

return new Complex(this.real - v.real, this.imag - v.imag)
}

multiple (v) {

return new Complex(
  (this.real * v.real - this.imag * v.imag)
  + (this.real * v.real + this.imag * v.imag)
)
}

div (v) {
return new Complex(
  (this.real * v.real + this.imag * v.imag) / (v.real ** 2 + v.imag ** 2)
  , (this.imag * v.real - this.real * v.imag) / (v.real ** 2 + v.imag ** 2)
)

}

toString () {
return this.real + (this.imag > 0 ? '+' : "") + this.imag + 'i'
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
pop() {

this._length--

if (this._head == null) {
  return undefined
}

if (this._head.next == null) {

  var prototyVal01 = this._head.val

  this._head = this._tail = null
  return prototyVal01
}

var prototyVal02 = this._head.val

this._head = this._head.next
return prototyVal
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
        return this._set.splice(this._set.indexOf(item), 1)
      }
    }    

    clear() {

    this._set = []

    return this
    }

    has(item) {
    return this._set.includes(item)
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

 
