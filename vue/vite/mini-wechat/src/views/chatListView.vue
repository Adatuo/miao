<template>
    <div>
     <div class="text-center bg-green-500 relative">微信 <!--不放置在一个div里面的话会被继承full -->
      <RouterLink class="absolute left-0" to="/">返回</RouterLink>
    </div>
    <RouterLink v-for="x in 10" :to="'/chat/' + x" class="flex items-center">
      <img src="" alt="" class="h-5 w-5">
      <div>
        <span class="text-lg">username</span><!--不放置在一个div里面的话text-lg会有问题 -->
        <p>latest message</p>
      </div>

    </RouterLink>
  </div>
</template>