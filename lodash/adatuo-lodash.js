var adatuo = function () {   
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
}}()

