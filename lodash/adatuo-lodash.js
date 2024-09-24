var adatuo = function () {   
  //工具函数

  //深度相等
  function isEqual(a,b) {
    //数组,obj,常量

    //数组
    if (Array.isArray(a) && Array.isArray(b)) {
      //长度不相等直接false
      if (a.length !== b.length) {
        return false
      }
      //比较内容
      for (let i = 0; i < a.length; i++) {
        if (!isEqual(a[i],b[i])) { //beatiful a[i] !== b[i]
          return false
        } 
      }
      return true
    }
    //obj
    if (typeof a == 'obj' && typeof b == 'obj' && !a && !b) {
      if (Object.keys(a).length !== Object.keys(b).length) {
        return false
      }
      //比较键值
      for (var key of a) {
        if (!(key in b)|| !isEqual(a[key],b[key])) { //key在b中
          return false
        }
      }
      return true
    }
    //常量
    return a === b
  }

  //深度比较两个对象,有相同的属性值返回true,不同返回false
  function matches(obj) {
    var _this = this //拿到调用这个方法的对象,方便调用isEqual
    return function (o) { //闭包传入
      for (var key in obj) { //拿到对比的key
        //hasOwnProperty,key同时存在才继续比较
        if (o.hasOwnProperty(key) && obj.hasOwnProperty(key)) { //hasOwnProperty() 方法返回一个布尔值，表示对象自有属性（而不是继承来的属性）中是否具有指定的属性。
          if (!_this.isEqual(o[key],obj[key])) {//isEqual作为方法调用,对比值是否相等
            return false
          }       
        }
      }
      return true
    }
  }

  function matchesProperty(arr) { //arr字符串,符合obj其中的一对key value就返回true 否则false
    return function (obj) {
      for (let i = 0; i < arr.length; i++) {
       if (i % 2 == 0) {//
        var key = arr[i]  //作为key
        var val = arr[i+1]  //作为value      
       if ( //Object.hasOwnProperty.call(obj, key)
        obj.hasOwnProperty(key) &&
        obj[key] === val
       ) {
        return true
       } 
      }
    }
      return false
    }  
  }

  //获取对象中深层属性的value
  function property(key) { //传入要查询的深层key  exmaple:obj{ 'a': { 'b': 2 } }
    let keys = key.split('.') //传入的是由.分割的字符串
    return function (obj) { //传入要对比的
      for (var key of keys) {
        obj = obj[key] //{ 'b': 2 } => obj.b
      }
      return obj
    }
  }

    function compact(array) {
      for (let i = array.length - 1; i >= 0; i--) {
        var x = array[i];
        // var y = array.indexOf(x) 多余
        if (x == null || x == false || x == 0 || x == "" || x == undefined || isNaN(x)) {
          //splice会改边数组,从后向前遍历
          array.splice(i,1)
        }
      }
      return  array
    }

    function chunk(array,length = 0) {
      var result = [...[array.slice(0,length)],...[array.slice(length)]]     
        return result
      }
    
    function fill(array,value,start,end) {
      if (!start && !end) {
        var result = array.fill(value,0)
        return result
      }else{
        var result = array.fill(value,start,end)
        return result
      }  
    }

    function drop(array,length = 1) {
      array.splice(0,length)
      return array
    }

    function findIndex(users,values) {
        for (let i = 0; i < users.length; i++) {
          if (typeof values == "string") {
            //users每一个的对象
            var x = users[i]
            //users每一个的key值
            var usersKey = Object.keys(x)
            for (let j = 0; j < usersKey.length; j++) {
              //每个对象的key值以及对象里面对应key是否有这个值
              if(values === usersKey[j] && x[usersKey[j]] === true){
                 return i           
              } 
            }
          }else if(typeof values == "function" && values(users[i])){//values为函数,users[i]参数o
            return i
          }else if (Array.isArray(values)) {
            //key value分开
              //users每一个的对象
              var x = users[i]
              //users每一个的key值
              var usersKey = Object.keys(x)
              for (let j = 0; j < usersKey.length; j++) {
                //每个对象的属性值
                if(values[0] === usersKey[j] && values[1] === x[usersKey[j]]){
                  return i              
                }
              }
          }else if (typeof values === 'object' && values !== null) {//对象深对比
              var x = users[i];//拿到对象
              var allMatch = true;
              for (var key in values) {//拿到key
                if (values[key] !== x[key]) {//比较value
                  allMatch = false;
                  break;
                }
              }
              if (allMatch) {
                return i;
              }
            }
          }
          //所有都不行 -1
          return -1
        }
        
    function findLastIndex(users,values) {// from right to left.
          for (let i = users.length - 1; i >=0 ; i--) {
            if (typeof values == "string") {
              //users每一个的对象
              var x = users[i]
              //users每一个的key值
              var usersKey = Object.keys(x)
              for (let j = 0; j < usersKey.length; j++) {
                //每个对象的key值 and 属性值 == true
                if(values === usersKey[j] && x[usersKey[j]] === true){
                   return i           
                } 
              }
            }else if(typeof values == "function" && values(users[i])){//values为函数,users[i]参数o
              return i
            }else if (Array.isArray(values)) {
              //key value分开
                //users每一个的对象
                var x = users[i]
                //users每一个的key值
                var usersKey = Object.keys(x)
                for (let j = 0; j < usersKey.length; j++) {
                  //每个对象的属性值
                  if(values[0] === usersKey[j] && values[1] === x[usersKey[j]]){
                    return i              
                  }
                }
            }else if (typeof values === 'object' && values !== null) {//对象深对比
                var x = users[i];//拿到对象
                var allMatch = true;
                for (var key in values) {//拿到key
                  if (values[key] !== x[key]) {//比较value
                    allMatch = false;
                    break;
                  }
                }
                if (allMatch) {
                  return i;
                }
              }
            }
            //所有都不行 -1
            return -1
       }

    //var array = [1, [2, [3, [4]], 5]]
    function flatten(array) {
      return array.reduce((result,it) => {//记得返回值
        //判断是不是数组,不是的话直接返回
        if (Array.isArray(it)) {
          return [...result,...it]
        }else{
          return [...result,it]
        }     
    },[])
    }
    //递归,一直... (没有问题的话,需要刷新控制台)
    function flattenDeep(array) {
      return array.reduce((result,it) => { 
        //判断是不是数组,不是的话直接返回
        if (Array.isArray(it)) {
          return [...result,...flattenDeep(it)]//递归处理的是array的下一个元素
        }else{
          return [...result,it]
        } 
      },[])
    }

    function flattenDepth(array,target,current = 0) {
      current++
      return array.reduce((result,it) => {        
        if (Array.isArray(it) && current <= target) {
          return [...result,...flattenDepth(it,target,current)]
        }else{
          return [...result,it]
        } 
      },[])
    }

    function fromPairs(array){
      obj = Object.fromEntries(array)
      return obj
    }
    //传统迭代法
    function fromPairs02(array) {
      var obj = {}
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          //取出第一个值作为key
          var key = array[i][j]
          //取出第二个值作为value
          var value = array[i][j + 1]
          obj[key] = value  
          //消除array[i].length不需要的长度
          break   
        }
      }
      return obj     
    }
    

    function toPairs(obj) {
      array = Object.entries(array)
      return array
    }
    //传统map
    function toPairs02(obj) {
      return Object.keys(obj).map(it => [it,obj[it]])
    }

    function head(array) {
      return array.length == 0 ? undefined : array[0]
    }

    function indexOf(array,value,fromIndex = 0) {
      for (let i = fromIndex; i < array.length; i++) {
        if (array[i] == value) {
          return i
        }       
      }
      return -1
    }

    function lastIndexOf(array,value,fromIndex = array.length - 1) {
      for (let i = fromIndex; i >=0; i--) {
        if (array[i] == value) {
          return i
        }       
      }
      return -1
    }

    function initial(array) {
      array.splice(-1,1)
      return array
    }

    function join(array,separator) {
      var S = ''
      array.forEach((value,index) => {
        S = S + value
        if (index != array.length - 1) {
          S = S + separator
        }  
      })
      return S
    }

    function last(array) {     
      return array.splice(-1,1)[0]
    }

    /**filter方法
     * filter方法会遍历数组中的每个元素，并执行回调函数。在回调函数中，如果
返回true，则保留该元素；如果返回false，则移除该元素。
     * 不会改变原数组,会返回一个新的
     */
    function pull(array,x,y) {
      var newArray = array.filter(it => it !== x &&  it !== y)//都不等于x y就返回false移除该元素

      array.length = 0 //原数组清零

      array.push(...newArray)//拍扁

      return array
    }

    function reverse(array) {
      var result = []
      for (let i = array.length - 1; i >= 0; i--) {
        var x = array[i]
        result.push(x)
      }
      array.length = 0 //原数组清零
      array.push(...result)
      return array
    }

  function every(array, predicate = it => it) { //防止it传入null报错
    if (typeof predicate === 'object' && predicate !== null) {//数组
      if (Array.isArray(predicate)) {
        predicate = this.matchesProperty(predicate)//predicate转换成 是否key value符合 的函数
      } else {
        predicate = this.matches(predicate)//是否对象符合
      }
    } else if (typeof predicate === 'number' || typeof predicate === 'string') {
      predicate = this.property(predicate)//obj{ 'a': { 'b': 2 } }有可能会有深层属性
    } else if (predicate === null) {//为空直接返回
      predicate = it => it
    }
    for (let i = 0; i < array.length; i++) {//这里是predicate变成了函数或者当predicate是其他的function的是否来测试array的每个元素是否符合某个条件
      let item = array[i]
      if (!predicate(item)) return false
    }
    return true
  }
    //Boolean()是一个函数
    // function some(array, predicate = it => it) {
    //   if (typeof predicate === 'object' && predicate !== null) {
    //     if (Array.isArray(predicate)) {
    //       predicate = this.matchesProperty(predicate)
    //     } else {
    //       predicate = this.matches(predicate)
    //     }
    //   } else if (typeof predicate === 'number' || typeof predicate === 'string') {
    //     predicate = this.property(predicate)
    //   } else if (predicate === null) {
    //     predicate = it => it
    //   }
    //   for (let i = 0; i < array.length; i++) {
    //     if (predicate(item)) return true
    //   }
    //   return true
    // }

    function countBy(collection,) {
      
    }
    return {
      compact: compact,
      chunk: chunk,
      fill: fill,
      drop: drop,
      findIndex: findIndex,
      findLastIndex: findLastIndex,
      flatten: flatten,//此函数可以优化
      flattenDeep: flattenDeep,
      flattenDepth: flattenDepth,
      fromPairs: fromPairs,
      toPairs: toPairs,
      head: head ,
      indexOf: indexOf,
      lastIndexOf: lastIndexOf,
      initial: initial,
      join: join,
      last: last,
      pull: pull,
      reverse:reverse,
}}()

