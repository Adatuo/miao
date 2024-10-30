<script setup>
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

  let router = useRouter()//路由器
  let route = useRoute()//等价于非setup组件中的this.$route

  console.log(router,route);
  console.log(route.params.id); //因为路由没有改变不会重新加载组件,只会log一次,可以写上watch
  
  var productInfo = fetch('/api/product/'+route.params.id) //切换页面

</script>

<template>
  <main>
    产品页面
    {{ route.params.id }}
    <!-- 展示productInfo -->
  </main>
</template>
