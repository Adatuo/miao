<template>
  <div class="h-full flex flex-col">
    <div class="grow"><!-- grow布局 -->
      <RouterView/><!-- 有缓存的话会渲染 因为始终会渲染这一个,下面始终会出现.那么就把他们整个放入一个home中-->
    </div>

    <footer>
      <div>
        <nav class="flex justify-around"><!-- justify-around平均分配空间 -->
          <RouterLink to="/home/chat">聊天</RouterLink>
          <RouterLink to="/home/contact">联系人</RouterLink>
          <RouterLink to="/home/discover">发现</RouterLink>
          <RouterLink to="/home/me">我</RouterLink>
        </nav>
      </div>
    </footer>
  </div>
</template>