<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {ref,reactive,watch,onMounted} from 'vue'

/* const props = defineProps({
 })*/

 onMounted(()=>{}) //写在前后都可以

// let x = await get('url')
const count = ref(0)

function add() {
  count.value++
}
</script>

<!-- <script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {ref,reactive,watch,onMounted} from 'vue'

export default{//这就相当于app.component('xxx',{})里面的对象了
  setup(){//script setup里面导入的可以直接在这里用
  //如果用了“需要感知自己在哪个组件内"的组合式函数，则必须写在第一个await之前
  //因为这些函数必须同步调用才能感知到自己在哪里。
  // onMounted(()=>{})
  props:{},
    const count = ref(0)
    function add() {    
      count.value++
  }
    return{
      count,
      add,
    }
  },
  components:{//局部声明组件,全局声明需要在main.js里面
    HelloWorld,
    TheWelcome:TheWelcome,
  }
}
</script> -->

<template>
  <!-- <HelloWorld/>
  <TheWelcome/> -->
  <!-- 还是需要写一点css不一定能自己摆好 -->
  <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
  </el-carousel>

  <el-button>button</el-button>  
  <div @click="add">
    {{ count }}
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
