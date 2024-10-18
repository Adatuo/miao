<template>
  <div>
    {{ counter.name }}
    {{ x }}
  </div>
</template>

<script>
import {useCounterStore} from "@/stores/counter";
import { storeToRefs } from "pinia";

// console.log(storeToRefs);//因为模块化开发,像在全局作用域用就log
window.xx = storeToRefs

export default{
    data(){
      let counter = useCounterStore()//放里面更好    
    return{
      counter,
      //name:counter.name,//读到普通值解绑了
      //name:storeToRefs(counter).name,
      x:111111111111 ,
      y:2 ,
    }
  },
  computed:{
    name(){
      return this.counter.name
    }
  }
}
</script>