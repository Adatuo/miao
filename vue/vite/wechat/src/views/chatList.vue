<template>
  <div>
    <h1 class="bg-lime-500 text-center">微信</h1>
    <div>
      <RouterLink  v-for="x in 10" :to="'/chat/' + x" class="flex items-center">
        <img src="" alt="" class="w-8 h-8">
        <div>
          <span class="text-lg">username</span><!-- text-lg -->
          <p>latest message</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>