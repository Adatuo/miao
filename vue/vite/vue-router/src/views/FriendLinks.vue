<script setup>
import { useRoute, useRouter } from 'vue-router';

  let router = useRouter()//路由器
  let route = useRoute()//等价于非setup组件中的this.$route

  console.log(router,route);
  
</script>

<template>
  <main>
    <!-- <a href="/links/mi">咪咪卡</a>
    <a href="/links/tao">淘洗</a> -->
    <RouterLink to="/links/mi">咪咪卡</RouterLink>
    <RouterLink to="/links/tao">淘洗</RouterLink>
  </main>
</template>
