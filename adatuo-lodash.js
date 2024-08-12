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
      for (var key in users) {
        if (key == values) {
          
          
        }
      }
    }

    return {
      compact: compact,
      chunk: chunk,
      fill: fill,
      drop: drop,
    }
  }()

