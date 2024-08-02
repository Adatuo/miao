

  function plus(x, y) {
    return x + y
  }

  function minus(x, y) {
    return x - y
  }

  function length(x, y) {
    return Math.sqrt(x ** 2 - y ** 2)
  }

  function Vector(x, y) {
    this.x = x
    this.y = y
  }

  Vector.prototype.plus = function (otherVector) {

    return new Vector(this.x + otherVector.x, this.y + otherVector.y)
  }

  Vector.prototype.minus = function (otherVector) {

    return new Vector(this.x - otherVector.x, this.y - otherVector.y)
  }


  Object.defineProperty(Vector.prototype, 'length', {
    get: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }
  })

  var v1 = new Vector(4, 5);
  var v2 = new Vector(3, -4);


  var v3 = v1.plus(v2)

  var v4 = v2.minus(v1)
  var l = v4.length()


  console.log(v3)
  console.log(v4)
  console.log(l)


  function Complex(real, imag) {
    this.real = real
    this.imag = imag
  }


  function multiple(x, y) {
    return x * y
  }


  function div(x, y) {
    return x / y
  }

  Complex.prototype.plus = function (otherComplex) {

    return new Complex(this.real + otherComplex.real, this.imag + otherComplex.imag)
  }

  Complex.prototype.minus = function (otherComplex) {

    return new Complex(this.real - otherComplex.real, this.imag - otherComplex.imag)
  }

  Complex.prototype.multiple = function (otherComplex) {

    return new Complex(
      (this.real * otherComplex.real - this.imag * otherComplex.imag)
      + (this.real * otherComplex.real + this.imag * otherComplex.imag)
    )
  }

  Complex.prototype.div = function (otherComplex) {
    return new Complex(
      (this.real * otherComplex.real + this.imag * otherComplex.imag) / (otherComplex.real ** 2 + otherComplex.imag ** 2)
      , (this.imag * otherComplex.real - this.real * otherComplex.imag) / (otherComplex.real ** 2 + otherComplex.imag ** 2)
    )

  }

  Complex.prototype.toString = function () {
    return this.real + (this.imag > 0 ? '+' : "") + this.imag + 'i'
  }


  function LinkedList() {


    this._head = null

    this._length = 0
  }

  LinkedList.prototype = {

    at: function (idx) {

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
    },

    set: function (idx, val) {

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
    },

    append: function (val) {

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
    },

    pop: function () {

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
    },

    prepend: function (val) {

      this._length++

      var node = {
        val: val,
        next: this._head
      }

      this._head = node

      return this

    },

    shift: function () {




      this._length--

      if (this._head == null) {
        return undefind
      }

      var shiftValue = this._head.val

      this._head = this._head.next

      return shiftValue
    },

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
    },

    toString() {
      return this.toArray().join('->')
    },
    get size() {
      return this._length
    }
  }

  class Stack {
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
  // function Stack() {
  //   this._LIFO = []
  // }

  // Stack.prototype = {

  //   push(val) {
  //     this._LIFO.push(val)
  //   },

  //   pop() {

  //     return this._LIFO.pop()
  //   },

  //   peek() {

  //     return this._LIFO[this._LIFO.length - 1]
  //   }
  // }
  // Object.defineProperty(Stack.prototype, 'size', {
  //   get() {
  //     return this._LIFO.length
  //   }
  // })


  function Queue() {

    this._head = null
    this._tail = null
    this._length = 0
  }

  Queue.prototype = {
    in(val) {

      this._length++

      if (this._head == null) {
        this._head = this._tail = null

        return this
      }

      var node = {
        val: val,
        next: null,
      }
      this._tail.next = node

      this._tail = node
    },

    prototy() {

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
    },

    peek() {
      return this._head.val
    }
  }

  Object.defineProperty(Queue.prototype, 'size', {
    get() {
      return this._length
    }
  })



  function MySet(initalValues = []) {
    this._set = []

    for (const val of initalValues) {

      this.add(val)
    }
  }

  MySet.prototype = {
    add(item) {


      if (!this._set.includes(value)) {
        this._set.push(value)
      }
      return this
    },

    delete(value) {
      if (this._set.includes(value)) {
        return this._set.splice(this._set.indexOf(item), 1)
      }

    },

    clear() {

      this._set = []

      return this
    },

    has(item) {
      return this._set.includes(item)
    },

    forEach(func) {
      for (var value of this._set) {
        func(value)
      }
    }
  }

  Object.defineProperty(MySet.prototype, 'size', {
    get() {
      return this._set.length
    }
  })




  function Map() {

  }
  Map.prototype = {

    set: function (key, val) {

    },

    get: function (key) { },

    has: function (key) { },

    delete: function (key) { },

    clear: function () { },

    get size() { },

    forEach(iterator) { },
  }



