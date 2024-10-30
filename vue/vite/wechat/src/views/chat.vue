<template>
  <div>
    <h1 class="text-center bg-lime-400 relative">
     <RouterLink to="" @click="$router.back()" class="absolute left-0">返回</RouterLink> <!--编程式导航 -->
      用户{{ $route.params.id }}
    </h1>
  </div>
  <div>
    正在与用户{{ $route.params.id }}说话
  </div>
</template>