<template>
  <div class="h-full flex flex-col">
     <div class="grow"> <!--grow占据最多-->
       <RouterView/> <!--渲染 -->
    </div>

    <footer>
      <div>
        <nav class="flex justify-around"> <!--justify-content: space-around; 均匀排列每个元素,每个元素周围分配相同的空间-->
          <RouterLink to="/home/chatList">聊天</RouterLink>
          <RouterLink to="/home/contact">联系人</RouterLink>
          <RouterLink to="/home/discover">发现</RouterLink>
          <RouterLink to="/home/me">我</RouterLink>
        </nav>
      </div>
    </footer>  
  </div>
</template>