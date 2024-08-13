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
      var result = [[array.slice(0,length)],[array.slice(length)]]     
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
              //每个对象的属性值
              if(values === x[usersKey[j]]){
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
          }else if (typeof values === 'object' && values !== null) {//对象每一个都要比比较
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
        
      
    

    function findIndexLastIndex(users,values) {
      for (var key in users) {
        if (key == values) {
          
          
        }
      }
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
          return [...result,...flattenDeep(it)]//递归处理的是数组里的元素
        }else{
          return [...result,it]
        } 
      },[])
    }

    return {
      compact: compact,
      chunk: chunk,
      fill: fill,
      drop: drop,
      findIndex: findIndex,
      findIndexLastIndex: findIndexLastIndex,
      flatten: flatten,//此函数可以优化
      flattenDeep: flattenDeep
}}()

