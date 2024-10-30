<template>
    <div>
     <div class="text-center bg-green-500 relative">正在与id:{{ $route.params.id }}聊天 <!--不放置在一个div里面的话会被继承full -->
      <RouterLink class="absolute left-0" to="/chatList" @click="$router.back()">返回</RouterLink>
    </div>
    <div>
      {{ $route.params.id }}正在说话
    </div>
  </div>
</template>